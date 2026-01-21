import React from 'react';
import Navbar from '../../src/components/landing/Navbar';
import Footer from '../../src/components/landing/Footer';
import { motion } from 'framer-motion';
import { Activity, Zap, BarChart3, CheckCircle, ArrowRight, Clock, TrendingUp, AlertCircle } from 'lucide-react';

export default function RealTimeMonitoring() {
  const features = [
    {
      icon: Zap,
      title: 'Sub-Second Latency',
      description: 'Monitor your infrastructure with sub-second data refresh rates for instant visibility'
    },
    {
      icon: BarChart3,
      title: 'Custom Dashboards',
      description: 'Build personalized dashboards that show exactly what matters to your team'
    },
    {
      icon: AlertCircle,
      title: 'Intelligent Alerting',
      description: 'Smart alerts that reduce noise and focus on actionable insights'
    },
    {
      icon: TrendingUp,
      title: 'Historical Analysis',
      description: 'Compare current performance against historical trends and patterns'
    }
  ];

  const metrics = [
    'CPU & Memory Usage',
    'Network Traffic',
    'Disk I/O',
    'Application Response Times',
    'Error Rates',
    'Request Throughput',
    'Database Performance',
    'Container Health',
    'Pod Status',
    'Service Availability',
    'Custom Business Metrics',
    'User Experience Metrics'
  ];

  const capabilities = [
    'Real-time metric collection and aggregation',
    'Customizable visualization and dashboards',
    'Multi-dimensional filtering and grouping',
    'Anomaly detection and alerting',
    'Performance trend analysis',
    'Capacity planning insights',
    'SLA monitoring and reporting',
    'Integration with popular tools'
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
              <Activity className="w-4 h-4" />
              Platform Feature
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Real-Time Monitoring
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-8">
              Continuous observability with instant visibility into every aspect of your infrastructure.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What is Real-Time Monitoring?</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Real-Time Monitoring provides instant, continuous visibility into your entire infrastructure stack. With sub-second data refresh rates and intelligent dashboards, you always know exactly what's happening in your systems.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Unlike traditional monitoring that shows you what happened minutes or hours ago, our real-time system gives you the power to respond immediately to changes, issues, or opportunities.
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Built for speed and clarity
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

      {/* Monitored Metrics */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Comprehensive Metrics</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Monitor everything that matters to your infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl p-4 border border-white/10 hover:border-cyan-500/30 transition-all"
              >
                <Activity className="w-6 h-6 text-cyan-400 mb-2" />
                <span className="text-sm text-slate-300">{metric}</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Advanced Capabilities</h2>
              <p className="text-lg text-slate-400 mb-8">
                Our monitoring platform is built for performance, scalability, and ease of use.
              </p>
              <ul className="space-y-4">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
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
              className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-3xl p-12 border border-cyan-500/20 aspect-square flex items-center justify-center"
            >
              <Activity className="w-48 h-48 text-cyan-400/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Clock, value: '<1s', label: 'Data Latency' },
              { icon: BarChart3, value: '100M+', label: 'Metrics/Second' },
              { icon: TrendingUp, value: '99.99%', label: 'Accuracy' },
              { icon: Zap, value: '24/7', label: 'Availability' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-slate-800/50 rounded-2xl p-6 border border-white/10"
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See Everything in Real-Time
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Never miss a beat with instant infrastructure visibility
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
