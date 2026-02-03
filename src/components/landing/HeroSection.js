import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap, Shield, Brain, Sparkles } from 'lucide-react';

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
      className={`absolute inset-0 rounded-full border border-cyan-500/20`}
      style={{
        animation: `rotate-slow ${duration}s linear infinite ${reverse ? 'reverse' : ''}`,
        transformStyle: 'preserve-3d',
        transform: 'rotateX(70deg)',
      }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-teal-400 shadow-lg shadow-teal-400/50" />
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
      className="absolute rounded-full bg-cyan-400/60"
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

// Animated Stats Counter
const AnimatedCounter = ({ value, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [value]);

  return <span>{prefix}{count}{suffix}</span>;
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
      className="rounded-full bg-gradient-to-br from-cyan-400 to-teal-400"
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-20" />
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
    { value: 94, suffix: '%', label: 'Faster MTTR' },
    { value: 10, suffix: 'x', label: 'ROI in Year 1' },
    { value: 99.9, suffix: '%', label: 'Uptime SLA' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0f172a_70%)]" />

      {/* Animated Gradient Blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent blur-[120px] animate-morph"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-500/15 to-transparent blur-[100px] animate-morph"
        style={{
          animationDelay: '2s',
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-teal-500/10 to-transparent blur-[150px]"
      />

      {/* Orbital Rings */}
      <div className="absolute inset-0 pointer-events-none">
        <OrbitalRing delay={0.2} size={500} duration={25} />
        <OrbitalRing delay={0.4} size={700} duration={35} reverse />
        <OrbitalRing delay={0.6} size={900} duration={45} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Particle key={i} delay={i * 0.5} />
        ))}
      </div>

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
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full blur opacity-30 group-hover:opacity-50 transition" />
              <div className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                </span>
                <span className="text-sm font-medium text-slate-300">
                  Now Live: <span className="text-cyan-400 font-semibold">KubeGraf</span> — Kubernetes Incident Intelligence
                </span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
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
              <span className="relative">
                <span className="gradient-text">Autonomy</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>
              <span className="text-white"> Starts Here</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 mb-6 max-w-4xl mx-auto leading-relaxed"
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
                <item.icon className="w-4 h-4 text-cyan-400" />
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
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl text-slate-900 font-semibold text-lg shadow-2xl">
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
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
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
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-purple-500/20 rounded-[2rem] blur-2xl" />

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
                    <div className="w-4 h-4 rounded bg-gradient-to-br from-cyan-400 to-teal-400" />
                    <span>kontrolity.ai/dashboard</span>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-12 gap-4">
                  {/* AI Status Panel */}
                  <div className="col-span-12 md:col-span-8 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-2xl p-6 border border-cyan-500/20">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Brain className="w-5 h-5 text-cyan-400" />
                          <span className="font-semibold text-white">AI Control Layer</span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">Active</span>
                        </div>
                        <p className="text-sm text-slate-400">Autonomous monitoring across 47 services</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">99.97%</div>
                        <div className="text-xs text-slate-400">System Health</div>
                      </div>
                    </div>

                    {/* Live Activity Graph */}
                    <div className="h-24 flex items-end gap-1">
                      {[45, 62, 58, 78, 72, 85, 80, 92, 88, 95, 91, 98, 94, 99, 96].map((h, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-cyan-500 to-teal-400 rounded-t"
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="col-span-6 md:col-span-2 bg-slate-800/50 rounded-2xl p-4 border border-white/5">
                    <div className="text-xs text-slate-500 mb-1">Incidents Resolved</div>
                    <div className="text-2xl font-bold text-white">847</div>
                    <div className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
                      <span>↑ 24%</span>
                    </div>
                  </div>

                  <div className="col-span-6 md:col-span-2 bg-slate-800/50 rounded-2xl p-4 border border-white/5">
                    <div className="text-xs text-slate-500 mb-1">Avg Resolution</div>
                    <div className="text-2xl font-bold text-white">4.2m</div>
                    <div className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
                      <span>↓ 89%</span>
                    </div>
                  </div>

                  {/* Recent AI Actions */}
                  <div className="col-span-12 md:col-span-6 bg-slate-800/30 rounded-2xl p-4 border border-white/5">
                    <div className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      Recent AI Actions
                    </div>
                    <div className="space-y-2">
                      {[
                        { action: 'Auto-scaled payment-api to 5 replicas', time: '2m ago', type: 'scale' },
                        { action: 'Prevented CrashLoopBackOff in auth-service', time: '5m ago', type: 'prevent' },
                        { action: 'Optimized memory allocation for cache-layer', time: '12m ago', type: 'optimize' },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + i * 0.1 }}
                          className="flex items-center gap-2 text-xs"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            item.type === 'scale' ? 'bg-cyan-400' :
                            item.type === 'prevent' ? 'bg-emerald-400' : 'bg-purple-400'
                          }`} />
                          <span className="text-slate-300 flex-1">{item.action}</span>
                          <span className="text-slate-500">{item.time}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* AI Prediction */}
                  <div className="col-span-12 md:col-span-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-4 border border-purple-500/20">
                    <div className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-purple-400" />
                      Predictive Insights
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5" />
                        <div>
                          <span className="text-slate-300">Database connection pool at 78% — scaling recommended in ~2 hours</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5" />
                        <div>
                          <span className="text-slate-300">API latency trending down after optimization</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
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
                <p className="text-xs text-slate-400">
                  Memory leak detected and fixed automatically in <span className="text-white">auth-service</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="hidden lg:block absolute -right-16 top-1/2 w-56"
            >
              <div className="glass rounded-xl p-4 shadow-xl border-cyan-500/20">
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold mb-2">
                  <Sparkles className="w-4 h-4" />
                  AI Insight
                </div>
                <p className="text-xs text-slate-400">
                  Recommended: <span className="text-white">Enable auto-scaling</span> for payment-api during peak hours
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
