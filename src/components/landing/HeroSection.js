import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Zap, Shield, Brain, Sparkles } from 'lucide-react';

// Rotating Word Component
const RotatingWord = ({ words, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className="relative inline-flex justify-center min-w-[280px] sm:min-w-[320px] md:min-w-[420px] lg:min-w-[520px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="gradient-text absolute"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible placeholder for spacing */}
      <span className="gradient-text invisible">Intelligence</span>
    </span>
  );
};

// Animated 3D-like Orbital Ring Component
const OrbitalRing = ({ delay = 0, size = 400, duration = 20, reverse = false }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 1 }}
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    style={{ width: size, height: size }}
  >
    <div
      className={`absolute inset-0 rounded-full border border-violet-500/20`}
      style={{
        animation: `rotate-slow ${duration}s linear infinite ${reverse ? 'reverse' : ''}`,
        transformStyle: 'preserve-3d',
        transform: 'rotateX(70deg)',
      }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50" />
    </div>
  </motion.div>
);

// Floating Particle Component
const Particle = ({ delay }) => {
  const randomX = Math.random() * 100;
  const randomSize = 2 + Math.random() * 4;
  const randomDuration = 15 + Math.random() * 10;

  return (
    <motion.div
      className="absolute rounded-full bg-violet-400/60"
      style={{
        left: `${randomX}%`,
        bottom: '-10px',
        width: randomSize,
        height: randomSize,
      }}
      animate={{
        y: [0, -800],
        x: [0, (Math.random() - 0.5) * 100],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: randomDuration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};

// Live Counter that fluctuates realistically
const LiveCounter = ({ baseValue, suffix = '', prefix = '', variance = 0.5, interval = 3000, decimals = 0 }) => {
  const [displayValue, setDisplayValue] = useState(baseValue);
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    // Initial count-up animation
    if (isInitial) {
      const duration = 2000;
      const steps = 60;
      const increment = baseValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= baseValue) {
          setDisplayValue(baseValue);
          setIsInitial(false);
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
      const newValue = baseValue + change;
      setDisplayValue(decimals > 0 ? parseFloat(newValue.toFixed(decimals)) : Math.floor(newValue));
    }, interval);

    return () => clearInterval(fluctuateTimer);
  }, [baseValue, variance, interval, decimals, isInitial]);

  return <span>{prefix}{displayValue}{suffix}</span>;
};

// Incrementing Counter (always goes up)
const IncrementingCounter = ({ baseValue, suffix = '', incrementRate = 1, interval = 5000 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
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
  }, [baseValue, incrementRate, interval, hasAnimated]);

  return <span>{displayValue}{suffix}</span>;
};

