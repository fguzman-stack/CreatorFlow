import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Section from '@/components/ui/section';
import { Search, Calendar, User, ArrowRight, TrendingUp, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const categories = t('blog.categories', { returnObjects: true });
  const blogPosts = t('blog.posts', { returnObjects: true });

  const featuredPosts = blogPosts.filter((post: any) => post.featured);
  const regularPosts = blogPosts.filter((post: any) => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <Section variant="gradient" padding="large">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-white mb-6">
            {t('blog.title')}
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            {t('blog.subtitle')}
          </p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder={t('blog.searchPlaceholder')}
              className="pl-10 bg-muted/20 border-border text-foreground placeholder:text-muted-foreground"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </Section>
      {/* Categories */}
      <Section padding="small">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category: string, idx: number) => (
            <Button
              key={category}
              variant={idx === 0 ? 'default' : 'outline'}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
      </Section>
      {/* Featured Posts */}
      <Section>
        <div className="mb-12">
          <h2 className="text-gradient mb-8 text-center">{t('blog.featuredTitle')}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {featuredPosts.map((post: any) => (
              <div key={post.id} className="h-full flex flex-col bg-card text-card-foreground rounded-2xl shadow-lg p-0 overflow-hidden border-2 border-transparent dark:border-0 group">
                <div className="p-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-500 rounded-2xl h-full flex flex-col">
                  <div className="bg-card rounded-2xl p-8 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{post.image}</span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="mb-4 transition-colors">
                      <Link to={`/blog/${post.id}`}
                        className="hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:bg-clip-text hover:text-transparent"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1 text-cyan-400" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-blue-400" />
                          <span>{new Date(post.date).toLocaleDateString(i18n.language === 'es' ? 'es-ES' : 'en-US')}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-indigo-400" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <Button className="btn-primary">
                        {t('blog.readArticle')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      {/* Regular Posts */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-gradient mb-8 text-center">{t('blog.latestTitle')}</h2>
          <div className="space-y-8">
            {regularPosts.map((post: any) => (
              <div key={post.id} className="p-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-500 rounded-2xl">
                <Card className="p-6 hover-lift bg-card text-card-foreground rounded-2xl">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-20 flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">
                        {post.image}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="mb-3 transition-colors">
                        <Link to={`/blog/${post.id}`}
                          className="hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:bg-clip-text hover:text-transparent"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{new Date(post.date).toLocaleDateString(i18n.language === 'es' ? 'es-ES' : 'en-US')}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <Link to={`/blog/${post.id}`}>
                          <Button variant="ghost" size="sm">
                            {t('blog.readMore')}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Section>
      {/* Newsletter Signup */}
      <Section variant="gradient">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-white mb-6">
            {t('blog.newsletterTitle')}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t('blog.newsletterSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('blog.newsletterPlaceholder')}
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="btn-secondary text-lg">
              {t('blog.subscribe')}
            </Button>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default Blog;