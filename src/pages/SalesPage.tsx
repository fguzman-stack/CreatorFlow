import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Section from '@/components/ui/section';
import { CheckCircle, Clock, Users, Star, Shield, DollarSign, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SalesPage = () => {
  const { t } = useTranslation();
  const [selectedPackage, setSelectedPackage] = useState('pro');

  const packages = [
    {
      id: 'basic',
      name: 'Starter',
      price: 97,
      originalPrice: 197,
      features: [
        'Complete 150-page guide',
        'Proven copy templates',
        'Launch checklist',
        'Community access',
        'Email support'
      ]
    },
    {
      id: 'pro',
      name: 'Pro Bundle',
      price: 197,
      originalPrice: 397,
      featured: true,
      features: [
        'Everything in the Starter plan',
        '8+ hour video course',
        'Premium design templates',
        'Exclusive case studies',
        '1-on-1 strategy session',
        '60-day guarantee'
      ]
    },
    {
      id: 'vip',
      name: 'VIP Mastermind',
      price: 497,
      originalPrice: 997,
      features: [
        'Everything in the Pro Bundle',
        'Private VIP group',
        'Monthly live masterclasses',
        'Personalized project review',
        'Early access to new products',
        'Networking with top creators'
      ]
    }
  ];

  const packagesI18n = t('sales.packages', { returnObjects: true });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <Section variant="gradient" padding="large">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
              {t('sales.heroBadge')}
            </span>
          </div>
          <h1 className="text-white mb-6">
            {t('sales.heroTitle1')} <span className="text-secondary">{t('sales.heroTitle2')}</span> {t('sales.heroTitle3')}
            <span className="text-accent block">{t('sales.heroTitle4')}</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            {t('sales.heroSubtitle')}
          </p>
          <div className="flex justify-center items-center space-x-8 text-white/80 mb-8">
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              <span>{t('sales.heroStat1')}</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-2 text-yellow-400" />
              <span>{t('sales.heroStat2')}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>{t('sales.heroStat3')}</span>
            </div>
          </div>
        </div>
      </Section>
      {/* Problem/Solution */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gradient mb-6">{t('sales.problemTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-600 mb-6">{t('sales.problemBeforeTitle')}</h3>
              <div className="space-y-4">
                {t('sales.problemBefore', { returnObjects: true }).map((item: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-600 mb-6">{t('sales.problemAfterTitle')}</h3>
              <div className="space-y-4">
                {t('sales.problemAfter', { returnObjects: true }).map((item: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Bonuses Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-6">{t('sales.bonusesTitle')}</h2>
          <p className="text-xl text-muted-foreground">
            {t('sales.bonusesSubtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {t('sales.bonuses', { returnObjects: true }).map((bonus: any, index: number) => (
            <div key={index} className="p-0.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-600 to-blue-400 dark:bg-gradient-to-r dark:from-cyan-400 dark:via-blue-600 dark:to-blue-400">
              <Card className="feature-card bg-card text-card-foreground rounded-2xl">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold transition-colors dark:hover:bg-gradient-to-r dark:hover:from-cyan-400 dark:hover:to-blue-500 dark:hover:bg-clip-text dark:hover:text-transparent cursor-pointer">{bonus.title}</h3>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                    {t('sales.bonusesValue')}: {bonus.value}
                  </span>
                </div>
                <p className="text-muted-foreground">{bonus.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </Section>
      {/* Product Showcase */}
      <Section variant="muted">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-gradient mb-6">
              {t('sales.productTitle')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('sales.productSubtitle')}
            </p>
            <div className="space-y-6">
              {t('sales.modules', { returnObjects: true }).map((module: any, index: number) => (
                <div key={index} className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold mb-2">{module.title}</h4>
                  <p className="text-muted-foreground">{module.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center h-80">
              <DollarSign className="w-40 h-40 text-primary drop-shadow-lg" />
            </div>
            <div className="mt-8 p-6 bg-card text-card-foreground rounded-xl shadow-lg inline-block">
              <div className="text-3xl font-bold text-primary">{t('sales.productStat1')}</div>
              <div className="text-sm text-muted-foreground">{t('sales.productStat2')}</div>
              <div className="text-sm text-muted-foreground">{t('sales.productStat3')}</div>
            </div>
          </div>
        </div>
      </Section>
      {/* Pricing */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-6">{t('sales.pricingTitle')}</h2>
          <p className="text-xl text-muted-foreground">
            {t('sales.pricingSubtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => {
            const pkgI18n = packagesI18n.find((p: any) => p.id === pkg.id);
            return (
              <div
                key={pkg.id}
                className="group p-1.5 rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-600 to-blue-400 shadow-xl shadow-blue-900/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40"
              >
                <Card
                  className={`relative bg-[rgba(18,24,38,0.92)] backdrop-blur-xl text-card-foreground rounded-2xl w-full h-full border-0 transition-all duration-300 ${pkg.featured ? 'featured' : ''}`}
                >
                  {pkg.featured && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full text-base font-bold shadow-lg border-2 border-white/10">
                        {pkgI18n.popular || ''}
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6 pt-8">
                    <h3 className="text-3xl font-extrabold mb-2 text-gradient bg-clip-text text-transparent">{pkgI18n.name}</h3>
                    <div className="mb-4">
                      <span className="text-5xl font-extrabold text-primary drop-shadow-lg">${pkg.price}</span>
                      <span className="text-lg text-muted-foreground line-through ml-2">
                        ${pkg.originalPrice}
                      </span>
                    </div>
                    <div className="text-lg text-green-400 font-bold">
                      {pkgI18n.savings.replace('{{amount}}', (pkg.originalPrice - pkg.price).toString())}
                    </div>
                  </div>
                  <div className="space-y-4 mb-10 px-4">
                    {pkgI18n.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-base text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="px-6 pb-8">
                    <Button
                      className={`w-full min-w-[200px] text-lg font-bold rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg border-0 hover:from-blue-500 hover:to-cyan-400 transition-all duration-200 flex justify-center items-center gap-2 ${pkg.featured ? 'scale-105' : ''}`}
                      size="lg"
                      onClick={() => setSelectedPackage(pkg.id)}
                    >
                      {t('sales.selectPlan')}
                      <span className="flex items-center justify-center"><ArrowRight className="h-5 w-5" /></span>
                    </Button>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
        {/* Guarantee */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg p-6">
            <Shield className="h-12 w-12 text-green-600 mr-4" />
            <div className="text-left">
              <h4 className="font-bold text-green-800">{t('sales.guaranteeTitle')}</h4>
              <p className="text-green-700">
                {t('sales.guaranteeDesc')}
              </p>
            </div>
          </div>
        </div>
      </Section>
      {/* FAQ */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-gradient mb-16">{t('sales.faqTitle')}</h2>
          <div className="space-y-6">
            {t('sales.faq', { returnObjects: true }).map((faq: any, idx: number) => (
              <div key={idx} className="bg-muted rounded-xl p-6">
                <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      {/* CTA Final */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block mb-4 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-md">
            {t('sales.cta.offerBadge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gradient mb-4">
            {t('sales.cta.momentNowTitle')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('sales.cta.momentNowDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">{t('sales.cta.stat1')}</span>
              <span className="text-muted-foreground">{t('sales.cta.stat1Desc')}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">{t('sales.cta.stat2')}</span>
              <span className="text-muted-foreground">{t('sales.cta.stat2Desc')}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">{t('sales.cta.stat3')}</span>
              <span className="text-muted-foreground">{t('sales.cta.stat3Desc')}</span>
            </div>
          </div>
          <Button size="lg" className="btn-primary text-lg">
            {t('sales.cta.buyNow')}
          </Button>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default SalesPage; 