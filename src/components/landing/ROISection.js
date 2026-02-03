import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  ArrowRight,
  Sparkles,
  Check
} from 'lucide-react';

// Animated Calculator Component
const ROICalculator = () => {
  const [incidents, setIncidents] = useState(50);
  const [avgResolutionTime, setAvgResolutionTime] = useState(4);
  const [engineerCost, setEngineerCost] = useState(150);

  // Calculate ROI
  const currentMonthlyCost = incidents * avgResolutionTime * engineerCost;
  const withKontrolity = incidents * 0.4 * engineerCost; // 90% faster = 0.4 hours avg
  const monthlySavings = currentMonthlyCost - withKontrolity;
  const annualSavings = monthlySavings * 12;
  const roiMultiple = Math.round((annualSavings / (12 * 2500)) * 10) / 10; // Assuming $2500/mo subscription

  return (
    <div className="p-8 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">ROI Calculator</h3>
          <p className="text-sm text-slate-400">See your potential savings</p>
        </div>
      </div>

      <div className="space-y-6 mb-8">
        {/* Incidents Slider */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-slate-400">Monthly Incidents</label>
            <span className="text-sm font-semibold text-white">{incidents}</span>
          </div>
          <input
            type="range"
            min="10"
            max="200"
            value={incidents}
            onChange={(e) => setIncidents(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer accent-cyan-500"
          />
        </div>

        {/* Resolution Time Slider */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-slate-400">Avg Resolution Time (hours)</label>
            <span className="text-sm font-semibold text-white">{avgResolutionTime}h</span>
          </div>
          <input
            type="range"
            min="1"
            max="12"
            value={avgResolutionTime}
            onChange={(e) => setAvgResolutionTime(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer accent-cyan-500"
          />
        </div>

        {/* Engineer Cost Slider */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-slate-400">Engineer Cost ($/hour)</label>
            <span className="text-sm font-semibold text-white">${engineerCost}</span>
          </div>
          <input
            type="range"
            min="50"
            max="300"
            step="10"
            value={engineerCost}
            onChange={(e) => setEngineerCost(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer accent-cyan-500"
          />
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
        <div>
          <div className="text-sm text-slate-400 mb-1">Annual Savings</div>
          <div className="text-3xl font-bold text-emerald-400">
            ${(annualSavings / 1000).toFixed(0)}K
          </div>
        </div>
        <div>
          <div className="text-sm text-slate-400 mb-1">ROI Multiple</div>
          <div className="text-3xl font-bold text-cyan-400">
            {roiMultiple}x
          </div>
        </div>
      </div>

      <a
        href="/roi"
        className="flex items-center justify-center gap-2 mt-6 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-900 font-semibold hover:from-emerald-400 hover:to-teal-400 transition-all"
      >
        Get Detailed ROI Analysis
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export default function ROISection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const pricingTiers = [
    {
      name: 'Starter',
      description: 'For growing teams',
      price: 'Free',
      period: 'for first 30 days',
      features: [
        'Up to 5 services',
        'Basic AI analysis',
        'Community support',
        'Standard integrations',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
    },
    {
      name: 'Pro',
      description: 'For scaling teams',
      price: '$2,500',
      period: '/month',
      features: [
        'Up to 50 services',
        'Advanced AI with self-healing',
        'Priority support',
        'All integrations',
        'Custom dashboards',
        'API access',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: 'Custom',
      period: 'pricing',
      features: [
        'Unlimited services',
        'Full autonomous ops',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantees',
        'On-premise option',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  return (
    <section ref={ref} className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">ROI & Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Investment That{' '}
            <span className="gradient-text">Pays for Itself</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Most customers see positive ROI within the first month. Calculate your potential savings below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* ROI Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ROICalculator />
          </motion.div>

          {/* Key ROI Points */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl border border-white/10 bg-slate-900/50">
              <h3 className="text-xl font-bold text-white mb-6">Why Teams Choose Kontrolity</h3>

              <div className="space-y-4">
                {[
                  {
                    icon: Clock,
                    title: '94% Faster Resolution',
                    description: 'Reduce MTTR from hours to minutes with AI-powered root cause analysis',
                  },
                  {
                    icon: DollarSign,
                    title: '10x ROI in Year One',
                    description: 'Average customer sees significant cost savings from reduced downtime and ops overhead',
                  },
                  {
                    icon: Users,
                    title: '70% Less On-Call Burden',
                    description: 'Free your team from alert fatigue with intelligent noise reduction',
                  },
                  {
                    icon: Sparkles,
                    title: 'Future-Proof Investment',
                    description: 'Continuous AI improvements included—your platform gets smarter over time',
                  },
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{point.title}</h4>
                      <p className="text-sm text-slate-400">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-white/5 text-sm text-slate-300">
                SOC 2 Type II
              </div>
              <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-white/5 text-sm text-slate-300">
                99.99% Uptime SLA
              </div>
              <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-white/5 text-sm text-slate-300">
                GDPR Compliant
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            Simple, Transparent Pricing
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="relative group"
              >
                {tier.highlighted && (
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                )}

                <div className={`relative h-full p-6 rounded-2xl border ${
                  tier.highlighted
                    ? 'border-cyan-500/50 bg-slate-900/80'
                    : 'border-white/10 bg-slate-900/50'
                } backdrop-blur-xl`}>
                  {tier.highlighted && (
                    <div className="absolute top-0 right-6 -translate-y-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-xs font-semibold text-slate-900">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-white">{tier.name}</h4>
                    <p className="text-sm text-slate-400">{tier.description}</p>
                  </div>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-slate-400">{tier.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                        <Check className={`w-4 h-4 ${tier.highlighted ? 'text-cyan-400' : 'text-slate-500'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={tier.highlighted ? 'https://kubegraf.io' : '#contact'}
                    className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all ${
                      tier.highlighted
                        ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-900 hover:from-cyan-400 hover:to-teal-400'
                        : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
