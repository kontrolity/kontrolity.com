import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Zap, Shield, Brain, ArrowRight } from 'lucide-react';

export default function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const products = [
    {
      icon: Zap,
      name: 'KubeGraf',
      tagline: 'Kubernetes Incident Intelligence',
      description: 'AI-powered incident detection and root cause analysis for Kubernetes. Detects failures, explains causes, and suggests safe fixes in real-time.',
      status: 'Available Now',
      statusColor: 'bg-green-500',
      href: 'https://kubegraf.io',
      features: ['Auto incident detection', 'Evidence-backed RCA', 'Safe fix preview', 'Local-first'],
    },
    {
      icon: Shield,
      name: 'Kontrolity Security',
      tagline: 'Autonomous Penetration Testing',
      description: 'Continuous security scanning that discovers vulnerabilities before attackers do. Automated threat hunting across your infrastructure.',
      status: 'Coming Soon',
      statusColor: 'bg-amber-500',
      href: '#contact',
      features: ['Continuous scanning', 'Attack path mapping', 'Auto remediation', 'Compliance tracking'],
    },
    {
      icon: Brain,
      name: 'Kontrolity Intelligence',
      tagline: 'Unified AI Control Layer',
      description: 'The brain that connects observability, security, and operations. One intelligence layer that understands your entire infrastructure.',
      status: 'On Roadmap',
      statusColor: 'bg-slate-400',
      href: '#contact',
      features: ['Cross-domain AI', 'Predictive ops', 'Self-healing', 'Unified control'],
    },
  ];

  return (
    <section id="products" className="py-24 bg-slate-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Products built for{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              autonomous operations
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            AI control systems for every layer of your infrastructure
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <a
                href={product.href}
                target={product.href.startsWith('http') ? '_blank' : undefined}
                rel={product.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group block h-full bg-gradient-to-br from-slate-900/50 to-slate-800/50 hover:from-slate-900/70 hover:to-slate-800/70 rounded-2xl p-8 border-2 border-white/10 hover:border-cyan-500/30 transition-all backdrop-blur-xl"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-400 text-slate-900">
                    <product.icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${product.statusColor}`} />
                    <span className="text-xs font-medium text-slate-400">{product.status}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-sm font-medium text-cyan-400 mb-4">{product.tagline}</p>
                <p className="text-slate-400 mb-6 leading-relaxed">{product.description}</p>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all">
                  Learn more
                  {product.href.startsWith('http') ? (
                    <ExternalLink className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
