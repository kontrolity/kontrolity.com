import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote, TrendingUp, Clock, DollarSign, Shield } from 'lucide-react';

// Animated Number Counter
const AnimatedNumber = ({ value, suffix = '', prefix = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{isInView ? count : 0}{suffix}
    </span>
  );
};

// Company Logo Placeholder Component
const CompanyLogo = ({ name, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="flex items-center justify-center px-8 py-4"
  >
    <div className="text-slate-500 hover:text-slate-300 transition-colors text-lg font-bold tracking-wider">
      {name}
    </div>
  </motion.div>
);

export default function SocialProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const metrics = [
    {
      value: 94,
      suffix: '%',
      label: 'Reduction in MTTR',
      description: 'From hours to minutes',
      icon: Clock,
      color: 'cyan',
    },
    {
      value: 10,
      suffix: 'x',
      label: 'ROI in Year One',
      description: 'Average customer return',
      icon: TrendingUp,
      color: 'emerald',
    },
    {
      value: 67,
      suffix: '%',
      label: 'Cost Reduction',
      description: 'In incident management',
      icon: DollarSign,
      color: 'purple',
    },
    {
      value: 99.9,
      suffix: '%',
      label: 'Uptime Guarantee',
      description: 'Enterprise SLA',
      icon: Shield,
      color: 'teal',
    },
  ];

  const testimonials = [
    {
      quote: "Kontrolity's AI caught a cascading failure before our monitoring even alerted. It saved us from a major outage during peak traffic.",
      author: "Sarah Chen",
      role: "VP of Engineering",
      company: "TechScale Inc.",
      avatar: "SC",
    },
    {
      quote: "We reduced our on-call burden by 70%. The AI handles most incidents autonomously now, and our team can focus on building features.",
      author: "Marcus Rodriguez",
      role: "SRE Lead",
      company: "DataFlow Systems",
      avatar: "MR",
    },
    {
      quote: "The ROI was immediate. Within the first month, Kontrolity prevented three incidents that would have cost us hundreds of thousands.",
      author: "Emily Watson",
      role: "CTO",
      company: "CloudFirst",
      avatar: "EW",
    },
  ];

  const companies = [
    'TECHSCALE',
    'DATAFLOW',
    'CLOUDNINE',
    'INFINITYAI',
    'NEXUSOPS',
    'QUANTUMLAB',
  ];

  return (
    <section ref={ref} className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <Star className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">Trusted by Engineering Teams</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Results from Real Teams
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Join the teams that have transformed their infrastructure operations with autonomous AI.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className={`relative group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${
                metric.color === 'cyan' ? 'from-cyan-500/20 to-transparent' :
                metric.color === 'emerald' ? 'from-emerald-500/20 to-transparent' :
                metric.color === 'purple' ? 'from-purple-500/20 to-transparent' :
                'from-teal-500/20 to-transparent'
              } rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div className="relative p-6 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl hover:border-white/20 transition-all h-full">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  metric.color === 'cyan' ? 'bg-cyan-500/20' :
                  metric.color === 'emerald' ? 'bg-emerald-500/20' :
                  metric.color === 'purple' ? 'bg-purple-500/20' :
                  'bg-teal-500/20'
                }`}>
                  <metric.icon className={`w-6 h-6 ${
                    metric.color === 'cyan' ? 'text-cyan-400' :
                    metric.color === 'emerald' ? 'text-emerald-400' :
                    metric.color === 'purple' ? 'text-purple-400' :
                    'text-teal-400'
                  }`} />
                </div>

                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedNumber value={metric.value} suffix={metric.suffix} delay={i * 0.1} />
                </div>

                <div className="text-lg font-semibold text-white mb-1">
                  {metric.label}
                </div>

                <div className="text-sm text-slate-400">
                  {metric.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <p className="text-center text-sm text-slate-500 uppercase tracking-wider mb-8">
            Trusted by innovative engineering teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-60 hover:opacity-80 transition-opacity">
            {companies.map((company, i) => (
              <CompanyLogo key={company} name={company} delay={0.6 + i * 0.05} />
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative h-full p-6 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl hover:border-cyan-500/30 transition-all">
                  <Quote className="w-10 h-10 text-cyan-500/20 mb-4" />

                  <p className="text-slate-300 leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-slate-900 font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-sm text-slate-400">{testimonial.role}</div>
                      <div className="text-sm text-cyan-400">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-16 p-6 rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/5 via-slate-900/50 to-purple-500/5 backdrop-blur-xl"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
            <div>
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-slate-400">Enterprise Customers</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white">1M+</div>
              <div className="text-sm text-slate-400">Incidents Analyzed</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white">99.99%</div>
              <div className="text-sm text-slate-400">Platform Uptime</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white">SOC 2</div>
              <div className="text-sm text-slate-400">Type II Certified</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
