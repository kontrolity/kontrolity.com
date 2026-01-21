import React from 'react';
import Navbar from '../src/components/landing/Navbar';
import Footer from '../src/components/landing/Footer';
import { motion } from 'framer-motion';
import { Database, Shield, Activity, ArrowRight, CheckCircle, Cloud, Building, GitBranch, Zap, TrendingUp, Lock } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      icon: Database,
      name: 'Cloud Native',
      tagline: 'Kubernetes and Container Orchestration',
      description: 'Purpose-built for cloud-native architectures, providing autonomous management for containerized workloads across multiple clusters and cloud providers.',
      challenges: [
        'Managing multi-cluster Kubernetes environments',
        'Container orchestration complexity',
        'Service mesh monitoring',
        'Cloud-native security'
      ],
      benefits: [
        'Automated cluster management',
        'Cross-cluster visibility',
        'Intelligent workload optimization',
        'Multi-cloud deployment support',
        'Container security scanning',
        'Cost optimization recommendations'
      ],
      useCases: [
        'Microservices architectures',
        'Multi-cloud deployments',
        'Container-native applications',
        'Kubernetes cluster management'
      ]
    },
    {
      icon: Shield,
      name: 'Enterprise',
      tagline: 'Large-Scale Infrastructure Management',
      description: 'Enterprise-grade solution designed for organizations managing complex, large-scale infrastructure with strict compliance and security requirements.',
      challenges: [
        'Managing thousands of servers and services',
        'Compliance and audit requirements',
        'Complex dependency chains',
        'Multi-team coordination'
      ],
      benefits: [
        'Centralized infrastructure control',
        'Advanced RBAC and security',
        'Compliance automation',
        'Multi-tenant architecture',
        'Enterprise support and SLAs',
        'Custom integration capabilities'
      ],
      useCases: [
        'Fortune 500 companies',
        'Financial services',
        'Healthcare systems',
        'Government agencies'
      ]
    },
    {
      icon: Activity,
      name: 'DevOps',
      tagline: 'CI/CD and Deployment Automation',
      description: 'Streamline your DevOps workflows with intelligent automation, from code commit to production deployment with autonomous monitoring and rollback.',
      challenges: [
        'Manual deployment processes',
        'Pipeline complexity',
        'Deployment failures',
        'Rollback strategies'
      ],
      benefits: [
        'Automated CI/CD pipelines',
        'Intelligent deployment strategies',
        'Automatic rollback on failures',
        'GitOps integration',
        'Pipeline optimization',
        'Deployment analytics'
      ],
      useCases: [
        'Continuous deployment teams',
        'Rapid release cycles',
        'Multi-environment deployments',
        'Infrastructure as Code'
      ]
    }
  ];

  const stats = [
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '80%', label: 'Faster MTTR' },
    { value: '50%', label: 'Cost Reduction' },
    { value: '24/7', label: 'Monitoring' }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Tailored{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Industry-specific solutions designed for your unique infrastructure challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 md:p-12 border border-white/10">
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                  {/* Header */}
                  <div>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 mb-6">
                      <solution.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{solution.name}</h2>
                    <p className="text-xl text-cyan-400 mb-6">{solution.tagline}</p>
                    <p className="text-lg text-slate-400 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  {/* Challenges */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Common Challenges</h3>
                    <ul className="space-y-3">
                      {solution.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                          <span className="text-slate-400">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Ideal For</h3>
                    <ul className="space-y-3">
                      {solution.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <ArrowRight className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-xl transition-all shadow-lg shadow-cyan-500/25"
                  >
                    Get Started with {solution.name}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">All Solutions Include</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Enterprise-grade features standard across all solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Lock, title: 'Enterprise Security', desc: 'Advanced security controls and compliance' },
              { icon: TrendingUp, title: 'Analytics & Insights', desc: 'Real-time data and predictive analytics' },
              { icon: Zap, title: 'Lightning Performance', desc: 'Optimized for speed and efficiency' },
              { icon: GitBranch, title: 'Easy Integration', desc: 'Works with existing infrastructure' },
              { icon: Cloud, title: 'Multi-Cloud Ready', desc: 'Deploy across any cloud provider' },
              { icon: Shield, title: '24/7 Support', desc: 'Enterprise support and SLAs' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-white/10"
              >
                <feature.icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Find the Right Solution for Your Team
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Let's discuss your specific infrastructure challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-xl transition-all shadow-lg shadow-cyan-500/25"
              >
                Contact Sales
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/roi"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-white/10"
              >
                Calculate ROI
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
