import React from 'react';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'owl';
  timestamp: Date;
}

export type Theme = 'light' | 'dark';

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
}