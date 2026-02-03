import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import {
  Server,
  ShoppingCart,
  Wallet,
  Heart,
  Gamepad2,
  Building2,
  ArrowRight,
  CheckCircle2,
  Clock,
  DollarSign,
  Users,
  TrendingUp
} from 'lucide-react';

// Use Case Tab Component
const UseCaseTab = ({ useCase, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all ${
      isActive
        ? 'bg-violet-100 border border-violet-300 text-violet-700'
        : 'bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
    }`}
  >
    <useCase.icon className={`w-5 h-5 ${isActive ? 'text-violet-600' : ''}`} />
    <span className="font-medium">{useCase.industry}</span>
  </button>
);

// Case Study Card
const CaseStudyContent = ({ useCase }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="grid lg:grid-cols-2 gap-8"
  >
    {/* Left: Story */}
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
            <useCase.icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">{useCase.title}</h3>
            <p className="text-slate-500">{useCase.company}</p>
          </div>
        </div>

        <p className="text-slate-600 leading-relaxed mb-6">
          {useCase.story}
        </p>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">The Challenge</h4>
          <p className="text-slate-600">{useCase.challenge}</p>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">The Solution</h4>
        <ul className="space-y-2">
          {useCase.solutions.map((solution, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600">
              <CheckCircle2 className="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5" />
              {solution}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Right: Results */}
    <div className="space-y-6">
      <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
        <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-violet-600" />
          Results After 90 Days
        </h4>

        <div className="grid grid-cols-2 gap-4">
          {useCase.results.map((result, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white border border-slate-200"
            >
              <div className="text-3xl font-bold text-violet-600 mb-1">
                {result.value}
              </div>
              <div className="text-sm text-slate-500">{result.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="p-6 rounded-2xl border border-violet-200 bg-violet-50">
        <p className="text-slate-700 italic mb-4">
          "{useCase.quote}"
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
            {useCase.quoteAuthor.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div className="font-semibold text-slate-900">{useCase.quoteAuthor}</div>
            <div className="text-sm text-slate-500">{useCase.quoteRole}</div>
          </div>
        </div>
      </div>

      <a
        href="#contact"
        className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium transition-colors"
      >
        See how Kontrolity can help your {useCase.industry.toLowerCase()} team
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </motion.div>
);

export default function UseCasesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCase, setActiveCase] = useState(0);

  const useCases = [
    {
      icon: ShoppingCart,
      industry: 'E-Commerce',
      title: 'E-Commerce Platform',
      company: 'High-Scale Retail',
      story: 'A major e-commerce platform handling millions of transactions daily was struggling with incident management during peak seasons. Black Friday and holiday sales would result in cascading failures that took hours to diagnose.',
      challenge: 'Complex microservices architecture with 200+ services made root cause analysis extremely difficult. The on-call team was overwhelmed with alerts, and MTTR averaged 4+ hours during peak traffic.',
      solutions: [
        'Deployed KubeGraf across their Kubernetes clusters for autonomous incident detection',
        'AI-powered root cause analysis reduced diagnosis time from hours to minutes',
        'Automated scaling and self-healing actions prevented 89% of potential outages',
        'Natural language queries enabled any team member to investigate issues',
      ],
      results: [
        { value: '94%', label: 'Reduction in MTTR', color: 'text-violet-400' },
        { value: '$2.1M', label: 'Saved in downtime costs', color: 'text-emerald-400' },
        { value: '89%', label: 'Incidents auto-resolved', color: 'text-purple-400' },
        { value: '0', label: 'Major outages (Black Friday)', color: 'text-purple-400' },
      ],
      quote: "Kontrolity transformed our Black Friday. For the first time in 5 years, we had zero major incidents during peak traffic. The AI caught issues before they impacted customers.",
      quoteAuthor: "James Mitchell",
      quoteRole: "VP of Engineering",
    },
    {
      icon: Wallet,
      industry: 'FinTech',
      title: 'Payment Processing',
      company: 'Global Payment Provider',
      story: 'A fintech company processing billions in transactions needed zero-downtime operations. Regulatory requirements demanded instant incident response and detailed audit trails.',
      challenge: 'Strict SLAs with 99.999% uptime requirements. Complex compliance needs (PCI-DSS, SOC 2) required extensive documentation of all incident responses.',
      solutions: [
        'Implemented autonomous monitoring with compliance-aware remediation',
        'AI generates detailed incident reports for regulatory audits automatically',
        'Predictive failure detection prevents issues 30+ minutes before they occur',
        'Role-based access control ensures compliance with security requirements',
      ],
      results: [
        { value: '99.999%', label: 'Uptime achieved', color: 'text-violet-400' },
        { value: '30min', label: 'Early warning on failures', color: 'text-emerald-400' },
        { value: '100%', label: 'Compliance maintained', color: 'text-purple-400' },
        { value: '67%', label: 'Ops cost reduction', color: 'text-purple-400' },
      ],
      quote: "The autonomous compliance documentation alone saved us hundreds of hours. Every incident is automatically documented with root cause, actions taken, and prevention measures.",
      quoteAuthor: "Lisa Park",
      quoteRole: "CTO",
    },
    {
      icon: Heart,
      industry: 'Healthcare',
      title: 'Healthcare Platform',
      company: 'Digital Health Provider',
      story: 'A healthcare platform serving millions of patients needed bulletproof reliability. System downtime could directly impact patient care and violate HIPAA requirements.',
      challenge: 'Critical patient data systems required zero-tolerance for downtime. HIPAA compliance demanded strict access controls and audit logging for all system changes.',
      solutions: [
        'Deployed HIPAA-compliant autonomous monitoring across all systems',
        'AI-powered anomaly detection identifies security threats and performance issues',
        'Automated remediation with human-in-the-loop for critical patient systems',
        'Comprehensive audit trails for all AI decisions and actions',
      ],
      results: [
        { value: '100%', label: 'HIPAA compliance', color: 'text-violet-400' },
        { value: '78%', label: 'Reduction in on-call alerts', color: 'text-emerald-400' },
        { value: '3min', label: 'Avg incident resolution', color: 'text-purple-400' },
        { value: '$800K', label: 'Annual savings', color: 'text-purple-400' },
      ],
      quote: "In healthcare, every minute of downtime matters. Kontrolity gives us confidence that our systems are being watched 24/7 by an AI that understands our infrastructure better than we do.",
      quoteAuthor: "Dr. Robert Chen",
      quoteRole: "Chief Digital Officer",
    },
    {
      icon: Gamepad2,
      industry: 'Gaming',
      title: 'Gaming Infrastructure',
      company: 'AAA Game Studio',
      story: 'A major game studio with millions of concurrent players needed real-time infrastructure scaling and instant incident response during game launches and live events.',
      challenge: 'Massive traffic spikes during game launches and in-game events. Players expect sub-100ms latency globally, and any downtime results in massive revenue loss and player churn.',
      solutions: [
        'AI-powered auto-scaling that predicts player activity patterns',
        'Global infrastructure monitoring with latency optimization',
        'Automated rollback of problematic game server deployments',
        'Real-time player experience monitoring and proactive optimization',
      ],
      results: [
        { value: '<50ms', label: 'Average latency', color: 'text-violet-400' },
        { value: '10M+', label: 'Concurrent players supported', color: 'text-emerald-400' },
        { value: '0', label: 'Launch day outages', color: 'text-purple-400' },
        { value: '45%', label: 'Infra cost reduction', color: 'text-purple-400' },
      ],
      quote: "Our last game launch had zero downtime. The AI predicted traffic patterns and pre-scaled infrastructure. Our players had a flawless experience from minute one.",
      quoteAuthor: "Alex Turner",
      quoteRole: "Director of Live Ops",
    },
    {
      icon: Building2,
      industry: 'Enterprise',
      title: 'Enterprise SaaS',
      company: 'Fortune 500 Software',
      story: 'A Fortune 500 software company with thousands of enterprise customers needed to meet strict SLAs while managing a complex multi-tenant architecture.',
      challenge: 'Managing 5000+ enterprise customer environments with varying SLAs. Noisy neighbor problems and complex multi-tenant debugging were consuming engineering resources.',
      solutions: [
        'Tenant-aware monitoring that isolates and prioritizes by SLA tier',
        'AI automatically detects and resolves noisy neighbor issues',
        'Predictive capacity planning ensures resources for all tenants',
        'Automated SLA reporting and proactive customer communication',
      ],
      results: [
        { value: '99.95%', label: 'SLA achievement', color: 'text-violet-400' },
        { value: '82%', label: 'Reduction in support tickets', color: 'text-emerald-400' },
        { value: '5x', label: 'Faster tenant debugging', color: 'text-purple-400' },
        { value: '$3.2M', label: 'Annual savings', color: 'text-purple-400' },
      ],
      quote: "Managing thousands of enterprise tenants used to require a massive ops team. Now our AI handles most issues autonomously, and our customers have never been happier.",
      quoteAuthor: "Sarah Williams",
      quoteRole: "SVP of Engineering",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-200 mb-6">
            <Building2 className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-violet-600">Customer Success</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Proven Across{' '}
            <span className="text-violet-600">Every Industry</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how leading companies are transforming their infrastructure operations with autonomous AI.
          </p>
        </motion.div>

        {/* Industry Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {useCases.map((useCase, i) => (
            <UseCaseTab
              key={i}
              useCase={useCase}
              isActive={activeCase === i}
              onClick={() => setActiveCase(i)}
            />
          ))}
        </motion.div>

        {/* Case Study Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm"
        >
          <AnimatePresence mode="wait">
            <CaseStudyContent key={activeCase} useCase={useCases[activeCase]} />
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
