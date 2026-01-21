import React from 'react';
import Navbar from '../src/components/landing/Navbar';
import Footer from '../src/components/landing/Footer';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';

export default function Security() {
  const practices = [
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard encryption'
    },
    {
      icon: Eye,
      title: 'Access Controls',
      description: 'Role-based access control and multi-factor authentication for all users'
    },
    {
      icon: Shield,
      title: 'Compliance',
      description: 'SOC 2 Type II, GDPR, and HIPAA compliant infrastructure'
    },
    {
      icon: CheckCircle,
      title: 'Regular Audits',
      description: 'Continuous security audits and penetration testing by third-party experts'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Security
              </span>
            </h1>
            <p className="text-xl text-slate-400">
              Your data security is our top priority
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-white/10"
            >
              <practice.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">{practice.title}</h3>
              <p className="text-slate-400">{practice.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-white mb-4">Report a Security Issue</h2>
            <p className="text-slate-400 mb-6">
              If you discover a security vulnerability, please email us at{' '}
              <a href="mailto:founders@kontrolity.com" className="text-cyan-400 hover:underline">
                founders@kontrolity.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
