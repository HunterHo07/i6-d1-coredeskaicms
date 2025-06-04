'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import FadeIn from '@/components/effects/FadeIn';
import MatrixRain from '@/components/effects/MatrixRain';
import { 
  CheckCircle, 
  Clock, 
  Zap, 
  Users, 
  Shield, 
  Smartphone,
  Brain,
  Globe,
  Rocket,
  Star
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function RoadmapPage() {
  const timelineRef = useRef(null);
  const [activePhase, setActivePhase] = useState(0);

  const roadmapPhases = [
    {
      phase: 'MVP',
      status: 'completed',
      timeline: 'Q4 2023 - Q1 2024',
      title: 'Core Platform Launch',
      description: 'Essential features for API integration and dashboard generation',
      features: [
        'REST API connection via URL + token',
        'Automatic data structure detection',
        'Real-time dashboard generation',
        'Basic filtering and search',
        'Excel/CSV export functionality',
        'Responsive web interface'
      ],
      icon: Rocket,
      color: 'from-green-400 to-emerald-600'
    },
    {
      phase: 'Phase 1',
      status: 'in-progress',
      timeline: 'Q2 2024',
      title: 'Enhanced User Experience',
      description: 'Advanced features for better usability and customization',
      features: [
        'Role-based access control',
        'Custom dashboard themes',
        'Advanced chart types',
        'Mobile app (iOS/Android)',
        'Dark/light mode toggle',
        'Webhook notifications'
      ],
      icon: Users,
      color: 'from-cyan-400 to-blue-600'
    },
    {
      phase: 'Phase 2',
      status: 'planned',
      timeline: 'Q3 2024',
      title: 'Enterprise Features',
      description: 'Scalability and enterprise-grade capabilities',
      features: [
        'SSO integration (SAML, OAuth)',
        'White-label branding',
        'API rate limiting & caching',
        'Advanced security features',
        'Audit logs and compliance',
        'Multi-tenant architecture'
      ],
      icon: Shield,
      color: 'from-purple-400 to-pink-600'
    },
    {
      phase: 'Phase 3',
      status: 'planned',
      timeline: 'Q4 2024',
      title: 'AI-Powered Analytics',
      description: 'Intelligent insights and automated decision making',
      features: [
        'AI-powered data insights',
        'Anomaly detection',
        'Predictive analytics',
        'Natural language queries',
        'Automated report generation',
        'Smart alerting system'
      ],
      icon: Brain,
      color: 'from-orange-400 to-red-600'
    },
    {
      phase: 'Phase 4',
      status: 'planned',
      timeline: 'Q1 2025',
      title: 'Global Expansion',
      description: 'Worldwide availability and advanced integrations',
      features: [
        'Multi-language support',
        'Regional data centers',
        'Advanced API marketplace',
        'Plugin ecosystem',
        'Third-party integrations',
        'Enterprise partnerships'
      ],
      icon: Globe,
      color: 'from-indigo-400 to-purple-600'
    }
  ];

  useEffect(() => {
    if (!timelineRef.current) return;

    const ctx = gsap.context(() => {
      const items = timelineRef.current.querySelectorAll('.timeline-item');
      
      items.forEach((item, index) => {
        gsap.fromTo(item,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-400/20';
      case 'in-progress': return 'text-cyan-400 bg-cyan-400/20';
      case 'planned': return 'text-gray-400 bg-gray-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'in-progress': return Clock;
      case 'planned': return Star;
      default: return Clock;
    }
  };

  return (
    <main className="relative">
      {/* Background Effects */}
      <MatrixRain className="opacity-5" />
      
      {/* Navigation */}
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          
          <Container className="relative z-10">
            <FadeIn className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                Product Roadmap
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Our journey to revolutionize admin dashboard creation
              </p>
              <div className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">Building the Future</h2>
                <p className="text-gray-300">
                  From MVP to global platform - see what's coming next for CoreDeskAi
                </p>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Timeline */}
        <section className="py-24" ref={timelineRef}>
          <Container>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-600 to-orange-400 opacity-30"></div>
              
              <div className="space-y-24">
                {roadmapPhases.map((phase, index) => {
                  const StatusIcon = getStatusIcon(phase.status);
                  const PhaseIcon = phase.icon;
                  
                  return (
                    <div
                      key={index}
                      className={`timeline-item relative flex items-center ${
                        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                      }`}
                    >
                      {/* Content */}
                      <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                        <div className="glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 group">
                          <div className="flex items-center justify-between mb-4">
                            <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(phase.status)}`}>
                              {phase.status.charAt(0).toUpperCase() + phase.status.slice(1)}
                            </div>
                            <div className="text-sm text-gray-400">{phase.timeline}</div>
                          </div>
                          
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                            {phase.phase}: {phase.title}
                          </h3>
                          
                          <p className="text-gray-300 mb-6">
                            {phase.description}
                          </p>
                          
                          <ul className="space-y-2">
                            {phase.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {/* Timeline node */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                        <PhaseIcon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Status indicator */}
                      <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'} flex justify-center`}>
                        <div className="flex items-center space-x-2">
                          <StatusIcon className={`w-6 h-6 ${
                            phase.status === 'completed' ? 'text-green-400' :
                            phase.status === 'in-progress' ? 'text-cyan-400' :
                            'text-gray-400'
                          }`} />
                          <span className="text-sm font-medium text-gray-300">
                            {phase.status === 'completed' ? 'Completed' :
                             phase.status === 'in-progress' ? 'In Progress' :
                             'Planned'}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* Community Input */}
        <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black">
          <Container>
            <FadeIn className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Shape Our Future
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your feedback drives our roadmap. Tell us what features matter most to you.
              </p>
            </FadeIn>

            <FadeIn>
              <div className="max-w-2xl mx-auto glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Request a Feature</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Feature Title
                    </label>
                    <input
                      type="text"
                      placeholder="What feature would you like to see?"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Description
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe how this feature would help you..."
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Priority
                    </label>
                    <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                      <option value="low">Nice to have</option>
                      <option value="medium">Important</option>
                      <option value="high">Critical</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform"
                  >
                    Submit Feature Request
                  </button>
                </form>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Newsletter */}
        <section className="py-24">
          <Container>
            <FadeIn className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get notified when new features are released and be the first to try them.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform">
                  Subscribe
                </button>
              </div>
            </FadeIn>
          </Container>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
