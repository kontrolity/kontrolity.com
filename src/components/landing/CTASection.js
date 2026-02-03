import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Sparkles,
  ArrowRight,
  Mail,
  Calendar,
  CheckCircle2,
  Rocket,
  MessageSquare,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
  };

  const benefits = [
    { icon: Zap, text: '30-day free trial' },
    { icon: Shield, text: 'No credit card required' },
    { icon: Globe, text: 'Full platform access' },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32 bg-[#08080f] overflow-hidden">

      {/* Subtle accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-30"
        style={{ background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.1) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-purple-500/20 rounded-[3rem] blur-3xl" />

          <div className="relative p-8 md:p-12 lg:p-16 rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
                >
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <span className="text-sm font-medium text-violet-400">Start Your Journey</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                >
                  Ready to{' '}
                  <span className="gradient-text">Transform</span>
                  <br />
                  Your Ops?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-slate-300 mb-8"
                >
                  Join hundreds of engineering teams who have eliminated alert fatigue and reduced MTTR by 94% with autonomous AI.
                </motion.p>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-4 mb-8"
                >
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-300">
                      <benefit.icon className="w-5 h-5 text-violet-400" />
                      <span>{benefit.text}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-6 text-sm text-slate-500"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    SOC 2 Type II
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    GDPR Compliant
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    99.99% SLA
                  </div>
                </motion.div>
              </div>

              {/* Right Content - Form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-6"
              >
                {!submitted ? (
                  <>
                    {/* Email Signup */}
                    <div className="p-6 rounded-2xl border border-white/10 bg-slate-800/50 backdrop-blur-xl">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Rocket className="w-5 h-5 text-violet-400" />
                        Start Free Trial
                      </h3>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your work email"
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 transition-colors"
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 text-slate-900 font-semibold hover:from-violet-400 hover:to-purple-400 transition-all shadow-lg shadow-violet-500/25"
                        >
                          Get Started Free
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </form>
                    </div>

                    {/* Alternative - Book Demo */}
                    <div className="p-6 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl">
                      <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-purple-400" />
                        Prefer a Demo?
                      </h3>
                      <p className="text-sm text-slate-400 mb-4">
                        Schedule a personalized walkthrough with our team.
                      </p>
                      <a
                        href="#"
                        className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl border border-purple-500/30 text-purple-400 font-medium hover:bg-purple-500/10 transition-all"
                      >
                        Book a Demo
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Contact Sales */}
                    <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
                      <span>Enterprise needs?</span>
                      <a
                        href="mailto:sales@kontrolity.com"
                        className="flex items-center gap-1 text-violet-400 hover:text-violet-300 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Contact Sales
                      </a>
                    </div>
                  </>
                ) : (
                  /* Success State */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>
                    <p className="text-slate-400 mb-4">
                      Check your email for next steps to get started with Kontrolity.
                    </p>
                    <p className="text-sm text-slate-500">
                      In the meantime, explore <a href="https://kubegraf.io" className="text-violet-400 hover:text-violet-300">KubeGraf</a>
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 mb-4">
            Have questions? We're here to help.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <a href="mailto:contact@kontrolity.com" className="text-slate-400 hover:text-white transition-colors">
              contact@kontrolity.com
            </a>
            <span className="text-slate-700">|</span>
            <a href="/documentation" className="text-slate-400 hover:text-white transition-colors">
              Documentation
            </a>
            <span className="text-slate-700">|</span>
            <a href="/support" className="text-slate-400 hover:text-white transition-colors">
              Support
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
