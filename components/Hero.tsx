import React from 'react';
import { OwlMascot } from './OwlMascot';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-owl-50 dark:bg-owl-900/30 text-owl-600 dark:text-owl-300 text-sm font-medium mb-6 animate-fade-in-up">
              <span className="flex h-2 w-2 rounded-full bg-owl-500 mr-2 animate-pulse"></span>
              v2.0 is now live
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
              Wisdom at the <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-owl-600 to-indigo-600 dark:from-owl-400 dark:to-indigo-400">
                Speed of Thought
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience the next generation of AI assistant. Owl AI helps you make smarter decisions with concise, data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-owl-600 rounded-full hover:bg-owl-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-owl-600 hover:scale-105">
                Start Chatting
                <ArrowRight className="ml-2 -mr-1" size={20} />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 transition-all duration-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200">
                View Documentation
              </button>
            </div>
          </div>

          {/* Graphic/Mascot */}
          <div className="relative flex justify-center items-center">
            {/* Background Blob */}
            <div className="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-gradient-to-tr from-owl-200 to-purple-200 dark:from-owl-900/20 dark:to-purple-900/20 rounded-full filter blur-3xl opacity-70 animate-pulse"></div>
            
            {/* Mascot */}
            <div className="relative z-10 w-64 h-64 lg:w-96 lg:h-96 animate-float">
              <OwlMascot className="w-full h-full drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};