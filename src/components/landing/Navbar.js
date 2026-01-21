import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, Sparkles, Shield, Zap, Database, Activity, GitBranch, BarChart3 } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = {
    Platform: {
      items: [
        { icon: Sparkles, title: 'AI Control Layer', desc: 'Autonomous intelligence for infrastructure', href: '/platform' },
        { icon: Database, title: 'Context Engine', desc: 'Multi-source data correlation', href: '/platform' },
        { icon: Activity, title: 'Real-Time Monitoring', desc: 'Continuous observability', href: '/platform' },
        { icon: GitBranch, title: 'Dependency Mapping', desc: 'Service relationship graphs', href: '/platform' },
      ]
    },
    Products: {
      items: [
        { icon: Shield, title: 'KubeGraf', desc: 'Kubernetes incident intelligence', href: 'https://kubegraf.io', external: true },
        { icon: Shield, title: 'Security', desc: 'Autonomous penetration testing', href: '/products' },
        { icon: Zap, title: 'Intelligence', desc: 'Unified AI control layer', href: '/products' },
      ]
    },
    Solutions: {
      items: [
        { icon: Database, title: 'Cloud Native', desc: 'Kubernetes and container orchestration', href: '/solutions' },
        { icon: Shield, title: 'Enterprise', desc: 'Large-scale infrastructure management', href: '/solutions' },
        { icon: Activity, title: 'DevOps', desc: 'CI/CD and deployment automation', href: '/solutions' },
      ]
    },
    Resources: {
      items: [
        { icon: Sparkles, title: 'About Us', desc: 'Learn about our mission and values', href: '/about' },
        { icon: BarChart3, title: 'ROI & Business Impact', desc: 'Cost savings and business value', href: '/roi' },
        { icon: Sparkles, title: 'Documentation', desc: 'Guides and API references', href: '/documentation' },
        { icon: Activity, title: 'Blog', desc: 'Latest updates and insights', href: '/blog' },
        { icon: GitBranch, title: 'Community', desc: 'Join our developer community', href: '/community' },
      ]
    },
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/80 backdrop-blur-2xl border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center z-10">
              <Logo size="md" theme="dark" />
            </a>

            {/* Desktop Nav with Dropdowns */}
            <div className="hidden lg:flex items-center gap-1">
              {Object.entries(menuItems).map(([key, { items }]) => (
                <div
                  key={key}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                    {key}
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === key && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50"
                      >
                        <div className="p-2">
                          {items.map((item, idx) => (
                            <a
                              key={idx}
                              href={item.href}
                              target={item.external ? '_blank' : undefined}
                              rel={item.external ? 'noopener noreferrer' : undefined}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group/item"
                            >
                              {item.icon && (
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/20 flex items-center justify-center group-hover/item:border-cyan-500/40 transition-colors">
                                  <item.icon className="w-5 h-5 text-cyan-400" />
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-semibold text-white mb-0.5 flex items-center gap-2">
                                  {item.title}
                                  {item.external && (
                                    <ArrowRight className="w-3 h-3 text-slate-400 group-hover/item:translate-x-0.5 transition-transform" />
                                  )}
                                </div>
                                <div className="text-xs text-slate-400 leading-snug">
                                  {item.desc}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <a href="/customers" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                Customers
              </a>
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                className="group flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-xl transition-all shadow-lg shadow-cyan-500/25"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-slate-950 pt-16"
          >
            <div className="h-full overflow-y-auto px-6 py-6">
              {Object.entries(menuItems).map(([key, { items }]) => (
                <div key={key} className="mb-6">
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    {key}
                  </div>
                  <div className="space-y-1">
                    {items.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-6 px-6 py-3 text-center text-slate-900 font-semibold bg-gradient-to-r from-cyan-400 to-teal-400 rounded-xl"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
