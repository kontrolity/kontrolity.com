import React from 'react';
import Navbar from '../../src/components/landing/Navbar';
import Footer from '../../src/components/landing/Footer';
import { motion } from 'framer-motion';
import { Database, GitBranch, Layers, CheckCircle, ArrowRight, Zap, Activity, Cloud } from 'lucide-react';

export default function ContextEngine() {
  const features = [
    {
      icon: Layers,
      title: 'Multi-Source Integration',
      description: 'Aggregate data from logs, metrics, traces, and events into a unified view'
    },
    {
      icon: GitBranch,
      title: 'Intelligent Correlation',
      description: 'Automatically correlate related events across your entire infrastructure'
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Process and analyze data streams in real-time with sub-second latency'
    },
    {
      icon: Activity,
      title: 'Pattern Recognition',
      description: 'Identify trends, anomalies, and patterns that matter to your business'
    }
  ];

  const dataSources = [
    'Application Logs',
    'System Metrics',
    'Distributed Traces',
    'Events & Alerts',
    'Cloud Provider APIs',
    'Container Orchestration',
    'CI/CD Pipelines',
    'Security Tools',
    'Custom Integrations',
    'Third-party Services'
  ];

  const benefits = [
    {
      title: 'Unified Visibility',
      description: 'See your entire infrastructure ecosystem in one place, eliminating data silos'
    },
    {
      title: 'Faster Root Cause Analysis',
      description: 'Quickly identify the source of issues by correlating events across systems'
    },
    {
      title: 'Contextual Insights',
      description: 'Understand not just what happened, but why it happened and what impact it had'
    },
    {
      title: 'Reduced Alert Fatigue',
      description: 'Intelligent grouping and correlation reduces noise and focuses on what matters'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Database className="w-4 h-4" />
              Platform Feature
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Context Engine
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-8">
              Multi-source data correlation that transforms fragmented signals into actionable intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-xl transition-all shadow-lg shadow-cyan-500/25"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/platform"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-white/10"
              >
                View All Platform Features
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-3xl p-12 border border-cyan-500/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What is Context Engine?</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              The Context Engine is Kontrolity's data intelligence layer that aggregates, correlates, and analyzes information from across your entire technology stack. It provides the contextual understanding that enables truly autonomous infrastructure management.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              By understanding the relationships between different systems, services, and events, the Context Engine empowers our AI Control Layer to make intelligent decisions based on complete situational awareness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Key Capabilities</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Turning data chaos into contextual clarity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Supported Data Sources</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Integrate with your entire technology stack
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {dataSources.map((source, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl p-4 border border-white/10 hover:border-cyan-500/30 transition-all text-center"
              >
                <Cloud className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <span className="text-sm text-slate-300">{source}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Business Benefits</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Transform how you understand and manage your infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-white/10"
              >
                <CheckCircle className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Unify Your Infrastructure Data
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Stop drowning in data. Start making intelligent decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-xl transition-all shadow-lg shadow-cyan-500/25"
              >
                Request Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/documentation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-white/10"
              >
                Read Documentation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
