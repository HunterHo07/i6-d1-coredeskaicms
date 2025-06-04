'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '@/components/layout/Container';
import FadeIn from '@/components/effects/FadeIn';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { mockTestimonials } from '@/lib/data';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const testimonialRef = useRef(null);
  const ghostCursorsRef = useRef([]);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % mockTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Ghost cursor effect
  useEffect(() => {
    const createGhostCursor = () => {
      const cursor = document.createElement('div');
      cursor.className = 'fixed w-4 h-4 bg-cyan-400/30 rounded-full pointer-events-none z-50 transition-all duration-300';
      cursor.style.left = Math.random() * window.innerWidth + 'px';
      cursor.style.top = Math.random() * window.innerHeight + 'px';
      document.body.appendChild(cursor);

      // Animate cursor movement
      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        onComplete: () => {
          cursor.remove();
        }
      });

      tl.to(cursor, {
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
        duration: 2,
        ease: 'power2.inOut'
      });

      setTimeout(() => {
        cursor.remove();
      }, 4000);
    };

    const interval = setInterval(createGhostCursor, 3000);
    return () => clearInterval(interval);
  }, []);

  // GSAP animation for testimonial change
  useEffect(() => {
    if (!testimonialRef.current) return;

    gsap.fromTo(testimonialRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    );
  }, [currentTestimonial]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % mockTestimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + mockTestimonials.length) % mockTestimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonialData = mockTestimonials[currentTestimonial];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
      
      <Container className="relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join hundreds of companies who've transformed their operations with CoreDeskAi
          </p>
        </FadeIn>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div 
            ref={testimonialRef}
            className="glass rounded-2xl p-8 lg:p-12 text-center relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Quote icon */}
            <div className="absolute top-6 left-6 opacity-20">
              <Quote className="w-12 h-12 text-cyan-400" />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonialData.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial content */}
            <blockquote className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              "{currentTestimonialData.content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {currentTestimonialData.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">{currentTestimonialData.name}</div>
                <div className="text-gray-400">{currentTestimonialData.role}</div>
                <div className="text-cyan-400 text-sm">{currentTestimonialData.company}</div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Testimonial indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {mockTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTestimonial(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial 
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-600' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All testimonials grid */}
        <FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {mockTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`glass rounded-xl p-6 transition-all duration-300 cursor-pointer ${
                  index === currentTestimonial 
                    ? 'ring-2 ring-cyan-400/50 bg-white/10' 
                    : 'hover:bg-white/5'
                }`}
                onClick={() => {
                  setCurrentTestimonial(index);
                  setIsAutoPlaying(false);
                }}
              >
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                    <div className="text-gray-400 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Social proof stats */}
        <FadeIn className="mt-16">
          <div className="glass rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-gray-400 text-sm">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">99.8%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">4.9/5</div>
                <div className="text-gray-400 text-sm">Customer Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Testimonials;
