import React from 'react';
import Navbar from '../../src/components/landing/Navbar';
import Footer from '../../src/components/landing/Footer';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Zap, CheckCircle, ArrowRight, TrendingUp, Shield, Activity } from 'lucide-react';

export default function AIControlLayer() {
  const features = [
    {
      icon: Brain,
      title: 'Autonomous Decision Making',
      description: 'AI-powered intelligence that makes critical infrastructure decisions without human intervention'
    },
    {
      icon: Zap,
      title: 'Self-Healing Systems',
      description: 'Automatically detect and remediate issues before they impact your users'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Machine learning models that predict failures and optimize performance'
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Continuous risk evaluation and automated mitigation strategies'
    }
  ];

  const capabilities = [
    'Real-time anomaly detection using machine learning',
    'Automated incident response and remediation',
    'Intelligent resource allocation and scaling',
    'Predictive failure analysis',
    'Autonomous rollback on deployment failures',
    'Continuous learning from historical data',
    'Multi-dimensional impact assessment',
    'Context-aware decision making'
  ];

  const useCases = [
    {
      title: 'Auto-Scaling Infrastructure',
      description: 'Automatically scale resources based on predicted demand patterns, not just current load'
    },
    {
      title: 'Incident Prevention',
      description: 'Detect patterns that indicate potential failures and take preventive action'
    },
    {
      title: 'Performance Optimization',
      description: 'Continuously optimize system performance by learning from usage patterns'
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce infrastructure costs by intelligently managing resource allocation'
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Platform Feature
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-purple-400 bg-clip-text text-transparent">
                AI Control Layer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-8">
              Autonomous intelligence for infrastructure that observes, learns, and acts without human intervention.
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
            className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-3xl p-12 border border-violet-500/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What is AI Control Layer?</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              The AI Control Layer is the brain of Kontrolity's autonomous infrastructure platform. It uses advanced machine learning and artificial intelligence to continuously monitor, analyze, and control your infrastructure with minimal human intervention.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Unlike traditional monitoring tools that simply alert you to problems, our AI Control Layer takes autonomous action to prevent, mitigate, and resolve issues before they impact your systems or users.
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Core Capabilities</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Powered by cutting-edge AI and machine learning
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
                className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-violet-500/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-violet-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Technical Capabilities</h2>
              <p className="text-lg text-slate-400 mb-8">
                Our AI Control Layer leverages state-of-the-art machine learning algorithms to provide intelligent, autonomous infrastructure management.
              </p>
              <ul className="space-y-4">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{capability}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-3xl p-12 border border-violet-500/20 aspect-square flex items-center justify-center"
            >
              <Brain className="w-48 h-48 text-violet-400/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Real-World Applications</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              How teams use AI Control Layer to transform their operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-slate-400 leading-relaxed">{useCase.description}</p>
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
              Experience Autonomous Infrastructure
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Let AI take control while you focus on innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-gradient-to-r from-violet-400 to-purple-400 hover:from-violet-300 hover:to-purple-300 rounded-xl transition-all shadow-lg shadow-violet-500/25"
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
