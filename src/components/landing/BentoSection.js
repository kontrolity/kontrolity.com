import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Shield, Zap, Activity, Database, GitBranch, Eye, Sparkles } from 'lucide-react';

export default function BentoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cards = [
    {
      span: 'col-span-2 row-span-2',
      gradient: 'from-cyan-500/20 via-teal-500/20 to-emerald-500/20',
      border: 'border-cyan-500/30',
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Autonomous system that learns patterns, predicts failures, and takes action before incidents occur.',
      features: ['Pattern recognition', 'Predictive analytics', 'Auto-remediation'],
      visual: (
        <div className="relative h-48 mt-6">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/20 to-teal-400/20 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Brain className="w-16 h-16 text-cyan-400" />
              </div>
              {/* Neural network lines */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-20 h-0.5 bg-gradient-to-r from-cyan-400/50 to-transparent origin-left"
                  style={{
                    transform: `rotate(${i * 45}deg)`,
                    animation: `pulse 2s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      span: 'col-span-1',
      gradient: 'from-purple-500/20 to-pink-500/20',
      border: 'border-purple-500/30',
      icon: Shield,
      title: 'Security First',
      description: 'Continuous security scanning and threat detection.',
      stat: '99.9%',
      statLabel: 'Threat Prevention'
    },
    {
      span: 'col-span-1',
      gradient: 'from-orange-500/20 to-red-500/20',
      border: 'border-orange-500/30',
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Real-time response in milliseconds.',
      stat: '<100ms',
      statLabel: 'Response Time'
    },
    {
      span: 'col-span-1',
      gradient: 'from-blue-500/20 to-indigo-500/20',
      border: 'border-blue-500/30',
      icon: Activity,
      title: 'Live Monitoring',
      description: 'Track system health in real-time with intelligent alerts.',
      chart: true
    },
    {
      span: 'col-span-2',
      gradient: 'from-emerald-500/20 to-teal-500/20',
      border: 'border-emerald-500/30',
      icon: Database,
      title: 'Multi-Source Correlation',
      description: 'Connect logs, metrics, traces, and events to build complete system understanding.',
      features: ['Log aggregation', 'Metric correlation', 'Trace analysis', 'Event streaming']
    },
    {
      span: 'col-span-1',
      gradient: 'from-pink-500/20 to-rose-500/20',
      border: 'border-pink-500/30',
      icon: GitBranch,
      title: 'Dependency Mapping',
      description: 'Auto-discover service relationships.',
      network: true
    },
  ];

  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">Platform Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything you need to build{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              autonomous systems
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A complete platform for modern infrastructure management
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-3 auto-rows-[200px] gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative ${card.span} bg-gradient-to-br ${card.gradient} rounded-3xl p-6 border ${card.border} hover:scale-[1.02] transition-all duration-300 overflow-hidden`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative h-full flex flex-col">
                {/* Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-300 mb-auto">
                  {card.description}
                </p>

                {/* Visual elements */}
                {card.stat && (
                  <div className="mt-4">
                    <div className="text-4xl font-bold text-white">{card.stat}</div>
                    <div className="text-xs text-slate-400">{card.statLabel}</div>
                  </div>
                )}

                {card.features && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="px-3 py-1 rounded-full bg-white/10 text-xs text-white">
                        {feature}
                      </div>
                    ))}
                  </div>
                )}

                {card.chart && (
                  <div className="mt-4 h-16 flex items-end gap-1">
                    {[40, 60, 45, 70, 55, 80, 65, 85, 75, 90].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-400 to-indigo-400 rounded-t opacity-80 hover:opacity-100 transition-opacity"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                )}

                {card.network && (
                  <div className="mt-4 relative h-20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="absolute w-8 h-8 rounded-full bg-pink-500/20 border border-pink-500/40"
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${20 + (i % 2) * 40}%`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {card.visual && card.visual}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
