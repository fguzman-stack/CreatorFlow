import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Section from '@/components/ui/section';
import { 
  Calendar, User, Clock, Share2, Bookmark, 
  ArrowLeft, ArrowRight, CheckCircle, TrendingUp, DollarSign, AlertTriangle 
} from 'lucide-react';
import { siteConfig } from '../config';
import { useTranslation } from 'react-i18next';

const BlogPost = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();

  // Usar post1 del archivo de traducción
  const post = t('blogPost.post1', { returnObjects: true });

  const relatedPosts = [
    {
      id: 2,
      title: "5 Mistakes That Kill Your Online Sales",
      excerpt: "The most common mistakes creators make...",
      readTime: "6 min"
    },
    {
      id: 3,
      title: "Success Story: From $0 to $50K in 90 Days",
      excerpt: "Real story of Ana, a consultant who turned...",
      readTime: "12 min"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Back to Blog mejorado */}
      <Section padding="small">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center px-6 py-3 rounded-full text-lg font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 text-white shadow-lg hover:scale-105 transition-transform gap-2">
            <ArrowLeft className="h-5 w-5" />
            {t('blogPost.backToBlog')}
          </Link>
        </div>
      </Section>
      {/* Article Header */}
      <Section variant="gradient" padding="large">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <span className="inline-block mb-4 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-400 to-indigo-500 text-white shadow-md">
                {post.category}
              </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">
              {post.title}
            </h1>
          <p className="text-lg md:text-xl text-white/90 text-center mb-6 max-w-2xl">
              {post.subtitle}
            </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {post.tags && post.tags.map((tag: string, index: number) => (
              <span key={index} className="px-3 py-1 rounded-full bg-cyan-900/20 text-cyan-300 text-xs font-semibold">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/80 mb-6">
            <div className="flex items-center"><User className="h-4 w-4 mr-2" />{post.author}</div>
            <div className="flex items-center"><Calendar className="h-4 w-4 mr-2" />{new Date(post.date).toLocaleDateString(i18n.language === 'es' ? 'es-ES' : 'en-US')}</div>
            <div className="flex items-center"><Clock className="h-4 w-4 mr-2" />{post.readTime}</div>
              </div>
          <div className="flex gap-3 mb-8">
            <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-primary"><Share2 className="h-4 w-4 mr-2" />{t('blogPost.share')}</Button>
            <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-primary"><Bookmark className="h-4 w-4 mr-2" />{t('blogPost.save')}</Button>
              </div>
          {/* Icono moderno en vez de imagen */}
          <div className="w-full mb-10 flex justify-center">
            <div className="flex items-center justify-center p-1 rounded-3xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-blue-500 shadow-xl w-32 h-32">
              <TrendingUp className="w-20 h-20 text-white drop-shadow-lg" />
            </div>
          </div>
        </div>
      </Section>
      {/* Article Content en card con borde degradado y fondo decorado */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-r from-cyan-400 via-indigo-500 to-blue-400 shadow-2xl shadow-cyan-200/30 animate-fade-in">
            {/* Ribbon superior */}
            <div className="absolute -top-7 left-8 flex items-center gap-2 z-10 animate-bounce-in">
              <div className="bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full p-3 shadow-lg">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <span className="bg-white dark:bg-card/80 text-cyan-600 dark:text-cyan-300 font-bold px-4 py-2 rounded-full shadow border border-cyan-200 dark:border-cyan-700 text-base">Case Study</span>
            </div>
            {/* Fondo decorativo con patrón de puntos */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white via-white/80 to-blue-50 dark:from-card dark:via-card/80 dark:to-blue-950 bg-dots pointer-events-none" />
            <div className="relative bg-transparent rounded-[2.5rem] p-10 md:p-16 text-left z-10">
              {/* Contenido principal con jerarquía visual */}
              <div className="prose prose-lg prose-invert prose-headings:text-white max-w-none text-slate-100">
                {post.content.map((block: any, idx: number) => {
                  if (block.type === 'p') return <p key={idx}>{block.text}</p>;
                  if (block.type === 'h2') return <h2 key={idx} className="text-gray-900 dark:text-gradient animate-slide-up">{block.text}</h2>;
                  if (block.type === 'ol') return <ol key={idx} className="list-decimal pl-6 space-y-2">{block.items.map((item: string, i: number) => <li key={i}>{item}</li>)}</ol>;
                  if (block.type === 'ul') return <ul key={idx} className="list-disc pl-6 space-y-1">{block.items.map((item: string, i: number) => <li key={i}>{item}</li>)}</ul>;
                  return null;
                })}
              </div>
            </div>
          </div>
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <h4 className="font-semibold mb-4 text-gradient">Tags:</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-gradient-to-r from-cyan-400 to-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow hover:scale-105 transition-transform cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>
      {/* Autor y CTA */}
      <Section>
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-400 to-blue-400 flex items-center justify-center mb-2">
              <User className="h-12 w-12 text-white/90" />
            </div>
            <div className="font-bold text-lg text-center">{t('blogPost.authorName')}</div>
          </div>
          <div className="flex-1 text-muted-foreground text-center md:text-left">
            {t('blogPost.authorDesc')}
            <div className="mt-4">
              <Button variant="outline" size="sm" className="border-primary text-primary font-bold">
                {t('blogPost.viewMoreArticles')}
              </Button>
            </div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-bold mb-2">{t('blogPost.likeArticleTitle')}</h3>
          <p className="mb-4 text-muted-foreground">{t('blogPost.likeArticleDesc')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="btn-primary text-lg">{t('blogPost.viewProducts')}</Button>
            <Button variant="outline" className="text-primary border-primary font-bold">{t('blogPost.subscribeNewsletter')}</Button>
          </div>
        </div>
      </Section>
      {/* Artículos relacionados */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">{t('blogPost.relatedArticles')}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {post.related && post.related.map((rel: any, idx: number) => (
              <Card key={rel.title} className="p-6 bg-card text-card-foreground rounded-2xl flex flex-col gap-4">
                <div className="font-bold text-lg">{rel.title}</div>
                <div className="text-muted-foreground">{rel.excerpt}</div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-4 w-4" />{rel.readTime}
                </div>
                <Button variant="link" className="text-primary font-bold w-fit px-0">
                  {t('blogPost.readMore')}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default BlogPost; 