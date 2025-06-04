'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '@/components/layout/Container';
import Grid from '@/components/layout/Grid';
import FadeIn from '@/components/effects/FadeIn';
import { 
  Database, 
  Zap, 
  Filter, 
  Download, 
  Clock, 
  BarChart3, 
  Shield, 
  Smartphone,
  Globe,
  RefreshCw
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Features = () => {
  const sectionRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Database,
      title: 'Universal API Integration',
      description: 'Connect to any REST API with just URL and token. No backend modifications required.',
      details: [
        'Support for all REST API formats',
        'Automatic data structure detection',
        'Real-time connection testing',
        'Secure token management'
      ],
      color: 'from-cyan-400 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Instant Dashboard Generation',
      description: 'Auto-generate beautiful dashboards in seconds based on your data structure.',
      details: [
        'Smart column mapping',
        'Automatic chart generation',
        'Responsive layouts',
        'Customizable themes'
      ],
      color: 'from-purple-400 to-pink-600'
    },
    {
      icon: Clock,
      title: 'Scheduled Data Fetching',
      description: 'Set up cron jobs to automatically fetch and update your data in real-time.',
      details: [
        'Flexible scheduling options',
        'Real-time data updates',
        'Error handling & retries',
        'Performance monitoring'
      ],
      color: 'from-green-400 to-emerald-600'
    },
    {
      icon: Filter,
      title: 'Advanced Filtering & Search',
      description: 'Powerful filtering, sorting, and search capabilities across all your data.',
      details: [
        'Multi-column filtering',
        'Advanced search operators',
        'Saved filter presets',
        'Export filtered results'
      ],
      color: 'from-orange-400 to-red-600'
    },
    {
      icon: Download,
      title: 'Export & Reporting',
      description: 'Export your data to Excel, CSV, or generate automated reports.',
      details: [
        'Multiple export formats',
        'Scheduled reports',
        'Custom report templates',
        'Email delivery'
      ],
      color: 'from-indigo-400 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Beautiful charts and analytics that update in real-time as your data changes.',
      details: [
        'Interactive charts',
        'Custom dashboards',
        'KPI monitoring',
        'Trend analysis'
      ],
      color: 'from-pink-400 to-rose-600'
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Stagger animation for feature cards
      const cards = sectionRef.current.querySelectorAll('.feature-card');
      
      gsap.fromTo(cards, 
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
      
      <Container className="relative z-10">
        <FadeIn className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to transform any API into a professional admin dashboard
          </p>
        </FadeIn>

        {/* Feature Grid */}
        <Grid cols={3} gap={8} className="mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card group p-8 rounded-2xl glass hover:bg-white/10 transition-all duration-500 cursor-pointer ${
                activeFeature === index ? 'ring-2 ring-cyan-400/50 bg-white/5' : ''
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  {(() => {
                    const IconComponent = feature.icon;
                    return <IconComponent className="w-8 h-8 text-white" />;
                  })()}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </Grid>

        {/* Feature Details */}
        <FadeIn>
          <div className="glass rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${features[activeFeature].color} rounded-xl flex items-center justify-center mr-4`}>
                    {(() => {
                      const IconComponent = features[activeFeature].icon;
                      return <IconComponent className="w-6 h-6 text-white" />;
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {features[activeFeature].title}
                  </h3>
                </div>
                <p className="text-lg text-gray-300 mb-8">
                  {features[activeFeature].description}
                </p>
                <ul className="space-y-3">
                  {features[activeFeature].details.map((detail, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                {/* Demo visualization */}
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-400">CoreDeskAi Dashboard</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-4 bg-gradient-to-r from-cyan-400/30 to-purple-600/30 rounded animate-pulse"></div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-8 bg-white/5 rounded"></div>
                      <div className="h-8 bg-white/5 rounded"></div>
                      <div className="h-8 bg-white/5 rounded"></div>
                    </div>
                    <div className="h-20 bg-gradient-to-t from-cyan-400/10 to-transparent rounded border border-cyan-400/20"></div>
                  </div>
                </div>
                
                {/* Floating indicators */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <RefreshCw className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Additional Features */}
        <FadeIn className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 gradient-text">Plus Much More</h3>
            <p className="text-gray-400">Additional features that make CoreDeskAi the complete solution</p>
          </div>
          
          <Grid cols={4} gap={6}>
            {[
              { icon: Shield, title: 'Enterprise Security', desc: 'SOC2 compliance & encryption' },
              { icon: Smartphone, title: 'Mobile Responsive', desc: 'Perfect on all devices' },
              { icon: Globe, title: 'Multi-language', desc: 'Support for global teams' },
              { icon: RefreshCw, title: 'Auto Updates', desc: 'Always latest features' }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 glass rounded-xl hover:bg-white/5 transition-all">
                {(() => {
                  const IconComponent = item.icon;
                  return <IconComponent className="w-8 h-8 text-cyan-400 mx-auto mb-3" />;
                })()}
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </Grid>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Features;
