'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '@/components/layout/Container';
import Grid from '@/components/layout/Grid';
import FadeIn from '@/components/effects/FadeIn';
import { AlertTriangle, Clock, Code, DollarSign, Zap, CheckCircle } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ProblemSolution = () => {
  const sectionRef = useRef(null);
  const problemRef = useRef(null);
  const solutionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax effect for problem/solution cards
      gsap.to(problemRef.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.to(solutionRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const problems = [
    {
      icon: Clock,
      title: 'Weeks of Development',
      description: 'Custom admin dashboards take 6-12 months to build and cost $50K-500K'
    },
    {
      icon: Code,
      title: 'Technical Complexity',
      description: 'Requires backend modifications, API integrations, and ongoing maintenance'
    },
    {
      icon: DollarSign,
      title: 'High Costs',
      description: 'Expensive developer time, infrastructure, and continuous updates'
    },
    {
      icon: AlertTriangle,
      title: 'Limited Flexibility',
      description: 'Tight coupling with existing systems makes changes difficult and risky'
    }
  ];

  const solutions = [
    {
      icon: Zap,
      title: '5-Minute Setup',
      description: 'Input API URL + token and get a fully functional dashboard instantly'
    },
    {
      icon: CheckCircle,
      title: 'Zero Code Required',
      description: 'No backend changes, no technical expertise needed, just plug and play'
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Starting at $29/month vs $50K+ for custom development'
    },
    {
      icon: Zap,
      title: 'Universal Compatibility',
      description: 'Works with any REST API - Web3, gaming, fintech, or any data source'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      
      <Container className="relative z-10">
        <FadeIn className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-red-400">The Problem</span>
            <span className="text-gray-400"> vs </span>
            <span className="gradient-text">Our Solution</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Traditional admin dashboards are expensive, time-consuming, and inflexible. 
            CoreDeskAi changes everything.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Problem Side */}
          <div ref={problemRef} className="space-y-8">
            <FadeIn direction="left">
              <div className="text-center lg:text-left mb-12">
                <h3 className="text-3xl font-bold text-red-400 mb-4">Traditional Approach</h3>
                <p className="text-gray-400">Why most companies struggle with admin dashboards</p>
              </div>
            </FadeIn>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <FadeIn key={index} direction="left" delay={index * 0.1}>
                  <div className="group p-6 rounded-xl bg-red-500/5 border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                          <problem.icon className="w-6 h-6 text-red-400" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-red-400 mb-2">{problem.title}</h4>
                        <p className="text-gray-400">{problem.description}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Solution Side */}
          <div ref={solutionRef} className="space-y-8">
            <FadeIn direction="right">
              <div className="text-center lg:text-left mb-12">
                <h3 className="text-3xl font-bold gradient-text mb-4">CoreDeskAi Approach</h3>
                <p className="text-gray-400">How we solve these problems instantly</p>
              </div>
            </FadeIn>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <FadeIn key={index} direction="right" delay={index * 0.1}>
                  <div className="group p-6 rounded-xl glass hover:bg-white/10 transition-all duration-300 glow-hover">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:from-cyan-400/30 group-hover:to-purple-600/30 transition-all">
                          <solution.icon className="w-6 h-6 text-cyan-400" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">{solution.title}</h4>
                        <p className="text-gray-300">{solution.description}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Stats */}
        <FadeIn className="mt-20">
          <div className="glass rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-8 gradient-text">The Numbers Don't Lie</h3>
            <Grid cols={4} gap={8}>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">6-12 months</div>
                <div className="text-sm text-gray-400">Traditional Development</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">5 minutes</div>
                <div className="text-sm text-gray-400">CoreDeskAi Setup</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">$50K-500K</div>
                <div className="text-sm text-gray-400">Custom Development</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">$29/month</div>
                <div className="text-sm text-gray-400">CoreDeskAi Starter</div>
              </div>
            </Grid>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default ProblemSolution;
