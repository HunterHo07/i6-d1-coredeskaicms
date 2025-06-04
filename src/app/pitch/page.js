'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import Grid from '@/components/layout/Grid';
import FadeIn from '@/components/effects/FadeIn';
import MatrixRain from '@/components/effects/MatrixRain';
import { 
  TrendingUp, 
  Target, 
  DollarSign, 
  Users, 
  Globe, 
  Rocket,
  BarChart3,
  Zap,
  Shield,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function PitchPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const slides = [
    {
      title: 'The Problem',
      subtitle: 'Admin dashboards are broken',
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-400">Current Reality</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <span>6-12 months development time</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <span>$50K-500K development costs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <span>Requires dedicated dev teams</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <span>Tight coupling with backends</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-red-400 mb-4">$4.2B</div>
              <div className="text-gray-300">Global admin dashboard market</div>
              <div className="text-sm text-gray-400 mt-2">Growing 23% annually</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Our Solution',
      subtitle: 'CoreDeskAi: Zero-code admin dashboards',
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center glass rounded-xl p-6">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h4 className="font-bold mb-2">5-Minute Setup</h4>
              <p className="text-sm text-gray-400">Input API URL + token</p>
            </div>
            <div className="text-center glass rounded-xl p-6">
              <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Zero Code</h4>
              <p className="text-sm text-gray-400">No backend changes</p>
            </div>
            <div className="text-center glass rounded-xl p-6">
              <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Universal</h4>
              <p className="text-sm text-gray-400">Any REST API</p>
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-4">
              From 6 months to 5 minutes
            </div>
            <div className="text-gray-300">
              Transform any API into a beautiful admin dashboard instantly
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Market Opportunity',
      subtitle: 'Massive and growing market',
      content: (
        <div className="space-y-8">
          <Grid cols={2} gap={8}>
            <div className="space-y-6">
              <div className="glass rounded-xl p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">$4.2B</div>
                <div className="text-sm text-gray-400">Admin Dashboard Market</div>
              </div>
              <div className="glass rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">$6.8B</div>
                <div className="text-sm text-gray-400">API Management by 2027</div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="glass rounded-xl p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">23%</div>
                <div className="text-sm text-gray-400">Annual Growth Rate</div>
              </div>
              <div className="glass rounded-xl p-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">$500M</div>
                <div className="text-sm text-gray-400">Web3 Operations Market</div>
              </div>
            </div>
          </Grid>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Target Segments</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-xl font-bold text-cyan-400">Web3 & Blockchain</div>
                <div className="text-sm text-gray-400">2,000+ companies</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-purple-400">Gaming & Casino</div>
                <div className="text-sm text-gray-400">3,500+ companies</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-400">Fintech</div>
                <div className="text-sm text-gray-400">8,000+ startups</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Business Model',
      subtitle: 'Scalable SaaS with clear path to profitability',
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-2">$29</div>
              <div className="text-sm text-gray-400 mb-4">Starter Plan</div>
              <div className="text-xs text-gray-500">5 API connections</div>
            </div>
            <div className="glass rounded-xl p-6 text-center border-2 border-cyan-400">
              <div className="text-2xl font-bold text-purple-400 mb-2">$99</div>
              <div className="text-sm text-gray-400 mb-4">Professional</div>
              <div className="text-xs text-gray-500">Unlimited APIs</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">$299</div>
              <div className="text-sm text-gray-400 mb-4">Enterprise</div>
              <div className="text-xs text-gray-500">White-label + SSO</div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Revenue Projections</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-xl font-bold text-cyan-400">Month 6</div>
                <div className="text-2xl font-bold">$25K</div>
                <div className="text-sm text-gray-400">MRR</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-purple-400">Month 12</div>
                <div className="text-2xl font-bold">$100K</div>
                <div className="text-sm text-gray-400">MRR</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-400">Month 18</div>
                <div className="text-2xl font-bold">$250K</div>
                <div className="text-sm text-gray-400">MRR</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-orange-400">Month 24</div>
                <div className="text-2xl font-bold">$500K</div>
                <div className="text-sm text-gray-400">MRR</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Competitive Advantage',
      subtitle: 'Why we win',
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Our Advantages</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-cyan-400 mt-1" />
                  <span>5-minute setup vs weeks/months</span>
                </li>
                <li className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-green-400 mt-1" />
                  <span>$29/month vs $50K+ development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-purple-400 mt-1" />
                  <span>Universal API compatibility</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-400 mt-1" />
                  <span>No backend modifications needed</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-400">Competitors</h3>
              <div className="space-y-4">
                <div className="glass rounded-lg p-4">
                  <div className="font-semibold">Retool</div>
                  <div className="text-sm text-gray-400">Complex, expensive, requires dev team</div>
                </div>
                <div className="glass rounded-lg p-4">
                  <div className="font-semibold">Metabase</div>
                  <div className="text-sm text-gray-400">SQL-focused, limited API support</div>
                </div>
                <div className="glass rounded-lg p-4">
                  <div className="font-semibold">Custom Development</div>
                  <div className="text-sm text-gray-400">Slow, expensive, inflexible</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'The Ask',
      subtitle: 'Join us in revolutionizing admin dashboards',
      content: (
        <div className="space-y-8 text-center">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-6 gradient-text">Seeking $2M Seed Round</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">60%</div>
                <div className="text-sm text-gray-400">Product Development</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-2">25%</div>
                <div className="text-sm text-gray-400">Marketing & Sales</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-2">15%</div>
                <div className="text-sm text-gray-400">Operations & Team</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-lg">
                <strong>18-month runway</strong> to reach $500K MRR
              </div>
              <div className="text-gray-300">
                Expected 10x return within 3-5 years
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform">
              Schedule Investor Meeting
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all">
              Download Pitch Deck
            </button>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    if (!slideRef.current) return;

    gsap.fromTo(slideRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
    );
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="relative">
      {/* Background Effects */}
      <MatrixRain className="opacity-5" />
      
      {/* Navigation */}
      <Navigation />
      
      <div className="pt-20 min-h-screen flex flex-col">
        {/* Slide Content */}
        <div className="flex-1 py-12">
          <Container>
            <div className="max-w-6xl mx-auto">
              {/* Slide Header */}
              <div className="text-center mb-12">
                <div className="text-sm text-cyan-400 mb-2">
                  {currentSlide + 1} / {slides.length}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-xl text-gray-300">
                  {slides[currentSlide].subtitle}
                </p>
              </div>

              {/* Slide Content */}
              <div ref={slideRef} className="mb-12">
                {slides[currentSlide].content}
              </div>
            </div>
          </Container>
        </div>

        {/* Navigation Controls */}
        <div className="py-8 border-t border-white/10">
          <Container>
            <div className="flex items-center justify-between">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="flex items-center space-x-2 px-6 py-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Previous</span>
              </button>

              {/* Slide Indicators */}
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-600' 
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="flex items-center space-x-2 px-6 py-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Next</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </Container>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
