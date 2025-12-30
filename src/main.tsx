import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import "./i18n";

const container = document.getElementById('root');
const root = createRoot(container!);

function ThemeInit() {
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  return null;
}

root.render(
  <React.StrictMode>
    <ThemeInit />
    <App />
  </React.StrictMode>
); 