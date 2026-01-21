import React from 'react';
import Navbar from '../src/components/landing/Navbar';
import Footer from '../src/components/landing/Footer';
import { motion } from 'framer-motion';
import { Quote, TrendingUp, Users, Building, CheckCircle, ArrowRight, Star } from 'lucide-react';

export default function Customers() {
  const testimonials = [
    {
      quote: "Kontrolity transformed how we manage our Kubernetes infrastructure. We've reduced incident response time by 75% and our team can now focus on innovation instead of firefighting.",
      author: "Sarah Chen",
      role: "VP of Engineering",
      company: "TechScale Inc.",
      industry: "SaaS"
    },
    {
      quote: "The autonomous intelligence is remarkable. It catches issues before they become incidents and provides actionable insights that have saved us millions in infrastructure costs.",
      author: "Michael Rodriguez",
      role: "DevOps Director",
      company: "CloudFirst Systems",
      industry: "Cloud Services"
    },
    {
      quote: "Finally, a solution that understands the complexity of enterprise infrastructure. The ROI was evident within the first quarter.",
      author: "Jennifer Williams",
      role: "CTO",
      company: "Enterprise Solutions Ltd.",
      industry: "Financial Services"
    }
  ];

  const caseStudies = [
    {
      company: "Global FinTech Leader",
      industry: "Financial Services",
      challenge: "Managing 500+ microservices across multiple Kubernetes clusters with strict compliance requirements",
      solution: "Deployed Kontrolity Intelligence with automated compliance monitoring and multi-cluster management",
      results: [
        "80% reduction in mean time to resolution",
        "99.99% uptime achieved",
        "$2M annual cost savings",
        "Full SOC 2 compliance automation"
      ]
    },
    {
      company: "Healthcare Platform",
      industry: "Healthcare",
      challenge: "Ensuring HIPAA compliance while scaling rapidly with zero tolerance for downtime",
      solution: "Implemented Kontrolity Security with autonomous monitoring and predictive alerting",
      results: [
        "100% HIPAA compliance maintained",
        "90% reduction in security incidents",
        "3x faster deployment cycles",
        "Zero unplanned downtime"
      ]
    },
    {
      company: "E-Commerce Giant",
      industry: "Retail",
      challenge: "Handling massive traffic spikes during peak seasons with complex multi-cloud architecture",
      solution: "Adopted full Kontrolity Platform with intelligent auto-scaling and resource optimization",
      results: [
        "Handled 10x traffic increase seamlessly",
        "45% reduction in cloud costs",
        "5x improvement in deployment speed",
        "Eliminated performance bottlenecks"
      ]
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Enterprise Customers" },
    { icon: Building, value: "50+", label: "Fortune 500 Companies" },
    { icon: TrendingUp, value: "99.9%", label: "Customer Satisfaction" },
    { icon: Star, value: "4.9/5", label: "Average Rating" }
  ];

  const industries = [
    "Financial Services",
    "Healthcare",
    "E-Commerce",
    "SaaS",
    "Technology",
    "Manufacturing",
    "Telecommunications",
    "Media & Entertainment"
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
              Trusted by{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
              See how organizations worldwide are transforming their infrastructure with Kontrolity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 mb-4 mx-auto">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Real feedback from teams using Kontrolity every day
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all"
              >
                <Quote className="w-10 h-10 text-cyan-400 mb-6" />
                <p className="text-slate-300 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-white/10 pt-6">
                  <div className="font-bold text-white">{testimonial.author}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                  <div className="text-sm text-cyan-400 mt-1">{testimonial.company}</div>
                  <div className="text-xs text-slate-500 mt-1">{testimonial.industry}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Deep dive into how our customers achieved remarkable results
            </p>
          </motion.div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 md:p-12 border border-white/10"
              >
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left Column */}
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
                      {study.industry}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">{study.company}</h3>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-white mb-3">Challenge</h4>
                      <p className="text-slate-400 leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Solution</h4>
                      <p className="text-slate-400 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Right Column - Results */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-6">Results</h4>
                    <ul className="space-y-4">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-lg text-slate-300">{result}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-xl transition-all shadow-lg shadow-cyan-500/25 mt-8"
                    >
                      Get Similar Results
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Trusted across diverse sectors and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all text-center"
              >
                <span className="text-slate-300 font-medium">{industry}</span>
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
              Join Our Growing Community
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              See why leading organizations choose Kontrolity for their infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-xl transition-all shadow-lg shadow-cyan-500/25"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/roi"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-white/10"
              >
                Calculate Your ROI
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
