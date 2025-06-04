'use client';

import { useState } from 'react';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/effects/FadeIn';
import { Check, Star, Zap } from 'lucide-react';
import { mockPricingPlans } from '@/lib/data';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const getPrice = (monthlyPrice) => {
    if (isAnnual) {
      return Math.floor(monthlyPrice * 12 * 0.8); // 20% discount for annual
    }
    return monthlyPrice;
  };

  const getPeriod = () => {
    return isAnnual ? 'year' : 'month';
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      
      <Container className="relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your needs. All plans include our core features with no hidden fees.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isAnnual ? 'bg-gradient-to-r from-cyan-400 to-purple-600' : 'bg-gray-600'
              }`}
            >
              <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                isAnnual ? 'translate-x-8' : 'translate-x-1'
              }`}></div>
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
              <span className="ml-1 text-xs text-green-400">(Save 20%)</span>
            </span>
          </div>
        </FadeIn>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mockPricingPlans.map((plan, index) => (
            <FadeIn key={plan.name} delay={index * 0.1}>
              <div className={`relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'glass ring-2 ring-cyan-400/50 bg-gradient-to-b from-cyan-400/10 to-purple-600/10' 
                  : 'glass hover:bg-white/5'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold gradient-text">
                      ${getPrice(plan.price)}
                    </span>
                    <span className="text-gray-400 ml-2">/{getPeriod()}</span>
                  </div>

                  <Button 
                    variant={plan.popular ? 'primary' : 'secondary'} 
                    className="w-full mb-6"
                  >
                    {plan.cta}
                  </Button>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-2xl -z-10 blur-xl"></div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Enterprise CTA */}
        <FadeIn className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-cyan-400 mr-3" />
              <h3 className="text-2xl font-bold gradient-text">Need Something Custom?</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              For large organizations with specific requirements, we offer custom solutions 
              including on-premise deployment, dedicated support, and tailored integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Contact Sales
              </Button>
              <Button variant="secondary" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </FadeIn>

        {/* FAQ */}
        <FadeIn className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 gradient-text">Frequently Asked Questions</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Can I change plans anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes, all plans come with a 7-day free trial. No credit card required to start."
              },
              {
                question: "What APIs are supported?",
                answer: "Any REST API that returns JSON data. We support all major authentication methods."
              },
              {
                question: "Is my data secure?",
                answer: "Absolutely. We use enterprise-grade encryption and are SOC2 compliant."
              }
            ].map((faq, index) => (
              <div key={index} className="glass rounded-xl p-6">
                <h4 className="font-semibold mb-3 text-cyan-400">{faq.question}</h4>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Pricing;
