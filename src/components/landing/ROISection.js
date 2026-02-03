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
  Sparkles
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
    <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">ROI Calculator</h3>
          <p className="text-sm text-slate-500">See your potential savings</p>
        </div>
      </div>

      <div className="space-y-6 mb-8">
        {/* Incidents Slider */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-slate-600">Monthly Incidents</label>
            <span className="text-sm font-semibold text-slate-900">{incidents}</span>
          </div>
          <input
            type="range"
            min="10"
            max="200"
            value={incidents}
            onChange={(e) => setIncidents(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-violet-500"
          />
        </div>

        {/* Resolution Time Slider */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-slate-600">Avg Resolution Time (hours)</label>
            <span className="text-sm font-semibold text-slate-900">{avgResolutionTime}h</span>
          </div>
          <input
            type="range"
            min="1"
            max="12"
            value={avgResolutionTime}
            onChange={(e) => setAvgResolutionTime(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-violet-500"
          />
        </div>

        {/* Engineer Cost Slider */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-slate-600">Engineer Cost ($/hour)</label>
            <span className="text-sm font-semibold text-slate-900">${engineerCost}</span>
          </div>
          <input
            type="range"
            min="50"
            max="300"
            step="10"
            value={engineerCost}
            onChange={(e) => setEngineerCost(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-violet-500"
          />
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-violet-50 border border-violet-200">
        <div>
          <div className="text-sm text-slate-500 mb-1">Annual Savings</div>
          <div className="text-3xl font-bold text-violet-600">
            ${(annualSavings / 1000).toFixed(0)}K
          </div>
        </div>
        <div>
          <div className="text-sm text-slate-500 mb-1">ROI Multiple</div>
          <div className="text-3xl font-bold text-violet-600">
            {roiMultiple}x
          </div>
        </div>
      </div>

      <a
        href="/roi"
        className="flex items-center justify-center gap-2 mt-6 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold hover:from-violet-600 hover:to-purple-600 transition-all"
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

  return (
    <section ref={ref} className="relative py-32 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-200 mb-6">
            <TrendingUp className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-violet-600">ROI Calculator</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Investment That{' '}
            <span className="text-violet-600">Pays for Itself</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Why Teams Choose Kontrolity</h3>

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
                    <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-5 h-5 text-violet-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{point.title}</h4>
                      <p className="text-sm text-slate-500">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-lg bg-violet-50 border border-violet-200 text-sm text-violet-700 font-medium">
                SOC 2 Type II
              </div>
              <div className="px-4 py-2 rounded-lg bg-violet-50 border border-violet-200 text-sm text-violet-700 font-medium">
                99.99% Uptime SLA
              </div>
              <div className="px-4 py-2 rounded-lg bg-violet-50 border border-violet-200 text-sm text-violet-700 font-medium">
                GDPR Compliant
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
