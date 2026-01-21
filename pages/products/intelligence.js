import React from 'react';
import Navbar from '../../src/components/landing/Navbar';
import Footer from '../../src/components/landing/Footer';
import { motion } from 'framer-motion';
import { Zap, Brain, TrendingUp, CheckCircle, ArrowRight, Target, LineChart, Sparkles, Activity } from 'lucide-react';

export default function Intelligence() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning models that understand your infrastructure patterns'
    },
    {
      icon: Target,
      title: 'Predictive Analytics',
      description: 'Forecast failures, capacity needs, and performance issues before they occur'
    },
    {
      icon: LineChart,
      title: 'Cost Optimization',
      description: 'Automatically identify and implement cost-saving opportunities'
    },
    {
      icon: Activity,
      title: 'Performance Intelligence',
      description: 'Continuous performance analysis and automated optimization recommendations'
    }
  ];

  const capabilities = [
    'Anomaly detection and root cause analysis',
    'Capacity planning and forecasting',
    'Resource optimization recommendations',
    'Cost analysis and reduction strategies',
    'Performance bottleneck identification',
    'Automated remediation workflows',
    'Multi-cloud optimization',
    'Custom AI model training',
    'Trend analysis and reporting',
    'Business impact correlation'
  ];

  const aiModels = [
    {
      title: 'Failure Prediction',
      description: 'Predict infrastructure failures 30 minutes before they occur with 95% accuracy'
    },
    {
      title: 'Capacity Forecasting',
      description: 'ML-based capacity planning that predicts resource needs up to 90 days ahead'
    },
    {
      title: 'Cost Optimization',
      description: 'Identify underutilized resources and recommend right-sizing strategies'
    },
    {
      title: 'Performance Optimization',
      description: 'Analyze patterns and automatically tune system parameters for optimal performance'
    }
  ];

  const metrics = [
    { value: '95%', label: 'Prediction Accuracy' },
    { value: '30 min', label: 'Failure Prediction Lead Time' },
    { value: '40%', label: 'Average Cost Reduction' },
    { value: '24/7', label: 'Continuous Learning' }
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Product
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Kontrolity Intelligence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-8">
              The unified AI control layer that transforms your infrastructure with intelligent automation and predictive insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-300 hover:to-pink-300 rounded-xl transition-all shadow-lg shadow-purple-500/25"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-white/10"
              >
                View All Products
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
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-12 border border-purple-500/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Brain of Your Infrastructure</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Kontrolity Intelligence is the core AI engine that powers autonomous infrastructure management. It combines advanced machine learning, predictive analytics, and intelligent automation to transform how you manage your systems.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Our AI continuously learns from your infrastructure patterns, predicts issues before they occur, and automatically optimizes performance and costs without human intervention.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-slate-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Intelligent Capabilities</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              AI-powered features that transform infrastructure management
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
                className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Models */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">AI-Powered Models</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Advanced machine learning models trained on billions of data points
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-white/10"
              >
                <Brain className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{model.title}</h3>
                <p className="text-slate-400 leading-relaxed">{model.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Complete Intelligence Suite</h2>
              <p className="text-lg text-slate-400 mb-8">
                Everything you need to build an intelligent, self-optimizing infrastructure.
              </p>
              <ul className="space-y-4">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
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
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-12 border border-purple-500/20 aspect-square flex items-center justify-center"
            >
              <Brain className="w-48 h-48 text-purple-400/30" />
            </motion.div>
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
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-12 border border-purple-500/20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Supercharge Your Infrastructure with AI
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Experience the power of intelligent automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-300 hover:to-pink-300 rounded-xl transition-all shadow-lg shadow-purple-500/25"
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
