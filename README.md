# 🦉 Owl AI — Wise Answers, Human Heart

**Owl AI** is a modern, responsive marketing website and interactive demo for a fictional AI product. Built with **React 18**, **TypeScript**, and **Tailwind CSS**, it features a sleek design, system-aware dark mode, and an accessible chat interface that simulates AI interactions.

![Owl AI Demo](https://placehold.co/1200x600/0284c7/ffffff?text=Owl+AI+Preview)

## ✨ Features

- **Responsive & Mobile-First**: A layout that adapts perfectly from mobile phones to large desktop screens.
- **Interactive Chat Demo**: A functional chat widget with:
  - Simulated AI latency and responses.
  - Typing indicators.
  - Accessible message history (`aria-live` regions).
- **Dark/Light Theme**: 
  - Toggles between light and dark modes.
  - Persists user preference to `localStorage`.
  - Respects system `prefers-color-scheme`.
- **Modern UI**:
  - Animated SVG Mascot.
  - Glassmorphism effects in the navbar.
  - Smooth transitions and micro-interactions.
- **Accessibility (a11y)**:
  - Semantic HTML structure.
  - Keyboard navigation support.
  - Screen-reader friendly dynamic updates.

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/) (via TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tooling**: [Vite](https://vitejs.dev/)

## 🚀 Quick Start

Follow these steps to get the project running on your local machine.

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/owl-ai.git
   cd owl-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit `http://localhost:5173` to view the app.

## 📂 Project Structure

```text
owl-ai/
├── components/          # Reusable UI components
│   ├── ChatDemo.tsx     # Main interactive chat widget
│   ├── Features.tsx     # Grid layout for features
│   ├── Hero.tsx         # Landing page hero section
│   ├── Navbar.tsx       # Responsive navigation & theme toggle
│   ├── OwlMascot.tsx    # Animated SVG component
│   └── Footer.tsx       # Site footer
├── hooks/
│   └── useTheme.ts      # Custom hook for dark mode logic
├── types.ts             # Shared TypeScript interfaces
├── App.tsx              # Main application layout
├── index.tsx            # Entry point
└── index.html           # HTML template with Tailwind CDN config
```

## 🧩 Interactive Elements

### Chat Demo
Located in the "Demo" section, this widget simulates a real AI conversation.
- **Try it out**: Type a question like "Hello" or "Help me".
- **Behavior**: The "AI" will show a typing indicator and respond with a randomized wise quote after a short delay.
- **Accessibility**: The chat log uses `role="log"` and `aria-live="polite"` to ensure screen readers announce new incoming messages without interrupting the user.

### Theme Toggle
Click the **Sun/Moon** icon in the top navigation bar to switch themes. The app remembers your choice for your next visit.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and create a pull request for any features or fixes.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
