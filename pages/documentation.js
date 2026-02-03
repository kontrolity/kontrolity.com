import React from 'react';
import Navbar from '../src/components/landing/Navbar';
import Footer from '../src/components/landing/Footer';
import { motion } from 'framer-motion';
import { Book, Code, Zap, Shield, Database, GitBranch, ArrowRight, FileText, Video, MessageCircle } from 'lucide-react';

export default function Documentation() {
  const categories = [
    {
      icon: Zap,
      title: 'Getting Started',
      description: 'Quick start guides and installation instructions',
      links: [
        { title: 'Quick Start Guide', href: '#quick-start' },
        { title: 'Installation', href: '#installation' },
        { title: 'Configuration', href: '#configuration' },
        { title: 'First Steps', href: '#first-steps' }
      ]
    },
    {
      icon: Code,
      title: 'API Reference',
      description: 'Complete API documentation and code examples',
      links: [
        { title: 'REST API', href: '#rest-api' },
        { title: 'GraphQL API', href: '#graphql-api' },
        { title: 'Webhooks', href: '#webhooks' },
        { title: 'Authentication', href: '#authentication' }
      ]
    },
    {
      icon: Database,
      title: 'Platform Guides',
      description: 'In-depth guides for platform features',
      links: [
        { title: 'AI Control Layer', href: '#ai-control' },
        { title: 'Context Engine', href: '#context-engine' },
        { title: 'Real-Time Monitoring', href: '#monitoring' },
        { title: 'Dependency Mapping', href: '#dependencies' }
      ]
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Security best practices and compliance',
      links: [
        { title: 'Security Overview', href: '#security-overview' },
        { title: 'Access Control', href: '#access-control' },
        { title: 'Compliance', href: '#compliance' },
        { title: 'Audit Logs', href: '#audit-logs' }
      ]
    },
    {
      icon: GitBranch,
      title: 'Integrations',
      description: 'Connect Kontrolity with your tools',
      links: [
        { title: 'Kubernetes', href: '#kubernetes' },
        { title: 'Grafana', href: '#grafana' },
        { title: 'Prometheus', href: '#prometheus' },
        { title: 'Cloud Providers', href: '#cloud-providers' }
      ]
    },
    {
      icon: Book,
      title: 'Tutorials',
      description: 'Step-by-step tutorials and examples',
      links: [
        { title: 'Basic Setup', href: '#basic-setup' },
        { title: 'Advanced Configuration', href: '#advanced-config' },
        { title: 'Best Practices', href: '#best-practices' },
        { title: 'Troubleshooting', href: '#troubleshooting' }
      ]
    }
  ];

  const resources = [
    {
      icon: FileText,
      title: 'Technical Docs',
      description: 'Comprehensive technical documentation',
      color: 'from-violet-500 to-blue-500'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Watch and learn with video guides',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageCircle,
      title: 'Community Forum',
      description: 'Get help from the community',
      color: 'from-purple-500 to-purple-500'
    }
  ];

  const popularDocs = [
    'Getting Started with Kontrolity',
    'Kubernetes Integration Guide',
    'API Authentication',
    'Setting Up Real-Time Monitoring',
    'Security Best Practices',
    'Multi-Cloud Deployment'
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-950 to-slate-950" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-purple-400 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-8">
              Everything you need to build, deploy, and manage with Kontrolity.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full px-6 py-4 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 transition-colors"
                />
                <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Docs Section */}
      <section className="py-12 px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Popular Documentation</h2>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {popularDocs.map((doc, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-slate-800/50 hover:bg-slate-800 border border-white/10 hover:border-violet-500/30 rounded-lg text-slate-300 hover:text-white text-sm transition-all"
              >
                {doc}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Browse Documentation</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Find guides, API references, and tutorials organized by topic
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-violet-500/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <category.icon className="w-7 h-7 text-violet-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                <p className="text-slate-400 mb-6">{category.description}</p>

                <ul className="space-y-2">
                  {category.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-slate-300 hover:text-violet-400 transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm">{link.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Additional Resources</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              More ways to learn and get help
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-violet-500/30 transition-all overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <resource.icon className="w-7 h-7 text-violet-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{resource.title}</h3>
                  <p className="text-slate-400 mb-4">{resource.description}</p>
                  <div className="flex items-center gap-2 text-violet-400 font-medium">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Tools Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-12 border border-white/10"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Developer Tools</h2>
                <p className="text-lg text-slate-400 mb-6">
                  Access SDKs, CLI tools, and development resources to build on the Kontrolity platform.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-400" />
                    <span className="text-slate-300">Official SDKs for Python, Node.js, and Go</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-400" />
                    <span className="text-slate-300">Command-line interface tools</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-400" />
                    <span className="text-slate-300">Sample code and examples</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-400" />
                    <span className="text-slate-300">API playground and testing tools</span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-gradient-to-r from-violet-400 to-purple-400 hover:from-violet-300 hover:to-purple-300 rounded-xl transition-all shadow-lg shadow-violet-500/25"
                >
                  View Developer Tools
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="bg-slate-900 rounded-xl p-6 border border-white/10">
                <div className="text-xs text-slate-500 mb-2">Example: Quick Start</div>
                <pre className="text-sm text-slate-300 overflow-x-auto">
                  <code>{`# Install Kontrolity CLI
npm install -g @kontrolity/cli

# Initialize project
kontrolity init

# Deploy to cluster
kontrolity deploy --cluster prod`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-3xl p-12 border border-violet-500/20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Help?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/community"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-gradient-to-r from-violet-400 to-purple-400 hover:from-violet-300 hover:to-purple-300 rounded-xl transition-all shadow-lg shadow-violet-500/25"
              >
                Join Community
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-white/10"
              >
                Contact Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
