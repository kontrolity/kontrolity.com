import React from 'react';
import Navbar from '../../src/components/landing/Navbar';
import Footer from '../../src/components/landing/Footer';
import { motion } from 'framer-motion';
import { GitBranch, ArrowRight } from 'lucide-react';

export default function DevOps() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                DevOps Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-8">CI/CD and deployment automation</p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-400 to-purple-400 text-slate-900 font-semibold rounded-xl">
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
