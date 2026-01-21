import React from 'react';
import Navbar from '../src/components/landing/Navbar';
import Footer from '../src/components/landing/Footer';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-10 h-10 text-cyan-400" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
            </div>
            <p className="text-slate-400 mb-8">Last updated: January 2026</p>

            <div className="prose prose-invert max-w-none">
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                <p className="text-slate-300 mb-4">
                  We collect information you provide directly to us, including your name, email address, company information, and usage data when you use our services.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <p className="text-slate-300 mb-4">
                  We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our users.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                <p className="text-slate-300 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-slate-300">
                  If you have any questions about this Privacy Policy, please contact us at{' '}
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
