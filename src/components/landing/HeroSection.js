import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-cyan-500/10 border border-cyan-500/20 backdrop-blur-xl"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Introducing Autonomous Infrastructure Intelligence
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1]"
          >
            <span className="text-white">The</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              AI Brain
            </span>
            <br />
            <span className="text-white">for your infrastructure</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Kontrolity transforms chaos into control with autonomous AI that observes,
            understands, and stabilizes your systems in real-time.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#contact"
              className="group relative px-8 py-4 text-base font-semibold text-slate-900 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 group-hover:from-cyan-300 group-hover:to-teal-300 transition-all" />
              <span className="relative flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="https://kubegraf.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-2xl border border-white/10 hover:bg-white/5 transition-all"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </a>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl shadow-2xl">
              {/* Browser Chrome */}
              <div className="bg-slate-950/50 px-4 py-3 border-b border-white/5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-slate-900 rounded-lg px-4 py-1.5 text-xs text-slate-500 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400" />
                    kontrolity.ai/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-8">
                <div className="grid grid-cols-3 gap-4">
                  {/* System Health */}
                  <div className="col-span-2 row-span-2 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-2xl p-6 border border-cyan-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-slate-900" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">System Health</div>
                        <div className="text-xs text-slate-400">All systems operational</div>
                      </div>
                    </div>
                    <div className="h-32 flex items-end gap-1">
                      {[60, 80, 70, 90, 85, 95, 88, 92, 98, 96, 99, 98].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-cyan-400 to-teal-400 rounded-t" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>

                  {/* CPU Card */}
                  <div className="bg-slate-800/50 rounded-2xl p-4 border border-white/5">
                    <div className="text-xs text-slate-500 mb-2">CPU Usage</div>
                    <div className="text-2xl font-bold text-white">24%</div>
                    <div className="text-xs text-green-400 mt-1">↓ 12% from avg</div>
                  </div>

                  {/* Memory Card */}
                  <div className="bg-slate-800/50 rounded-2xl p-4 border border-white/5">
                    <div className="text-xs text-slate-500 mb-2">Memory</div>
                    <div className="text-2xl font-bold text-white">1.2GB</div>
                    <div className="text-xs text-slate-400 mt-1">of 4GB used</div>
                  </div>

                  {/* Active Services */}
                  <div className="col-span-1 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl p-4 border border-emerald-500/20">
                    <div className="text-xs text-slate-400 mb-2">Active Services</div>
                    <div className="text-3xl font-bold text-white">47</div>
                    <div className="flex items-center gap-1 mt-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <div className="text-xs text-green-400">All healthy</div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="col-span-2 bg-slate-800/50 rounded-2xl p-4 border border-white/5">
                    <div className="text-xs text-slate-500 mb-3">Recent Activity</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span className="text-slate-400">Auto-scaled payment-api to 5 replicas</span>
                        <span className="ml-auto text-slate-600">2m ago</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        <span className="text-slate-400">Resolved memory leak in auth-service</span>
                        <span className="ml-auto text-slate-600">5m ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hidden lg:block absolute -left-12 top-1/4 w-64 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-2 text-green-400 text-sm font-semibold mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Auto-detected
              </div>
              <div className="text-xs text-slate-400">
                Prevented CrashLoopBackOff in payment-api
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="hidden lg:block absolute -right-12 top-1/2 w-64 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 backdrop-blur-xl rounded-2xl p-4 border border-cyan-500/20 shadow-xl"
            >
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold mb-2">
                <Sparkles className="w-4 h-4" />
                AI Recommendation
              </div>
              <div className="text-xs text-slate-400">
                Scale up 2 replicas to handle increased traffic
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
