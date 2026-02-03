import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle2, TrendingDown, Clock, Users, DollarSign, Zap, Shield } from 'lucide-react';

export default function KubeGrafProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const capabilities = [
    {
      icon: Zap,
      title: 'Autonomous Root Cause Analysis',
      traditional: '45+ minutes to correlate logs, metrics, traces, and config changes',
      kubegraf: '90 seconds. AI correlates across all data sources automatically',
      highlight: true
    },
    {
      icon: Shield,
      title: 'Predictive Failure Detection',
      description: 'Catches pod crashes, OOMKills, and deployment failures before they impact users. Learns failure patterns from historical data and prevents recurrence.'
    },
    {
      icon: Users,
      title: 'Context-Aware Intelligence',
      description: 'Understands your specific architecture—microservice dependencies, deployment patterns, team ownership. Gets smarter with every incident.'
    }
  ];

  const metrics = [
    { icon: TrendingDown, stat: '80%', label: 'Reduction in MTTR', detail: 'Hours → Minutes' },
    { icon: Users, stat: '40%', label: 'Fewer Escalations', detail: 'To senior engineers' },
    { icon: DollarSign, stat: '$2M+', label: 'Annual Savings', detail: 'Per enterprise customer' },
    { icon: Clock, stat: '60%', label: 'Time Recovered', detail: 'Engineering teams ship features' }
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-emerald-500/10 via-purple-500/10 to-emerald-500/10 border border-emerald-500/20">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">
              Proven in Production
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Proof:{' '}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              KubeGraf
            </span>{' '}
            Reduces MTTR<br className="hidden md:block" /> from Hours to Minutes
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            KubeGraf is Kontrolity's first product—autonomous incident intelligence for Kubernetes. It's live in production, processing billions of events per day, and proving that AI can make better infrastructure decisions than humans.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`rounded-3xl p-8 border ${
                capability.highlight
                  ? 'bg-gradient-to-br from-violet-500/10 to-purple-500/10 border-violet-500/30'
                  : 'bg-slate-800/50 border-white/10'
              } hover:border-violet-500/40 transition-all`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-400 flex items-center justify-center mb-6">
                <capability.icon className="w-7 h-7 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{capability.title}</h3>

              {capability.traditional ? (
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Traditional Approach</div>
                    <p className="text-slate-400">{capability.traditional}</p>
                  </div>
                  <div className="h-px bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-transparent" />
                  <div>
                    <div className="text-sm font-semibold text-violet-400 uppercase tracking-wide mb-2">KubeGraf</div>
                    <p className="text-white font-medium">{capability.kubegraf}</p>
                  </div>
                </div>
              ) : (
                <p className="text-slate-400 leading-relaxed">{capability.description}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Business Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-gradient-to-br from-emerald-500/10 via-purple-500/10 to-violet-500/10 rounded-3xl p-12 border border-emerald-500/20 mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Business Impact
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-purple-400 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-slate-900" />
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {metric.stat}
                </div>
                <div className="text-lg font-semibold text-white mb-1">{metric.label}</div>
                <div className="text-sm text-slate-400">{metric.detail}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Comparison: Before vs After */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="bg-slate-900/50 rounded-3xl p-12 border border-white/10 mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-10 text-center">
            Traditional vs KubeGraf: Incident Response
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <h4 className="text-xl font-bold text-slate-300">Traditional (2 hours+)</h4>
              </div>
              {[
                'Alert fires at 3am',
                'Engineer wakes up, logs in',
                'Correlate logs across 47 microservices',
                'Check deployment history manually',
                'Review recent config changes',
                'Identify dependency failures',
                'Find root cause',
                'Deploy fix',
                'Monitor for recurrence',
                'Document incident',
                'By then: revenue lost, users impacted'
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-slate-600 font-mono text-sm mt-1">{String(index + 1).padStart(2, '0')}</div>
                  <div className="text-slate-400">{step}</div>
                </div>
              ))}
            </div>

            {/* KubeGraf */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <h4 className="text-xl font-bold text-white">KubeGraf (90 seconds)</h4>
              </div>
              {[
                'AI detects anomaly pattern',
                'Correlates logs, metrics, traces instantly',
                'Identifies root cause automatically',
                'Generates remediation plan',
                'Takes corrective action',
                'Verifies fix',
                'Notifies team with full context',
                'Learns pattern to prevent recurrence'
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-emerald-400 font-mono text-sm mt-1">{String(index + 1).padStart(2, '0')}</div>
                  <div className="text-white font-medium">{step}</div>
                </div>
              ))}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Fixed before users notice. Team sleeps through the night.</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="text-center"
        >
          <a
            href="https://kubegraf.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-slate-900 bg-gradient-to-r from-violet-400 to-purple-400 hover:from-violet-300 hover:to-purple-300 rounded-2xl transition-all shadow-2xl shadow-violet-500/25 hover:shadow-violet-500/40"
          >
            Try KubeGraf Free
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-slate-500">
            Reduce your Kubernetes MTTR in 15 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
