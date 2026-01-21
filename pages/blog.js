import React from 'react';
import Navbar from '../src/components/landing/Navbar';
import Footer from '../src/components/landing/Footer';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag, TrendingUp, Sparkles, Shield, Database } from 'lucide-react';

export default function Blog() {
  const featuredPost = {
    title: 'Introducing Autonomous Infrastructure: The Future of DevOps',
    excerpt: 'Discover how AI-powered autonomous systems are revolutionizing infrastructure management and what it means for the future of DevOps teams.',
    author: 'Engineering Team',
    date: 'January 15, 2026',
    readTime: '8 min read',
    category: 'Product Updates',
    image: Sparkles,
    featured: true
  };

  const posts = [
    {
      title: 'How We Reduced MTTR by 80% with AI Control Layer',
      excerpt: 'A deep dive into the architecture and algorithms powering our autonomous incident response system.',
      author: 'Sarah Chen',
      date: 'January 12, 2026',
      readTime: '6 min read',
      category: 'Technical',
      image: TrendingUp
    },
    {
      title: 'Security Best Practices for Cloud-Native Infrastructure',
      excerpt: 'Essential security guidelines for managing Kubernetes clusters and containerized workloads at scale.',
      author: 'Michael Rodriguez',
      date: 'January 10, 2026',
      readTime: '10 min read',
      category: 'Security',
      image: Shield
    },
    {
      title: 'Understanding Context Engine: Multi-Source Data Correlation',
      excerpt: 'Learn how our Context Engine aggregates and correlates data from multiple sources to provide actionable insights.',
      author: 'Jennifer Williams',
      date: 'January 8, 2026',
      readTime: '7 min read',
      category: 'Technology',
      image: Database
    },
    {
      title: 'Case Study: Fortune 500 Company Achieves 99.99% Uptime',
      excerpt: 'How a leading financial services company transformed their infrastructure reliability with Kontrolity.',
      author: 'Customer Success Team',
      date: 'January 5, 2026',
      readTime: '5 min read',
      category: 'Case Study',
      image: TrendingUp
    },
    {
      title: 'The Evolution of Infrastructure Observability',
      excerpt: 'From basic monitoring to autonomous intelligence: tracking the evolution of infrastructure observability.',
      author: 'Engineering Team',
      date: 'January 3, 2026',
      readTime: '9 min read',
      category: 'Insights',
      image: Sparkles
    },
    {
      title: 'Building Resilient Systems with Dependency Mapping',
      excerpt: 'Discover how automatic dependency mapping helps identify bottlenecks and prevent cascading failures.',
      author: 'David Kim',
      date: 'December 30, 2025',
      readTime: '6 min read',
      category: 'Technical',
      image: Database
    }
  ];

  const categories = [
    'All Posts',
    'Product Updates',
    'Technical',
    'Security',
    'Case Study',
    'Insights'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Posts');

  const filteredPosts = selectedCategory === 'All Posts'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

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
              Kontrolity{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Latest updates, insights, and stories from the world of autonomous infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl overflow-hidden border border-cyan-500/30 hover:border-cyan-500/50 transition-all group cursor-pointer">
              <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Content */}
                <div className="flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6 w-fit">
                    <Sparkles className="w-4 h-4" />
                    Featured Post
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all"
                  >
                    Read Article
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

                {/* Visual */}
                <div className="flex items-center justify-center bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-2xl p-12">
                  <featuredPost.image className="w-32 h-32 text-cyan-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-900'
                    : 'bg-slate-800/50 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/30 text-slate-300 hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all group cursor-pointer"
              >
                {/* Image Placeholder */}
                <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 p-12 flex items-center justify-center">
                  <post.image className="w-16 h-16 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs text-cyan-400 font-medium">{post.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-sm text-slate-400">{post.author}</span>
                    <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="px-8 py-4 text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-white/10">
              Load More Articles
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Subscribe to our newsletter for the latest updates and insights
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
              <button className="px-8 py-4 text-base font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-xl transition-all shadow-lg shadow-cyan-500/25 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
