import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CustomersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const customers = [
    'TechFlow', 'CloudNova', 'DataSync', 'DevOps360', 'InfraHub', 'SystemX',
    'NetCore', 'CodeBase', 'CloudFirst', 'AppScale', 'DataFlow', 'TechStack'
  ];

  return (
    <section id="customers" className="py-16 bg-slate-900 border-y border-white/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
            Trusted by infrastructure teams at
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {customers.map((customer, index) => (
            <motion.div
              key={customer}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center justify-center"
            >
              <div className="text-slate-600 font-semibold text-lg hover:text-slate-400 transition-colors cursor-default">
                {customer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
