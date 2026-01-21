import React from 'react';
import Navbar from '../src/components/landing/Navbar';
import Footer from '../src/components/landing/Footer';
import { motion } from 'framer-motion';
import { Shield, Zap, ArrowRight, CheckCircle, Lock, Brain, GitBranch, Activity, Database, ExternalLink } from 'lucide-react';

export default function Products() {
  const products = [
    {
      icon: Shield,
      name: 'KubeGraf',
      tagline: 'Kubernetes Incident Intelligence',
      description: 'Advanced Grafana dashboard and alerting system specifically designed for Kubernetes environments. Real-time monitoring and intelligent incident detection.',
      href: 'https://kubegraf.io',
      external: true,
      features: [
        'Real-time Kubernetes monitoring',
        'Custom Grafana dashboards',
        'Intelligent alerting system',
        'Multi-cluster support',
        'Resource optimization insights',
        'Incident correlation'
      ],
      status: 'Available Now'
    },
    {
      icon: Shield,
      name: 'Kontrolity Security',
      tagline: 'Autonomous Penetration Testing',
      description: 'AI-powered security testing that continuously scans, detects vulnerabilities, and provides actionable remediation steps.',
      href: '#contact',
      features: [
        'Continuous security scanning',
        'Vulnerability detection',
        'Automated penetration testing',
        'Compliance monitoring',
        'Threat intelligence',
        'Remediation workflows'
      ],
      status: 'Coming Soon'
    },
    {
      icon: Zap,
      name: 'Kontrolity Intelligence',
      tagline: 'Unified AI Control Layer',
      description: 'The core autonomous AI engine that powers infrastructure intelligence, predictive analytics, and self-healing capabilities.',
      href: '#contact',
      features: [
        'Predictive incident detection',
        'Autonomous remediation',
        'Resource optimization',
        'Performance analytics',
        'Cost optimization',
        'Multi-cloud support'
      ],
      status: 'Beta Access'
    }
  ];

  const integrations = [
    { name: 'Kubernetes', icon: Database },
    { name: 'Grafana', icon: Activity },
    { name: 'Prometheus', icon: Activity },
    { name: 'AWS', icon: Database },
    { name: 'Azure', icon: Database },
    { name: 'GCP', icon: Database }
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Products
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Purpose-built solutions for autonomous infrastructure management, security, and intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 md:p-12 border border-white/10 hover:border-cyan-500/30 transition-all">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                  {product.status}
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left Column - Product Info */}
                  <div>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 mb-6">
                      <product.icon className="w-8 h-8 text-cyan-400" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{product.name}</h2>
                    <p className="text-xl text-cyan-400 mb-6">{product.tagline}</p>
                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                      {product.description}
                    </p>

                    <a
                      href={product.href}
                      target={product.external ? '_blank' : undefined}
                      rel={product.external ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-xl transition-all shadow-lg shadow-cyan-500/25"
                    >
                      {product.external ? 'Visit Site' : 'Learn More'}
                      {product.external ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    </a>
                  </div>

                  {/* Right Column - Features */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6">Key Features</h3>
                    <ul className="space-y-4">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Seamless Integrations</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Works with your existing infrastructure and tools
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col items-center justify-center gap-3"
              >
                <integration.icon className="w-8 h-8 text-cyan-400" />
                <span className="text-sm font-medium text-slate-300">{integration.name}</span>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Explore our products and transform your infrastructure management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-xl transition-all shadow-lg shadow-cyan-500/25"
              >
                Contact Sales
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/platform"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-white/10"
              >
                View Platform
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
