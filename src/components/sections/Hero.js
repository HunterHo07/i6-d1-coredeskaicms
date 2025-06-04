'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/ui/Button';
import TypeWriter from '@/components/effects/TypeWriter';
import Container from '@/components/layout/Container';
import { ArrowRight, Play, Zap, Database, BarChart3 } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const demoRef = useRef(null);
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([titleRef.current, subtitleRef.current, ctaRef.current, demoRef.current], {
        opacity: 0,
        y: 50
      });

      // Main animation timeline
      const tl = gsap.timeline({ delay: 0.5 });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.5')
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.4')
      .to(demoRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.6');

      // Floating elements animation
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            y: -20,
            duration: 2 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'power2.inOut',
            delay: index * 0.3
          });
        }
      });

      // Parallax effect on scroll
      gsap.to(heroRef.current, {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const addToFloatingRefs = (el) => {
    if (el && !floatingElementsRef.current.includes(el)) {
      floatingElementsRef.current.push(el);
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      {/* Floating elements */}
      <div 
        ref={addToFloatingRefs}
        className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full opacity-20 blur-sm"
      ></div>
      <div 
        ref={addToFloatingRefs}
        className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-30 blur-sm"
      ></div>
      <div 
        ref={addToFloatingRefs}
        className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full opacity-15 blur-sm"
      ></div>

      <Container className="relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main title */}
          <div ref={titleRef} className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="gradient-text">Your Data.</span>
              <br />
              <span className="gradient-text">Your Dashboard.</span>
              <br />
              <TypeWriter 
                text="Zero Code."
                speed={150}
                delay={2000}
                className="gradient-text"
              />
            </h1>
          </div>

          {/* Subtitle */}
          <div ref={subtitleRef} className="mb-12">
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform any REST API into a powerful admin dashboard in minutes. 
              No coding required. Real-time data, advanced filtering, and beautiful UI.
            </p>
          </div>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="xl"
              className="group"
              rightIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              onClick={() => window.location.href = '/signup'}
            >
              Start Free Demo
            </Button>
            <Button
              variant="secondary"
              size="xl"
              className="group"
              leftIcon={<Play className="w-5 h-5" />}
              onClick={() => {
                // We'll create a demo popup modal
                const event = new CustomEvent('openDemoModal');
                window.dispatchEvent(event);
              }}
            >
              Watch Demo
            </Button>
          </div>

          {/* Demo preview */}
          <div ref={demoRef} className="relative">
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Step 1 */}
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Connect API</h3>
                  <p className="text-gray-400 text-sm">Input your API URL + token</p>
                </div>

                {/* Step 2 */}
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Auto-Generate</h3>
                  <p className="text-gray-400 text-sm">Dashboard created instantly</p>
                </div>

                {/* Step 3 */}
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Manage Data</h3>
                  <p className="text-gray-400 text-sm">Filter, export, and analyze</p>
                </div>
              </div>

              {/* Live demo indicator */}
              <div className="flex items-center justify-center mt-8">
                <div className="flex items-center space-x-2 text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Demo Available</span>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10"></div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
