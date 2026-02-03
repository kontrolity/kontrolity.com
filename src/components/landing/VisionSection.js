import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, TrendingUp, Shield, Zap, Target } from 'lucide-react';

export default function VisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const thesis = [
    {
      number: '1',
      title: 'Infrastructure generates more data than humans can process',
      description: 'Millions of signals per second across logs, metrics, traces, configs, and cloud APIs. The scale problem isn\'t getting smaller.'
    },
    {
      number: '2',
      title: 'AI can understand that data better than rule-based systems',
      description: 'Traditional monitoring relies on static thresholds and predefined rules. AI learns patterns, understands context, and adapts to your specific environment.'
    },
    {
      number: '3',
      title: 'Autonomous action is the only way to operate at cloud scale',
      description: 'Human-in-the-loop doesn\'t scale. Every manual step adds minutes to MTTR. Autonomous systems respond in seconds.'
    },
    {
      number: '4',
      title: 'The winning platform will unify observability, operations, and security',
      description: 'Fragmented tools create silos. The future is a single AI control layer that sees everything, understands everything, and acts everywhere.'
    }
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-violet-500/10 border border-violet-500/20">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-400">
              The Future of Infrastructure
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Building the{' '}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Autonomous Infrastructure
            </span>{' '}
            Layer
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Five years from now, no engineering team will manually debug production incidents. Infrastructure will be autonomous—self-healing, self-optimizing, self-securing.
          </p>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-3xl p-12 border border-violet-500/20 mb-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-6">
              Kontrolity is building that future.
            </p>
            <p className="text-xl text-slate-300 leading-relaxed">
              We're starting with the hardest problem: incident response. But our platform is designed to manage every infrastructure decision autonomously. We're not building better dashboards. <span className="font-semibold text-white">We're building the intelligence layer that makes dashboards obsolete.</span>
            </p>
          </div>
        </motion.div>

        {/* The Kontrolity Thesis */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            The Kontrolity Thesis
          </h3>
          <div className="space-y-6">
            {thesis.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-400 flex items-center justify-center text-2xl font-bold text-slate-900 group-hover:scale-110 transition-transform">
                    {item.number}
                  </div>
                </div>
                <div className="flex-1 bg-slate-800/50 rounded-2xl p-6 border border-white/10 group-hover:border-violet-500/30 transition-all">
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-white/10 hover:border-emerald-500/30 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-purple-400 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-slate-900" />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Self-Healing Systems</h4>
            <p className="text-slate-400 leading-relaxed">
              Infrastructure that detects, diagnoses, and fixes issues autonomously—before they impact users.
            </p>
          </div>

          <div className="bg-slate-900/50 rounded-2xl p-8 border border-white/10 hover:border-violet-500/30 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-400 flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-slate-900" />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Self-Optimizing Performance</h4>
            <p className="text-slate-400 leading-relaxed">
              AI that continuously tunes resource allocation, balances cost and performance, and eliminates waste.
            </p>
          </div>

          <div className="bg-slate-900/50 rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center mb-6">
              <Shield className="w-7 h-7 text-slate-900" />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Self-Securing Infrastructure</h4>
            <p className="text-slate-400 leading-relaxed">
              Continuous security validation, autonomous penetration testing, and real-time threat response.
            </p>
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-2xl md:text-3xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            You've automated deployment. You've automated scaling.{' '}
            <span className="text-white font-semibold">Now automate decision-making.</span>
          </p>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto mt-6">
            That's what Kontrolity enables. That's the future we're building.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
