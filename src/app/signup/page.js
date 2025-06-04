'use client';

import { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import MatrixRain from '@/components/effects/MatrixRain';
import TypeWriter from '@/components/effects/TypeWriter';
import { 
  Mail, 
  User, 
  Building, 
  CheckCircle, 
  Zap, 
  Shield, 
  Clock,
  ArrowRight
} from 'lucide-react';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    apiUrl: '',
    useCase: ''
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsComplete(true);
  };

  const benefits = [
    {
      icon: Zap,
      title: '5-Minute Setup',
      description: 'Get your dashboard running in minutes, not months'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC2 compliant with bank-level encryption'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Our team is here to help you succeed'
    }
  ];

  if (isComplete) {
    return (
      <main className="relative min-h-screen flex items-center justify-center">
        <MatrixRain className="opacity-5" />
        <Navigation />
        
        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Welcome to CoreDeskAi!
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Your account has been created successfully. Check your email for next steps.
            </p>
            
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">What's Next?</h2>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-black text-sm font-bold mt-1">1</div>
                  <div>
                    <div className="font-semibold">Check your email</div>
                    <div className="text-sm text-gray-400">We've sent you a verification link</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center text-black text-sm font-bold mt-1">2</div>
                  <div>
                    <div className="font-semibold">Connect your first API</div>
                    <div className="text-sm text-gray-400">Follow our quick setup guide</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-black text-sm font-bold mt-1">3</div>
                  <div>
                    <div className="font-semibold">Start managing your data</div>
                    <div className="text-sm text-gray-400">Your dashboard will be ready instantly</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                onClick={() => window.location.href = '/demo'}
              >
                Go to Dashboard
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.open('https://docs.coredeskai.com', '_blank')}
              >
                View Documentation
              </Button>
            </div>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen">
      {/* Background Effects */}
      <MatrixRain className="opacity-5" />
      
      {/* Navigation */}
      <Navigation />
      
      <div className="pt-20">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Start Your Free Trial</span>
              </h1>
              <TypeWriter 
                text="Join hundreds of companies already using CoreDeskAi"
                speed={50}
                className="text-xl text-gray-300"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Form */}
              <div className="glass rounded-2xl p-8">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">Create Your Account</h2>
                    <div className="text-sm text-gray-400">Step {currentStep} of 3</div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-400 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(currentStep / 3) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {currentStep === 1 && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          label="First Name"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          icon={User}
                          required
                        />
                        <Input
                          label="Last Name"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                      
                      <Input
                        label="Email Address"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        icon={Mail}
                        required
                      />
                      
                      <Input
                        label="Company"
                        placeholder="Your Company Name"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        icon={Building}
                        required
                      />
                    </>
                  )}

                  {currentStep === 2 && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Your Role
                        </label>
                        <select
                          value={formData.role}
                          onChange={(e) => handleInputChange('role', e.target.value)}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                          required
                        >
                          <option value="">Select your role</option>
                          <option value="cto">CTO</option>
                          <option value="developer">Developer</option>
                          <option value="operations">Operations Manager</option>
                          <option value="founder">Founder/CEO</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <Input
                        label="API URL (Optional)"
                        placeholder="https://api.yourcompany.com/v1/data"
                        value={formData.apiUrl}
                        onChange={(e) => handleInputChange('apiUrl', e.target.value)}
                        helperText="We'll help you connect this during onboarding"
                      />
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Primary Use Case
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Tell us how you plan to use CoreDeskAi..."
                          value={formData.useCase}
                          onChange={(e) => handleInputChange('useCase', e.target.value)}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                      </div>
                    </>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-4">Review Your Information</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Name:</span>
                          <span>{formData.firstName} {formData.lastName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Email:</span>
                          <span>{formData.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Company:</span>
                          <span>{formData.company}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Role:</span>
                          <span className="capitalize">{formData.role}</span>
                        </div>
                      </div>
                      
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" />
                          <div className="text-sm">
                            <div className="font-semibold text-blue-400">7-Day Free Trial</div>
                            <div className="text-gray-400">No credit card required. Cancel anytime.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between pt-6">
                    {currentStep > 1 && (
                      <Button 
                        type="button" 
                        variant="secondary" 
                        onClick={() => setCurrentStep(currentStep - 1)}
                      >
                        Back
                      </Button>
                    )}
                    
                    <div className="ml-auto">
                      {currentStep < 3 ? (
                        <Button
                          type="button"
                          onClick={handleNext}
                          rightIcon={<ArrowRight className="w-4 h-4" />}
                        >
                          Next Step
                        </Button>
                      ) : (
                        <Button type="submit" loading={isSubmitting}>
                          {isSubmitting ? 'Creating Account...' : 'Start Free Trial'}
                        </Button>
                      )}
                    </div>
                  </div>
                </form>
              </div>

              {/* Benefits */}
              <div className="space-y-8">
                <div className="glass rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Why Choose CoreDeskAi?</h3>
                  <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{benefit.title}</h4>
                          <p className="text-gray-400 text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4">What You Get</h3>
                  <ul className="space-y-3">
                    {[
                      '7-day free trial',
                      'Unlimited API connections',
                      'Real-time dashboards',
                      'Export to Excel/CSV',
                      'Email support',
                      'No setup fees'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
