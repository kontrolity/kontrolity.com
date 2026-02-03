import React from 'react';
import Navbar from '../src/components/landing/Navbar';
import Footer from '../src/components/landing/Footer';
import { motion } from 'framer-motion';
import { Sparkles, Database, Activity, GitBranch, Zap, Brain, Shield, CheckCircle, ArrowRight } from 'lucide-react';

export default function Platform() {
  const features = [
    {
      icon: Sparkles,
      title: 'AI Control Layer',
      description: 'Autonomous intelligence for infrastructure that learns, adapts, and acts without human intervention.',
      benefits: [
        'Self-healing infrastructure',
        'Predictive issue detection',
        'Autonomous incident response',
        'Continuous optimization'
      ]
    },
    {
      icon: Database,
      title: 'Context Engine',
      description: 'Multi-source data correlation that understands the full context of your infrastructure ecosystem.',
      benefits: [
        'Unified data aggregation',
        'Real-time correlation',
        'Intelligent pattern recognition',
        'Cross-system insights'
      ]
    },
    {
      icon: Activity,
      title: 'Real-Time Monitoring',
      description: 'Continuous observability with sub-second latency for instant visibility into system health.',
      benefits: [
        'Sub-second metrics',
        'Live dependency tracking',
        'Performance analytics',
        'Custom dashboards'
      ]
    },
    {
      icon: GitBranch,
      title: 'Dependency Mapping',
      description: 'Automated service relationship graphs that reveal hidden connections and bottlenecks.',
      benefits: [
        'Auto-discovered topology',
        'Impact analysis',
        'Failure prediction',
        'Optimization opportunities'
      ]
    }
  ];

  const capabilities = [
    {
      icon: Brain,
      title: 'Intelligent Automation',
      description: 'AI-powered workflows that understand context and make intelligent decisions'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built-in security controls with compliance and audit trails'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for performance with sub-second response times'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-950 to-slate-950" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              The{' '}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-purple-400 bg-clip-text text-transparent">
                Kontrolity Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-8">
              Autonomous AI control for modern infrastructure. Observe, understand, and stabilize your systems in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-gradient-to-r from-violet-400 to-purple-400 hover:from-violet-300 hover:to-purple-300 rounded-xl transition-all shadow-lg shadow-violet-500/25"
              >
                Explore Features
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-white/10"
              >
                Request Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Platform Features</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Everything you need to achieve autonomous infrastructure management
            </p>
          </motion.div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 mb-6">
                    <feature.icon className="w-8 h-8 text-violet-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-3xl p-8 border border-violet-500/20 aspect-video flex items-center justify-center">
                    <feature.icon className="w-32 h-32 text-violet-400/30" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Built for Scale</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Enterprise-grade capabilities designed for modern infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-violet-500/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center mb-6">
                  <capability.icon className="w-7 h-7 text-violet-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-slate-400 leading-relaxed">{capability.description}</p>
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
            className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-3xl p-12 border border-violet-500/20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Experience the power of autonomous infrastructure management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-gradient-to-r from-violet-400 to-purple-400 hover:from-violet-300 hover:to-purple-300 rounded-xl transition-all shadow-lg shadow-violet-500/25"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-white/10"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
