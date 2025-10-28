'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ChevronDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/language-context';
import { getCategories, getQCodesByCategory, QCode } from '@/lib/db/qcodes-data';

export default function LibraryPage() {
  const { t, language } = useLanguage();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories = useMemo(() => getCategories(), []);

  const getCategoryQCodes = (category: string) => {
    return getQCodesByCategory(category);
  };

  const getDescription = (qcode: QCode) => {
    return language === 'es' ? qcode.descriptionEs : qcode.description;
  };

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  // Mapeo de nombres de categorías traducidos
  const getCategoryName = (category: string) => {
    const categoryMap: Record<string, { en: string; es: string }> = {
      'Runway': { en: 'Runway', es: 'Pista' },
      'Taxiway': { en: 'Taxiway', es: 'Calle de Rodaje' },
      'Apron': { en: 'Apron', es: 'Plataforma' },
      'Navigation Aids': { en: 'Navigation Aids', es: 'Ayudas a la Navegación' },
      'Airspace': { en: 'Airspace', es: 'Espacio Aéreo' },
      'Aerodrome Services': { en: 'Aerodrome Services', es: 'Servicios de Aeródromo' },
      'Obstacles': { en: 'Obstacles', es: 'Obstáculos' },
      'Communications': { en: 'Communications', es: 'Comunicaciones' },
      'Procedures': { en: 'Procedures', es: 'Procedimientos' },
      'Warnings': { en: 'Warnings', es: 'Advertencias' },
      'Surveillance': { en: 'Surveillance', es: 'Vigilancia' },
    };
    return categoryMap[category]?.[language] || category;
  };

  const getCategoryDescription = (category: string) => {
    const descMap: Record<string, { en: string; es: string }> = {
      'Runway': {
        en: 'Q-codes related to runway conditions, closures, and operations',
        es: 'Códigos Q relacionados con condiciones de pista, cierres y operaciones'
      },
      'Taxiway': {
        en: 'Q-codes for taxiway conditions and operations',
        es: 'Códigos Q para condiciones y operaciones de calles de rodaje'
      },
      'Apron': {
        en: 'Q-codes for apron and parking areas',
        es: 'Códigos Q para plataformas y áreas de estacionamiento'
      },
      'Navigation Aids': {
        en: 'Q-codes for navigation equipment and facilities',
        es: 'Códigos Q para equipos e instalaciones de navegación'
      },
      'Airspace': {
        en: 'Q-codes related to airspace restrictions and changes',
        es: 'Códigos Q relacionados con restricciones y cambios en el espacio aéreo'
      },
      'Aerodrome Services': {
        en: 'Q-codes for aerodrome facilities and services',
        es: 'Códigos Q para instalaciones y servicios de aeródromo'
      },
      'Obstacles': {
        en: 'Q-codes for obstacles and obstructions',
        es: 'Códigos Q para obstáculos y obstrucciones'
      },
      'Communications': {
        en: 'Q-codes for communication services',
        es: 'Códigos Q para servicios de comunicación'
      },
      'Procedures': {
        en: 'Q-codes for procedures and operations',
        es: 'Códigos Q para procedimientos y operaciones'
      },
      'Warnings': {
        en: 'Q-codes for hazards and warnings',
        es: 'Códigos Q para peligros y advertencias'
      },
      'Surveillance': {
        en: 'Q-codes for surveillance and radar systems',
        es: 'Códigos Q para sistemas de vigilancia y radar'
      },
    };
    return descMap[category]?.[language] || '';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="sm">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t.nav.back}
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">{t.library.title}</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{t.library.browseTitle}</CardTitle>
            <CardDescription>
              {t.library.subtitle}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Categories */}
        <div className="space-y-4">
          {categories.map((category) => {
            const qcodes = getCategoryQCodes(category);
            return (
              <Card key={category}>
                <CardHeader
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => toggleCategory(category)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">
                          {getCategoryName(category)}
                        </CardTitle>
                        <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                          {qcodes.length}
                        </span>
                      </div>
                      <CardDescription className="mt-1">
                        {getCategoryDescription(category)}
                      </CardDescription>
                    </div>
                    {expandedCategory === category ? (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </div>
                </CardHeader>

                {expandedCategory === category && (
                  <CardContent>
                    <div className="space-y-2">
                      {qcodes.map((qcode, idx) => (
                        <div
                          key={idx}
                          className="p-3 bg-muted rounded-lg hover:bg-muted/70 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <code className="font-mono font-bold text-blue-600 dark:text-blue-400 text-sm flex-shrink-0">
                              {qcode.code}
                            </code>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">
                                {getDescription(qcode)}
                              </p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                {qcode.subject} - {qcode.condition}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>

        {/* Info Card */}
        <Card className="mt-8 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>{t.library.note}</strong>{' '}
              {language === 'es'
                ? `Base de datos actualizada con ${getCategories().length} categorías y múltiples códigos Q oficiales según ICAO Annex 15.`
                : `Database updated with ${getCategories().length} categories and multiple official Q-codes according to ICAO Annex 15.`
              }
            </p>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t.library.searchQCodes}</CardTitle>
              <CardDescription>{t.library.searchQCodesDesc}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href="/search">{t.library.openSearch}</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t.library.buildQCode}</CardTitle>
              <CardDescription>{t.library.buildQCodeDesc}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href="/builder">{t.library.openBuilder}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
