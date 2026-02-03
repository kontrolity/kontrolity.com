import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Brain,
  Zap,
  Shield,
  Activity,
  Clock,
  GitBranch,
  Search,
  Bell,
  BarChart3,
  Lock,
  Globe,
  Layers,
  ArrowRight
} from 'lucide-react';

// Bento Grid Feature Card
const FeatureCard = ({ feature, index, size = 'normal' }) => {
  const sizeClasses = {
    large: 'md:col-span-2 md:row-span-2',
    wide: 'md:col-span-2',
    tall: 'md:row-span-2',
    normal: '',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative ${sizeClasses[size]}`}
    >
      <div className={`relative h-full p-6 ${size === 'large' ? 'p-8' : ''} rounded-2xl border border-slate-200 bg-slate-50 hover:border-violet-300 hover:shadow-lg transition-all`}>
        {/* Icon */}
        <div className={`relative inline-flex items-center justify-center ${size === 'large' ? 'w-14 h-14' : 'w-11 h-11'} rounded-xl bg-violet-100 mb-4`}>
          <feature.icon className={`${size === 'large' ? 'w-7 h-7' : 'w-5 h-5'} text-violet-600`} />
        </div>

        {/* Content */}
        <h3 className={`relative ${size === 'large' ? 'text-2xl' : 'text-lg'} font-bold text-slate-900 mb-2`}>
          {feature.title}
        </h3>

        <p className={`relative text-slate-600 ${size === 'large' ? 'text-base' : 'text-sm'} leading-relaxed mb-4`}>
          {feature.description}
        </p>

        {/* Stats or Highlights */}
        {feature.stats && (
          <div className="relative flex flex-wrap gap-4 mt-auto">
            {feature.stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-violet-500" />
                <span className="text-sm text-slate-600">{stat.label}</span>
              </div>
            ))}
          </div>
        )}

      </div>
    </motion.div>
  );
};

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Brain,
      title: 'Autonomous Root Cause Analysis',
      description: 'AI that understands context across your entire stack. Identifies root causes in seconds, not hours. No more manual log diving.',
      gradient: 'from-violet-500/20 to-purple-500/20',
      iconGradient: 'from-violet-500 to-purple-500',
      textColor: 'text-violet-400',
      size: 'large',
      visual: Brain,
      stats: [
        { label: '94% faster resolution', color: 'bg-violet-400' },
        { label: 'Cross-service correlation', color: 'bg-purple-400' },
      ],
    },
    {
      icon: Zap,
      title: 'Self-Healing Actions',
      description: 'Automated remediation that fixes issues before they impact users. Define guardrails, let AI execute.',
      gradient: 'from-emerald-500/20 to-green-500/20',
      iconGradient: 'from-emerald-500 to-green-500',
      textColor: 'text-emerald-400',
      size: 'normal',
    },
    {
      icon: Shield,
      title: 'Predictive Failure Detection',
      description: 'ML models that learn your infrastructure patterns and predict failures before they happen.',
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconGradient: 'from-purple-500 to-pink-500',
      textColor: 'text-purple-400',
      size: 'normal',
    },
    {
      icon: Activity,
      title: 'Real-Time Observability',
      description: 'Unified view of metrics, logs, and traces with AI-powered anomaly detection that surfaces what matters.',
      gradient: 'from-orange-500/20 to-red-500/20',
      iconGradient: 'from-orange-500 to-red-500',
      textColor: 'text-orange-400',
      size: 'wide',
      stats: [
        { label: '1M+ events/sec', color: 'bg-orange-400' },
        { label: 'Sub-second latency', color: 'bg-red-400' },
      ],
    },
    {
      icon: GitBranch,
      title: 'Dependency Mapping',
      description: 'Automatic service relationship discovery. Understand blast radius instantly.',
      gradient: 'from-violet-500/20 to-violet-500/20',
      iconGradient: 'from-violet-500 to-violet-500',
      textColor: 'text-violet-400',
      size: 'normal',
    },
    {
      icon: Clock,
      title: 'Change Intelligence',
      description: 'Correlate incidents with deployments, config changes, and infrastructure updates automatically.',
      gradient: 'from-yellow-500/20 to-orange-500/20',
      iconGradient: 'from-yellow-500 to-orange-500',
      textColor: 'text-yellow-400',
      size: 'normal',
    },
    {
      icon: Bell,
      title: 'Intelligent Alerting',
      description: 'Context-aware alerts that eliminate noise. Smart routing based on service ownership and on-call schedules.',
      gradient: 'from-pink-500/20 to-rose-500/20',
      iconGradient: 'from-pink-500 to-rose-500',
      textColor: 'text-pink-400',
      size: 'normal',
    },
    {
      icon: Search,
      title: 'Natural Language Queries',
      description: 'Ask questions in plain English. "Why did payment latency spike yesterday?" Get instant, accurate answers.',
      gradient: 'from-purple-500/20 to-emerald-500/20',
      iconGradient: 'from-purple-500 to-emerald-500',
      textColor: 'text-purple-400',
      size: 'wide',
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II certified. RBAC, SSO, audit logs, and data encryption at rest and in transit.',
      gradient: 'from-slate-500/20 to-zinc-500/20',
      iconGradient: 'from-slate-600 to-slate-700',
      textColor: 'text-slate-400',
      size: 'normal',
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Support',
      description: 'AWS, GCP, Azure, and on-prem. One platform for your entire infrastructure, regardless of where it runs.',
      gradient: 'from-purple-500/20 to-violet-500/20',
      iconGradient: 'from-purple-500 to-violet-500',
      textColor: 'text-purple-400',
      size: 'normal',
    },
  ];

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
            <Layers className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-violet-600">Powerful Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Everything You Need for{' '}
            <span className="text-violet-600">Autonomous Ops</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit for managing modern infrastructure with AI-powered intelligence at every layer.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, i) => (
            <FeatureCard
              key={i}
              feature={feature}
              index={i}
              size={feature.size}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-slate-500 mb-6">
            And this is just the beginning. Our AI keeps learning and improving.
          </p>
          <a
            href="/documentation"
            className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium transition-colors"
          >
            Explore all features
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
