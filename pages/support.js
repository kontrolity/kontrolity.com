import React from 'react';
import Navbar from '../src/components/landing/Navbar';
import Footer from '../src/components/landing/Footer';
import { motion } from 'framer-motion';
import { HelpCircle, MessageCircle, Mail, BookOpen, ArrowRight } from 'lucide-react';

export default function Support() {
  const channels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      action: 'Start Chat',
      href: '#contact'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      action: 'Send Email',
      href: 'mailto:contact@kontrolity.com'
    },
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Browse our comprehensive guides',
      action: 'View Docs',
      href: '/documentation'
    },
    {
      icon: HelpCircle,
      title: 'Community',
      description: 'Ask questions in our community forum',
      action: 'Join Community',
      href: '/community'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Support
              </span>
            </h1>
            <p className="text-xl text-slate-400">
              We're here to help you succeed
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {channels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-violet-500/30 transition-all"
            >
              <channel.icon className="w-12 h-12 text-violet-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">{channel.title}</h3>
              <p className="text-slate-400 mb-6">{channel.description}</p>
              <a
                href={channel.href}
                className="inline-flex items-center gap-2 text-violet-400 font-semibold hover:gap-3 transition-all"
              >
                {channel.action} <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
