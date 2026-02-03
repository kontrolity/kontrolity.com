import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote, TrendingUp, Clock, DollarSign, Shield } from 'lucide-react';

// Live Counter that fluctuates realistically after initial animation
const LiveNumber = ({ value, suffix = '', prefix = '', delay = 0, variance = 0.5, decimals = 0, interval = 3000 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = React.useState(0);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    if (!isInView) return;

    // Initial count-up animation
    if (!hasAnimated) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          setHasAnimated(true);
          clearInterval(timer);
        } else {
          setDisplayValue(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }

    // Realistic fluctuation after initial animation
    const fluctuateTimer = setInterval(() => {
      const change = (Math.random() - 0.5) * variance;
      const newValue = value + change;
      setDisplayValue(decimals > 0 ? parseFloat(newValue.toFixed(decimals)) : Math.floor(newValue));
    }, interval);

    return () => clearInterval(fluctuateTimer);
  }, [isInView, value, variance, decimals, interval, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};

// Incrementing counter for things that always go up
const IncrementingNumber = ({ baseValue, suffix = '', incrementRate = 1, interval = 5000 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = React.useState(0);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    if (!isInView) return;

    // Initial count-up animation
    if (!hasAnimated) {
      const duration = 2000;
      const steps = 60;
      const increment = baseValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= baseValue) {
          setDisplayValue(baseValue);
          setHasAnimated(true);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }

    // Keep incrementing
    const incrementTimer = setInterval(() => {
      setDisplayValue(prev => prev + Math.floor(Math.random() * incrementRate) + 1);
    }, interval);

    return () => clearInterval(incrementTimer);
  }, [isInView, baseValue, incrementRate, interval, hasAnimated]);

  // Format large numbers
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return Math.floor(num / 1000) + 'K';
    return num;
  };

  return (
    <span ref={ref}>
      {formatNumber(displayValue)}{suffix}
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
      color: 'blue',
      variance: 2,
      decimals: 0,
      interval: 2500,
    },
    {
      value: 10,
      suffix: 'x',
      label: 'ROI in Year One',
      description: 'Average customer return',
      icon: TrendingUp,
      color: 'emerald',
      variance: 0.8,
      decimals: 1,
      interval: 3000,
    },
    {
      value: 67,
      suffix: '%',
      label: 'Cost Reduction',
      description: 'In incident management',
      icon: DollarSign,
      color: 'purple',
      variance: 3,
      decimals: 0,
      interval: 2800,
    },
    {
      value: 99.9,
      suffix: '%',
      label: 'Uptime Guarantee',
      description: 'Enterprise SLA',
      icon: Shield,
      color: 'indigo',
      variance: 0.08,
      decimals: 2,
      interval: 2000,
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
    <section ref={ref} className="relative py-24 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-200 mb-6">
            <Star className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-violet-600">Trusted by Engineering Teams</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Real Results from Real Teams
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
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
              <div className="relative p-6 rounded-2xl border border-slate-200 bg-white hover:border-violet-300 hover:shadow-lg transition-all h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-violet-100">
                  <metric.icon className="w-6 h-6 text-violet-600" />
                </div>

                <div className="text-4xl md:text-5xl font-bold text-violet-600 mb-2">
                  <LiveNumber
                    value={metric.value}
                    suffix={metric.suffix}
                    variance={metric.variance}
                    decimals={metric.decimals}
                    interval={metric.interval}
                  />
                </div>

                <div className="text-lg font-semibold text-slate-900 mb-1">
                  {metric.label}
                </div>

                <div className="text-sm text-slate-500">
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
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {companies.map((company, i) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.05, duration: 0.5 }}
                className="text-slate-400 hover:text-slate-600 transition-colors text-lg font-bold tracking-wider"
              >
                {company}
              </motion.div>
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
                <div className="relative h-full p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:border-violet-300 hover:shadow-lg transition-all">
                  <Quote className="w-10 h-10 text-violet-200 mb-4" />

                  <p className="text-slate-600 leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.author}</div>
                      <div className="text-sm text-slate-500">{testimonial.role}</div>
                      <div className="text-sm text-violet-600">{testimonial.company}</div>
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
          className="mt-16 p-6 rounded-2xl border border-violet-200 bg-gradient-to-r from-violet-50 via-white to-purple-50"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
            <div>
              <div className="text-2xl font-bold text-violet-600">
                <LiveNumber value={50} suffix="+" variance={2} interval={8000} />
              </div>
              <div className="text-sm text-slate-500">Enterprise Customers</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-slate-200" />
            <div>
              <div className="text-2xl font-bold text-violet-600">
                <IncrementingNumber baseValue={1000000} suffix="+" incrementRate={100} interval={3000} />
              </div>
              <div className="text-sm text-slate-500">Incidents Analyzed</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-slate-200" />
            <div>
              <div className="text-2xl font-bold text-violet-600">
                <LiveNumber value={99.99} suffix="%" variance={0.005} decimals={2} interval={2000} />
              </div>
              <div className="text-sm text-slate-500">Platform Uptime</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-slate-200" />
            <div>
              <div className="text-2xl font-bold text-violet-600">SOC 2</div>
              <div className="text-sm text-slate-500">Type II Certified</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
