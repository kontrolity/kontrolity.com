import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import {
  Database,
  Brain,
  Package,
  Shield,
  DollarSign,
  FileCheck,
  ArrowRight,
  Layers,
  Activity,
  Network,
  Cpu,
  Eye,
  Zap,
  Check
} from 'lucide-react';

// Interactive Layer Component
const PlatformLayer = ({ layer, isActive, onClick, index }) => {
  const colors = {
    blue: {
      gradient: 'from-violet-600 to-violet-700',
      bg: 'from-violet-900/15 to-violet-800/10',
      border: 'border-violet-700/25 hover:border-violet-600/35',
      text: 'text-violet-400/80',
    },
    purple: {
      gradient: 'from-purple-600 to-purple-700',
      bg: 'from-purple-900/15 to-purple-800/10',
      border: 'border-purple-700/25 hover:border-purple-600/35',
      text: 'text-purple-400/80',
    },
    emerald: {
      gradient: 'from-emerald-600 to-emerald-700',
      bg: 'from-emerald-900/15 to-emerald-800/10',
      border: 'border-emerald-700/25 hover:border-emerald-600/35',
      text: 'text-emerald-400/80',
    },
  };

  const colorSet = colors[layer.color] || colors.blue;

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      onClick={onClick}
      className={`relative cursor-pointer group ${isActive ? 'z-10' : 'z-0'}`}
    >
      {/* Active Indicator */}
      {isActive && (
        <motion.div
          layoutId="activeGlow"
          className={`absolute -inset-0.5 bg-gradient-to-r ${colorSet.gradient} rounded-2xl opacity-10`}
        />
      )}

      <div
        className={`relative p-6 rounded-2xl bg-gradient-to-br ${colorSet.bg} border ${
          isActive ? colorSet.border.replace('hover:', '') : colorSet.border
        } backdrop-blur-xl transition-all duration-300`}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorSet.gradient} flex items-center justify-center shadow-lg`}>
            <layer.icon className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white">{layer.title}</h3>
              {isActive && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${colorSet.text} bg-white/10`}
                >
                  Active
                </motion.span>
              )}
            </div>
            <p className="text-sm text-slate-400">{layer.subtitle}</p>
          </div>
          <ArrowRight className={`w-5 h-5 ${colorSet.text} transition-transform ${isActive ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
        </div>

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-white/10">
                <p className="text-slate-300 mb-4">{layer.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {layer.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2 text-sm text-slate-400"
                    >
                      <Check className={`w-4 h-4 ${colorSet.text}`} />
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Product Card Component
const ProductCard = ({ product, delay }) => {
  const statusColors = {
    live: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    soon: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
    roadmap: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group relative"
    >
      {product.status === 'live' && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
      )}

      <div
        className={`relative h-full p-6 rounded-2xl border bg-slate-900/50 backdrop-blur-xl transition-all ${
          product.status === 'live'
            ? 'border-emerald-500/30 hover:border-emerald-500/50'
            : 'border-white/10 hover:border-white/20'
        }`}
      >
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            product.status === 'live'
              ? 'bg-gradient-to-br from-emerald-500 to-purple-500'
              : product.status === 'soon'
              ? 'bg-gradient-to-br from-violet-500 to-purple-500'
              : 'bg-slate-700'
          }`}>
            <product.icon className="w-6 h-6 text-white" />
          </div>
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[product.status]}`}>
            {product.statusLabel}
          </span>
        </div>

        <h4 className="text-xl font-bold text-white mb-2">{product.name}</h4>
        <p className="text-sm text-slate-400 mb-4">{product.description}</p>

        {product.link && (
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Explore {product.name}
            <ArrowRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default function PlatformSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeLayer, setActiveLayer] = useState(1);

  const layers = [
    {
      icon: Package,
      title: 'Layer 3: Products',
      subtitle: 'Specialized Applications',
      color: 'blue',
      description: 'Purpose-built autonomous systems for specific infrastructure challenges, all powered by the unified AI layer below.',
      features: [
        'Incident Intelligence',
        'Security Automation',
        'Cost Optimization',
        'Compliance Monitoring',
      ],
    },
    {
      icon: Brain,
      title: 'Layer 2: AI Intelligence',
      subtitle: 'The Autonomous Brain',
      color: 'purple',
      description: 'Advanced machine learning models that reason over infrastructure context, predict failures, and take autonomous action.',
      features: [
        'Root Cause Analysis',
        'Predictive Models',
        'Natural Language Reasoning',
        'Continuous Learning',
      ],
    },
    {
      icon: Database,
      title: 'Layer 1: Context Engine',
      subtitle: 'Unified Data Foundation',
      color: 'emerald',
      description: 'Real-time ingestion and correlation of all infrastructure signals—logs, metrics, traces, configs, and cloud APIs.',
      features: [
        'Multi-Source Ingestion',
        'Graph Database',
        'Pattern Recognition',
        'Unified Context API',
      ],
    },
  ];

  const products = [
    {
      icon: Activity,
      name: 'KubeGraf',
      description: 'Kubernetes incident intelligence. Autonomous root cause analysis and remediation for K8s clusters.',
      status: 'live',
      statusLabel: 'Live Now',
      link: 'https://kubegraf.io',
    },
    {
      icon: Shield,
      name: 'SecureGraf',
      description: 'Autonomous penetration testing and vulnerability detection. Find security issues before attackers do.',
      status: 'soon',
      statusLabel: 'Coming Soon',
    },
    {
      icon: DollarSign,
      name: 'OptiGraf',
      description: 'AI-powered cost optimization and resource right-sizing. Reduce cloud spend without impacting performance.',
      status: 'roadmap',
      statusLabel: 'On Roadmap',
    },
    {
      icon: FileCheck,
      name: 'ComplianceGraf',
      description: 'Continuous compliance monitoring and automated remediation. SOC2, HIPAA, PCI-DSS compliance on autopilot.',
      status: 'roadmap',
      statusLabel: 'On Roadmap',
    },
  ];

  return (
    <section id="platform" ref={ref} className="relative py-32 bg-[#0a0a14] overflow-hidden">
      {/* Clean divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Layers className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">Platform Architecture</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            One Platform.{' '}
            <span className="gradient-text-purple">Infinite Possibilities.</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A unified AI control layer that powers all our products. Build once, benefit everywhere.
          </p>
        </motion.div>

        {/* Platform Layers */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Interactive Layers */}
          <div className="space-y-4">
            {layers.map((layer, i) => (
              <PlatformLayer
                key={i}
                layer={layer}
                index={i}
                isActive={activeLayer === i}
                onClick={() => setActiveLayer(i)}
              />
            ))}
          </div>

          {/* Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Central Core */}
              <motion.div
                animate={{
                  boxShadow: activeLayer === 2
                    ? '0 0 60px rgba(16, 185, 129, 0.4)'
                    : activeLayer === 1
                    ? '0 0 60px rgba(168, 85, 247, 0.4)'
                    : '0 0 60px rgba(139, 92, 246, 0.4)',
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/20 flex items-center justify-center z-20"
              >
                <Cpu className="w-10 h-10 text-white" />
              </motion.div>

              {/* Orbiting Rings */}
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
                  style={{
                    width: `${ring * 100 + 50}px`,
                    height: `${ring * 100 + 50}px`,
                    borderColor: activeLayer === 3 - ring ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                  }}
                  animate={{
                    rotate: ring % 2 === 0 ? 360 : -360,
                  }}
                  transition={{
                    duration: 20 + ring * 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {/* Orbiting Nodes */}
                  <motion.div
                    className={`absolute w-4 h-4 rounded-full ${
                      ring === 1 ? 'bg-emerald-400' : ring === 2 ? 'bg-purple-400' : 'bg-violet-400'
                    }`}
                    style={{
                      top: '50%',
                      left: 0,
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{
                      scale: activeLayer === 3 - ring ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
              ))}

              {/* Data Flow Lines */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <motion.div
                  key={angle}
                  className="absolute top-1/2 left-1/2 w-1 bg-gradient-to-t from-violet-500/50 to-transparent"
                  style={{
                    height: '150px',
                    transformOrigin: 'top',
                    transform: `rotate(${angle}deg)`,
                  }}
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    delay: angle / 360,
                    repeat: Infinity,
                  }}
                />
              ))}

              {/* Corner Labels */}
              <div className="absolute top-0 left-0 flex items-center gap-2 text-xs text-slate-400">
                <Eye className="w-4 h-4" /> Observe
              </div>
              <div className="absolute top-0 right-0 flex items-center gap-2 text-xs text-slate-400">
                Understand <Brain className="w-4 h-4" />
              </div>
              <div className="absolute bottom-0 left-0 flex items-center gap-2 text-xs text-slate-400">
                <Network className="w-4 h-4" /> Connect
              </div>
              <div className="absolute bottom-0 right-0 flex items-center gap-2 text-xs text-slate-400">
                Act <Zap className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4 text-center">
            Products Built on the Platform
          </h3>
          <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
            Each product inherits the full power of our AI intelligence layer, enabling autonomous operations across your entire stack.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <ProductCard key={i} product={product} delay={0.7 + i * 0.1} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
