'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, ArrowLeft, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/language-context';
import { searchQCodes, QCode } from '@/lib/db/qcodes-data';

export default function SearchPage() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<QCode[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const results = searchQCodes(searchQuery);
    setSearchResults(results);
    setHasSearched(true);
  };

  const getDescription = (qcode: QCode) => {
    return language === 'es' ? qcode.descriptionEs : qcode.description;
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
            <h1 className="text-2xl font-bold">{t.search.title}</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Search Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{t.search.title}</CardTitle>
            <CardDescription>
              {t.search.subtitle}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.search.placeholder}
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700"
              />
              <Button type="submit">
                <Search className="w-4 h-4 mr-2" />
                {t.search.search}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Search Results */}
        {hasSearched && (
          <>
            {searchResults.length > 0 ? (
              <>
                <div className="mb-4 text-sm text-muted-foreground">
                  {language === 'es'
                    ? `${searchResults.length} resultado${searchResults.length !== 1 ? 's' : ''} encontrado${searchResults.length !== 1 ? 's' : ''}`
                    : `${searchResults.length} result${searchResults.length !== 1 ? 's' : ''} found`
                  }
                </div>
                <div className="space-y-4">
                  {searchResults.map((qcode, idx) => (
                    <Card key={idx} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <code className="text-2xl font-mono font-bold text-blue-600 dark:text-blue-400">
                                {qcode.code}
                              </code>
                              <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                                {qcode.category}
                              </span>
                            </div>
                            <CardTitle className="text-xl mb-1">
                              {getDescription(qcode)}
                            </CardTitle>
                            <CardDescription className="text-base">
                              {language === 'es'
                                ? `${qcode.subject} - ${qcode.condition}`
                                : `${qcode.subject} - ${qcode.condition}`
                              }
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      {qcode.examples && qcode.examples.length > 0 && (
                        <CardContent>
                          <div className="bg-muted p-3 rounded-md">
                            <p className="text-xs font-semibold mb-2 text-muted-foreground">
                              {language === 'es' ? 'Ejemplo:' : 'Example:'}
                            </p>
                            <code className="text-sm font-mono">
                              {qcode.examples[0]}
                            </code>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              <Card className="bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">
                        {language === 'es' ? 'Sin resultados' : 'No results found'}
                      </h3>
                      <p className="text-sm text-yellow-800 dark:text-yellow-200">
                        {language === 'es'
                          ? `No se encontraron códigos Q que coincidan con "${searchQuery}". Intenta con otro término de búsqueda.`
                          : `No Q-codes found matching "${searchQuery}". Try a different search term.`
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </>
        )}

        {/* Quick Links */}
        {!hasSearched && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.search.builderLink}</CardTitle>
                <CardDescription>{t.search.builderLinkDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/builder">{t.search.openBuilder}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.search.libraryLink}</CardTitle>
                <CardDescription>{t.search.libraryLinkDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/library">{t.search.openLibrary}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
