import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { Message } from '../types';

const CANNED_RESPONSES = [
  "Whoooo — that's a very wise question!",
  "Let me ponder that under the moonlight...",
  "To find the answer, one must first understand the question.",
  "My algorithms indicate a high probability of success.",
  "Interesting... tell me more about your project."
];

export const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Greetings! I am Owl AI. How can I help you make wiser decisions today?",
      sender: 'owl',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMsg: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI delay
    setTimeout(() => {
      const randomResponse = CANNED_RESPONSES[Math.floor(Math.random() * CANNED_RESPONSES.length)];
      const newOwlMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: 'owl',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newOwlMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(date);
  };

  return (
    <div 
      className="w-full max-w-md mx-auto bg-white dark:bg-slate-900 rounded-xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col h-[500px]"
      role="region"
      aria-label="Chat Interface"
    >
      {/* Chat Header */}
      <div className="bg-owl-600 p-4 flex items-center space-x-3 text-white shadow-sm z-10">
        <div className="p-1.5 bg-white/20 rounded-full" aria-hidden="true">
          <Bot size={20} />
        </div>
        <div>
          <h3 className="font-semibold text-sm">Owl Assistant</h3>
          <p className="text-xs text-owl-100 flex items-center gap-1">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            Online
          </p>
        </div>
      </div>

      {/* Messages Area */}
      <div 
        className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50 dark:bg-slate-950/50"
        role="log"
        aria-live="polite"
        aria-atomic="false"
        aria-relevant="additions"
        tabIndex={0}
        aria-label="Chat history"
      >
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-end ${isUser ? 'justify-end' : 'justify-start'} group`}
            >
               {/* Owl Avatar */}
               {!isUser && (
                  <div className="mr-2 flex-shrink-0 mb-7" aria-hidden="true">
                    <div className="w-8 h-8 rounded-full bg-owl-100 dark:bg-owl-900 flex items-center justify-center border border-owl-200 dark:border-owl-800">
                      <Bot size={16} className="text-owl-600 dark:text-owl-400" />
                    </div>
                  </div>
               )}

              <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[80%]`}>
                <div
                  className={`rounded-2xl px-4 py-2.5 text-sm relative shadow-sm transition-colors ${
                    isUser
                      ? 'bg-owl-600 text-white rounded-br-none'
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-bl-none'
                  }`}
                >
                  {/* SR-only text adds 'said:' context which reads better than just the name */}
                  <span className="sr-only">
                    {isUser ? 'You said:' : 'Owl AI said:'}
                  </span>
                  <p className="leading-relaxed">{msg.text}</p>
                </div>
                <time 
                  className={`text-[10px] text-slate-400 dark:text-slate-500 mt-1 px-1 block font-medium ${isUser ? 'text-right' : 'text-left'}`}
                  dateTime={msg.timestamp.toISOString()}
                >
                  <span className="sr-only">Sent at </span>{formatTime(msg.timestamp)}
                </time>
              </div>

              {/* User Avatar */}
               {isUser && (
                  <div className="ml-2 flex-shrink-0 mb-7" aria-hidden="true">
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center border border-slate-300 dark:border-slate-700">
                      <User size={16} className="text-slate-500 dark:text-slate-400" />
                    </div>
                  </div>
               )}
            </div>
          );
        })}
        
        {isTyping && (
          <div className="flex justify-start items-end" role="status" aria-live="polite">
             <div className="mr-2 flex-shrink-0" aria-hidden="true">
                  <div className="w-8 h-8 rounded-full bg-owl-100 dark:bg-owl-900 flex items-center justify-center border border-owl-200 dark:border-owl-800">
                    <Bot size={16} className="text-owl-600 dark:text-owl-400" />
                  </div>
            </div>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl rounded-bl-none px-4 py-3 flex space-x-1 items-center shadow-sm">
              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" aria-hidden="true"></span>
              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" aria-hidden="true"></span>
              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" aria-hidden="true"></span>
              <span className="sr-only">Owl AI is typing...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} tabIndex={-1} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSendMessage} className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="flex space-x-2">
          <label htmlFor="chat-input" className="sr-only">Type your message</label>
          <input
            id="chat-input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask anything..."
            className="flex-1 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-owl-500 transition-colors text-sm placeholder:text-slate-400"
            autoComplete="off"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className="p-2.5 bg-owl-600 hover:bg-owl-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-owl-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            aria-label="Send message"
          >
            <Send size={18} aria-hidden="true" />
          </button>
        </div>
      </form>
    </div>
  );
};