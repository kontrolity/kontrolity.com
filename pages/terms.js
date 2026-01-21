import React from 'react';
import Navbar from '../src/components/landing/Navbar';
import Footer from '../src/components/landing/Footer';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-10 h-10 text-cyan-400" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Terms of Service</h1>
            </div>
            <p className="text-slate-400 mb-8">Last updated: January 2026</p>

            <div className="prose prose-invert max-w-none">
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
                <p className="text-slate-300 mb-4">
                  By accessing and using Kontrolity's services, you accept and agree to be bound by these Terms of Service.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Use of Services</h2>
                <p className="text-slate-300 mb-4">
                  You agree to use our services only for lawful purposes and in accordance with these Terms.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
                <p className="text-slate-300 mb-4">
                  All content, features, and functionality are owned by Kontrolity and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
                <p className="text-slate-300">
                  For questions about these Terms, contact us at{' '}
                  <a href="mailto:contact@kontrolity.com" className="text-cyan-400 hover:underline">
                    contact@kontrolity.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
