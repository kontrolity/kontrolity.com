import React from 'react';
import Navbar from '../src/components/landing/Navbar';
import Footer from '../src/components/landing/Footer';
import SectionDivider from '../src/components/landing/SectionDivider';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Building, Sparkles } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: 'Custom',
      description: 'For growing teams getting started with autonomous infrastructure',
      features: [
        'Up to 100 nodes',
        'Real-time monitoring',
        'Basic AI automation',
        'Community support',
        'Core integrations',
        '30-day data retention'
      ]
    },
    {
      name: 'Professional',
      icon: Building,
      price: 'Custom',
      description: 'For teams scaling their infrastructure with advanced features',
      features: [
        'Up to 1,000 nodes',
        'Advanced AI control layer',
        'Predictive analytics',
        'Priority support',
        'All integrations',
        '90-day data retention',
        'Custom dashboards',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Sparkles,
      price: 'Custom',
      description: 'For organizations requiring enterprise-grade security and scale',
      features: [
        'Unlimited nodes',
        'Full platform access',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantees',
        'Unlimited data retention',
        'Advanced security',
        'Custom AI models',
        'On-premise deployment'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero Section - Dark */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden bg-[#0a0a1a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-[#0a0a1a] to-[#0a0a1a]" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-violet-500 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Choose the plan that fits your infrastructure needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider: Dark to White */}
      <SectionDivider fillColor="#FFFFFF" invert={true} height={100} />

      {/* Pricing Cards - White */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl p-8 border ${plan.popular ? 'border-violet-300 bg-white shadow-lg shadow-violet-500/10' : 'border-slate-200 bg-slate-50'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}

                <plan.icon className="w-12 h-12 text-violet-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-violet-600">{plan.price}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full px-6 py-3 text-center font-semibold rounded-xl transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:from-violet-600 hover:to-purple-600'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  Contact Sales
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider: White to Dark */}
      <SectionDivider fillColor="#08080f" invert={true} height={100} />

      {/* CTA Section - Dark */}
      <section className="py-20 px-6 lg:px-8 bg-[#08080f]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a custom plan?</h2>
            <p className="text-xl text-slate-400 mb-8">
              Contact our sales team to discuss your specific requirements
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 rounded-xl transition-all"
            >
              Contact Sales <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
