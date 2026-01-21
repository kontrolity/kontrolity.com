import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to build the future?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join infrastructure teams building autonomous systems. We work with early adopters, platform engineers, and forward-thinking organizations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:founders@kontrolity.com"
              className="group flex items-center gap-3 px-8 py-4 text-lg font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow-lg transition-all"
            >
              <Mail className="w-5 h-5" />
              founders@kontrolity.com
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-slate-700" />
            <span className="text-sm text-slate-500">or</span>
            <div className="flex-1 h-px bg-slate-700" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kubegraf.io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-base font-medium text-white hover:text-cyan-400 transition-colors"
            >
              Try KubeGraf →
            </a>
            <a
              href="#products"
              className="px-6 py-3 text-base font-medium text-white hover:text-indigo-400 transition-colors"
            >
              Explore Products →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
