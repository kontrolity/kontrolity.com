import React from 'react';
import Navbar from '../src/components/landing/Navbar';
import Footer from '../src/components/landing/Footer';
import SectionDivider from '../src/components/landing/SectionDivider';
import { motion } from 'framer-motion';
import { Brain, Target, Users, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of AI and automation to solve complex infrastructure challenges.'
    },
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'Empowering teams to focus on what matters by eliminating infrastructure chaos.'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Built with real DevOps teams in mind, solving real-world problems.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering world-class autonomous infrastructure intelligence.'
    }
  ];

  const milestones = [
    { year: '2024', title: 'Foundation', description: 'Kontrolity founded with vision of autonomous infrastructure' },
    { year: '2025', title: 'AI Launch', description: 'Released first autonomous AI control layer for Kubernetes' },
    { year: '2026', title: 'Scale', description: 'Expanding to multi-cloud and enterprise solutions' }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero Section - Dark */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden bg-[#0a0a1a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-[#0a0a1a] to-[#0a0a1a]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-violet-500 bg-clip-text text-transparent">
                Kontrolity
              </span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
              We're building the future of autonomous infrastructure intelligence, where AI takes control so you don't have to.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider: Dark to White */}
      <SectionDivider fillColor="#FFFFFF" invert={true} height={100} />

      {/* Mission Section - White */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-violet-50 rounded-3xl p-12 border border-violet-200"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Kontrolity transforms chaos into control with autonomous AI that observes, understands, and stabilizes your systems in real-time. We believe infrastructure management should be intelligent, proactive, and autonomous.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              By combining advanced AI with deep infrastructure expertise, we're creating a world where systems heal themselves, incidents are prevented before they occur, and engineering teams can focus on building instead of firefighting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section - White */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-violet-300 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider: White to Dark */}
      <SectionDivider fillColor="#08080f" invert={true} height={100} />

      {/* Timeline Section - Dark */}
      <section className="py-20 px-6 lg:px-8 bg-[#08080f]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-slate-400">Building the future of autonomous infrastructure</p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-violet-900/30 border border-violet-500/30 flex items-center justify-center">
                    <span className="text-2xl font-bold text-violet-400">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-1 bg-slate-800/50 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-slate-400">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section - Dark */}
      <section className="py-20 px-6 lg:px-8 bg-[#08080f]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-violet-900/20 rounded-3xl p-12 border border-violet-500/20 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-10 h-10 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <h3 className="text-3xl font-bold text-white">Based in Scotland</h3>
            </div>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Headquartered in Scotland, United Kingdom, we're building world-class AI infrastructure technology from one of Europe's fastest-growing tech hubs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider: Dark to White */}
      <SectionDivider fillColor="#FFFFFF" invert={true} height={100} />

      {/* Join Us Section - White */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Join Us</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              We're always looking for talented individuals who are passionate about AI, infrastructure, and building the future of autonomous systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@kontrolity.com"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 rounded-xl transition-all shadow-lg shadow-violet-500/25"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
              <a
                href="mailto:founders@kontrolity.com"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all border border-slate-200"
              >
                Reach Founders
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider: White to Dark (for footer) */}
      <SectionDivider fillColor="#060609" invert={true} height={100} />

      <Footer />
    </div>
  );
}
