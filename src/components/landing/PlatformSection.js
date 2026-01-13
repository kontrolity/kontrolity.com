import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, Brain, Package, Shield, DollarSign, FileCheck, ArrowRight, Layers } from 'lucide-react';

export default function PlatformSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const products = [
    {
      name: 'KubeGraf',
      status: 'Available Now',
      statusColor: 'emerald',
      icon: Package,
      description: 'Kubernetes incident intelligence. Autonomous root cause analysis and remediation.',
      link: 'https://kubegraf.io'
    },
    {
      name: 'SecureGraf',
      status: 'Coming Soon',
      statusColor: 'cyan',
      icon: Shield,
      description: 'Autonomous penetration testing and vulnerability detection. Finds security issues before attackers do.'
    },
    {
      name: 'OptiGraf',
      status: 'Roadmap',
      statusColor: 'slate',
      icon: DollarSign,
      description: 'Cost optimization and resource right-sizing. AI that reduces cloud spend without impacting performance.'
    },
    {
      name: 'ComplianceGraf',
      status: 'Roadmap',
      statusColor: 'slate',
      icon: FileCheck,
      description: 'Autonomous compliance monitoring. Continuous validation against SOC2, HIPAA, PCI-DSS.'
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
            The Kontrolity Platform
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            One AI Control Layer, Multiple Products
          </p>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto mt-4">
            KubeGraf is the beginning. We're building a unified platform where autonomous AI systems manage every layer of your infrastructure.
          </p>
        </motion.div>

        {/* Platform Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-20"
        >
          <div className="space-y-6">
            {/* Layer 3: Products */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-3xl p-8 border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center">
                  <Package className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Layer 3: Products</h3>
                  <p className="text-sm text-slate-400">Built on the platform</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Specialized autonomous systems for incident response, security, cost optimization, and compliance—all powered by the same unified intelligence layer.
              </p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-1 h-8 bg-gradient-to-b from-cyan-500/50 to-transparent" />
            </div>

            {/* Layer 2: AI Intelligence */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Layer 2: AI Intelligence</h3>
                  <p className="text-sm text-slate-400">The brain</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-slate-300">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                  <span>Autonomous decision-making engine</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                  <span>Root cause analysis and prediction models</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                  <span>Natural language reasoning over infrastructure</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                  <span>Continuous learning from outcomes</span>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-1 h-8 bg-gradient-to-b from-purple-500/50 to-transparent" />
            </div>

            {/* Layer 1: Context Engine */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl p-8 border border-emerald-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center">
                  <Database className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Layer 1: Context Engine</h3>
                  <p className="text-sm text-slate-400">Foundation</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-slate-300">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2" />
                  <span>Multi-source data ingestion (logs, metrics, traces, configs, cloud APIs)</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2" />
                  <span>Real-time graph database of infrastructure relationships</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2" />
                  <span>Historical pattern recognition and learning</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2" />
                  <span>Unified context layer that all products share</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white mb-10 text-center">
            Products Built on the Platform
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className={`rounded-2xl p-8 border transition-all ${
                  product.link
                    ? 'bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border-cyan-500/30 hover:border-cyan-500/50 cursor-pointer'
                    : 'bg-slate-800/50 border-white/10 hover:border-white/20'
                }`}
                onClick={() => product.link && window.open(product.link, '_blank')}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                      product.statusColor === 'emerald' ? 'from-emerald-400 to-teal-400' :
                      product.statusColor === 'cyan' ? 'from-cyan-400 to-teal-400' :
                      'from-slate-500 to-slate-600'
                    } flex items-center justify-center`}>
                      <product.icon className="w-7 h-7 text-slate-900" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-1">{product.name}</h4>
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                        product.statusColor === 'emerald' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                        product.statusColor === 'cyan' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                        'bg-slate-500/20 text-slate-400 border border-slate-500/30'
                      }`}>
                        {product.statusColor === 'emerald' && <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                        {product.status}
                      </div>
                    </div>
                  </div>
                  {product.link && (
                    <ArrowRight className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
                <p className="text-slate-400 leading-relaxed">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
