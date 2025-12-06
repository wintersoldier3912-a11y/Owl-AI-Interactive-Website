import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
            <span className="mr-2">🦉</span> Owl AI
          </span>
          <p className="text-sm text-slate-500 mt-2">
            © {new Date().getFullYear()} Owl AI Technologies. All rights reserved.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-slate-500 hover:text-owl-600 transition-colors">Privacy</a>
          <a href="#" className="text-slate-500 hover:text-owl-600 transition-colors">Terms</a>
          <a href="#" className="text-slate-500 hover:text-owl-600 transition-colors">Twitter</a>
          <a href="#" className="text-slate-500 hover:text-owl-600 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};