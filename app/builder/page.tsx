'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Check, Copy, CheckCircle2, Search } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/language-context';
import { searchQCodes, QCode } from '@/lib/db/qcodes-data';

export default function BuilderPage() {
  const { t, language } = useLanguage();
  const [step, setStep] = useState(1);
  const [copied, setCopied] = useState(false);
  const [qCode, setQCode] = useState({
    subject: '',
    condition: '',
  });

  // Subject codes (2nd & 3rd letter) - Common ICAO subjects
  const subjectOptions = [
    { code: 'MR', labelEn: 'Runway', labelEs: 'Pista', description: 'Runway related' },
    { code: 'MT', labelEn: 'Taxiway', labelEs: 'Calle de Rodaje', description: 'Taxiway related' },
    { code: 'MA', labelEn: 'Apron', labelEs: 'Plataforma', description: 'Apron/parking area' },
    { code: 'NM', labelEn: 'VOR', labelEs: 'VOR', description: 'VHF Omni Range' },
    { code: 'ND', labelEn: 'DME', labelEs: 'DME', description: 'Distance Measuring Equipment' },
    { code: 'NI', labelEn: 'ILS', labelEs: 'ILS', description: 'Instrument Landing System' },
    { code: 'NB', labelEn: 'NDB', labelEs: 'NDB', description: 'Non-Directional Beacon' },
    { code: 'NG', labelEn: 'GNSS', labelEs: 'GNSS', description: 'GNSS/GPS system' },
    { code: 'NH', labelEn: 'ATS Route', labelEs: 'Ruta ATS', description: 'ATS route' },
    { code: 'WD', labelEn: 'Danger Area', labelEs: 'Área Peligrosa', description: 'Danger area' },
    { code: 'WR', labelEn: 'Restricted', labelEs: 'Área Restringida', description: 'Restricted area' },
    { code: 'WP', labelEn: 'Prohibited', labelEs: 'Área Prohibida', description: 'Prohibited area' },
    { code: 'WM', labelEn: 'Military', labelEs: 'Ejercicio Militar', description: 'Military exercise' },
    { code: 'WA', labelEn: 'Airspace', labelEs: 'Espacio Aéreo', description: 'General airspace' },
    { code: 'FA', labelEn: 'Aerodrome', labelEs: 'Aeródromo', description: 'Aerodrome facilities' },
    { code: 'OB', labelEn: 'Obstacle', labelEs: 'Obstáculo', description: 'Obstacle' },
    { code: 'OL', labelEn: 'Obstacle Light', labelEs: 'Luz Obstáculo', description: 'Obstacle lighting' },
    { code: 'CA', labelEn: 'ATC', labelEs: 'ATC', description: 'Air Traffic Control' },
    { code: 'CV', labelEn: 'VHF Comm', labelEs: 'Com VHF', description: 'VHF Communication' },
    { code: 'WT', labelEn: 'Turbulence', labelEs: 'Turbulencia', description: 'Turbulence' },
    { code: 'PI', labelEn: 'Procedure', labelEs: 'Procedimiento', description: 'Instrument procedure' },
    { code: 'WB', labelEn: 'Birds', labelEs: 'Aves', description: 'Bird activity' },
    { code: 'WL', labelEn: 'Laser', labelEs: 'Láser', description: 'Laser activity' },
    { code: 'SA', labelEn: 'Surveillance', labelEs: 'Vigilancia', description: 'Surveillance/radar' },
  ];

  // Condition codes (4th & 5th letter)
  const conditionOptions = [
    { code: 'XX', labelEn: 'Closed/Not Available', labelEs: 'Cerrado/No disponible' },
    { code: 'LC', labelEn: 'Conditions', labelEs: 'Condiciones' },
    { code: 'LT', labelEn: 'Lighting', labelEs: 'Iluminación' },
    { code: 'AS', labelEn: 'Unserviceable', labelEs: 'Fuera de servicio' },
    { code: 'LG', labelEn: 'Glideslope', labelEs: 'Senda de planeo' },
    { code: 'LL', labelEn: 'Localizer', labelEs: 'Localizador' },
    { code: 'PN', labelEn: 'PAPI', labelEs: 'PAPI' },
    { code: 'CT', labelEn: 'Contamination', labelEs: 'Contaminación' },
    { code: 'OB', labelEn: 'Obstruction', labelEs: 'Obstrucción' },
    { code: 'WK', labelEn: 'Work in Progress', labelEs: 'Trabajos en curso' },
    { code: 'FR', labelEn: 'Friction', labelEs: 'Fricción' },
    { code: 'CN', labelEn: 'Change', labelEs: 'Cambio' },
    { code: 'TT', labelEn: 'Air Traffic Services', labelEs: 'Servicios de tránsito aéreo' },
    { code: 'RH', labelEn: 'Rescue/Fire', labelEs: 'Rescate/Incendios' },
    { code: 'FU', labelEn: 'Fuel', labelEs: 'Combustible' },
    { code: 'CH', labelEn: 'Change/Modification', labelEs: 'Cambio/Modificación' },
    { code: 'AU', labelEn: 'Authorized', labelEs: 'Autorizado' },
  ];

  const buildQCode = () => {
    if (!qCode.subject || !qCode.condition) return '';
    return `Q${qCode.subject}${qCode.condition}`;
  };

  const findMatchingQCode = (): QCode | null => {
    const built = buildQCode();
    if (!built) return null;

    const results = searchQCodes(built);
    return results.length > 0 ? results[0] : null;
  };

  const copyToClipboard = () => {
    const code = buildQCode();
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getDescription = (qcode: QCode) => {
    return language === 'es' ? qcode.descriptionEs : qcode.description;
  };

  const matchedQCode = findMatchingQCode();

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
            <h1 className="text-2xl font-bold">{t.builder.title}</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Progress Steps */}
        <div className="mb-8 flex items-center justify-center gap-2">
          {[1, 2].map((s) => (
            <div
              key={s}
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${s <= step
                ? 'bg-blue-600 border-blue-600 text-white'
                : 'border-gray-300 text-gray-400'
                }`}
            >
              {s < step ? <Check className="w-5 h-5" /> : s}
            </div>
          ))}
        </div>

        {/* Current Q-Code Display */}
        <Card className="mb-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{t.builder.currentQCode}</p>
              <div className="flex items-center justify-center gap-3">
                <p className="text-3xl font-mono font-bold text-blue-900 dark:text-blue-100">
                  {buildQCode() || 'Q____'}
                </p>
                {buildQCode() && (
                  <Button
                    onClick={copyToClipboard}
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    {copied ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </Button>
                )}
              </div>
              {matchedQCode && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-700 dark:text-green-400">
                      {language === 'es' ? '¡Código encontrado!' : 'Code found!'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {getDescription(matchedQCode)}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2 justify-center">
                    <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                      {matchedQCode.category}
                    </span>
                    <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                      {matchedQCode.subject} - {matchedQCode.condition}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Step 1: Subject */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'es' ? 'Paso 1: Selecciona el asunto' : 'Step 1: Select subject'}
              </CardTitle>
              <CardDescription>
                {language === 'es'
                  ? 'Elige el tipo de instalación o servicio (2º y 3º letra)'
                  : 'Choose the facility or service type (2nd & 3rd letter)'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 max-h-96 overflow-y-auto">
              {subjectOptions.map((option) => (
                <button
                  key={option.code}
                  onClick={() => {
                    setQCode({ ...qCode, subject: option.code });
                    setStep(2);
                  }}
                  className="w-full p-4 text-left border rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                          {option.code}
                        </span>
                        <span className="font-semibold">
                          {language === 'es' ? option.labelEs : option.labelEn}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">{option.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Step 2: Condition */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'es' ? 'Paso 2: Selecciona la condición' : 'Step 2: Select condition'}
              </CardTitle>
              <CardDescription>
                {language === 'es'
                  ? 'Elige el estado o condición específica (4º y 5º letra)'
                  : 'Choose the specific status or condition (4th & 5th letter)'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {conditionOptions.map((option) => (
                  <button
                    key={option.code}
                    onClick={() => {
                      setQCode({ ...qCode, condition: option.code });
                    }}
                    className="w-full p-4 text-left border rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-500 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                        {option.code}
                      </span>
                      {' - '}
                      <span>{language === 'es' ? option.labelEs : option.labelEn}</span>
                    </div>
                  </button>
                ))}
              </div>
              <Button variant="outline" onClick={() => setStep(1)} className="w-full mt-4">
                {t.builder.back}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Info Card */}
        {buildQCode() && (
          <Card className="mt-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Search className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                      {language === 'es' ? '¿Quieres buscar más códigos?' : 'Want to search more codes?'}
                    </h3>
                    <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                      {language === 'es'
                        ? 'Busca en nuestra base de datos de códigos Q oficiales'
                        : 'Search our database of official Q-codes'}
                    </p>
                    <div className="flex gap-2">
                      <Button asChild variant="outline" size="sm">
                        <Link href="/search">
                          {language === 'es' ? 'Ir a búsqueda' : 'Go to search'}
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setQCode({ subject: '', condition: '' });
                          setStep(1);
                        }}
                      >
                        {language === 'es' ? 'Nuevo código' : 'New code'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Instructions Card */}
        {step === 1 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">
                {language === 'es' ? 'Estructura del código Q' : 'Q-Code structure'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex gap-3">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 w-16">Q</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {language === 'es' ? 'Prefijo fijo para todos los códigos NOTAM' : 'Fixed prefix for all NOTAM codes'}
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 w-16">2º-3º</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {language === 'es' ? 'Asunto (instalación o servicio)' : 'Subject (facility or service)'}
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400 w-16">4º-5º</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {language === 'es' ? 'Condición (estado o condición específica)' : 'Condition (status or specific condition)'}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
