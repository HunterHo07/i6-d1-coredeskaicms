'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/effects/FadeIn';
import { ArrowRight, Rocket, Zap, CheckCircle } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CTA = () => {
  const ctaRef = useRef(null);
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    if (!ctaRef.current) return;

    const ctx = gsap.context(() => {
      // Floating elements animation
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            y: -30,
            rotation: 360,
            duration: 4 + index,
            repeat: -1,
            yoyo: true,
            ease: 'power2.inOut',
            delay: index * 0.5
          });
        }
      });

      // Parallax effect
      gsap.to(ctaRef.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  const addToFloatingRefs = (el) => {
    if (el && !floatingElementsRef.current.includes(el)) {
      floatingElementsRef.current.push(el);
    }
  };

  return (
    <section ref={ctaRef} className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-600/10 to-pink-600/10"></div>
      
      {/* Floating elements */}
      <div 
        ref={addToFloatingRefs}
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full blur-xl"
      ></div>
      <div 
        ref={addToFloatingRefs}
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-xl"
      ></div>
      <div 
        ref={addToFloatingRefs}
        className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-pink-600/20 to-orange-600/20 rounded-full blur-xl"
      ></div>
      <div 
        ref={addToFloatingRefs}
        className="absolute bottom-20 right-10 w-18 h-18 bg-gradient-to-r from-orange-600/20 to-cyan-400/20 rounded-full blur-xl"
      ></div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full px-6 py-2 mb-6">
              <Rocket className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Ready to Transform Your Operations?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Start Building Your</span>
              <br />
              <span className="gradient-text">Dashboard Today</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies who've already transformed their operations. 
              Get started in minutes, not months.
            </p>
          </FadeIn>

          {/* Main CTA Card */}
          <FadeIn>
            <div className="glass rounded-2xl p-8 lg:p-12 mb-12 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>

              <div className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-6">
                      Everything You Need to Get Started
                    </h3>
                    
                    <ul className="space-y-4 mb-8">
                      {[
                        '7-day free trial - no credit card required',
                        'Connect unlimited APIs instantly',
                        'Real-time dashboards and analytics',
                        'Export to Excel/CSV with one click',
                        '24/7 customer support',
                        'Cancel anytime, no questions asked'
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        size="lg"
                        className="group"
                        rightIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                        onClick={() => window.location.href = '/signup'}
                      >
                        Start Free Trial
                      </Button>
                      <Button
                        variant="secondary"
                        size="lg"
                        onClick={() => {
                          const event = new CustomEvent('openDemoModal');
                          window.dispatchEvent(event);
                        }}
                      >
                        Schedule Demo
                      </Button>
                    </div>
                  </div>

                  <div className="relative">
                    {/* Demo preview */}
                    <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-white/10 relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-xs text-gray-400">CoreDeskAi Dashboard</div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="h-6 bg-gradient-to-r from-cyan-400/30 to-purple-600/30 rounded animate-pulse"></div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="h-12 bg-white/5 rounded flex items-center justify-center">
                            <div className="text-xs text-cyan-400">15.2K</div>
                          </div>
                          <div className="h-12 bg-white/5 rounded flex items-center justify-center">
                            <div className="text-xs text-purple-400">$2.4M</div>
                          </div>
                          <div className="h-12 bg-white/5 rounded flex items-center justify-center">
                            <div className="text-xs text-green-400">99.8%</div>
                          </div>
                        </div>
                        <div className="h-24 bg-gradient-to-t from-cyan-400/10 to-transparent rounded border border-cyan-400/20 relative">
                          <div className="absolute bottom-2 left-2 right-2 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded"></div>
                        </div>
                      </div>
                      
                      {/* Live indicator */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    </div>

                    {/* Floating stats */}
                    <div className="absolute -top-4 -left-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg p-3 text-white text-sm font-medium animate-float">
                      <Zap className="w-4 h-4 inline mr-1" />
                      5min setup
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-3 text-white text-sm font-medium animate-float" style={{ animationDelay: '1s' }}>
                      <CheckCircle className="w-4 h-4 inline mr-1" />
                      Zero code
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Trust indicators */}
          <FadeIn>
            <div className="text-center">
              <p className="text-gray-400 mb-6">Trusted by companies worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {[
                  'TechCorp', 'DataFlow', 'CryptoVault', 'GameStudio', 'FinanceHub'
                ].map((company, index) => (
                  <div key={index} className="text-gray-500 font-semibold text-lg">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Urgency element */}
          <FadeIn className="mt-12">
            <div className="text-center glass rounded-xl p-6">
              <div className="flex items-center justify-center space-x-2 text-orange-400 mb-4">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="font-medium">Limited Time Offer</span>
              </div>
              <p className="text-gray-300 mb-6">
                Get 2 months free when you sign up for an annual plan this month
              </p>
              <Button
                onClick={() => window.location.href = '/signup'}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Claim Offer Now
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
