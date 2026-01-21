import React from 'react';
import Navbar from '../../src/components/landing/Navbar';
import Footer from '../../src/components/landing/Footer';
import { motion } from 'framer-motion';
import { GitBranch, Network, Layers, CheckCircle, ArrowRight, AlertTriangle, Eye, Zap } from 'lucide-react';

export default function DependencyMapping() {
  const features = [
    {
      icon: Network,
      title: 'Auto-Discovery',
      description: 'Automatically discover and map all service dependencies across your infrastructure'
    },
    {
      icon: Eye,
      title: 'Visual Topology',
      description: 'Interactive visualization of service relationships and data flows'
    },
    {
      icon: AlertTriangle,
      title: 'Impact Analysis',
      description: 'Understand blast radius and predict cascading failures before they happen'
    },
    {
      icon: Zap,
      title: 'Real-Time Updates',
      description: 'Dependency maps update automatically as your infrastructure changes'
    }
  ];

  const benefits = [
    'Identify single points of failure',
    'Understand service interdependencies',
    'Predict cascading failure impact',
    'Optimize deployment strategies',
    'Improve incident response',
    'Reduce mean time to resolution',
    'Enable safe refactoring',
    'Support capacity planning'
  ];

  const useCases = [
    {
      title: 'Incident Response',
      description: 'Quickly identify which services are affected when an issue occurs and understand the full scope of impact'
    },
    {
      title: 'Change Management',
      description: 'Assess the risk of changes by understanding what depends on the services you\'re modifying'
    },
    {
      title: 'Architecture Optimization',
      description: 'Discover bottlenecks, circular dependencies, and opportunities for architecture improvements'
    },
    {
      title: 'Capacity Planning',
      description: 'Understand resource dependencies to make informed scaling and capacity decisions'
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
              <GitBranch className="w-4 h-4" />
              Platform Feature
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Dependency Mapping
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-8">
              Automatically discover and visualize service relationships to understand your infrastructure's true topology.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What is Dependency Mapping?</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Dependency Mapping automatically discovers and visualizes the complex relationships between services, databases, APIs, and infrastructure components. It provides a living map of your system architecture that updates in real-time.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Understanding these dependencies is critical for incident response, change management, and architectural decisions. Our system reveals hidden connections and helps you predict the impact of changes before they happen.
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
              Illuminate the hidden structure of your infrastructure
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

      {/* Benefits */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Dependency Mapping Matters</h2>
              <p className="text-lg text-slate-400 mb-8">
                In modern microservices architectures, understanding service dependencies is critical for maintaining reliability and making informed decisions.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-3xl p-12 border border-cyan-500/20 aspect-square flex items-center justify-center"
            >
              <GitBranch className="w-48 h-48 text-cyan-400/30" />
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Common Use Cases</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              How teams leverage dependency mapping
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
                <Layers className="w-8 h-8 text-cyan-400 mb-4" />
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
            className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Map Your Infrastructure
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Discover the hidden connections in your system
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
