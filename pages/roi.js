import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingDown,
  Clock,
  DollarSign,
  AlertTriangle,
  ArrowRight,
  Calculator,
  BarChart3,
  Users,
  Zap,
  ExternalLink
} from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

export default function ROI() {
  const [downtime, setDowntime] = useState(2);
  const [engineers, setEngineers] = useState(10);
  const [incidents, setIncidents] = useState(20);

  const engineerCost = 150000;
  const downtimeCost = 2000000;

  const beforeCost = (downtime * downtimeCost) + (engineers * engineerCost * 0.33) + (incidents * 8 * 200);
  const afterCost = (downtime * 0.2 * downtimeCost) + (engineers * engineerCost * 0.10) + (incidents * 1.6 * 200);
  const savings = beforeCost - afterCost;

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-6 lg:px-8 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Kontrolity ROI —{' '}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-purple-400 bg-clip-text text-transparent">
                  Turn Infrastructure Incidents Into Savings
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-slate-400">
                Every hour of downtime costs ~$2M. Kontrolity reduces incident resolution by 80%, turning costly outages into fast recoveries.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#calculator"
                  className="group relative px-8 py-4 text-base font-semibold text-slate-900 rounded-2xl overflow-hidden shadow-2xl shadow-violet-500/25 hover:shadow-violet-500/40 transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-400 group-hover:from-violet-300 group-hover:to-purple-300 transition-all" />
                  <span className="relative flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Calculate Your Savings
                  </span>
                </a>
                <a
                  href="mailto:contact@kontrolity.com?subject=Enterprise Demo Request"
                  className="group flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-2xl border border-white/10 hover:bg-white/5 transition-all"
                >
                  Request Demo
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Cost of Doing Nothing */}
        <section className="py-16 px-6 lg:px-8 bg-slate-900/50">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-white">
                The Cost of{' '}
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Doing Nothing
                </span>
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-red-500/20">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/20 flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">$2M per hour</h3>
                  <p className="text-sm text-slate-400">
                    Average cost of high-impact outages (~$33,333/min)
                  </p>
                  <a
                    href="https://newrelic.com/resources/report/observability-forecast/2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-violet-400 hover:text-violet-300 mt-2 inline-flex items-center gap-1"
                  >
                    New Relic 2025 Observability Forecast
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-6 border border-amber-500/20">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/20 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">33% wasted time</h3>
                  <p className="text-sm text-slate-400">
                    Engineering time spent firefighting instead of building
                  </p>
                  <a
                    href="https://newrelic.com/resources/report/observability-forecast/2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-violet-400 hover:text-violet-300 mt-2 inline-flex items-center gap-1"
                  >
                    New Relic 2025 Observability Forecast
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-6 border border-orange-500/20">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/20 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Hours to diagnose</h3>
                  <p className="text-sm text-slate-400">
                    Manual correlation across logs, metrics, traces, and events
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Before vs After */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Before vs After
                </span>
              </h2>

              <p className="text-sm text-slate-400 mb-4 md:hidden text-center">
                Scroll horizontally to see all details →
              </p>

              <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                <table className="w-full border-collapse min-w-[640px]">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-4 text-slate-400 font-semibold text-sm">Metric</th>
                      <th className="text-center py-4 px-4 text-red-400 font-semibold text-sm">Before Kontrolity</th>
                      <th className="text-center py-4 px-4 text-emerald-400 font-semibold text-sm">After Kontrolity</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-white/10">
                      <td className="py-4 px-4 text-white font-medium">Incident Detection Time</td>
                      <td className="py-4 px-4 text-center text-slate-300">15-30 minutes (manual monitoring)</td>
                      <td className="py-4 px-4 text-center text-emerald-400 font-semibold">&lt; 1 minute (AI detection)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-4 px-4 text-white font-medium">Root Cause Analysis</td>
                      <td className="py-4 px-4 text-center text-slate-300">2-4 hours (manual correlation)</td>
                      <td className="py-4 px-4 text-center text-emerald-400 font-semibold">5-15 minutes (AI correlation)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-4 px-4 text-white font-medium">Engineering Time on Firefighting</td>
                      <td className="py-4 px-4 text-center text-slate-300">33% (industry average)</td>
                      <td className="py-4 px-4 text-center text-emerald-400 font-semibold">10% (70% reduction)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-4 px-4 text-white font-medium">Mean Time To Recovery (MTTR)</td>
                      <td className="py-4 px-4 text-center text-slate-300">3-6 hours</td>
                      <td className="py-4 px-4 text-center text-emerald-400 font-semibold">30-60 minutes (80% faster)</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 text-white font-bold">Annual Downtime Cost Impact</td>
                      <td className="py-4 px-4 text-center text-red-400 font-bold">$4M-$12M</td>
                      <td className="py-4 px-4 text-center text-emerald-400 font-bold">$800K-$2.4M (80% savings)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section id="calculator" className="py-16 px-6 lg:px-8 bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Calculate Your Savings
                </span>
              </h2>
              <p className="text-center text-slate-400 mb-8 max-w-2xl mx-auto">
                See how much Kontrolity can save your organization based on your infrastructure scale
              </p>

              <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10">
                <div className="space-y-6 mb-8">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Hours of critical downtime per year
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={downtime}
                      onChange={(e) => setDowntime(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                    />
                    <div className="flex justify-between text-sm text-slate-400 mt-1">
                      <span>1 hour</span>
                      <span className="font-bold text-violet-400">{downtime} hours</span>
                      <span>20 hours</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Number of platform/SRE engineers
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      step="5"
                      value={engineers}
                      onChange={(e) => setEngineers(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                    />
                    <div className="flex justify-between text-sm text-slate-400 mt-1">
                      <span>5 engineers</span>
                      <span className="font-bold text-violet-400">{engineers} engineers</span>
                      <span>100 engineers</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Incidents per month
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      step="5"
                      value={incidents}
                      onChange={(e) => setIncidents(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                    />
                    <div className="flex justify-between text-sm text-slate-400 mt-1">
                      <span>5/month</span>
                      <span className="font-bold text-violet-400">{incidents}/month</span>
                      <span>100/month</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-slate-700/50 rounded-xl p-6">
                      <div className="text-sm text-slate-400 mb-1">Current Annual Cost</div>
                      <div className="text-3xl font-bold text-white">
                        ${(beforeCost / 1000000).toFixed(1)}M
                      </div>
                      <div className="text-xs text-slate-500 mt-2">
                        Downtime + engineering time + incident overhead
                      </div>
                    </div>

                    <div className="bg-slate-700/50 rounded-xl p-6">
                      <div className="text-sm text-slate-400 mb-1">With Kontrolity</div>
                      <div className="text-3xl font-bold text-white">
                        ${(afterCost / 1000000).toFixed(1)}M
                      </div>
                      <div className="text-xs text-emerald-400 mt-2">
                        80% faster MTTR + 70% less firefighting
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-emerald-500/20 to-purple-500/20 rounded-xl p-6 border border-emerald-500/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-slate-300 mb-1">Annual Savings</div>
                        <div className="text-4xl font-bold text-white">
                          ${(savings / 1000000).toFixed(1)}M
                        </div>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-purple-400 flex items-center justify-center">
                        <TrendingDown className="w-8 h-8 text-slate-900" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Investors Care */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Why Investors Should Care
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/20 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-violet-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Massive Market</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="text-violet-400">•</span>
                      <span>$7.3B+ cloud infrastructure management market</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-400">•</span>
                      <span>7M+ developers deploying to Kubernetes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-400">•</span>
                      <span>96% of organizations using or evaluating Kubernetes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/20 flex items-center justify-center">
                      <Users className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Enterprise Ready</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>Bottom-up adoption: Engineers choose tools that work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>Freemium model drives organic growth and validation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>Clear enterprise upsell path with high-margin features</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">AI-Native Platform</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Not just observability—autonomous decision-making</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Learns from every incident to improve accuracy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Defensible moat: Multi-source correlation + context engine</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/20 flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Clear Value Prop</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">•</span>
                      <span>$500K-$2M+ annual savings per customer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">•</span>
                      <span>ROI positive in &lt;3 months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">•</span>
                      <span>Reduces engineering burnout (retention play)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-950">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to Reduce Your MTTR?
              </h2>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                See how Kontrolity's AI control layer can transform your infrastructure operations
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://kubegraf.io/docs/installation.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 text-base font-semibold text-slate-900 rounded-2xl overflow-hidden shadow-2xl shadow-violet-500/25 hover:shadow-violet-500/40 transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-400 group-hover:from-violet-300 group-hover:to-purple-300 transition-all" />
                  <span className="relative flex items-center gap-2">
                    Try KubeGraf Free
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a
                  href="mailto:contact@kontrolity.com?subject=ROI Discussion"
                  className="group flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-2xl border border-white/10 hover:bg-white/5 transition-all"
                >
                  Talk to Sales
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
