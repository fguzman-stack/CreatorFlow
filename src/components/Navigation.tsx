// Navigation.tsx
// Main navigation bar for CreatorFlow

import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import LanguageSwitcher from "./common/LanguageSwitcher";
import { useTranslation } from 'react-i18next';

function setDarkMode(enabled: boolean) {
  if (enabled) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

const Navigation = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkModeState] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  useEffect(() => {
    setDarkMode(darkMode);
  }, [darkMode]);
  const navItems = [
    { href: "/", label: t('nav.home') },
    { href: "/blog", label: t('nav.blog') },
    { href: "/course", label: t('nav.course') },
    { href: "/sales", label: t('nav.sales') },
  ];
  return (
    <nav className="bg-background/80 backdrop-blur border-b border-border shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between py-4 px-4 sm:px-6">
        <a href="/" className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent font-sans select-none drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg transition-shadow">
          CreatorFlow
        </a>
        <div className="flex items-center gap-2">
          {/* Desktop nav */}
          <ul className="hidden sm:flex gap-8 text-base font-extrabold tracking-tight font-sans">
            {navItems.map((item) => (
              <li key={item.href}>
                <div className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-500 p-[3px] rounded-full group">
                  <a
                    href={item.href}
                    className="block px-6 py-2 rounded-full bg-background font-extrabold text-base text-foreground transition-all duration-200 hover:shadow-lg"
                  >
                    <span className="transition-all duration-200 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:via-indigo-500 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent" style={{ display: 'inline-block' }}>{item.label}</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
          {/* Language switcher (desktop) */}
          <div className="hidden sm:block ml-4">
            <LanguageSwitcher />
          </div>
          {/* Dark mode switch */}
          <button
            className="ml-2 p-2 rounded-full hover:bg-muted focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            onClick={() => setDarkModeState((d) => !d)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-indigo-600" />}
          </button>
          {/* Hamburger icon */}
          <button
            className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            {menuOpen ? <X className="w-7 h-7 text-cyan-600" /> : <Menu className="w-7 h-7 text-cyan-600" />}
          </button>
        </div>
      </div>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="sm:hidden fixed inset-0 bg-white z-50" onClick={() => setMenuOpen(false)}>
          <div className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-2xl p-0 flex flex-col animate-slide-in rounded-l-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <a href="/" className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent font-sans select-none drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg transition-shadow">
                CreatorFlow
              </a>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X className="w-7 h-7 text-cyan-600" />
              </button>
            </div>
            <div className="px-2 pt-2 pb-8">
              <div className="bg-white rounded-2xl shadow-lg pt-4 pb-4 px-2 flex flex-col gap-4 min-h-[320px]" style={{marginTop: '0.5rem'}}>
                <ul className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <div className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-500 p-[3px] rounded-full">
                        <a
                          href={item.href}
                          className="block px-6 py-2 rounded-full bg-background font-extrabold text-lg text-foreground transition-all duration-200 text-center"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
                {/* Language switcher (mobile) */}
                <div className="mt-6 flex justify-center">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </div>
          <style>{`
            @keyframes slide-in {
              from { transform: translateX(100%); }
              to { transform: translateX(0); }
            }
            .animate-slide-in {
              animation: slide-in 0.25s cubic-bezier(0.4,0,0.2,1);
            }
          `}</style>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 