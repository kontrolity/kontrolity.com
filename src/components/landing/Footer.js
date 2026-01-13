import React from 'react';
import Logo from './Logo';

export default function Footer() {
  const links = {
    Product: [
      { label: 'Platform', href: '#platform' },
      { label: 'KubeGraf', href: 'https://kubegraf.io' },
      { label: 'ROI & Business Impact', href: '/roi' },
      { label: 'Pricing', href: '#contact' },
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
    ],
    Resources: [
      { label: 'Documentation', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Support', href: '#' },
    ],
    Legal: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Security', href: '#' },
    ],
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-6 gap-8 mb-12">
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-4">
              <Logo size="md" theme="dark" />
            </a>
            <p className="text-sm text-slate-400 mb-4">
              Building the AI control layer for modern infrastructure. Autonomous systems that observe, understand, and stabilize.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-3">{category}</h3>
              <ul className="space-y-2">
                {items.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-sm text-slate-400">
            © 2025 Kontrolity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
