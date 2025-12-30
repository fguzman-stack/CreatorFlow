import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Section from '@/components/ui/section';
import { 
  Play, Users, Clock, Star, CheckCircle, BookOpen, 
  Video, Download, MessageSquare, Award, Calendar,
  ArrowRight, Shield, Zap, User
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CourseLanding = () => {
  const { t } = useTranslation();
  const modules = t('course.modules', { returnObjects: true });
  const bonuses = t('course.bonuses', { returnObjects: true });
  const features = t('course.features', { returnObjects: true });
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDark(document.documentElement.classList.contains('dark'));
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <Section variant="gradient" padding="large">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
                🚀 {t('course.heroBadge')}
              </span>
            </div>
            <h1 className="text-white mb-6">
              <span
                className="text-gradient text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text dark:text-black dark:bg-none dark:bg-clip-border dark:text-opacity-100"
              >
                {t('course.heroTitle1')}
              </span>
              <br />
              {t('course.heroTitle2')}
              <span className="text-accent block">{t('course.heroTitle3')}</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t('course.heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="btn-secondary text-lg">
                <Play className="mr-2 h-5 w-5" />
                {t('course.heroBtn1')}
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                <span className="dark:text-black dark:hover:bg-gradient-to-r dark:hover:from-cyan-400 dark:hover:to-blue-400 dark:hover:bg-clip-text dark:hover:text-transparent transition-colors">
                  {t('course.heroBtn2')}
                </span>
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">19+</div>
                <div className="text-sm">{t('course.heroStat1')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">70+</div>
                <div className="text-sm">{t('course.heroStat2')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">2,500+</div>
                <div className="text-sm">{t('course.heroStat3')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">4.9</div>
                <div className="text-sm">{t('course.heroStat4')}</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/30 rounded-2xl p-8 shadow-xl dark:shadow-cyan-800/20">
              <div className="text-center mb-6">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-cyan-400 via-indigo-400 to-blue-400 border-4 border-white/20 shadow-lg">
                  <User className="h-16 w-16 text-white/90" />
                </div>
                <h3 className="text-white font-bold">{t('course.heroAuthor')}</h3>
                <p className="text-white/70">{t('course.heroAuthorDesc')}</p>
              </div>
              <div className="space-y-4 text-white/90">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span>{t('course.heroFact1')}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span>{t('course.heroFact2')}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span>{t('course.heroFact3')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Course Overview */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-6">{t('course.featuresTitle')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('course.featuresSubtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature: any, index: number) => (
            <div key={index} className="p-0.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-500 dark:bg-gradient-to-r dark:from-cyan-500 dark:via-indigo-500 dark:to-blue-500">
              <Card className="feature-card text-center bg-card text-card-foreground rounded-2xl w-full h-full">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="mb-4 transition-colors dark:hover:bg-gradient-to-r dark:hover:from-cyan-400 dark:hover:to-blue-500 dark:hover:bg-clip-text dark:hover:text-transparent cursor-pointer">{t(`course.features.${index}.title`)}</h3>
                <p className="text-muted-foreground">{t(`course.features.${index}.description`)}</p>
              </Card>
            </div>
          ))}
        </div>
      </Section>
      {/* Curriculum */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gradient mb-6">{t('course.curriculumTitle')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('course.curriculumSubtitle')}
            </p>
          </div>
          <div className="space-y-6">
            {modules.map((module: any, index: number) => (
              <div key={index} className="p-0.5 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-500 dark:bg-gradient-to-r dark:from-cyan-500 dark:via-indigo-500 dark:to-blue-500">
                <div className="p-6 bg-card rounded-full flex items-center gap-6 shadow-lg hover:shadow-2xl transition">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-base font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1 transition-colors dark:hover:bg-gradient-to-r dark:hover:from-cyan-400 dark:hover:to-blue-500 dark:hover:bg-clip-text dark:hover:text-transparent cursor-pointer">{module.title}</h3>
                    <p className="text-muted-foreground mb-2 text-sm">{module.description}</p>
                    <div className="flex items-center space-x-6 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{module.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Video className="h-4 w-4 mr-1" />
                        <span>{module.lessons} {t('course.lessons')}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      {/* Bonuses */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-6">{t('course.bonusesTitle')}</h2>
          <p className="text-xl text-muted-foreground">
            {t('course.bonusesSubtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bonuses.map((bonus: any, index: number) => (
            <div key={index} className="p-0.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-600 to-blue-400 dark:bg-gradient-to-r dark:from-cyan-400 dark:via-blue-600 dark:to-blue-400">
              <Card className="feature-card bg-card text-card-foreground rounded-2xl">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold transition-colors dark:hover:bg-gradient-to-r dark:hover:from-cyan-400 dark:hover:to-blue-500 dark:hover:bg-clip-text dark:hover:text-transparent cursor-pointer">{bonus.title}</h3>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                    {t('course.value')}: {bonus.value}
                  </span>
                </div>
                <p className="text-muted-foreground">{bonus.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default CourseLanding;