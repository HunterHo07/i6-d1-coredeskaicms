'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/layout/Navigation';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import MatrixRain from '@/components/effects/MatrixRain';
import TypeWriter from '@/components/effects/TypeWriter';
import { 
  Database, 
  Play, 
  Download, 
  RefreshCw, 
  CheckCircle, 
  AlertCircle,
  BarChart3,
  Filter,
  Search,
  Settings
} from 'lucide-react';
import { 
  mockApiConnections, 
  mockDashboardStats, 
  mockTransactionData,
  generateRandomTransaction,
  updateDashboardStats
} from '@/lib/data';

export default function DemoPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [apiUrl, setApiUrl] = useState('');
  const [apiToken, setApiToken] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [dashboardData, setDashboardData] = useState(mockDashboardStats);
  const [transactions, setTransactions] = useState(mockTransactionData);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const steps = [
    'Connect API',
    'Configure Data',
    'Generate Dashboard',
    'Manage Data'
  ];

  // Simulate real-time updates
  useEffect(() => {
    if (isConnected) {
      const interval = setInterval(() => {
        // Add new transaction
        const newTransaction = generateRandomTransaction();
        setTransactions(prev => [newTransaction, ...prev.slice(0, 9)]);
        
        // Update stats
        setDashboardData(prev => updateDashboardStats(prev));
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isConnected]);

  const handleConnect = async () => {
    setIsConnecting(true);
    
    // Simulate API connection
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsConnecting(false);
    setIsConnected(true);
    setCurrentStep(1);
  };

  const filteredTransactions = transactions.filter(tx => {
    const matchesSearch = tx.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tx.amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tx.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || tx.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <main className="relative min-h-screen">
      {/* Background Effects */}
      <MatrixRain className="opacity-5" />
      
      {/* Navigation */}
      <Navigation />
      
      <div className="pt-20">
        <Container>
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Live Demo</span>
            </h1>
            <TypeWriter 
              text="Experience CoreDeskAi in action - connect any API and see the magic happen"
              speed={50}
              className="text-xl text-gray-300"
            />
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                    index <= currentStep 
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-600 text-white' 
                      : 'bg-gray-700 text-gray-400'
                  }`}>
                    {index < currentStep ? <CheckCircle className="w-5 h-5" /> : index + 1}
                  </div>
                  <span className={`ml-2 text-sm ${index <= currentStep ? 'text-white' : 'text-gray-400'}`}>
                    {step}
                  </span>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-0.5 mx-4 ${
                      index < currentStep ? 'bg-gradient-to-r from-cyan-400 to-purple-600' : 'bg-gray-700'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Demo Content */}
          <div className="max-w-6xl mx-auto">
            {currentStep === 0 && (
              <div className="glass rounded-2xl p-8">
                <div className="text-center mb-8">
                  <Database className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-4">Connect Your API</h2>
                  <p className="text-gray-400">Enter your API endpoint and authentication token</p>
                </div>

                <div className="max-w-md mx-auto space-y-6">
                  <Input
                    label="API URL"
                    placeholder="https://api.example.com/v1/data"
                    value={apiUrl}
                    onChange={(e) => setApiUrl(e.target.value)}
                    icon={Database}
                  />
                  
                  <Input
                    label="API Token"
                    type="password"
                    placeholder="your-api-token-here"
                    value={apiToken}
                    onChange={(e) => setApiToken(e.target.value)}
                  />

                  <div className="text-center">
                    <Button 
                      onClick={handleConnect}
                      loading={isConnecting}
                      disabled={!apiUrl || !apiToken}
                      size="lg"
                      className="w-full"
                    >
                      {isConnecting ? 'Connecting...' : 'Connect API'}
                    </Button>
                  </div>

                  {/* Demo API suggestions */}
                  <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <h3 className="font-semibold text-blue-400 mb-2">Try Demo APIs:</h3>
                    <div className="space-y-2 text-sm">
                      <button 
                        onClick={() => {
                          setApiUrl('https://api.blockchain.com/v3/transactions');
                          setApiToken('demo_web3_token_123');
                        }}
                        className="block w-full text-left text-blue-300 hover:text-blue-200"
                      >
                        Web3 Transactions API
                      </button>
                      <button 
                        onClick={() => {
                          setApiUrl('https://api.gameanalytics.com/v2/events');
                          setApiToken('demo_gaming_token_456');
                        }}
                        className="block w-full text-left text-blue-300 hover:text-blue-200"
                      >
                        Gaming Analytics API
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep >= 1 && (
              <div className="space-y-8">
                {/* Connection Status */}
                <div className="glass rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="font-medium">Connected to API</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Last updated: {new Date().toLocaleTimeString()}
                    </div>
                  </div>
                </div>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Total Records', value: dashboardData.totalRecords.toLocaleString(), icon: Database },
                    { label: 'Active Connections', value: dashboardData.activeConnections, icon: RefreshCw },
                    { label: 'Data Processed', value: dashboardData.dataProcessed, icon: BarChart3 },
                    { label: 'Uptime', value: dashboardData.uptime, icon: CheckCircle }
                  ].map((stat, index) => (
                    <div key={index} className="glass rounded-xl p-6 text-center">
                      <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Data Table */}
                <div className="glass rounded-xl overflow-hidden">
                  <div className="p-6 border-b border-white/10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                      <h3 className="text-xl font-bold">Transaction Data</h3>
                      
                      <div className="flex space-x-4">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            placeholder="Search transactions..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                          />
                        </div>
                        
                        <select
                          value={statusFilter}
                          onChange={(e) => setStatusFilter(e.target.value)}
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        >
                          <option value="all">All Status</option>
                          <option value="completed">Completed</option>
                          <option value="pending">Pending</option>
                          <option value="failed">Failed</option>
                        </select>
                        
                        <Button size="sm" variant="secondary">
                          <Download className="w-4 h-4 mr-2" />
                          Export
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-white/5">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">ID</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Time</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {filteredTransactions.map((tx, index) => (
                          <tr key={tx.id} className="hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-300">
                              {tx.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-white">
                              {tx.amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                tx.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                                tx.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-red-500/20 text-red-400'
                              }`}>
                                {tx.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              {tx.user}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 capitalize">
                              {tx.type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                              {new Date(tx.timestamp).toLocaleTimeString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-4">
                  <Button onClick={() => setCurrentStep(Math.min(currentStep + 1, 3))}>
                    Next Step
                  </Button>
                  <Button variant="secondary">
                    <Settings className="w-4 h-4 mr-2" />
                    Configure
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
    </main>
  );
}
