import React from 'react';
import Navbar from '../../src/components/landing/Navbar';
import Footer from '../../src/components/landing/Footer';
import { motion } from 'framer-motion';
import { Shield, Lock, AlertTriangle, CheckCircle, ArrowRight, Scan, FileSearch, Bug, Zap } from 'lucide-react';

export default function Security() {
  const features = [
    {
      icon: Scan,
      title: 'Continuous Scanning',
      description: '24/7 automated security scanning across your entire infrastructure'
    },
    {
      icon: Bug,
      title: 'Vulnerability Detection',
      description: 'Identify and prioritize security vulnerabilities before they\'re exploited'
    },
    {
      icon: Zap,
      title: 'Auto Penetration Testing',
      description: 'Autonomous penetration testing that simulates real-world attacks'
    },
    {
      icon: FileSearch,
      title: 'Compliance Monitoring',
      description: 'Automated compliance checking for SOC 2, HIPAA, PCI-DSS, and more'
    }
  ];

  const capabilities = [
    'Container and image vulnerability scanning',
    'Infrastructure as Code security analysis',
    'Secrets detection and management',
    'Network security assessment',
    'API security testing',
    'Access control auditing',
    'Threat intelligence integration',
    'Automated remediation workflows',
    'Security posture dashboards',
    'Incident response playbooks'
  ];

  const complianceFrameworks = [
    'SOC 2',
    'HIPAA',
    'PCI-DSS',
    'GDPR',
    'ISO 27001',
    'NIST',
    'CIS Benchmarks',
    'FedRAMP'
  ];

  const threatTypes = [
    {
      title: 'Container Vulnerabilities',
      description: 'Scan images for known CVEs and misconfigurations'
    },
    {
      title: 'Exposed Secrets',
      description: 'Detect hardcoded credentials, API keys, and tokens'
    },
    {
      title: 'Misconfigured Services',
      description: 'Identify insecure configurations and weak security policies'
    },
    {
      title: 'Unauthorized Access',
      description: 'Monitor and alert on suspicious access patterns'
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Product
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Kontrolity Security
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-8">
              Autonomous penetration testing and security scanning that protects your infrastructure 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-gradient-to-r from-red-400 to-orange-400 hover:from-red-300 hover:to-orange-300 rounded-xl transition-all shadow-lg shadow-red-500/25"
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
            className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl p-12 border border-red-500/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Autonomous Security at Scale</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Kontrolity Security uses AI-powered autonomous agents to continuously test, scan, and monitor your infrastructure for vulnerabilities. Unlike traditional security tools that require manual configuration and interpretation, our system autonomously discovers threats and provides actionable remediation steps.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Stay ahead of attackers with continuous penetration testing, vulnerability scanning, and compliance monitoring that never sleeps.
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Core Features</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive security coverage for modern infrastructure
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
                className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-red-500/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-red-400" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Comprehensive Security Capabilities</h2>
              <p className="text-lg text-slate-400 mb-8">
                Our security platform provides end-to-end protection for your infrastructure, from code to cloud.
              </p>
              <ul className="space-y-4">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
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
              className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl p-12 border border-red-500/20 aspect-square flex items-center justify-center"
            >
              <Shield className="w-48 h-48 text-red-400/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Threat Detection */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Threat Detection</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Identify and remediate security threats before they're exploited
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {threatTypes.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-white/10"
              >
                <AlertTriangle className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{threat.title}</h3>
                <p className="text-slate-400 leading-relaxed">{threat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Compliance Support</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Automated compliance monitoring for major frameworks
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 hover:border-red-500/30 transition-all text-center"
              >
                <Lock className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <span className="text-slate-300 font-medium">{framework}</span>
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
            className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl p-12 border border-red-500/20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Secure Your Infrastructure
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Deploy autonomous security that never sleeps
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-gradient-to-r from-red-400 to-orange-400 hover:from-red-300 hover:to-orange-300 rounded-xl transition-all shadow-lg shadow-red-500/25"
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
