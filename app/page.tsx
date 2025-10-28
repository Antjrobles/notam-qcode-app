'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Wrench, BookOpen, History } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/language-context';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-4">{t.home.title}</h1>
          <p className="text-xl mb-8 text-blue-100">
            {t.home.subtitle}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" variant="secondary">
              <Link href="/search">
                <Search className="w-5 h-5 mr-2" />
                {t.home.startSearching}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
              <Link href="/builder">
                <Wrench className="w-5 h-5 mr-2" />
                {t.home.qcodeBuilder}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t.home.features}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Search className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle>{t.home.searchIdentify}</CardTitle>
                <CardDescription>
                  {t.home.searchIdentifyDesc}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="px-0">
                  <Link href="/search">{t.home.trySearch}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wrench className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle>{t.home.builderTitle}</CardTitle>
                <CardDescription>
                  {t.home.builderDesc}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="px-0">
                  <Link href="/builder">{t.home.openBuilder}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle>{t.home.quickReference}</CardTitle>
                <CardDescription>
                  {t.home.quickReferenceDesc}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="px-0">
                  <Link href="/library">{t.home.viewLibrary}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <History className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle>{t.home.recentHistory}</CardTitle>
                <CardDescription>
                  {t.home.recentHistoryDesc}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="px-0">
                  <Link href="/history">{t.home.viewHistory}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 px-4 mt-16">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>NOTAM Q-Code Identifier - Built for Aviation Professionals</p>
          <p className="text-sm mt-2">
            Based on ICAO Annex 15 and PANS-AIM (Doc 10066) standards
          </p>
        </div>
      </footer>
    </div>
  );
}
