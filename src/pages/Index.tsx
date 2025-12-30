// Index.tsx
// Landing Page for CreatorFlow
// Modern, fresh, and conversion-focused design

import React from "react";
import { useTranslation } from "react-i18next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Settings, CheckCircle, RefreshCcw } from "lucide-react";

const Index = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 w-full max-w-4xl mx-auto py-12 px-4">
        {/* Hero Section */}
        <section className="text-center mb-20 animate-fade-in">
          <div className="relative flex flex-col items-center">
            <img
              src={t("index.heroImageSrc")}
              alt={t("index.heroImageAlt")}
              className="mx-auto rounded-3xl shadow-2xl mb-8 max-h-80 object-cover border-4 border-white animate-zoom-in"
              style={{ aspectRatio: '16/9' }}
            />
            <h1 className="text-5xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg animate-slide-down">
              {t("index.heroTitle")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up">
              {t("index.heroSubtitle")}
            </p>
            <a
              href="#"
              className="inline-block px-10 py-4 rounded-xl text-white font-bold text-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-cyan-500 to-indigo-500 animate-pop"
            >
              {t("index.ctaMain")}
            </a>
          </div>
        </section>
        {/* Benefits */}
        <section className="mb-20 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-10 text-center text-cyan-600">{t("index.benefitsTitle")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card text-card-foreground rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition group">
              <Settings className="h-10 w-10 mb-3 text-cyan-400 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">{t("index.benefit1Title")}</h3>
              <p className="text-muted-foreground text-sm">{t("index.benefit1Desc")}</p>
            </div>
            <div className="bg-card text-card-foreground rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition group">
              <CheckCircle className="h-10 w-10 mb-3 text-indigo-400 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">{t("index.benefit2Title")}</h3>
              <p className="text-muted-foreground text-sm">{t("index.benefit2Desc")}</p>
            </div>
            <div className="bg-card text-card-foreground rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition group">
              <RefreshCcw className="h-10 w-10 mb-3 text-indigo-500 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">{t("index.benefit3Title")}</h3>
              <p className="text-muted-foreground text-sm">{t("index.benefit3Desc")}</p>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="mb-20 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-10 text-center text-cyan-600">{t("index.testimonialsTitle")}</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[1,2].map((i) => (
              <div key={i} className="bg-card text-card-foreground rounded-2xl shadow-lg p-8 flex flex-col gap-4 hover:shadow-2xl transition">
                <div className="text-foreground font-semibold text-lg">{t(`index.testimonial${i}.name`)}</div>
                <div className="text-muted-foreground text-base italic">“{t(`index.testimonial${i}.content`)}”</div>
              </div>
            ))}
          </div>
        </section>
        {/* FAQ */}
        <section className="mb-20 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-10 text-center text-cyan-600">{t("index.faqTitle")}</h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[1,2].map((i) => (
              <details key={i} className="bg-muted rounded-xl p-4 group">
                <summary className="font-semibold cursor-pointer focus:outline-none group-open:text-cyan-600 transition">{t(`index.faq${i}.question`)}</summary>
                <div className="mt-2 text-muted-foreground text-base">{t(`index.faq${i}.answer`)}</div>
              </details>
            ))}
          </div>
        </section>
        {/* Final CTA */}
        <section className="text-center animate-fade-in-up">
          <a
            href="#"
            className="inline-block px-10 py-4 rounded-2xl text-white font-bold text-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-cyan-500 to-indigo-500 animate-pop"
          >
            {t("index.ctaNewsletter")}
          </a>
        </section>
      </main>
      <Footer />
      {/* Animaciones CSS */}
      <style>{`
        .animate-fade-in { animation: fadeIn 1s ease; }
        .animate-fade-in-up { animation: fadeInUp 1s ease; }
        .animate-zoom-in { animation: zoomIn 1.2s cubic-bezier(.4,2,.6,1); }
        .animate-slide-down { animation: slideDown 1.1s cubic-bezier(.4,2,.6,1); }
        .animate-pop { animation: popIn .7s cubic-bezier(.4,2,.6,1); }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: scale(1); } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes popIn { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
};

export default Index; 