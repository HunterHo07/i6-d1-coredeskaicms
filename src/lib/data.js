// Mock data for CoreDeskAi demo

export const mockApiConnections = [
  {
    id: 'conn_1',
    name: 'Web3 Transactions',
    url: 'https://api.blockchain.com/v3/transactions',
    token: 'demo_token_web3_123',
    schedule: '*/5 * * * *', // Every 5 minutes
    lastFetch: '2024-01-15T10:30:00Z',
    status: 'active',
    recordCount: 15420,
    dataSize: '2.4 MB'
  },
  {
    id: 'conn_2',
    name: 'Gaming Analytics',
    url: 'https://api.gameanalytics.com/v2/events',
    token: 'demo_token_gaming_456',
    schedule: '0 */1 * * *', // Every hour
    lastFetch: '2024-01-15T10:00:00Z',
    status: 'active',
    recordCount: 8750,
    dataSize: '1.8 MB'
  },
  {
    id: 'conn_3',
    name: 'Financial Data',
    url: 'https://api.fintech.com/v1/transactions',
    token: 'demo_token_fintech_789',
    schedule: '0 0 */6 * *', // Every 6 hours
    lastFetch: '2024-01-15T06:00:00Z',
    status: 'paused',
    recordCount: 3240,
    dataSize: '890 KB'
  }
];

export const mockDashboardStats = {
  totalConnections: 3,
  activeConnections: 2,
  totalRecords: 27410,
  dataProcessed: '5.1 MB',
  uptime: '99.8%',
  lastUpdate: '2024-01-15T10:30:00Z',
  dailyGrowth: '+12.5%',
  weeklyGrowth: '+45.2%',
  monthlyGrowth: '+156.8%'
};

export const mockTransactionData = [
  {
    id: 'tx_001',
    timestamp: '2024-01-15T10:25:00Z',
    amount: '$1,250.00',
    status: 'completed',
    user: 'user_12345',
    type: 'deposit',
    source: 'Web3 Wallet',
    fee: '$2.50',
    hash: '0x1a2b3c4d5e6f...'
  },
  {
    id: 'tx_002',
    timestamp: '2024-01-15T10:20:00Z',
    amount: '$850.00',
    status: 'pending',
    user: 'user_67890',
    type: 'withdrawal',
    source: 'Bank Transfer',
    fee: '$5.00',
    hash: '0x9f8e7d6c5b4a...'
  },
  {
    id: 'tx_003',
    timestamp: '2024-01-15T10:15:00Z',
    amount: '$2,100.00',
    status: 'completed',
    user: 'user_11111',
    type: 'trade',
    source: 'Exchange',
    fee: '$10.50',
    hash: '0x5a6b7c8d9e0f...'
  },
  {
    id: 'tx_004',
    timestamp: '2024-01-15T10:10:00Z',
    amount: '$450.00',
    status: 'failed',
    user: 'user_22222',
    type: 'deposit',
    source: 'Credit Card',
    fee: '$0.00',
    hash: null
  },
  {
    id: 'tx_005',
    timestamp: '2024-01-15T10:05:00Z',
    amount: '$3,750.00',
    status: 'completed',
    user: 'user_33333',
    type: 'withdrawal',
    source: 'Crypto Wallet',
    fee: '$15.00',
    hash: '0x3c4d5e6f7a8b...'
  }
];

export const mockUserData = [
  {
    id: 'user_12345',
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    status: 'active',
    joinDate: '2023-08-15',
    totalTransactions: 45,
    totalVolume: '$125,000',
    lastActivity: '2024-01-15T10:25:00Z',
    tier: 'premium',
    country: 'United States'
  },
  {
    id: 'user_67890',
    name: 'Sarah Chen',
    email: 'sarah.chen@example.com',
    status: 'active',
    joinDate: '2023-11-22',
    totalTransactions: 28,
    totalVolume: '$78,500',
    lastActivity: '2024-01-15T10:20:00Z',
    tier: 'standard',
    country: 'Canada'
  },
  {
    id: 'user_11111',
    name: 'Michael Rodriguez',
    email: 'michael.r@example.com',
    status: 'active',
    joinDate: '2023-06-10',
    totalTransactions: 89,
    totalVolume: '$245,000',
    lastActivity: '2024-01-15T10:15:00Z',
    tier: 'enterprise',
    country: 'Mexico'
  },
  {
    id: 'user_22222',
    name: 'Emma Thompson',
    email: 'emma.t@example.com',
    status: 'suspended',
    joinDate: '2023-12-05',
    totalTransactions: 12,
    totalVolume: '$15,200',
    lastActivity: '2024-01-14T15:30:00Z',
    tier: 'standard',
    country: 'United Kingdom'
  },
  {
    id: 'user_33333',
    name: 'David Kim',
    email: 'david.kim@example.com',
    status: 'active',
    joinDate: '2023-09-18',
    totalTransactions: 67,
    totalVolume: '$189,000',
    lastActivity: '2024-01-15T10:05:00Z',
    tier: 'premium',
    country: 'South Korea'
  }
];

