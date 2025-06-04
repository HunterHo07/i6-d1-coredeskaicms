'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import Grid from '@/components/layout/Grid';
import FadeIn from '@/components/effects/FadeIn';
import MatrixRain from '@/components/effects/MatrixRain';
import { 
  Zap, 
  Clock, 
  DollarSign, 
  Shield, 
  Users, 
  Rocket,
  CheckCircle,
  Star,
  Award,
  Target
} from 'lucide-react';
import { mockCompetitors } from '@/lib/data';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhyUsPage() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current.children,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.5
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const advantages = [
    {
      icon: Clock,
      title: '5-Minute Setup',
      description: 'While competitors take weeks or months to implement, CoreDeskAi gets you running in minutes.',
      comparison: 'vs 6-12 months with traditional solutions'
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Starting at $29/month vs $50K-500K for custom development or enterprise tools.',
      comparison: 'Save 99% on development costs'
    },
    {
      icon: Zap,
      title: 'Zero Code Required',
      description: 'No technical expertise needed. Just input your API URL and token - that\'s it.',
      comparison: 'vs requiring dedicated development teams'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC2 compliant with enterprise-grade encryption and security measures.',
      comparison: 'Bank-level security from day one'
    },
    {
      icon: Users,
      title: 'Universal Compatibility',
      description: 'Works with any REST API - Web3, gaming, fintech, or any data source.',
      comparison: 'vs platform-specific solutions'
    },
    {
      icon: Rocket,
      title: 'Instant Value',
      description: 'See immediate results with real-time dashboards and automated data fetching.',
      comparison: 'ROI from day one'
    }
  ];

  const achievements = [
    { icon: Star, value: '99.8%', label: 'Uptime Guarantee' },
    { icon: Users, value: '500+', label: 'Happy Customers' },
    { icon: Award, value: '4.9/5', label: 'Customer Rating' },
    { icon: Target, value: '<5min', label: 'Average Setup Time' }
  ];

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
            <div ref={heroRef} className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                Why Choose CoreDeskAi?
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                We're not just another dashboard tool. We're the future of admin panel creation.
              </p>
              <div className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">The CoreDeskAi Difference</h2>
                <p className="text-gray-300">
                  While others focus on complexity, we focus on simplicity. 
                  While others require months of development, we deliver in minutes.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Key Advantages */}
        <section className="py-24">
          <Container>
            <FadeIn className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Our Competitive Advantages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See why leading companies choose CoreDeskAi over traditional solutions
              </p>
            </FadeIn>

            <Grid cols={2} gap={8}>
              {advantages.map((advantage, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 group">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <advantage.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                          {advantage.title}
                        </h3>
                        <p className="text-gray-300 mb-4">
                          {advantage.description}
                        </p>
                        <div className="text-sm text-cyan-400 font-medium">
                          {advantage.comparison}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </Grid>
          </Container>
        </section>

        {/* Competitor Comparison */}
        <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black">
          <Container>
            <FadeIn className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                How We Stack Up
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Compare CoreDeskAi with leading alternatives
              </p>
            </FadeIn>

            <FadeIn>
              <div className="glass rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-400 uppercase tracking-wider">
                          Feature
                        </th>
                        {mockCompetitors.map((competitor) => (
                          <th key={competitor.name} className="px-6 py-4 text-center text-sm font-medium text-gray-400 uppercase tracking-wider">
                            {competitor.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-white">Setup Time</td>
                        {mockCompetitors.map((competitor) => (
                          <td key={competitor.name} className="px-6 py-4 text-center text-sm text-gray-300">
                            {competitor.setupTime}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-white">Pricing</td>
                        {mockCompetitors.map((competitor) => (
                          <td key={competitor.name} className="px-6 py-4 text-center text-sm text-gray-300">
                            {competitor.pricing}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-white">API Support</td>
                        {mockCompetitors.map((competitor) => (
                          <td key={competitor.name} className="px-6 py-4 text-center text-sm text-gray-300">
                            {competitor.apiSupport}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-white">Customization</td>
                        {mockCompetitors.map((competitor) => (
                          <td key={competitor.name} className="px-6 py-4 text-center text-sm text-gray-300">
                            {competitor.customization}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Achievements */}
        <section className="py-24">
          <Container>
            <FadeIn className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Proven Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Numbers that speak for themselves
              </p>
            </FadeIn>

            <Grid cols={4} gap={8}>
              {achievements.map((achievement, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="text-center glass rounded-2xl p-8 hover:bg-white/5 transition-all group">
                    <achievement.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {achievement.value}
                    </div>
                    <div className="text-gray-400">
                      {achievement.label}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </Grid>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-cyan-400/10 to-purple-600/10">
          <Container>
            <FadeIn className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Ready to Experience the Difference?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies who've already made the switch to CoreDeskAi
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all">
                  Schedule Demo
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
