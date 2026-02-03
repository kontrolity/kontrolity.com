import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  AlertTriangle,
  Clock,
  Users,
  TrendingDown,
  ArrowRight,
  CheckCircle2,
  Zap,
  Brain,
  Shield,
  Sparkles
} from 'lucide-react';

export default function ProblemSolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const problems = [
    {
      icon: AlertTriangle,
      title: 'Alert Fatigue',
      stat: '70%',
      description: 'of alerts are noise, leading to missed critical issues',
      color: 'red',
    },
    {
      icon: Clock,
      title: 'Slow Resolution',
      stat: '4+ hrs',
      description: 'average MTTR for complex infrastructure incidents',
      color: 'orange',
    },
    {
      icon: Users,
      title: 'Team Burnout',
      stat: '65%',
      description: 'of SREs report burnout from on-call responsibilities',
      color: 'yellow',
    },
    {
      icon: TrendingDown,
      title: 'Revenue Impact',
      stat: '$300K+',
      description: 'average cost per hour of infrastructure downtime',
      color: 'red',
    },
  ];

  const solutions = [
    {
      icon: Brain,
      title: 'Autonomous Analysis',
      description: 'AI that understands context, not just metrics. Root cause in seconds, not hours.',
      color: 'cyan',
    },
    {
      icon: Zap,
      title: 'Self-Healing Actions',
      description: 'Automated remediation that fixes issues before they impact users.',
      color: 'emerald',
    },
    {
      icon: Shield,
      title: 'Predictive Prevention',
      description: 'Identify and prevent failures before they happen with ML-powered forecasting.',
      color: 'purple',
    },
    {
      icon: Sparkles,
      title: 'Intelligent Prioritization',
      description: 'Surface only the alerts that matter. Eliminate noise, focus on impact.',
      color: 'teal',
    },
  ];

  return (
    <section ref={ref} className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-red-500/5 via-transparent to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Infrastructure Complexity is{' '}
            <span className="text-red-400">Breaking</span> Teams
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Modern infrastructure has outpaced human ability to manage it.
            Your team is fighting fires instead of building the future.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${
                problem.color === 'red' ? 'from-red-500/20' :
                problem.color === 'orange' ? 'from-orange-500/20' :
                problem.color === 'yellow' ? 'from-yellow-500/20' : 'from-red-500/20'
              } to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div className="relative h-full p-6 rounded-2xl border border-red-500/20 bg-slate-900/50 backdrop-blur-xl group-hover:border-red-500/40 transition-all">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  problem.color === 'red' ? 'bg-red-500/20' :
                  problem.color === 'orange' ? 'bg-orange-500/20' :
                  problem.color === 'yellow' ? 'bg-yellow-500/20' : 'bg-red-500/20'
                }`}>
                  <problem.icon className={`w-6 h-6 ${
                    problem.color === 'red' ? 'text-red-400' :
                    problem.color === 'orange' ? 'text-orange-400' :
                    problem.color === 'yellow' ? 'text-yellow-400' : 'text-red-400'
                  }`} />
                </div>

                <div className={`text-3xl font-bold mb-2 ${
                  problem.color === 'red' ? 'text-red-400' :
                  problem.color === 'orange' ? 'text-orange-400' :
                  problem.color === 'yellow' ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {problem.stat}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {problem.title}
                </h3>

                <p className="text-sm text-slate-400">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Transition Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex justify-center mb-24"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-cyan-500 rounded-full blur-xl opacity-30" />
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-cyan-400 animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Solution Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">The Kontrolity Way</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            From Chaos to{' '}
            <span className="gradient-text">Autonomy</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Let AI handle the complexity. Your team focuses on innovation while
            Kontrolity keeps everything running perfectly.
          </p>
        </motion.div>

        {/* Solution Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${
                solution.color === 'cyan' ? 'from-cyan-500/20' :
                solution.color === 'emerald' ? 'from-emerald-500/20' :
                solution.color === 'purple' ? 'from-purple-500/20' : 'from-teal-500/20'
              } to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div className={`relative h-full p-8 rounded-2xl border ${
                solution.color === 'cyan' ? 'border-cyan-500/20 hover:border-cyan-500/40' :
                solution.color === 'emerald' ? 'border-emerald-500/20 hover:border-emerald-500/40' :
                solution.color === 'purple' ? 'border-purple-500/20 hover:border-purple-500/40' :
                'border-teal-500/20 hover:border-teal-500/40'
              } bg-slate-900/50 backdrop-blur-xl transition-all`}>
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${
                    solution.color === 'cyan' ? 'bg-gradient-to-br from-cyan-500 to-teal-500' :
                    solution.color === 'emerald' ? 'bg-gradient-to-br from-emerald-500 to-green-500' :
                    solution.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
                    'bg-gradient-to-br from-teal-500 to-cyan-500'
                  }`}>
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>

                {/* Animated corner accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 opacity-20 ${
                  solution.color === 'cyan' ? 'bg-cyan-500' :
                  solution.color === 'emerald' ? 'bg-emerald-500' :
                  solution.color === 'purple' ? 'bg-purple-500' : 'bg-teal-500'
                } blur-3xl rounded-full -translate-y-1/2 translate-x-1/2`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6">
            Ready to transform your infrastructure operations?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-900 font-semibold hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/25"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
