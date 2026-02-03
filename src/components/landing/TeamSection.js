import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Users,
  Linkedin,
  Twitter,
  Building2,
  Rocket,
  Award,
  MapPin,
  ArrowRight
} from 'lucide-react';

// Team Member Card
const TeamMember = ({ member, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group relative"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

    <div className="relative p-6 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl hover:border-violet-500/30 transition-all">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white mb-4">
        {member.initials}
      </div>

      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
      <p className="text-violet-400 font-medium mb-2">{member.role}</p>
      <p className="text-sm text-slate-400 mb-4">{member.bio}</p>

      {/* Previous Companies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {member.previousCompanies.map((company, i) => (
          <span key={i} className="px-2 py-1 rounded-lg bg-slate-800/50 border border-white/5 text-xs text-slate-400">
            {company}
          </span>
        ))}
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-3">
        {member.linkedin && (
          <a href={member.linkedin} className="text-slate-400 hover:text-violet-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        )}
        {member.twitter && (
          <a href={member.twitter} className="text-slate-400 hover:text-violet-400 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

// Investor/Backer Card
const BackerCard = ({ backer, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex items-center justify-center p-6 rounded-xl border border-white/10 bg-slate-900/30 hover:border-white/20 transition-all"
  >
    <div className="text-center">
      <div className="text-xl font-bold text-slate-300 tracking-wider mb-2">{backer.name}</div>
      <div className="text-sm text-slate-500">{backer.type}</div>
    </div>
  </motion.div>
);

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const team = [
    {
      name: 'Puvendhan M.',
      initials: 'PM',
      role: 'Founder & CEO',
      bio: 'Former infrastructure lead at scale. Building the future of autonomous ops.',
      previousCompanies: ['Ex-Scale', 'Cloud Native'],
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Sarah Chen',
      initials: 'SC',
      role: 'CTO',
      bio: 'AI/ML expert with 15+ years building intelligent systems at scale.',
      previousCompanies: ['Ex-Google', 'Ex-Meta'],
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Alex Rodriguez',
      initials: 'AR',
      role: 'Head of Engineering',
      bio: 'Platform engineering veteran. Former SRE lead at major cloud provider.',
      previousCompanies: ['Ex-AWS', 'Ex-Datadog'],
      linkedin: '#',
    },
    {
      name: 'Emily Watson',
      initials: 'EW',
      role: 'VP of Product',
      bio: 'Product leader focused on developer experience and infrastructure tooling.',
      previousCompanies: ['Ex-GitLab', 'Ex-HashiCorp'],
      linkedin: '#',
      twitter: '#',
    },
  ];

  const backers = [
    { name: 'Y COMBINATOR', type: 'Accelerator' },
    { name: 'SEQUOIA', type: 'Venture Capital' },
    { name: 'ANDREESSEN', type: 'Venture Capital' },
    { name: 'GREYLOCK', type: 'Venture Capital' },
  ];

  const milestones = [
    {
      icon: Rocket,
      title: 'Founded',
      value: '2024',
      description: 'Started in Scotland, UK',
    },
    {
      icon: Building2,
      title: 'Customers',
      value: '50+',
      description: 'Enterprise customers',
    },
    {
      icon: Award,
      title: 'Recognition',
      value: 'Top 10',
      description: 'DevOps Startup 2024',
    },
    {
      icon: Users,
      title: 'Team',
      value: '25+',
      description: 'Engineers & researchers',
    },
  ];

  return (
    <section ref={ref} className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-[128px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Built by{' '}
            <span className="gradient-text-purple">Infrastructure Veterans</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We've lived the pain of managing complex infrastructure at scale. Now we're building the solution.
          </p>
        </motion.div>

        {/* Company Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {milestones.map((milestone, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-white/10 bg-slate-900/30 backdrop-blur-xl text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/20 mb-4">
                <milestone.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{milestone.value}</div>
              <div className="text-sm font-medium text-slate-300">{milestone.title}</div>
              <div className="text-xs text-slate-500">{milestone.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-10">Leadership Team</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <TeamMember key={i} member={member} delay={0.4 + i * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* Backed By */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-xl font-bold text-white text-center mb-2">Backed By</h3>
          <p className="text-slate-400 text-center mb-10">Trusted by the world's leading investors</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {backers.map((backer, i) => (
              <BackerCard key={i} backer={backer} delay={0.7 + i * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* Location & Culture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="p-8 rounded-2xl border border-white/10 bg-slate-900/30 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-violet-400" />
              <h4 className="text-xl font-bold text-white">Headquartered in Scotland</h4>
            </div>
            <p className="text-slate-400 mb-4">
              Built in the UK, serving teams globally. We're a remote-first company with team members across Europe and North America.
            </p>
            <p className="text-sm text-slate-500">
              Edinburgh, Scotland, United Kingdom
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-xl">
            <h4 className="text-xl font-bold text-white mb-4">Join Our Mission</h4>
            <p className="text-slate-400 mb-6">
              We're building the future of infrastructure automation. If you're passionate about AI, infrastructure, and developer experience, we want to hear from you.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 text-slate-900 font-semibold hover:from-violet-400 hover:to-purple-400 transition-all"
            >
              View Open Positions
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
