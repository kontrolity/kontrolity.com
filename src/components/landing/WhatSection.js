import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, TrendingUp, Shield, Zap } from 'lucide-react';

export default function WhatSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const problems = [
    {
      icon: Brain,
      title: 'Infrastructure Complexity Growing Exponentially',
      description: 'Modern systems generate millions of signals per second. Human teams can\'t process them fast enough.'
    },
    {
      icon: TrendingUp,
      title: 'MTTR Hasn\'t Improved Despite Better Tools',
      description: 'Existing tools require humans in the loop for every decision. That\'s the bottleneck.'
    },
    {
      icon: Shield,
      title: 'Teams Spend 60%+ Time Firefighting',
      description: 'Engineers should be building features, not debugging production at 3am.'
    },
    {
      icon: Zap,
      title: 'Tools Alert, But Don\'t Act',
      description: 'Prometheus and Datadog tell you what happened. They can\'t predict what\'s next or fix it automatically.'
    }
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What is{' '}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Autonomous Infrastructure Intelligence
            </span>
            ?
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Modern infrastructure generates millions of signals per second. Human teams can't process them fast enough. Kontrolity builds AI systems that can.
          </p>
        </motion.div>

        {/* Main Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-3xl p-8 md:p-12 border border-violet-500/20 mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            We're creating the autonomous control layer that sits above your existing infrastructure
          </h3>
          <div className="space-y-4 text-lg text-slate-300">
            <p className="leading-relaxed">
              <strong className="text-white">Learning from observability data</strong>—logs, metrics, traces, configs, and cloud APIs
            </p>
            <p className="leading-relaxed">
              <strong className="text-white">Correlating across systems</strong>—understanding relationships and dependencies
            </p>
            <p className="leading-relaxed">
              <strong className="text-white">Predicting failures</strong>—catching issues before they impact users
            </p>
            <p className="leading-relaxed">
              <strong className="text-white">Taking corrective action</strong>—fixing problems without human intervention
            </p>
          </div>
        </motion.div>

        {/* Problem Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            The Problems We Solve
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 hover:border-violet-500/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center border border-violet-500/20">
                    <problem.icon className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{problem.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Approach */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-white/10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Approach</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-400 to-purple-400 flex items-center justify-center text-slate-900 font-bold">
                  1
                </div>
                <h4 className="text-lg font-semibold text-white">AI That Understands Context</h4>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Not just metrics—understanding infrastructure relationships, deployment patterns, and team ownership
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-400 to-purple-400 flex items-center justify-center text-slate-900 font-bold">
                  2
                </div>
                <h4 className="text-lg font-semibold text-white">Autonomous Systems That Act</h4>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Not just alerts—autonomous action without human intervention
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-400 to-purple-400 flex items-center justify-center text-slate-900 font-bold">
                  3
                </div>
                <h4 className="text-lg font-semibold text-white">Platform That Unifies</h4>
              </div>
              <p className="text-slate-400 leading-relaxed">
                One control layer across fragmented tooling—observability, operations, security
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-400 to-purple-400 flex items-center justify-center text-slate-900 font-bold">
                  4
                </div>
                <h4 className="text-lg font-semibold text-white">Intelligence That Compounds</h4>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Gets smarter over time—learning from every incident, every deployment, every failure
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
