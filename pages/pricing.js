import React from 'react';
import Navbar from '../src/components/landing/Navbar';
import Footer from '../src/components/landing/Footer';
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

      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Choose the plan that fits your infrastructure needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 rounded-2xl p-8 border ${plan.popular ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20' : 'border-white/10'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-900 text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}

                <plan.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full px-6 py-3 text-center font-semibold rounded-xl transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-900 hover:from-cyan-300 hover:to-teal-300'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Contact Sales
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a custom plan?</h2>
            <p className="text-xl text-slate-400 mb-8">
              Contact our sales team to discuss your specific requirements
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-xl transition-all"
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
