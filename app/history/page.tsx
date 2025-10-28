'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Clock, Search, Trash2, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/language-context';

interface HistoryItem {
  id: string;
  type: 'search' | 'builder';
  query?: string;
  qcode?: string;
  timestamp: Date;
}

export default function HistoryPage() {
  const { t } = useLanguage();
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    // TODO: Cargar historial desde localStorage
    // Por ahora, mostrar datos de ejemplo
    const sampleHistory: HistoryItem[] = [
      {
        id: '1',
        type: 'search',
        query: 'runway lighting',
        timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 min ago
      },
      {
        id: '2',
        type: 'builder',
        qcode: 'QMRLC',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      },
      {
        id: '3',
        type: 'search',
        query: 'QNMAS',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      },
    ];
    setHistory(sampleHistory);
  }, []);

  const clearHistory = () => {
    if (confirm(t.history.clearConfirm)) {
      setHistory([]);
      // TODO: Limpiar localStorage
    }
  };

  const deleteItem = (id: string) => {
    setHistory(history.filter((item) => item.id !== id));
    // TODO: Actualizar localStorage
  };

  const formatTimeAgo = (date: Date) => {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    if (seconds < 60) return t.history.justNow;
    if (seconds < 3600) return `${Math.floor(seconds / 60)} ${t.history.minutesAgo}`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)} ${t.history.hoursAgo}`;
    return `${Math.floor(seconds / 86400)} ${t.history.daysAgo}`;
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
            <h1 className="text-2xl font-bold">{t.history.title}</h1>
          </div>
          {history.length > 0 && (
            <Button variant="outline" size="sm" onClick={clearHistory}>
              <Trash2 className="w-4 h-4 mr-2" />
              {t.history.clearAll}
            </Button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {history.length === 0 ? (
          <Card className="bg-muted/50">
            <CardContent className="pt-6 text-center py-12">
              <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t.history.noHistory}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {t.history.noHistoryDesc}
              </p>
              <div className="flex gap-3 justify-center">
                <Button asChild variant="outline">
                  <Link href="/search">
                    <Search className="w-4 h-4 mr-2" />
                    {t.history.searchQCodes}
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/builder">{t.history.startBuilding}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{t.history.recentActivity}</CardTitle>
                <CardDescription>
                  {t.history.recentActivityDesc}
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="space-y-3">
              {history.map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {item.type === 'search' ? (
                            <Search className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          ) : (
                            <ExternalLink className="w-4 h-4 text-green-600 dark:text-green-400" />
                          )}
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            {item.type === 'search' ? t.history.search : t.history.builtQCode}
                          </span>
                        </div>

                        {item.type === 'search' ? (
                          <p className="text-lg mb-1">
                            {t.history.searchedFor}{' '}
                            <span className="font-semibold">{item.query}</span>
                          </p>
                        ) : (
                          <p className="text-lg mb-1">
                            {t.history.builtCode}{' '}
                            <code className="font-mono font-bold text-blue-600 dark:text-blue-400">
                              {item.qcode}
                            </code>
                          </p>
                        )}

                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{formatTimeAgo(item.timestamp)}</span>
                        </div>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteItem(item.id)}
                      >
                        <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-600" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t.history.searchLink}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href="/search">{t.history.openSearch}</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t.history.builderLink}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href="/builder">{t.history.openBuilder}</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t.history.libraryLink}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href="/library">{t.history.openLibrary}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