export const mockChartData = {
  revenue: [
    { month: 'Jan', value: 45000 },
    { month: 'Feb', value: 52000 },
    { month: 'Mar', value: 48000 },
    { month: 'Apr', value: 61000 },
    { month: 'May', value: 55000 },
    { month: 'Jun', value: 67000 },
    { month: 'Jul', value: 72000 },
    { month: 'Aug', value: 69000 },
    { month: 'Sep', value: 78000 },
    { month: 'Oct', value: 85000 },
    { month: 'Nov', value: 92000 },
    { month: 'Dec', value: 98000 }
  ],
  users: [
    { month: 'Jan', active: 1200, new: 150 },
    { month: 'Feb', active: 1350, new: 180 },
    { month: 'Mar', active: 1480, new: 165 },
    { month: 'Apr', active: 1620, new: 195 },
    { month: 'May', active: 1750, new: 210 },
    { month: 'Jun', active: 1890, new: 225 },
    { month: 'Jul', active: 2020, new: 240 },
    { month: 'Aug', active: 2180, new: 255 },
    { month: 'Sep', active: 2350, new: 270 },
    { month: 'Oct', active: 2520, new: 285 },
    { month: 'Nov', active: 2700, new: 300 },
    { month: 'Dec', active: 2890, new: 315 }
  ],
  transactions: [
    { day: 'Mon', count: 245 },
    { day: 'Tue', count: 312 },
    { day: 'Wed', count: 289 },
    { day: 'Thu', count: 356 },
    { day: 'Fri', count: 423 },
    { day: 'Sat', count: 198 },
    { day: 'Sun', count: 167 }
  ]
};

export const mockCompetitors = [
  {
    name: 'Retool',
    pricing: '$10-50/user/month',
    setupTime: '2-4 weeks',
    apiSupport: 'Limited',
    customization: 'High',
    pros: ['Established', 'Feature-rich'],
    cons: ['Complex setup', 'Expensive']
  },
  {
    name: 'Metabase',
    pricing: 'Free + $500+/month',
    setupTime: '1-2 weeks',
    apiSupport: 'SQL-focused',
    customization: 'Medium',
    pros: ['Free tier', 'Good for analytics'],
    cons: ['Limited API integration', 'Technical setup']
  },
  {
    name: 'Grafana',
    pricing: 'Free + $15+/user/month',
    setupTime: '1-3 weeks',
    apiSupport: 'Monitoring-focused',
    customization: 'High',
    pros: ['Great for metrics', 'Open source'],
    cons: ['Not business-user friendly', 'Complex']
  },
  {
    name: 'CoreDeskAi',
    pricing: '$29-299/month',
    setupTime: '5 minutes',
    apiSupport: 'Universal REST APIs',
    customization: 'High',
    pros: ['Instant setup', 'No-code', 'Beautiful UI'],
    cons: ['New product', 'Frontend-only MVP']
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Operations Director',
    company: 'CryptoFlow',
    avatar: '/api/placeholder/64/64',
    content: 'CoreDeskAi transformed our operations. We went from weeks of development to 5 minutes of setup. The real-time dashboard gives us insights we never had before.',
    rating: 5
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'CTO',
    company: 'GameVault',
    avatar: '/api/placeholder/64/64',
    content: 'The ability to connect any API instantly is game-changing. Our team can now monitor player data, transactions, and analytics all in one beautiful interface.',
    rating: 5
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Finance Manager',
    company: 'FinTech Solutions',
    avatar: '/api/placeholder/64/64',
    content: 'Excel exports and real-time filtering saved us hours of manual work. The scheduled data fetching means our reports are always up-to-date.',
    rating: 5
  }
];

export const mockPricingPlans = [
  {
    name: 'Starter',
    price: 29,
    period: 'month',
    description: 'Perfect for small teams getting started',
    features: [
      '5 API connections',
      'Basic dashboard',
      'Excel/CSV export',
      'Email support',
      '1GB data storage',
      'Standard templates'
    ],
    popular: false,
    cta: 'Start Free Trial'
  },
  {
    name: 'Professional',
    price: 99,
    period: 'month',
    description: 'Advanced features for growing businesses',
    features: [
      'Unlimited API connections',
      'Advanced dashboard',
      'Real-time updates',
      'Priority support',
      '10GB data storage',
      'Custom templates',
      'Scheduled reports',
      'Team collaboration'
    ],
    popular: true,
    cta: 'Start Free Trial'
  },
  {
    name: 'Enterprise',
    price: 299,
    period: 'month',
    description: 'Full-scale solution for large organizations',
    features: [
      'Everything in Professional',
      'White-label branding',
      'SSO integration',
      'Dedicated support',
      'Unlimited data storage',
      'Custom integrations',
      'SLA guarantee',
      'On-premise deployment'
    ],
    popular: false,
    cta: 'Contact Sales'
  }
];

// Simulation helpers
export const generateRandomTransaction = () => {
  const types = ['deposit', 'withdrawal', 'trade', 'transfer'];
  const statuses = ['completed', 'pending', 'failed'];
  const sources = ['Web3 Wallet', 'Bank Transfer', 'Credit Card', 'Exchange', 'Crypto Wallet'];
  
  return {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    timestamp: new Date().toISOString(),
    amount: `$${(Math.random() * 5000 + 100).toFixed(2)}`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    user: `user_${Math.random().toString(36).substr(2, 9)}`,
    type: types[Math.floor(Math.random() * types.length)],
    source: sources[Math.floor(Math.random() * sources.length)],
    fee: `$${(Math.random() * 20 + 1).toFixed(2)}`,
    hash: Math.random() > 0.1 ? `0x${Math.random().toString(16).substr(2, 12)}...` : null
  };
};

export const updateDashboardStats = (currentStats) => {
  return {
    ...currentStats,
    totalRecords: currentStats.totalRecords + Math.floor(Math.random() * 10 + 1),
    dataProcessed: `${(parseFloat(currentStats.dataProcessed) + Math.random() * 0.1).toFixed(1)} MB`,
    lastUpdate: new Date().toISOString(),
    dailyGrowth: `+${(Math.random() * 5 + 10).toFixed(1)}%`
  };
};