// Live Activity Graph with dynamic bars
const LiveActivityGraph = () => {
  const [bars, setBars] = useState([45, 62, 58, 78, 72, 85, 80, 92, 88, 95, 91, 98, 94, 99, 96]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBars(prev => {
        const newBars = [...prev.slice(1)];
        // Add a new bar that's realistically close to the previous ones
        const lastBar = prev[prev.length - 1];
        const newBar = Math.max(40, Math.min(100, lastBar + (Math.random() - 0.4) * 15));
        newBars.push(Math.floor(newBar));
        return newBars;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-24 flex items-end gap-1">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 bg-gradient-to-t from-violet-500 to-purple-400 rounded-t"
          initial={{ height: `${h}%` }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </div>
  );
};

// Rotating AI Actions
const RotatingAIActions = () => {
  const allActions = [
    { action: 'Auto-scaled payment-api to 5 replicas', time: '2m ago', type: 'scale' },
    { action: 'Prevented CrashLoopBackOff in auth-service', time: '5m ago', type: 'prevent' },
    { action: 'Optimized memory allocation for cache-layer', time: '12m ago', type: 'optimize' },
    { action: 'Restarted unhealthy pod in user-service', time: '15m ago', type: 'restart' },
    { action: 'Applied rate limiting to api-gateway', time: '18m ago', type: 'protect' },
    { action: 'Cleared stale connections in db-pool', time: '23m ago', type: 'cleanup' },
    { action: 'Migrated traffic from us-east to us-west', time: '28m ago', type: 'migrate' },
    { action: 'Scaled down staging environment', time: '32m ago', type: 'scale' },
    { action: 'Rotated expired SSL certificates', time: '45m ago', type: 'security' },
    { action: 'Prewarmed cache for peak traffic', time: '1h ago', type: 'optimize' },
  ];

  const [visibleActions, setVisibleActions] = useState(allActions.slice(0, 3));
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prev => {
        const newIndex = (prev + 1) % (allActions.length - 2);
        setVisibleActions(allActions.slice(newIndex, newIndex + 3));
        return newIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-2">
      {visibleActions.map((item, i) => (
        <motion.div
          key={`${startIndex}-${i}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          className="flex items-center gap-2 text-xs"
        >
          <div className={`w-1.5 h-1.5 rounded-full ${
            item.type === 'scale' ? 'bg-violet-400' :
            item.type === 'prevent' ? 'bg-emerald-400' :
            item.type === 'optimize' ? 'bg-purple-400' :
            item.type === 'restart' ? 'bg-yellow-400' :
            item.type === 'protect' ? 'bg-red-400' :
            item.type === 'cleanup' ? 'bg-violet-400' :
            item.type === 'migrate' ? 'bg-orange-400' :
            item.type === 'security' ? 'bg-pink-400' : 'bg-purple-400'
          }`} />
          <span className="text-slate-300 flex-1">{item.action}</span>
          <span className="text-slate-500">{item.time}</span>
        </motion.div>
      ))}
    </div>
  );
};

// Dynamic Predictive Insights
const DynamicInsights = () => {
  const allInsights = [
    { text: 'Database connection pool at 78% — scaling recommended in ~2 hours', type: 'warning' },
    { text: 'API latency trending down after optimization', type: 'success' },
    { text: 'Memory usage spike predicted for payment-service at 3 PM', type: 'warning' },
    { text: 'CPU utilization optimal across all nodes', type: 'success' },
    { text: 'Disk I/O bottleneck likely in logging-service within 4 hours', type: 'warning' },
    { text: 'Network throughput improved by 23% after load balancing', type: 'success' },
    { text: 'Cache hit rate below threshold — consider increasing capacity', type: 'warning' },
    { text: 'All health checks passing for 24+ hours', type: 'success' },
  ];

  const [visibleInsights, setVisibleInsights] = useState(allInsights.slice(0, 2));
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prev => {
        const newIndex = (prev + 1) % (allInsights.length - 1);
        setVisibleInsights(allInsights.slice(newIndex, newIndex + 2));
        return newIndex;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-2">
      {visibleInsights.map((insight, i) => (
        <motion.div
          key={`${startIndex}-${i}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          className="flex items-start gap-2 text-xs"
        >
          <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${
            insight.type === 'warning' ? 'bg-yellow-400' : 'bg-emerald-400'
          }`} />
          <div>
            <span className="text-slate-300">{insight.text}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Floating Issue Card with rotating issues
const FloatingIssueCard = () => {
  const issues = [
    { service: 'auth-service', issue: 'Memory leak detected and fixed automatically' },
    { service: 'payment-api', issue: 'High latency spike prevented via auto-scaling' },
    { service: 'user-service', issue: 'Connection timeout avoided with preemptive restart' },
    { service: 'cache-layer', issue: 'OOM kill prevented via memory optimization' },
    { service: 'api-gateway', issue: 'DDoS attempt blocked automatically' },
  ];

  const [currentIssue, setCurrentIssue] = useState(issues[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => {
        const newIndex = (prev + 1) % issues.length;
        setCurrentIssue(issues[newIndex]);
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="hidden lg:block absolute -left-16 top-1/3 w-56"
    >
      <div className="glass rounded-xl p-4 shadow-xl">
        <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Issue Prevented
        </div>
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-slate-400"
        >
          {currentIssue.issue} in <span className="text-white">{currentIssue.service}</span>
        </motion.p>
      </div>
    </motion.div>
  );
};

// Floating Insight Card with rotating insights
const FloatingInsightCard = () => {
  const insights = [
    { action: 'Enable auto-scaling', target: 'payment-api', context: 'during peak hours' },
    { action: 'Increase replica count', target: 'auth-service', context: 'before Monday traffic spike' },
    { action: 'Optimize queries', target: 'reporting-db', context: 'to reduce load by 40%' },
    { action: 'Update resource limits', target: 'worker-nodes', context: 'based on usage patterns' },
    { action: 'Enable caching', target: 'product-api', context: 'to improve response times' },
  ];

  const [currentInsight, setCurrentInsight] = useState(insights[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => {
        const newIndex = (prev + 1) % insights.length;
        setCurrentInsight(insights[newIndex]);
        return newIndex;
      });
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className="hidden lg:block absolute -right-16 top-1/2 w-56"
    >
      <div className="glass rounded-xl p-4 shadow-xl border-violet-500/20">
        <div className="flex items-center gap-2 text-violet-400 text-sm font-semibold mb-2">
          <Sparkles className="w-4 h-4" />
          AI Insight
        </div>
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-slate-400"
        >
          Recommended: <span className="text-white">{currentInsight.action}</span> for {currentInsight.target} {currentInsight.context}
        </motion.p>
      </div>
    </motion.div>
  );
};

// Neural Network Node
const NeuralNode = ({ x, y, delay, size = 8 }) => (
  <motion.div
    className="absolute"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay, duration: 0.5 }}
  >
    <div
      className="rounded-full bg-gradient-to-br from-violet-400 to-purple-400"
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 rounded-full bg-violet-400 animate-ping opacity-20" />
    </div>
  </motion.div>
);

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { value: 94, suffix: '%', label: 'Faster MTTR', variance: 2, decimals: 0 },
    { value: 10, suffix: 'x', label: 'ROI in Year 1', variance: 0.8, decimals: 1 },
    { value: 99.9, suffix: '%', label: 'Uptime SLA', variance: 0.09, decimals: 2 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a1a]">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0f0f24] to-[#0a0a1a]" />

      {/* Very subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Single subtle accent glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
        <div className="text-center">
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-50 transition" />
              <div className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/90 border border-violet-500/30 backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
                </span>
                <span className="text-sm font-medium text-slate-300">
                  Now Live: <span className="text-violet-400 font-semibold">KubeGraf</span> — Kubernetes Incident Intelligence
                </span>
                <ArrowRight className="w-4 h-4 text-violet-400" />
              </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="text-white">Infrastructure</span>
              <br />
              <RotatingWord
                words={['Autonomy', 'Intelligence', 'Resilience', 'Excellence']}
                interval={3000}
              />
              <span className="text-white"> Starts Here</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 mb-6 max-w-4xl mx-auto leading-relaxed"
          >
            The AI control layer that observes, understands, and stabilizes your systems in real-time.
            <span className="text-white font-medium"> No more alert fatigue. No more manual firefighting.</span>
          </motion.p>

          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-slate-400"
          >
            {[
              { icon: Brain, text: 'Autonomous Root Cause Analysis' },
              { icon: Zap, text: 'Self-Healing Infrastructure' },
              { icon: Shield, text: 'Predictive Failure Detection' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-violet-400" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="https://kubegraf.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl text-slate-900 font-semibold text-lg shadow-2xl">
                <Sparkles className="w-5 h-5" />
                Try KubeGraf Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            <a
              href="#demo"
              className="group flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-lg backdrop-blur-xl transition-all"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-20"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <LiveCounter
                    baseValue={stat.value}
                    suffix={stat.suffix}
                    variance={stat.variance}
                    decimals={stat.decimals}
                    interval={2000 + i * 500}
                  />
                </div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Dashboard Preview with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, y: 80, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative max-w-5xl mx-auto"
            style={{ perspective: '1000px' }}
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-purple-500/20 rounded-[2rem] blur-2xl" />

            {/* Main Dashboard Container */}
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-slate-950/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-slate-800/50 text-xs text-slate-400">
                    <div className="w-4 h-4 rounded bg-gradient-to-br from-violet-400 to-purple-400" />
                    <span>kontrolity.ai/dashboard</span>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-12 gap-4">
                  {/* AI Status Panel */}
                  <div className="col-span-12 md:col-span-8 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-2xl p-6 border border-violet-500/20">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Brain className="w-5 h-5 text-violet-400" />
                          <span className="font-semibold text-white">AI Control Layer</span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">Active</span>
                        </div>
                        <p className="text-sm text-slate-400">
                          Autonomous monitoring across <LiveCounter baseValue={47} variance={3} interval={8000} /> services
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">
                          <LiveCounter baseValue={99.97} suffix="%" variance={0.02} decimals={2} interval={1500} />
                        </div>
                        <div className="text-xs text-slate-400">System Health</div>
                      </div>
                    </div>

                    {/* Live Activity Graph */}
                    <LiveActivityGraph />
                  </div>

                  {/* Quick Stats */}
                  <div className="col-span-6 md:col-span-2 bg-slate-800/50 rounded-2xl p-4 border border-white/5">
                    <div className="text-xs text-slate-500 mb-1">Incidents Resolved</div>
                    <div className="text-2xl font-bold text-white">
                      <IncrementingCounter baseValue={847} incrementRate={3} interval={4000} />
                    </div>
                    <div className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
                      <span>↑ <LiveCounter baseValue={24} suffix="%" variance={2} interval={5000} /></span>
                    </div>
                  </div>

                  <div className="col-span-6 md:col-span-2 bg-slate-800/50 rounded-2xl p-4 border border-white/5">
                    <div className="text-xs text-slate-500 mb-1">Avg Resolution</div>
                    <div className="text-2xl font-bold text-white">
                      <LiveCounter baseValue={4.2} suffix="m" variance={0.5} decimals={1} interval={3000} />
                    </div>
                    <div className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
                      <span>↓ <LiveCounter baseValue={89} suffix="%" variance={3} interval={4500} /></span>
                    </div>
                  </div>

                  {/* Recent AI Actions */}
                  <div className="col-span-12 md:col-span-6 bg-slate-800/30 rounded-2xl p-4 border border-white/5">
                    <div className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-violet-400" />
                      Recent AI Actions
                    </div>
                    <RotatingAIActions />
                  </div>

                  {/* AI Prediction */}
                  <div className="col-span-12 md:col-span-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-4 border border-purple-500/20">
                    <div className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-purple-400" />
                      Predictive Insights
                    </div>
                    <DynamicInsights />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <FloatingIssueCard />
            <FloatingInsightCard />
          </motion.div>
        </div>
      </div>

    </section>
  );
}
