import React from 'react';
import { Zap, Shield, Smartphone, Globe, Brain, Clock } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: 'Instant Wisdom',
    description: 'Get concise, accurate answers generated in milliseconds by our optimized lightweight models.',
    icon: Zap
  },
  {
    title: 'Private by Default',
    description: 'Your data stays yours. We employ end-to-end encryption and zero-retention policies.',
    icon: Shield
  },
  {
    title: 'Mobile First',
    description: 'Designed for the modern web. Owl AI runs perfectly on your phone, tablet, or desktop.',
    icon: Smartphone
  },
  {
    title: 'Global Knowledge',
    description: 'Trained on a diverse dataset covering over 50 languages and millions of topics.',
    icon: Globe
  },
  {
    title: 'Adaptive Learning',
    description: 'Our context-aware engine remembers the details of your conversation for better continuity.',
    icon: Brain
  },
  {
    title: '24/7 Availability',
    description: 'Owl AI never sleeps. Access wisdom whenever you need it, day or night.',
    icon: Clock
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Why Choose Owl AI?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            Smart, fast, and kind. We're building the future of conversational interfaces with a human touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-white dark:bg-slate-950 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 dark:border-slate-800 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-owl-100 dark:bg-owl-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-owl-600 dark:text-owl-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};