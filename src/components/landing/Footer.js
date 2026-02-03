import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const links = {
    Product: [
      { label: 'Platform', href: '/platform' },
      { label: 'KubeGraf', href: 'https://kubegraf.io', external: true },
      { label: 'Features', href: '/platform/features' },
      { label: 'Integrations', href: '/platform/integrations' },
      { label: 'ROI Calculator', href: '/roi' },
      { label: 'Pricing', href: '/pricing' },
    ],
    Solutions: [
      { label: 'Cloud Native', href: '/solutions/cloud-native' },
      { label: 'Enterprise', href: '/solutions/enterprise' },
      { label: 'DevOps Teams', href: '/solutions/devops' },
      { label: 'SRE Teams', href: '/solutions/sre' },
    ],
    Resources: [
      { label: 'Documentation', href: '/documentation' },
      { label: 'API Reference', href: '/documentation/api' },
      { label: 'Blog', href: '/blog' },
      { label: 'Community', href: '/community' },
      { label: 'Status', href: 'https://status.kontrolity.com', external: true },
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '#contact' },
      { label: 'Security', href: '/security' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/kontrolity', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/kontrolity', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/kontrolity', label: 'GitHub' },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-white/10">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-white/10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay ahead of the curve
              </h3>
              <p className="text-slate-400">
                Get the latest on autonomous infrastructure, AI ops, and product updates.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-900 font-semibold hover:from-cyan-400 hover:to-teal-400 transition-all flex items-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <a href="/" className="inline-block mb-6">
                <Logo size="md" theme="dark" />
              </a>
              <p className="text-slate-400 text-sm mb-6 max-w-sm">
                Building the AI control layer for modern infrastructure. Autonomous systems that observe, understand, and stabilize.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:contact@kontrolity.com"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contact@kontrolity.com
                </a>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <MapPin className="w-4 h-4" />
                  Edinburgh, Scotland, UK
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-900/50 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h4 className="font-semibold text-white mb-4">{category}</h4>
                <ul className="space-y-3">
                  {items.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                      >
                        {link.label}
                        {link.external && (
                          <ArrowRight className="w-3 h-3 rotate-[-45deg]" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Kontrolity. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                All systems operational
              </div>
              <a href="/security" className="hover:text-white transition-colors">
                SOC 2 Type II
              </a>
              <a href="/privacy" className="hover:text-white transition-colors">
                GDPR
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
