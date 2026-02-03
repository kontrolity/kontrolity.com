import React from 'react';
import Navbar from '../src/components/landing/Navbar';
import Footer from '../src/components/landing/Footer';
import { motion } from 'framer-motion';
import { MessageCircle, Users, Calendar, Award, Github, Twitter, Linkedin, MessageSquare, HelpCircle, Lightbulb, ArrowRight, ExternalLink } from 'lucide-react';

export default function Community() {
  const communityChannels = [
    {
      icon: MessageCircle,
      title: 'Discussion Forum',
      description: 'Ask questions, share knowledge, and connect with other Kontrolity users',
      members: '5,000+',
      link: '#forum',
      color: 'from-violet-500 to-blue-500'
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'Contribute to open-source projects, report issues, and see our roadmap',
      members: '2,500+',
      link: '#github',
      color: 'from-purple-500 to-pink-500',
      external: true
    },
    {
      icon: MessageSquare,
      title: 'Discord Server',
      description: 'Real-time chat with the community, get instant help, and join events',
      members: '8,000+',
      link: '#discord',
      color: 'from-indigo-500 to-purple-500',
      external: true
    },
    {
      icon: Twitter,
      title: 'Twitter',
      description: 'Follow us for updates, tips, and news from the Kontrolity ecosystem',
      members: '12,000+',
      link: '#twitter',
      color: 'from-blue-400 to-violet-400',
      external: true
    }
  ];

  const events = [
    {
      title: 'Kontrolity Community Meetup',
      date: 'January 25, 2026',
      time: '10:00 AM PST',
      type: 'Virtual',
      description: 'Monthly community meetup to discuss best practices and new features'
    },
    {
      title: 'Advanced Kubernetes Workshop',
      date: 'February 5, 2026',
      time: '2:00 PM PST',
      type: 'Workshop',
      description: 'Hands-on workshop on advanced Kubernetes management with Kontrolity'
    },
    {
      title: 'Office Hours with Engineering Team',
      date: 'Every Friday',
      time: '3:00 PM PST',
      type: 'Q&A',
      description: 'Weekly session where you can ask questions directly to our engineers'
    }
  ];

  const contributionTypes = [
    {
      icon: HelpCircle,
      title: 'Answer Questions',
      description: 'Help other community members solve problems and share your expertise'
    },
    {
      icon: Lightbulb,
      title: 'Share Ideas',
      description: 'Propose new features and improvements to make Kontrolity better'
    },
    {
      icon: Github,
      title: 'Contribute Code',
      description: 'Submit pull requests and help build the future of Kontrolity'
    },
    {
      icon: MessageCircle,
      title: 'Write Content',
      description: 'Create tutorials, guides, and blog posts to help others learn'
    }
  ];

  const ambassadors = [
    {
      name: 'Alex Thompson',
      role: 'DevOps Expert',
      contributions: 'Top contributor with 500+ forum answers',
      avatar: Users
    },
    {
      name: 'Maria Garcia',
      role: 'Cloud Architect',
      contributions: 'Created 20+ community tutorials',
      avatar: Users
    },
    {
      name: 'James Lee',
      role: 'Security Specialist',
      contributions: 'Lead organizer of community meetups',
      avatar: Users
    }
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
              Join the{' '}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-purple-400 bg-clip-text text-transparent">
                Community
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Connect with developers, operators, and infrastructure enthusiasts from around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '25,000+', label: 'Community Members' },
              { value: '500+', label: 'Weekly Active Users' },
              { value: '50+', label: 'Countries' },
              { value: '1,000+', label: 'Open Source Contributors' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Connect With Us</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Choose your preferred platform to engage with the community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {communityChannels.map((channel, index) => (
              <motion.a
                key={index}
                href={channel.link}
                target={channel.external ? '_blank' : undefined}
                rel={channel.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-violet-500/30 transition-all overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${channel.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <channel.icon className="w-7 h-7 text-violet-400" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm">
                      <Users className="w-4 h-4" />
                      {channel.members}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{channel.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">{channel.description}</p>

                  <div className="flex items-center gap-2 text-violet-400 font-medium">
                    Join Now
                    {channel.external ? (
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    ) : (
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    )}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Upcoming Events</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Join our events to learn, network, and grow with the community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 hover:border-violet-500/30 transition-all"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium mb-4">
                  {event.type}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{event.description}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-4 h-4 text-violet-400" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-4 h-4 text-violet-400" />
                    {event.time}
                  </div>
                </div>

                <button className="mt-6 w-full px-4 py-2 text-sm font-semibold text-slate-900 bg-gradient-to-r from-violet-400 to-purple-400 hover:from-violet-300 hover:to-purple-300 rounded-lg transition-all">
                  Register
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ways to Contribute</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Every contribution makes a difference
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contributionTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 hover:border-violet-500/30 transition-all text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{type.title}</h3>
                <p className="text-sm text-slate-400">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Ambassadors */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Community Ambassadors</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Meet the leaders making our community thrive
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {ambassadors.map((ambassador, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-violet-500/30 transition-all text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <ambassador.avatar className="w-10 h-10 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{ambassador.name}</h3>
                <div className="text-violet-400 text-sm mb-4">{ambassador.role}</div>
                <p className="text-sm text-slate-400">{ambassador.contributions}</p>
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
            className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-3xl p-12 border border-violet-500/20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Involved?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Join thousands of developers building the future of infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#forum"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-gradient-to-r from-violet-400 to-purple-400 hover:from-violet-300 hover:to-purple-300 rounded-xl transition-all shadow-lg shadow-violet-500/25"
              >
                Join Discussion Forum
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/documentation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-white/10"
              >
                View Documentation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
