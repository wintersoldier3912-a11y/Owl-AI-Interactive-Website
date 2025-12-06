import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ChatDemo } from './components/ChatDemo';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      
      <main>
        <Hero />
        
        <Features />

        {/* Interactive Demo Section */}
        <section id="demo" className="py-24 bg-owl-50 dark:bg-slate-900/50 transition-colors duration-300 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute -left-10 top-20 w-72 h-72 bg-purple-300 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
             <div className="absolute -right-10 bottom-20 w-72 h-72 bg-blue-300 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Experience Intelligence <br />
                  <span className="text-owl-600 dark:text-owl-400">In Real Time</span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Try our interactive demo to see how Owl AI processes natural language. 
                  Ask questions, request summaries, or just say hello to the wisest bird in the cloud.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {['Natural Language Processing', 'Context Awareness', 'Sub-second Latency'].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 dark:text-slate-300">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 text-green-600 dark:text-green-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <ChatDemo />
                {/* Floating decorative badge */}
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 hidden md:block animate-bounce [animation-duration:3s]">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-800 flex items-center justify-center text-xs">
                           <img src={`https://picsum.photos/32/32?random=${i}`} alt="User" className="w-full h-full rounded-full object-cover"/>
                        </div>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      10k+ Users
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;