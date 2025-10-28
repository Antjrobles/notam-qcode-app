// NOTAM Q-Codes Database based on ICAO Annex 15 and PANS-AIM standards
// Categories: Runway, Taxiway, Apron, Navigation Aids, Airspace, Aerodrome Services, Obstacles, Facilities

export interface QCode {
  code: string;
  subject: string;
  condition: string;
  category: string;
  subcategory: string;
  description: string;
  descriptionEs: string;
  examples?: string[];
}

export const qcodesDatabase: QCode[] = [
  // RUNWAY CODES (QM)
  {
    code: 'QMRXX',
    subject: 'Runway',
    condition: 'Closed',
    category: 'Runway',
    subcategory: 'Closure',
    description: 'Runway closed',
    descriptionEs: 'Pista cerrada',
    examples: ['RWY 09/27 CLOSED DUE MAINTENANCE'],
  },
  {
    code: 'QMRLC',
    subject: 'Runway',
    condition: 'Surface conditions',
    category: 'Runway',
    subcategory: 'Conditions',
    description: 'Runway surface conditions',
    descriptionEs: 'Condiciones de la superficie de pista',
    examples: ['RWY 16 SURFACE: 50% WET'],
  },
  {
    code: 'QMRLT',
    subject: 'Runway',
    condition: 'Lighting',
    category: 'Runway',
    subcategory: 'Lighting',
    description: 'Runway lighting unserviceable',
    descriptionEs: 'Iluminación de pista fuera de servicio',
    examples: ['RWY 34 EDGE LIGHTS U/S'],
  },
  {
    code: 'QMRPN',
    subject: 'Runway',
    condition: 'PAPI',
    category: 'Runway',
    subcategory: 'Lighting',
    description: 'PAPI unserviceable',
    descriptionEs: 'PAPI fuera de servicio',
    examples: ['RWY 27 PAPI U/S'],
  },
  {
    code: 'QMRAS',
    subject: 'Runway',
    condition: 'Approach lighting',
    category: 'Runway',
    subcategory: 'Lighting',
    description: 'Approach lighting system unserviceable',
    descriptionEs: 'Sistema de iluminación de aproximación fuera de servicio',
  },
  {
    code: 'QMRCT',
    subject: 'Runway',
    condition: 'Threshold',
    category: 'Runway',
    subcategory: 'Operations',
    description: 'Runway threshold changed',
    descriptionEs: 'Umbral de pista modificado',
  },
  {
    code: 'QMROB',
    subject: 'Runway',
    condition: 'Obstacle',
    category: 'Runway',
    subcategory: 'Obstacles',
    description: 'Obstacle in runway area',
    descriptionEs: 'Obstáculo en área de pista',
  },

  // TAXIWAY CODES (QM)
  {
    code: 'QMTXX',
    subject: 'Taxiway',
    condition: 'Closed',
    category: 'Taxiway',
    subcategory: 'Closure',
    description: 'Taxiway closed',
    descriptionEs: 'Calle de rodaje cerrada',
    examples: ['TWY B CLOSED'],
  },
  {
    code: 'QMTLT',
    subject: 'Taxiway',
    condition: 'Lighting',
    category: 'Taxiway',
    subcategory: 'Lighting',
    description: 'Taxiway lighting unserviceable',
    descriptionEs: 'Iluminación de calle de rodaje fuera de servicio',
  },

  // APRON CODES (QM)
  {
    code: 'QMAXX',
    subject: 'Apron',
    condition: 'Closed',
    category: 'Apron',
    subcategory: 'Closure',
    description: 'Apron closed',
    descriptionEs: 'Plataforma cerrada',
  },
  {
    code: 'QMALT',
    subject: 'Apron',
    condition: 'Lighting',
    category: 'Apron',
    subcategory: 'Lighting',
    description: 'Apron lighting unserviceable',
    descriptionEs: 'Iluminación de plataforma fuera de servicio',
  },

  // NAVIGATION AIDS - VOR (QN)
  {
    code: 'QNMAS',
    subject: 'VOR',
    condition: 'Unserviceable',
    category: 'Navigation Aids',
    subcategory: 'VOR',
    description: 'VOR unserviceable',
    descriptionEs: 'VOR fuera de servicio',
    examples: ['VOR ABC U/S'],
  },
  {
    code: 'QNMLT',
    subject: 'VOR',
    condition: 'Limited',
    category: 'Navigation Aids',
    subcategory: 'VOR',
    description: 'VOR limited service',
    descriptionEs: 'VOR servicio limitado',
  },

  // NAVIGATION AIDS - DME (QN)
  {
    code: 'QNDXX',
    subject: 'DME',
    condition: 'Unserviceable',
    category: 'Navigation Aids',
    subcategory: 'DME',
    description: 'DME unserviceable',
    descriptionEs: 'DME fuera de servicio',
    examples: ['DME XYZ U/S'],
  },

  // NAVIGATION AIDS - ILS (QN)
  {
    code: 'QNILS',
    subject: 'ILS',
    condition: 'Unserviceable',
    category: 'Navigation Aids',
    subcategory: 'ILS',
    description: 'ILS unserviceable',
    descriptionEs: 'ILS fuera de servicio',
    examples: ['ILS RWY 16 U/S'],
  },
  {
    code: 'QNILG',
    subject: 'ILS',
    condition: 'Glidepath',
    category: 'Navigation Aids',
    subcategory: 'ILS',
    description: 'ILS glidepath unserviceable',
    descriptionEs: 'Senda de planeo ILS fuera de servicio',
  },
  {
    code: 'QNILL',
    subject: 'ILS',
    condition: 'Localizer',
    category: 'Navigation Aids',
    subcategory: 'ILS',
    description: 'ILS localizer unserviceable',
    descriptionEs: 'Localizador ILS fuera de servicio',
  },

  // NAVIGATION AIDS - NDB (QN)
  {
    code: 'QNBXX',
    subject: 'NDB',
    condition: 'Unserviceable',
    category: 'Navigation Aids',
    subcategory: 'NDB',
    description: 'NDB unserviceable',
    descriptionEs: 'NDB fuera de servicio',
    examples: ['NDB DEF U/S'],
  },

  // NAVIGATION AIDS - GNSS/GPS (QN)
  {
    code: 'QNGXX',
    subject: 'GNSS',
    condition: 'Unserviceable',
    category: 'Navigation Aids',
    subcategory: 'GNSS',
    description: 'GNSS/GPS unserviceable or unreliable',
    descriptionEs: 'GNSS/GPS fuera de servicio o no confiable',
  },

  // AIRSPACE - DANGER AREA (QW)
  {
    code: 'QWDXX',
    subject: 'Danger area',
    condition: 'Active',
    category: 'Airspace',
    subcategory: 'Danger Area',
    description: 'Danger area active',
    descriptionEs: 'Área de peligro activa',
    examples: ['DANGER AREA D201 ACTIVE'],
  },

  // AIRSPACE - RESTRICTED AREA (QW)
  {
    code: 'QWRXX',
    subject: 'Restricted area',
    condition: 'Active',
    category: 'Airspace',
    subcategory: 'Restricted Area',
    description: 'Restricted area active',
    descriptionEs: 'Área restringida activa',
    examples: ['RESTRICTED AREA R105 ACTIVE'],
  },

  // AIRSPACE - PROHIBITED AREA (QW)
  {
    code: 'QWPXX',
    subject: 'Prohibited area',
    condition: 'Active',
    category: 'Airspace',
    subcategory: 'Prohibited Area',
    description: 'Prohibited area active',
    descriptionEs: 'Área prohibida activa',
  },

  // AIRSPACE - MILITARY EXERCISE (QW)
  {
    code: 'QWMXX',
    subject: 'Military exercise',
    condition: 'In progress',
    category: 'Airspace',
    subcategory: 'Military',
    description: 'Military exercise in progress',
    descriptionEs: 'Ejercicio militar en progreso',
  },

  // AIRSPACE - AIR DISPLAY (QW)
  {
    code: 'QWAXX',
    subject: 'Air display',
    condition: 'In progress',
    category: 'Airspace',
    subcategory: 'Events',
    description: 'Air display in progress',
    descriptionEs: 'Exhibición aérea en progreso',
  },

  // AERODROME SERVICES - CLOSURE (QF)
  {
    code: 'QFAXX',
    subject: 'Aerodrome',
    condition: 'Closed',
    category: 'Aerodrome Services',
    subcategory: 'Closure',
    description: 'Aerodrome closed',
    descriptionEs: 'Aeródromo cerrado',
    examples: ['AD CLOSED DUE WX'],
  },

  // AERODROME SERVICES - LIGHTING (QF)
  {
    code: 'QFALT',
    subject: 'Aerodrome',
    condition: 'Lighting',
    category: 'Aerodrome Services',
    subcategory: 'Lighting',
    description: 'Aerodrome lighting unserviceable',
    descriptionEs: 'Iluminación de aeródromo fuera de servicio',
  },

  // AERODROME SERVICES - ATS (QF)
  {
    code: 'QFATT',
    subject: 'Air traffic services',
    condition: 'Not available',
    category: 'Aerodrome Services',
    subcategory: 'ATS',
    description: 'Air traffic services not available',
    descriptionEs: 'Servicios de tránsito aéreo no disponibles',
  },

  // AERODROME SERVICES - RESCUE (QF)
  {
    code: 'QFARH',
    subject: 'Rescue services',
    condition: 'Not available',
    category: 'Aerodrome Services',
    subcategory: 'Rescue',
    description: 'Rescue and fire fighting services not available',
    descriptionEs: 'Servicios de rescate y extinción de incendios no disponibles',
  },

  // AERODROME SERVICES - FUEL (QF)
  {
    code: 'QFAFU',
    subject: 'Fuel',
    condition: 'Not available',
    category: 'Aerodrome Services',
    subcategory: 'Fuel',
    description: 'Fuel not available',
    descriptionEs: 'Combustible no disponible',
  },

  // OBSTACLES (QO)
  {
    code: 'QOBXX',
    subject: 'Obstacle',
    condition: 'Erected',
    category: 'Obstacles',
    subcategory: 'General',
    description: 'Obstacle erected',
    descriptionEs: 'Obstáculo erigido',
    examples: ['CRANE 150FT ELEV 2500FT'],
  },
  {
    code: 'QOLXX',
    subject: 'Obstacle',
    condition: 'Lighting',
    category: 'Obstacles',
    subcategory: 'Lighting',
    description: 'Obstacle lighting unserviceable',
    descriptionEs: 'Iluminación de obstáculo fuera de servicio',
  },
  {
    code: 'QOLAS',
    subject: 'Obstacle',
    condition: 'Lighting',
    category: 'Obstacles',
    subcategory: 'Lighting',
    description: 'Obstacle lighting unserviceable',
    descriptionEs: 'Iluminación de obstáculo fuera de servicio',
  },

  // ADDITIONAL NAVIGATION AIDS
  {
    code: 'QNHXX',
    subject: 'Marker',
    condition: 'Unserviceable',
    category: 'Navigation Aids',
    subcategory: 'Marker',
    description: 'Marker beacon unserviceable',
    descriptionEs: 'Radiobaliza fuera de servicio',
  },

  // COMMUNICATIONS (QC)
  {
    code: 'QCAXX',
    subject: 'Communications',
    condition: 'Not available',
    category: 'Communications',
    subcategory: 'General',
    description: 'Air/Ground communications not available',
    descriptionEs: 'Comunicaciones aire/tierra no disponibles',
  },
  {
    code: 'QCVXX',
    subject: 'VHF',
    condition: 'Not available',
    category: 'Communications',
    subcategory: 'VHF',
    description: 'VHF communications not available',
    descriptionEs: 'Comunicaciones VHF no disponibles',
  },

  // AIRSPACE - TRA/TSA
  {
    code: 'QWTXX',
    subject: 'TRA/TSA',
    condition: 'Active',
    category: 'Airspace',
    subcategory: 'Temporary',
    description: 'Temporary reserved airspace active',
    descriptionEs: 'Espacio aéreo reservado temporal activo',
  },

  // PROCEDURES
  {
    code: 'QPIAU',
    subject: 'Instrument approach',
    condition: 'Not available',
    category: 'Procedures',
    subcategory: 'Approach',
    description: 'Instrument approach procedure not available',
    descriptionEs: 'Procedimiento de aproximación por instrumentos no disponible',
  },
  {
    code: 'QPICH',
    subject: 'Procedure',
    condition: 'Changed',
    category: 'Procedures',
    subcategory: 'General',
    description: 'Procedure changed',
    descriptionEs: 'Procedimiento modificado',
  },

  // WARNINGS
  {
    code: 'QWBXX',
    subject: 'Bird hazard',
    condition: 'Present',
    category: 'Warnings',
    subcategory: 'Wildlife',
    description: 'Bird hazard',
    descriptionEs: 'Peligro de aves',
  },
  {
    code: 'QWLXX',
    subject: 'Wildlife hazard',
    condition: 'Present',
    category: 'Warnings',
    subcategory: 'Wildlife',
    description: 'Wildlife hazard',
    descriptionEs: 'Peligro de fauna',
  },

  // ADDITIONAL RUNWAY CONDITIONS
  {
    code: 'QMRFR',
    subject: 'Runway',
    condition: 'Friction',
    category: 'Runway',
    subcategory: 'Conditions',
    description: 'Runway friction measurement',
    descriptionEs: 'Medición de fricción de pista',
  },
  {
    code: 'QMRCN',
    subject: 'Runway',
    condition: 'Contamination',
    category: 'Runway',
    subcategory: 'Conditions',
    description: 'Runway contaminated',
    descriptionEs: 'Pista contaminada',
  },
  {
    code: 'QMRWK',
    subject: 'Runway',
    condition: 'Work in progress',
    category: 'Runway',
    subcategory: 'Maintenance',
    description: 'Work in progress on runway',
    descriptionEs: 'Trabajos en progreso en pista',
  },

  // ADDITIONAL TAXIWAY
  {
    code: 'QMTWK',
    subject: 'Taxiway',
    condition: 'Work in progress',
    category: 'Taxiway',
    subcategory: 'Maintenance',
    description: 'Work in progress on taxiway',
    descriptionEs: 'Trabajos en progreso en calle de rodaje',
  },

  // RADAR
  {
    code: 'QSAXX',
    subject: 'Radar',
    condition: 'Unserviceable',
    category: 'Surveillance',
    subcategory: 'Radar',
    description: 'Surveillance radar unserviceable',
    descriptionEs: 'Radar de vigilancia fuera de servicio',
  },

  // ATIS
  {
    code: 'QCXXX',
    subject: 'ATIS',
    condition: 'Not available',
    category: 'Communications',
    subcategory: 'ATIS',
    description: 'ATIS not available',
    descriptionEs: 'ATIS no disponible',
  },

  // ADDITIONAL RUNWAY CODES
  {
    code: 'QMRDA',
    subject: 'Runway',
    condition: 'Declared distances',
    category: 'Runway',
    subcategory: 'Operations',
    description: 'Declared distances changed',
    descriptionEs: 'Distancias declaradas modificadas',
  },
  {
    code: 'QMRST',
    subject: 'Runway',
    condition: 'Strip',
    category: 'Runway',
    subcategory: 'Operations',
    description: 'Runway strip width reduced',
    descriptionEs: 'Ancho de franja de pista reducido',
  },
  {
    code: 'QMRSL',
    subject: 'Runway',
    condition: 'Slope',
    category: 'Runway',
    subcategory: 'Operations',
    description: 'Runway slope changed',
    descriptionEs: 'Pendiente de pista modificada',
  },
  {
    code: 'QMRSA',
    subject: 'Runway',
    condition: 'Safety area',
    category: 'Runway',
    subcategory: 'Safety',
    description: 'Runway safety area changed',
    descriptionEs: 'Área de seguridad de pista modificada',
  },

  // ADDITIONAL TAXIWAY CODES
  {
    code: 'QMTOB',
    subject: 'Taxiway',
    condition: 'Obstacle',
    category: 'Taxiway',
    subcategory: 'Obstacles',
    description: 'Obstacle on taxiway',
    descriptionEs: 'Obstáculo en calle de rodaje',
  },
  {
    code: 'QMTST',
    subject: 'Taxiway',
    condition: 'Strip',
    category: 'Taxiway',
    subcategory: 'Operations',
    description: 'Taxiway strip changed',
    descriptionEs: 'Franja de calle de rodaje modificada',
  },

  // ADDITIONAL APRON CODES
  {
    code: 'QMALT',
    subject: 'Apron',
    condition: 'Lighting',
    category: 'Apron',
    subcategory: 'Lighting',
    description: 'Apron lighting unserviceable',
    descriptionEs: 'Iluminación de plataforma fuera de servicio',
  },

  // NAVIGATION AIDS - VOR
  {
    code: 'QNMCH',
    subject: 'VOR',
    condition: 'Changed',
    category: 'Navigation Aids',
    subcategory: 'VOR',
    description: 'VOR frequency/identification changed',
    descriptionEs: 'Frecuencia/identificación VOR modificada',
  },
  {
    code: 'QNMLI',
    subject: 'VOR',
    condition: 'Limited',
    category: 'Navigation Aids',
    subcategory: 'VOR',
    description: 'VOR coverage/range reduced',
    descriptionEs: 'Cobertura/alcance VOR reducido',
  },

  // NAVIGATION AIDS - DME
  {
    code: 'QNDAS',
    subject: 'DME',
    condition: 'Unserviceable',
    category: 'Navigation Aids',
    subcategory: 'DME',
    description: 'DME unserviceable',
    descriptionEs: 'DME fuera de servicio',
  },
  {
    code: 'QNDCH',
    subject: 'DME',
    condition: 'Changed',
    category: 'Navigation Aids',
    subcategory: 'DME',
    description: 'DME identification changed',
    descriptionEs: 'Identificación DME modificada',
  },

  // NAVIGATION AIDS - NDB
  {
    code: 'QNBAS',
    subject: 'NDB',
    condition: 'Unserviceable',
    category: 'Navigation Aids',
    subcategory: 'NDB',
    description: 'NDB unserviceable',
    descriptionEs: 'NDB fuera de servicio',
  },
  {
    code: 'QNBCH',
    subject: 'NDB',
    condition: 'Changed',
    category: 'Navigation Aids',
    subcategory: 'NDB',
    description: 'NDB frequency/identification changed',
    descriptionEs: 'Frecuencia/identificación NDB modificada',
  },

  // NAVIGATION AIDS - TACAN
  {
    code: 'QNTXX',
    subject: 'TACAN',
    condition: 'Not available',
    category: 'Navigation Aids',
    subcategory: 'TACAN',
    description: 'TACAN not available',
    descriptionEs: 'TACAN no disponible',
  },
  {
    code: 'QNTAS',
    subject: 'TACAN',
    condition: 'Unserviceable',
    category: 'Navigation Aids',
    subcategory: 'TACAN',
    description: 'TACAN unserviceable',
    descriptionEs: 'TACAN fuera de servicio',
  },

  // NAVIGATION AIDS - ILS COMPONENTS
  {
    code: 'QNILC',
    subject: 'ILS',
    condition: 'Category change',
    category: 'Navigation Aids',
    subcategory: 'ILS',
    description: 'ILS category downgraded',
    descriptionEs: 'Categoría ILS degradada',
  },
  {
    code: 'QNIMM',
    subject: 'ILS',
    condition: 'Middle marker',
    category: 'Navigation Aids',
    subcategory: 'ILS',
    description: 'ILS middle marker unserviceable',
    descriptionEs: 'Radiobaliza intermedia ILS fuera de servicio',
  },
  {
    code: 'QNIOM',
    subject: 'ILS',
    condition: 'Outer marker',
    category: 'Navigation Aids',
    subcategory: 'ILS',
    description: 'ILS outer marker unserviceable',
    descriptionEs: 'Radiobaliza exterior ILS fuera de servicio',
  },

  // NAVIGATION AIDS - RADAR
  {
    code: 'QNRXX',
    subject: 'Radar',
    condition: 'Not available',
    category: 'Navigation Aids',
    subcategory: 'Radar',
    description: 'Radar not available',
    descriptionEs: 'Radar no disponible',
  },
  {
    code: 'QNRAS',
    subject: 'Radar',
    condition: 'Unserviceable',
    category: 'Navigation Aids',
    subcategory: 'Radar',
    description: 'Radar unserviceable',
    descriptionEs: 'Radar fuera de servicio',
  },

  // NAVIGATION AIDS - GNSS/GPS
  {
    code: 'QNGAS',
    subject: 'GNSS',
    condition: 'Unserviceable',
    category: 'Navigation Aids',
    subcategory: 'GNSS',
    description: 'GNSS unserviceable',
    descriptionEs: 'GNSS fuera de servicio',
  },
  {
    code: 'QNGXX',
    subject: 'GNSS',
    condition: 'Not available',
    category: 'Navigation Aids',
    subcategory: 'GNSS',
    description: 'GNSS not available',
    descriptionEs: 'GNSS no disponible',
  },

  // ATS ROUTES
  {
    code: 'QNHXX',
    subject: 'ATS Route',
    condition: 'Closed',
    category: 'Navigation Aids',
    subcategory: 'Routes',
    description: 'ATS route closed',
    descriptionEs: 'Ruta ATS cerrada',
  },
  {
    code: 'QNHCH',
    subject: 'ATS Route',
    condition: 'Changed',
    category: 'Navigation Aids',
    subcategory: 'Routes',
    description: 'ATS route changed',
    descriptionEs: 'Ruta ATS modificada',
  },
  {
    code: 'QNHRN',
    subject: 'ATS Route',
    condition: 'Restricted',
    category: 'Navigation Aids',
    subcategory: 'Routes',
    description: 'ATS route restricted',
    descriptionEs: 'Ruta ATS restringida',
  },

  // AIRSPACE - DANGER AREAS
  {
    code: 'QWDCH',
    subject: 'Danger Area',
    condition: 'Changed',
    category: 'Airspace',
    subcategory: 'Danger',
    description: 'Danger area changed',
    descriptionEs: 'Área peligrosa modificada',
  },
  {
    code: 'QWDXX',
    subject: 'Danger Area',
    condition: 'Active',
    category: 'Airspace',
    subcategory: 'Danger',
    description: 'Danger area active',
    descriptionEs: 'Área peligrosa activa',
  },

  // AIRSPACE - RESTRICTED AREAS
  {
    code: 'QWRCH',
    subject: 'Restricted Area',
    condition: 'Changed',
    category: 'Airspace',
    subcategory: 'Restricted',
    description: 'Restricted area changed',
    descriptionEs: 'Área restringida modificada',
  },
  {
    code: 'QWRXX',
    subject: 'Restricted Area',
    condition: 'Active',
    category: 'Airspace',
    subcategory: 'Restricted',
    description: 'Restricted area active',
    descriptionEs: 'Área restringida activa',
  },

  // AIRSPACE - PROHIBITED AREAS
  {
    code: 'QWPCH',
    subject: 'Prohibited Area',
    condition: 'Changed',
    category: 'Airspace',
    subcategory: 'Prohibited',
    description: 'Prohibited area changed',
    descriptionEs: 'Área prohibida modificada',
  },
  {
    code: 'QWPXX',
    subject: 'Prohibited Area',
    condition: 'Active',
    category: 'Airspace',
    subcategory: 'Prohibited',
    description: 'Prohibited area active',
    descriptionEs: 'Área prohibida activa',
  },

  // AIRSPACE - GENERAL
  {
    code: 'QWACH',
    subject: 'Airspace',
    condition: 'Changed',
    category: 'Airspace',
    subcategory: 'General',
    description: 'Airspace organization changed',
    descriptionEs: 'Organización del espacio aéreo modificada',
  },
  {
    code: 'QWALT',
    subject: 'Airspace',
    condition: 'Altitude',
    category: 'Airspace',
    subcategory: 'General',
    description: 'Airspace altitude limits changed',
    descriptionEs: 'Límites de altitud del espacio aéreo modificados',
  },

  // PROCEDURES - INSTRUMENT PROCEDURES
  {
    code: 'QPICH',
    subject: 'Procedure',
    condition: 'Changed',
    category: 'Procedures',
    subcategory: 'Instrument',
    description: 'Instrument approach procedure changed',
    descriptionEs: 'Procedimiento de aproximación por instrumentos modificado',
  },
  {
    code: 'QPISU',
    subject: 'Procedure',
    condition: 'Suspended',
    category: 'Procedures',
    subcategory: 'Instrument',
    description: 'Instrument approach procedure suspended',
    descriptionEs: 'Procedimiento de aproximación por instrumentos suspendido',
  },
  {
    code: 'QPIXX',
    subject: 'Procedure',
    condition: 'Not available',
    category: 'Procedures',
    subcategory: 'Instrument',
    description: 'Instrument approach procedure not available',
    descriptionEs: 'Procedimiento de aproximación por instrumentos no disponible',
  },

  // PROCEDURES - DEPARTURE
  {
    code: 'QPDCH',
    subject: 'Departure',
    condition: 'Changed',
    category: 'Procedures',
    subcategory: 'Departure',
    description: 'Departure procedure changed',
    descriptionEs: 'Procedimiento de salida modificado',
  },
  {
    code: 'QPDXX',
    subject: 'Departure',
    condition: 'Not available',
    category: 'Procedures',
    subcategory: 'Departure',
    description: 'Departure procedure not available',
    descriptionEs: 'Procedimiento de salida no disponible',
  },

  // PROCEDURES - ARRIVAL
  {
    code: 'QPACH',
    subject: 'Arrival',
    condition: 'Changed',
    category: 'Procedures',
    subcategory: 'Arrival',
    description: 'Arrival procedure changed',
    descriptionEs: 'Procedimiento de llegada modificado',
  },
  {
    code: 'QPAXX',
    subject: 'Arrival',
    condition: 'Not available',
    category: 'Procedures',
    subcategory: 'Arrival',
    description: 'Arrival procedure not available',
    descriptionEs: 'Procedimiento de llegada no disponible',
  },

  // PROCEDURES - NOISE ABATEMENT
  {
    code: 'QPNCH',
    subject: 'Noise',
    condition: 'Changed',
    category: 'Procedures',
    subcategory: 'Noise',
    description: 'Noise abatement procedure changed',
    descriptionEs: 'Procedimiento de reducción de ruido modificado',
  },

  // MINIMUM ALTITUDES
  {
    code: 'QALCH',
    subject: 'Altitude',
    condition: 'Changed',
    category: 'Procedures',
    subcategory: 'Altitude',
    description: 'Minimum altitude changed',
    descriptionEs: 'Altitud mínima modificada',
  },
  {
    code: 'QAMCH',
    subject: 'Altitude',
    condition: 'MSA changed',
    category: 'Procedures',
    subcategory: 'Altitude',
    description: 'Minimum sector altitude changed',
    descriptionEs: 'Altitud mínima de sector modificada',
  },

  // AERODROME SERVICES - GENERAL
  {
    code: 'QFACH',
    subject: 'Aerodrome',
    condition: 'Hours changed',
    category: 'Aerodrome Services',
    subcategory: 'Operations',
    description: 'Aerodrome operating hours changed',
    descriptionEs: 'Horario de operación del aeródromo modificado',
  },
  {
    code: 'QFACP',
    subject: 'Aerodrome',
    condition: 'Capacity',
    category: 'Aerodrome Services',
    subcategory: 'Operations',
    description: 'Aerodrome capacity reduced',
    descriptionEs: 'Capacidad del aeródromo reducida',
  },
  {
    code: 'QFAWX',
    subject: 'Aerodrome',
    condition: 'Weather',
    category: 'Aerodrome Services',
    subcategory: 'Services',
    description: 'Weather service not available',
    descriptionEs: 'Servicio meteorológico no disponible',
  },

  // AERODROME SERVICES - RESCUE
  {
    code: 'QFARC',
    subject: 'Rescue',
    condition: 'Category',
    category: 'Aerodrome Services',
    subcategory: 'Rescue',
    description: 'Rescue and firefighting category changed',
    descriptionEs: 'Categoría de rescate y extinción de incendios modificada',
  },

  // AERODROME SERVICES - FUEL
  {
    code: 'QFAFX',
    subject: 'Fuel',
    condition: 'Not available',
    category: 'Aerodrome Services',
    subcategory: 'Fuel',
    description: 'Fuel not available',
    descriptionEs: 'Combustible no disponible',
  },
  {
    code: 'QFAFL',
    subject: 'Fuel',
    condition: 'Limited',
    category: 'Aerodrome Services',
    subcategory: 'Fuel',
    description: 'Fuel limited',
    descriptionEs: 'Combustible limitado',
  },

  // AERODROME SERVICES - CUSTOMS
  {
    code: 'QFACS',
    subject: 'Customs',
    condition: 'Service',
    category: 'Aerodrome Services',
    subcategory: 'Services',
    description: 'Customs service not available',
    descriptionEs: 'Servicio de aduanas no disponible',
  },

  // AERODROME SERVICES - METEOROLOGICAL
  {
    code: 'QFAMS',
    subject: 'Meteorological',
    condition: 'Service',
    category: 'Aerodrome Services',
    subcategory: 'Services',
    description: 'Meteorological service not available',
    descriptionEs: 'Servicio meteorológico no disponible',
  },

  // OBSTACLES
  {
    code: 'QOBCH',
    subject: 'Obstacle',
    condition: 'Changed',
    category: 'Obstacles',
    subcategory: 'General',
    description: 'Obstacle position/elevation changed',
    descriptionEs: 'Posición/elevación de obstáculo modificada',
  },
  {
    code: 'QOBAS',
    subject: 'Obstacle',
    condition: 'Lighting',
    category: 'Obstacles',
    subcategory: 'Lighting',
    description: 'Obstacle lighting unserviceable',
    descriptionEs: 'Iluminación de obstáculo fuera de servicio',
  },

  // COMMUNICATIONS - ATC
  {
    code: 'QCACH',
    subject: 'ATC',
    condition: 'Frequency changed',
    category: 'Communications',
    subcategory: 'ATC',
    description: 'ATC frequency changed',
    descriptionEs: 'Frecuencia ATC modificada',
  },
  {
    code: 'QCAAS',
    subject: 'ATC',
    condition: 'Unserviceable',
    category: 'Communications',
    subcategory: 'ATC',
    description: 'ATC service unserviceable',
    descriptionEs: 'Servicio ATC fuera de servicio',
  },

  // COMMUNICATIONS - APPROACH
  {
    code: 'QCPCH',
    subject: 'Approach',
    condition: 'Frequency changed',
    category: 'Communications',
    subcategory: 'Approach',
    description: 'Approach control frequency changed',
    descriptionEs: 'Frecuencia de control de aproximación modificada',
  },

  // COMMUNICATIONS - TOWER
  {
    code: 'QCTCH',
    subject: 'Tower',
    condition: 'Frequency changed',
    category: 'Communications',
    subcategory: 'Tower',
    description: 'Tower frequency changed',
    descriptionEs: 'Frecuencia de torre modificada',
  },

  // COMMUNICATIONS - GROUND
  {
    code: 'QCGCH',
    subject: 'Ground',
    condition: 'Frequency changed',
    category: 'Communications',
    subcategory: 'Ground',
    description: 'Ground control frequency changed',
    descriptionEs: 'Frecuencia de control de tierra modificada',
  },

  // COMMUNICATIONS - AFIS
  {
    code: 'QCFXX',
    subject: 'AFIS',
    condition: 'Not available',
    category: 'Communications',
    subcategory: 'AFIS',
    description: 'AFIS not available',
    descriptionEs: 'AFIS no disponible',
  },

  // COMMUNICATIONS - VOLMET
  {
    code: 'QCVCH',
    subject: 'VOLMET',
    condition: 'Changed',
    category: 'Communications',
    subcategory: 'VOLMET',
    description: 'VOLMET broadcast changed',
    descriptionEs: 'Transmisión VOLMET modificada',
  },

  // TRAFFIC LIMITATIONS
  {
    code: 'QLAXX',
    subject: 'Limitations',
    condition: 'Aircraft type',
    category: 'Traffic',
    subcategory: 'Limitations',
    description: 'Aircraft type limitations',
    descriptionEs: 'Limitaciones de tipo de aeronave',
  },
  {
    code: 'QLWXX',
    subject: 'Limitations',
    condition: 'Weight',
    category: 'Traffic',
    subcategory: 'Limitations',
    description: 'Maximum weight limitations',
    descriptionEs: 'Limitaciones de peso máximo',
  },
  {
    code: 'QLSXX',
    subject: 'Limitations',
    condition: 'Wingspan',
    category: 'Traffic',
    subcategory: 'Limitations',
    description: 'Wingspan limitations',
    descriptionEs: 'Limitaciones de envergadura',
  },

  // SURVEILLANCE
  {
    code: 'QSACH',
    subject: 'Surveillance',
    condition: 'Changed',
    category: 'Surveillance',
    subcategory: 'Radar',
    description: 'Surveillance radar changed',
    descriptionEs: 'Radar de vigilancia modificado',
  },
  {
    code: 'QSAXX',
    subject: 'Surveillance',
    condition: 'Not available',
    category: 'Surveillance',
    subcategory: 'Radar',
    description: 'Surveillance radar not available',
    descriptionEs: 'Radar de vigilancia no disponible',
  },

  // WARNINGS - VOLCANIC
  {
    code: 'QVVXX',
    subject: 'Volcanic',
    condition: 'Activity',
    category: 'Warnings',
    subcategory: 'Volcanic',
    description: 'Volcanic activity',
    descriptionEs: 'Actividad volcánica',
  },
  {
    code: 'QVAXX',
    subject: 'Volcanic',
    condition: 'Ash',
    category: 'Warnings',
    subcategory: 'Volcanic',
    description: 'Volcanic ash',
    descriptionEs: 'Ceniza volcánica',
  },

  // WARNINGS - BIRDS
  {
    code: 'QWBCH',
    subject: 'Birds',
    condition: 'Changed',
    category: 'Warnings',
    subcategory: 'Birds',
    description: 'Bird migration/concentration changed',
    descriptionEs: 'Migración/concentración de aves modificada',
  },

  // WARNINGS - LASER
  {
    code: 'QWLCH',
    subject: 'Laser',
    condition: 'Changed',
    category: 'Warnings',
    subcategory: 'Laser',
    description: 'Laser activity details changed',
    descriptionEs: 'Detalles de actividad láser modificados',
  },

  // WARNINGS - FIREWORKS
  {
    code: 'QWFXX',
    subject: 'Fireworks',
    condition: 'Activity',
    category: 'Warnings',
    subcategory: 'Fireworks',
    description: 'Fireworks activity',
    descriptionEs: 'Actividad de fuegos artificiales',
  },

  // WARNINGS - PARACHUTE JUMPING
  {
    code: 'QWJXX',
    subject: 'Parachute',
    condition: 'Activity',
    category: 'Warnings',
    subcategory: 'Parachute',
    description: 'Parachute jumping activity',
    descriptionEs: 'Actividad de salto en paracaídas',
  },

  // WARNINGS - KITES/BALLOONS
  {
    code: 'QWKXX',
    subject: 'Kites',
    condition: 'Activity',
    category: 'Warnings',
    subcategory: 'Other',
    description: 'Kite/balloon activity',
    descriptionEs: 'Actividad de cometas/globos',
  },

  // WARNINGS - GLIDERS
  {
    code: 'QWGXX',
    subject: 'Gliders',
    condition: 'Activity',
    category: 'Warnings',
    subcategory: 'Aircraft',
    description: 'Glider activity',
    descriptionEs: 'Actividad de planeadores',
  },

  // WARNINGS - HANG GLIDERS
  {
    code: 'QWHXX',
    subject: 'Hang glider',
    condition: 'Activity',
    category: 'Warnings',
    subcategory: 'Aircraft',
    description: 'Hang glider/paraglider activity',
    descriptionEs: 'Actividad de ala delta/parapente',
  },

  // WARNINGS - AEROBATIC FLIGHT
  {
    code: 'QWOXX',
    subject: 'Aerobatic',
    condition: 'Activity',
    category: 'Warnings',
    subcategory: 'Aircraft',
    description: 'Aerobatic flight activity',
    descriptionEs: 'Actividad de vuelo acrobático',
  },

  // WARNINGS - BLASTING
  {
    code: 'QWSXX',
    subject: 'Blasting',
    condition: 'Activity',
    category: 'Warnings',
    subcategory: 'Other',
    description: 'Blasting activity',
    descriptionEs: 'Actividad de voladuras',
  },

  // WARNINGS - UNMANNED AIRCRAFT
  {
    code: 'QWUXX',
    subject: 'UAV',
    condition: 'Activity',
    category: 'Warnings',
    subcategory: 'Aircraft',
    description: 'Unmanned aircraft activity',
    descriptionEs: 'Actividad de aeronaves no tripuladas',
  },

  // WARNINGS - AERIAL SURVEY
  {
    code: 'QWYXX',
    subject: 'Survey',
    condition: 'Activity',
    category: 'Warnings',
    subcategory: 'Aircraft',
    description: 'Aerial survey activity',
    descriptionEs: 'Actividad de levantamiento aéreo',
  },

  // WARNINGS - MASS MOVEMENT
  {
    code: 'QWZXX',
    subject: 'Mass movement',
    condition: 'Activity',
    category: 'Warnings',
    subcategory: 'Aircraft',
    description: 'Mass movement of aircraft',
    descriptionEs: 'Movimiento masivo de aeronaves',
  },

  // WARNINGS - CABLE/WIRE
  {
    code: 'QWCXX',
    subject: 'Cable',
    condition: 'Hazard',
    category: 'Warnings',
    subcategory: 'Other',
    description: 'Cable/wire hazard',
    descriptionEs: 'Peligro de cables',
  },

  // LIGHTING - APPROACH LIGHTING
  {
    code: 'QLACH',
    subject: 'Approach lighting',
    condition: 'Changed',
    category: 'Lighting',
    subcategory: 'Approach',
    description: 'Approach lighting system changed',
    descriptionEs: 'Sistema de iluminación de aproximación modificado',
  },
  {
    code: 'QLAXX',
    subject: 'Approach lighting',
    condition: 'Not available',
    category: 'Lighting',
    subcategory: 'Approach',
    description: 'Approach lighting system not available',
    descriptionEs: 'Sistema de iluminación de aproximación no disponible',
  },

  // LIGHTING - RUNWAY EDGE
  {
    code: 'QLRXX',
    subject: 'Runway edge lights',
    condition: 'Not available',
    category: 'Lighting',
    subcategory: 'Runway',
    description: 'Runway edge lights not available',
    descriptionEs: 'Luces de borde de pista no disponibles',
  },
  {
    code: 'QLRAS',
    subject: 'Runway edge lights',
    condition: 'Unserviceable',
    category: 'Lighting',
    subcategory: 'Runway',
    description: 'Runway edge lights unserviceable',
    descriptionEs: 'Luces de borde de pista fuera de servicio',
  },

  // LIGHTING - THRESHOLD
  {
    code: 'QLTXX',
    subject: 'Threshold lights',
    condition: 'Not available',
    category: 'Lighting',
    subcategory: 'Runway',
    description: 'Threshold lights not available',
    descriptionEs: 'Luces de umbral no disponibles',
  },

  // LIGHTING - VASIS/PAPI
  {
    code: 'QLVXX',
    subject: 'VASIS',
    condition: 'Not available',
    category: 'Lighting',
    subcategory: 'Visual Aids',
    description: 'VASIS not available',
    descriptionEs: 'VASIS no disponible',
  },
  {
    code: 'QLPXX',
    subject: 'PAPI',
    condition: 'Not available',
    category: 'Lighting',
    subcategory: 'Visual Aids',
    description: 'PAPI not available',
    descriptionEs: 'PAPI no disponible',
  },

  // LIGHTING - TAXIWAY
  {
    code: 'QLTAXX',
    subject: 'Taxiway lighting',
    condition: 'Not available',
    category: 'Lighting',
    subcategory: 'Taxiway',
    description: 'Taxiway lighting not available',
    descriptionEs: 'Iluminación de calle de rodaje no disponible',
  },

  // LIGHTING - BEACON
  {
    code: 'QLBXX',
    subject: 'Aerodrome beacon',
    condition: 'Not available',
    category: 'Lighting',
    subcategory: 'Aerodrome',
    description: 'Aerodrome beacon not available',
    descriptionEs: 'Faro de aeródromo no disponible',
  },

  // RUNWAY MARKINGS
  {
    code: 'QMRMK',
    subject: 'Runway',
    condition: 'Markings',
    category: 'Runway',
    subcategory: 'Markings',
    description: 'Runway markings obscured/removed',
    descriptionEs: 'Marcas de pista oscurecidas/removidas',
  },

  // TAXIWAY MARKINGS
  {
    code: 'QMTMK',
    subject: 'Taxiway',
    condition: 'Markings',
    category: 'Taxiway',
    subcategory: 'Markings',
    description: 'Taxiway markings obscured/removed',
    descriptionEs: 'Marcas de calle de rodaje oscurecidas/removidas',
  },

  // HOLDING POSITION
  {
    code: 'QMHXX',
    subject: 'Holding position',
    condition: 'Changed',
    category: 'Operations',
    subcategory: 'Holding',
    description: 'Holding position changed',
    descriptionEs: 'Posición de espera modificada',
  },

  // VISUAL GROUND AIDS
  {
    code: 'QVGXX',
    subject: 'Visual aids',
    condition: 'Not available',
    category: 'Visual Aids',
    subcategory: 'Ground',
    description: 'Visual ground aids not available',
    descriptionEs: 'Ayudas visuales terrestres no disponibles',
  },

  // SNOW/ICE CONDITIONS
  {
    code: 'QMRSI',
    subject: 'Runway',
    condition: 'Snow/ice',
    category: 'Runway',
    subcategory: 'Conditions',
    description: 'Snow/ice on runway',
    descriptionEs: 'Nieve/hielo en pista',
  },
  {
    code: 'QMTSI',
    subject: 'Taxiway',
    condition: 'Snow/ice',
    category: 'Taxiway',
    subcategory: 'Conditions',
    description: 'Snow/ice on taxiway',
    descriptionEs: 'Nieve/hielo en calle de rodaje',
  },
  {
    code: 'QMASI',
    subject: 'Apron',
    condition: 'Snow/ice',
    category: 'Apron',
    subcategory: 'Conditions',
    description: 'Snow/ice on apron',
    descriptionEs: 'Nieve/hielo en plataforma',
  },

  // SNOW CLEARANCE
  {
    code: 'QMRSC',
    subject: 'Runway',
    condition: 'Snow clearance',
    category: 'Runway',
    subcategory: 'Operations',
    description: 'Runway snow clearance in progress',
    descriptionEs: 'Limpieza de nieve en pista en curso',
  },

  // BRAKING ACTION
  {
    code: 'QMRBA',
    subject: 'Runway',
    condition: 'Braking action',
    category: 'Runway',
    subcategory: 'Conditions',
    description: 'Runway braking action reported',
    descriptionEs: 'Acción de frenado en pista reportada',
  },

  // STANDING WATER
  {
    code: 'QMRSW',
    subject: 'Runway',
    condition: 'Standing water',
    category: 'Runway',
    subcategory: 'Conditions',
    description: 'Standing water on runway',
    descriptionEs: 'Agua estancada en pista',
  },

  // RUBBER REMOVAL
  {
    code: 'QMRRR',
    subject: 'Runway',
    condition: 'Rubber removal',
    category: 'Runway',
    subcategory: 'Maintenance',
    description: 'Runway rubber removal in progress',
    descriptionEs: 'Remoción de caucho en pista en curso',
  },

  // AERODROME ELEVATION
  {
    code: 'QFAEL',
    subject: 'Aerodrome',
    condition: 'Elevation',
    category: 'Aerodrome Services',
    subcategory: 'Information',
    description: 'Aerodrome elevation changed',
    descriptionEs: 'Elevación del aeródromo modificada',
  },

  // REFERENCE POINT
  {
    code: 'QFARP',
    subject: 'Aerodrome',
    condition: 'Reference point',
    category: 'Aerodrome Services',
    subcategory: 'Information',
    description: 'Aerodrome reference point changed',
    descriptionEs: 'Punto de referencia del aeródromo modificado',
  },

  // HELICOPTER OPERATIONS
  {
    code: 'QFHHC',
    subject: 'Helicopter',
    condition: 'Changed',
    category: 'Operations',
    subcategory: 'Helicopter',
    description: 'Helicopter landing area changed',
    descriptionEs: 'Área de aterrizaje de helicópteros modificada',
  },
  {
    code: 'QFHXX',
    subject: 'Helicopter',
    condition: 'Not available',
    category: 'Operations',
    subcategory: 'Helicopter',
    description: 'Helicopter landing area not available',
    descriptionEs: 'Área de aterrizaje de helicópteros no disponible',
  },

  // CRANES
  {
    code: 'QOBCR',
    subject: 'Crane',
    condition: 'Erected',
    category: 'Obstacles',
    subcategory: 'Cranes',
    description: 'Crane erected',
    descriptionEs: 'Grúa erigida',
  },

  // CONSTRUCTION WORK
  {
    code: 'QMRCW',
    subject: 'Runway',
    condition: 'Construction',
    category: 'Runway',
    subcategory: 'Work',
    description: 'Construction work on runway',
    descriptionEs: 'Trabajos de construcción en pista',
  },
  {
    code: 'QMTCW',
    subject: 'Taxiway',
    condition: 'Construction',
    category: 'Taxiway',
    subcategory: 'Work',
    description: 'Construction work on taxiway',
    descriptionEs: 'Trabajos de construcción en calle de rodaje',
  },
  {
    code: 'QMACW',
    subject: 'Apron',
    condition: 'Construction',
    category: 'Apron',
    subcategory: 'Work',
    description: 'Construction work on apron',
    descriptionEs: 'Trabajos de construcción en plataforma',
  },

  // AIRCRAFT STANDS
  {
    code: 'QMASN',
    subject: 'Aircraft stand',
    condition: 'Not available',
    category: 'Apron',
    subcategory: 'Stands',
    description: 'Aircraft stand not available',
    descriptionEs: 'Puesto de estacionamiento no disponible',
  },

  // STOP BAR
  {
    code: 'QMSXX',
    subject: 'Stop bar',
    condition: 'Not available',
    category: 'Lighting',
    subcategory: 'Taxiway',
    description: 'Stop bar not available',
    descriptionEs: 'Barra de parada no disponible',
  },

  // RUNWAY END SAFETY AREA
  {
    code: 'QMRES',
    subject: 'Runway',
    condition: 'End safety area',
    category: 'Runway',
    subcategory: 'Safety',
    description: 'Runway end safety area changed',
    descriptionEs: 'Área de seguridad de extremo de pista modificada',
  },

  // DECLARED DISTANCES
  {
    code: 'QMRTO',
    subject: 'Runway',
    condition: 'TORA',
    category: 'Runway',
    subcategory: 'Distances',
    description: 'Take-off run available changed',
    descriptionEs: 'Recorrido de despegue disponible modificado',
  },
  {
    code: 'QMRTD',
    subject: 'Runway',
    condition: 'TODA',
    category: 'Runway',
    subcategory: 'Distances',
    description: 'Take-off distance available changed',
    descriptionEs: 'Distancia de despegue disponible modificada',
  },
  {
    code: 'QMRAS',
    subject: 'Runway',
    condition: 'ASDA',
    category: 'Runway',
    subcategory: 'Distances',
    description: 'Accelerate-stop distance available changed',
    descriptionEs: 'Distancia de aceleración-parada disponible modificada',
  },
  {
    code: 'QMRLD',
    subject: 'Runway',
    condition: 'LDA',
    category: 'Runway',
    subcategory: 'Distances',
    description: 'Landing distance available changed',
    descriptionEs: 'Distancia de aterrizaje disponible modificada',
  },

  // ==================== CÓDIGOS COMPLETOS ICAO ANNEX 15 ====================

  // RUNWAY - ADDITIONAL CODES
  {
    code: 'QMRGL',
    subject: 'Runway',
    condition: 'Glideslope',
    category: 'Runway',
    subcategory: 'Navigation',
    description: 'Runway ILS glideslope angle changed',
    descriptionEs: 'Ángulo de senda de planeo ILS de pista modificado',
  },
  {
    code: 'QMRDL',
    subject: 'Runway',
    condition: 'Displaced threshold',
    category: 'Runway',
    subcategory: 'Operations',
    description: 'Runway threshold displaced',
    descriptionEs: 'Umbral de pista desplazado',
  },
  {
    code: 'QMRAL',
    subject: 'Runway',
    condition: 'Alignment',
    category: 'Runway',
    subcategory: 'Operations',
    description: 'Runway alignment changed',
    descriptionEs: 'Alineación de pista modificada',
  },
  {
    code: 'QMRBL',
    subject: 'Runway',
    condition: 'Bearing',
    category: 'Runway',
    subcategory: 'Operations',
    description: 'Runway magnetic bearing changed',
    descriptionEs: 'Rumbo magnético de pista modificado',
  },
  {
    code: 'QMRGR',
    subject: 'Runway',
    condition: 'Grading',
    category: 'Runway',
    subcategory: 'Maintenance',
    description: 'Runway grading in progress',
    descriptionEs: 'Nivelación de pista en curso',
  },
  {
    code: 'QMRRE',
    subject: 'Runway',
    condition: 'Repaving',
    category: 'Runway',
    subcategory: 'Maintenance',
    description: 'Runway repaving in progress',
    descriptionEs: 'Repavimentación de pista en curso',
  },
  {
    code: 'QMRSP',
    subject: 'Runway',
    condition: 'Sweeping',
    category: 'Runway',
    subcategory: 'Maintenance',
    description: 'Runway sweeping in progress',
    descriptionEs: 'Barrido de pista en curso',
  },
  {
    code: 'QMRSU',
    subject: 'Runway',
    condition: 'Surface',
    category: 'Runway',
    subcategory: 'Conditions',
    description: 'Runway surface type changed',
    descriptionEs: 'Tipo de superficie de pista modificado',
  },
  {
    code: 'QMRDP',
    subject: 'Runway',
    condition: 'Depth',
    category: 'Runway',
    subcategory: 'Conditions',
    description: 'Runway contaminant depth',
    descriptionEs: 'Profundidad de contaminante en pista',
  },
  {
    code: 'QMRPC',
    subject: 'Runway',
    condition: 'Pavement',
    category: 'Runway',
    subcategory: 'Conditions',
    description: 'Runway pavement strength changed',
    descriptionEs: 'Resistencia del pavimento de pista modificada',
  },
  {
    code: 'QMRCR',
    subject: 'Runway',
    condition: 'Cracks',
    category: 'Runway',
    subcategory: 'Conditions',
    description: 'Runway surface cracks',
    descriptionEs: 'Grietas en superficie de pista',
  },
  {
    code: 'QMRRU',
    subject: 'Runway',
    condition: 'Rutting',
    category: 'Runway',
    subcategory: 'Conditions',
    description: 'Runway surface rutting',
    descriptionEs: 'Surcos en superficie de pista',
  },

  // TAXIWAY - ADDITIONAL CODES
  {
    code: 'QMTSU',
    subject: 'Taxiway',
    condition: 'Surface',
    category: 'Taxiway',
    subcategory: 'Conditions',
    description: 'Taxiway surface conditions',
    descriptionEs: 'Condiciones de superficie de calle de rodaje',
  },
  {
    code: 'QMTPC',
    subject: 'Taxiway',
    condition: 'Pavement',
    category: 'Taxiway',
    subcategory: 'Conditions',
    description: 'Taxiway pavement strength changed',
    descriptionEs: 'Resistencia del pavimento de calle de rodaje modificada',
  },
  {
    code: 'QMTGR',
    subject: 'Taxiway',
    condition: 'Guidance',
    category: 'Taxiway',
    subcategory: 'Visual Aids',
    description: 'Taxiway guidance system changed',
    descriptionEs: 'Sistema de guía de calle de rodaje modificado',
  },

  // APRON - ADDITIONAL CODES
  {
    code: 'QMAPC',
    subject: 'Apron',
    condition: 'Pavement',
    category: 'Apron',
    subcategory: 'Conditions',
    description: 'Apron pavement strength changed',
    descriptionEs: 'Resistencia del pavimento de plataforma modificada',
  },
  {
    code: 'QMASU',
    subject: 'Apron',
    condition: 'Surface',
    category: 'Apron',
    subcategory: 'Conditions',
    description: 'Apron surface conditions',
    descriptionEs: 'Condiciones de superficie de plataforma',
  },

  // NAVIGATION AIDS - COMPLETE VOR CODES
  {
    code: 'QNMXX',
    subject: 'VOR',
    condition: 'Not available',
    category: 'Navigation Aids',
    subcategory: 'VOR',
    description: 'VOR not available',
    descriptionEs: 'VOR no disponible',
  },
  {
    code: 'QNMLI',
    subject: 'VOR',
    condition: 'Limited',
    category: 'Navigation Aids',
    subcategory: 'VOR',
    description: 'VOR range/coverage limited',
    descriptionEs: 'Alcance/cobertura VOR limitado',
  },
  {
    code: 'QNMIM',
    subject: 'VOR',
    condition: 'Monitoring',
    category: 'Navigation Aids',
    subcategory: 'VOR',
    description: 'VOR monitoring not available',
    descriptionEs: 'Monitoreo VOR no disponible',
  },

  // NAVIGATION AIDS - COMPLETE DME CODES
  {
    code: 'QNDLI',
    subject: 'DME',
    condition: 'Limited',
    category: 'Navigation Aids',
    subcategory: 'DME',
    description: 'DME range limited',
    descriptionEs: 'Alcance DME limitado',
  },
  {
    code: 'QNDIM',
    subject: 'DME',
    condition: 'Monitoring',
    category: 'Navigation Aids',
    subcategory: 'DME',
    description: 'DME monitoring not available',
    descriptionEs: 'Monitoreo DME no disponible',
  },

  // NAVIGATION AIDS - COMPLETE ILS CODES
  {
    code: 'QNIXX',
    subject: 'ILS',
    condition: 'Not available',
    category: 'Navigation Aids',
    subcategory: 'ILS',
    description: 'ILS not available',
    descriptionEs: 'ILS no disponible',
  },
  {
    code: 'QNIAS',
    subject: 'ILS',
    condition: 'Unserviceable',
    category: 'Navigation Aids',
    subcategory: 'ILS',
    description: 'ILS unserviceable',
    descriptionEs: 'ILS fuera de servicio',
  },
  {
    code: 'QNICH',
    subject: 'ILS',
    condition: 'Changed',
    category: 'Navigation Aids',
    subcategory: 'ILS',
    description: 'ILS identification/frequency changed',
    descriptionEs: 'Identificación/frecuencia ILS modificada',
  },
  {
    code: 'QNIIM',
    subject: 'ILS',
    condition: 'Inner marker',
    category: 'Navigation Aids',
    subcategory: 'ILS',
    description: 'ILS inner marker unserviceable',
    descriptionEs: 'Radiobaliza interior ILS fuera de servicio',
  },
  {
    code: 'QNIBK',
    subject: 'ILS',
    condition: 'Back course',
    category: 'Navigation Aids',
    subcategory: 'ILS',
    description: 'ILS back course not available',
    descriptionEs: 'Rumbo inverso ILS no disponible',
  },

  // NAVIGATION AIDS - COMPLETE NDB CODES
  {
    code: 'QNBLI',
    subject: 'NDB',
    condition: 'Limited',
    category: 'Navigation Aids',
    subcategory: 'NDB',
    description: 'NDB range limited',
    descriptionEs: 'Alcance NDB limitado',
  },
  {
    code: 'QNBIM',
    subject: 'NDB',
    condition: 'Monitoring',
    category: 'Navigation Aids',
    subcategory: 'NDB',
    description: 'NDB monitoring not available',
    descriptionEs: 'Monitoreo NDB no disponible',
  },

  // NAVIGATION AIDS - MLS (Microwave Landing System)
  {
    code: 'QNLXX',
    subject: 'MLS',
    condition: 'Not available',
    category: 'Navigation Aids',
    subcategory: 'MLS',
    description: 'MLS not available',
    descriptionEs: 'MLS no disponible',
  },
  {
    code: 'QNLAS',
    subject: 'MLS',
    condition: 'Unserviceable',
    category: 'Navigation Aids',
    subcategory: 'MLS',
    description: 'MLS unserviceable',
    descriptionEs: 'MLS fuera de servicio',
  },
  {
    code: 'QNLCH',
    subject: 'MLS',
    condition: 'Changed',
    category: 'Navigation Aids',
    subcategory: 'MLS',
    description: 'MLS identification/frequency changed',
    descriptionEs: 'Identificación/frecuencia MLS modificada',
  },

  // NAVIGATION AIDS - GLS (GNSS Landing System)
  {
    code: 'QNJXX',
    subject: 'GLS',
    condition: 'Not available',
    category: 'Navigation Aids',
    subcategory: 'GLS',
    description: 'GLS not available',
    descriptionEs: 'GLS no disponible',
  },
  {
    code: 'QNJAS',
    subject: 'GLS',
    condition: 'Unserviceable',
    category: 'Navigation Aids',
    subcategory: 'GLS',
    description: 'GLS unserviceable',
    descriptionEs: 'GLS fuera de servicio',
  },

  // NAVIGATION AIDS - COMPLETE TACAN CODES
  {
    code: 'QNTCH',
    subject: 'TACAN',
    condition: 'Changed',
    category: 'Navigation Aids',
    subcategory: 'TACAN',
    description: 'TACAN channel/identification changed',
    descriptionEs: 'Canal/identificación TACAN modificado',
  },
  {
    code: 'QNTLI',
    subject: 'TACAN',
    condition: 'Limited',
    category: 'Navigation Aids',
    subcategory: 'TACAN',
    description: 'TACAN range limited',
    descriptionEs: 'Alcance TACAN limitado',
  },

  // NAVIGATION AIDS - RADAR COMPLETE
  {
    code: 'QNRCH',
    subject: 'Radar',
    condition: 'Changed',
    category: 'Navigation Aids',
    subcategory: 'Radar',
    description: 'Radar service changed',
    descriptionEs: 'Servicio de radar modificado',
  },
  {
    code: 'QNRLI',
    subject: 'Radar',
    condition: 'Limited',
    category: 'Navigation Aids',
    subcategory: 'Radar',
    description: 'Radar service limited',
    descriptionEs: 'Servicio de radar limitado',
  },

  // NAVIGATION AIDS - PRECISION RADAR
  {
    code: 'QNPXX',
    subject: 'PAR',
    condition: 'Not available',
    category: 'Navigation Aids',
    subcategory: 'Radar',
    description: 'Precision approach radar not available',
    descriptionEs: 'Radar de aproximación de precisión no disponible',
  },
  {
    code: 'QNPAS',
    subject: 'PAR',
    condition: 'Unserviceable',
    category: 'Navigation Aids',
    subcategory: 'Radar',
    description: 'Precision approach radar unserviceable',
    descriptionEs: 'Radar de aproximación de precisión fuera de servicio',
  },

  // NAVIGATION AIDS - COMPLETE GNSS CODES
  {
    code: 'QNGCH',
    subject: 'GNSS',
    condition: 'Changed',
    category: 'Navigation Aids',
    subcategory: 'GNSS',
    description: 'GNSS service changed',
    descriptionEs: 'Servicio GNSS modificado',
  },
  {
    code: 'QNGLI',
    subject: 'GNSS',
    condition: 'Limited',
    category: 'Navigation Aids',
    subcategory: 'GNSS',
    description: 'GNSS service limited',
    descriptionEs: 'Servicio GNSS limitado',
  },
  {
    code: 'QNGIN',
    subject: 'GNSS',
    condition: 'Interference',
    category: 'Navigation Aids',
    subcategory: 'GNSS',
    description: 'GNSS interference',
    descriptionEs: 'Interferencia GNSS',
  },

  // NAVIGATION AIDS - WAYPOINTS
  {
    code: 'QNWXX',
    subject: 'Waypoint',
    condition: 'Changed',
    category: 'Navigation Aids',
    subcategory: 'Waypoints',
    description: 'Waypoint changed',
    descriptionEs: 'Punto de recorrido modificado',
  },
  {
    code: 'QNWRE',
    subject: 'Waypoint',
    condition: 'Relocated',
    category: 'Navigation Aids',
    subcategory: 'Waypoints',
    description: 'Waypoint relocated',
    descriptionEs: 'Punto de recorrido reubicado',
  },

  // ATS ROUTES - COMPLETE
  {
    code: 'QNHLV',
    subject: 'ATS Route',
    condition: 'Level',
    category: 'Navigation Aids',
    subcategory: 'Routes',
    description: 'ATS route level changed',
    descriptionEs: 'Nivel de ruta ATS modificado',
  },
  {
    code: 'QNHWD',
    subject: 'ATS Route',
    condition: 'Width',
    category: 'Navigation Aids',
    subcategory: 'Routes',
    description: 'ATS route width changed',
    descriptionEs: 'Ancho de ruta ATS modificado',
  },
  {
    code: 'QNHDI',
    subject: 'ATS Route',
    condition: 'Direction',
    category: 'Navigation Aids',
    subcategory: 'Routes',
    description: 'ATS route direction changed',
    descriptionEs: 'Dirección de ruta ATS modificada',
  },
  {
    code: 'QNHSV',
    subject: 'ATS Route',
    condition: 'Service',
    category: 'Navigation Aids',
    subcategory: 'Routes',
    description: 'ATS route service changed',
    descriptionEs: 'Servicio de ruta ATS modificado',
  },

  // AIRSPACE - COMPLETE FIR/UIR
  {
    code: 'QAFXX',
    subject: 'FIR',
    condition: 'Changed',
    category: 'Airspace',
    subcategory: 'FIR',
    description: 'FIR boundary changed',
    descriptionEs: 'Límite FIR modificado',
  },
  {
    code: 'QAUXX',
    subject: 'UIR',
    condition: 'Changed',
    category: 'Airspace',
    subcategory: 'UIR',
    description: 'UIR boundary changed',
    descriptionEs: 'Límite UIR modificado',
  },

  // AIRSPACE - TMA/CTA
  {
    code: 'QATCH',
    subject: 'TMA',
    condition: 'Changed',
    category: 'Airspace',
    subcategory: 'TMA',
    description: 'TMA changed',
    descriptionEs: 'TMA modificada',
  },
  {
    code: 'QATXX',
    subject: 'TMA',
    condition: 'Not available',
    category: 'Airspace',
    subcategory: 'TMA',
    description: 'TMA not available',
    descriptionEs: 'TMA no disponible',
  },
  {
    code: 'QACCH',
    subject: 'CTA',
    condition: 'Changed',
    category: 'Airspace',
    subcategory: 'CTA',
    description: 'Control area changed',
    descriptionEs: 'Área de control modificada',
  },
  {
    code: 'QACXX',
    subject: 'CTA',
    condition: 'Not available',
    category: 'Airspace',
    subcategory: 'CTA',
    description: 'Control area not available',
    descriptionEs: 'Área de control no disponible',
  },

  // AIRSPACE - CTR
  {
    code: 'QARZCH',
    subject: 'CTR',
    condition: 'Changed',
    category: 'Airspace',
    subcategory: 'CTR',
    description: 'Control zone changed',
    descriptionEs: 'Zona de control modificada',
  },
  {
    code: 'QARZXX',
    subject: 'CTR',
    condition: 'Not available',
    category: 'Airspace',
    subcategory: 'CTR',
    description: 'Control zone not available',
    descriptionEs: 'Zona de control no disponible',
  },

  // AIRSPACE - AIRWAYS
  {
    code: 'QAYCH',
    subject: 'Airway',
    condition: 'Changed',
    category: 'Airspace',
    subcategory: 'Airways',
    description: 'Airway changed',
    descriptionEs: 'Aerovía modificada',
  },
  {
    code: 'QAYXX',
    subject: 'Airway',
    condition: 'Not available',
    category: 'Airspace',
    subcategory: 'Airways',
    description: 'Airway not available',
    descriptionEs: 'Aerovía no disponible',
  },

  // AIRSPACE - RNAV/RNP
  {
    code: 'QANCH',
    subject: 'RNAV',
    condition: 'Changed',
    category: 'Airspace',
    subcategory: 'RNAV',
    description: 'RNAV route changed',
    descriptionEs: 'Ruta RNAV modificada',
  },
  {
    code: 'QANXX',
    subject: 'RNAV',
    condition: 'Not available',
    category: 'Airspace',
    subcategory: 'RNAV',
    description: 'RNAV route not available',
    descriptionEs: 'Ruta RNAV no disponible',
  },

  // AIRSPACE - DANGER AREAS
  {
    code: 'QDAXX',
    subject: 'Danger area',
    condition: 'Not available',
    category: 'Airspace',
    subcategory: 'Restricted',
    description: 'Danger area not active',
    descriptionEs: 'Área de peligro no activa',
  },
  {
    code: 'QDACH',
    subject: 'Danger area',
    condition: 'Changed',
    category: 'Airspace',
    subcategory: 'Restricted',
    description: 'Danger area changed',
    descriptionEs: 'Área de peligro modificada',
  },
  {
    code: 'QDAAC',
    subject: 'Danger area',
    condition: 'Active',
    category: 'Airspace',
    subcategory: 'Restricted',
    description: 'Danger area active',
    descriptionEs: 'Área de peligro activa',
  },
  {
    code: 'QDALT',
    subject: 'Danger area',
    condition: 'Altitude',
    category: 'Airspace',
    subcategory: 'Restricted',
    description: 'Danger area altitude limits changed',
    descriptionEs: 'Límites de altitud de área de peligro modificados',
  },

  // AIRSPACE - RESTRICTED AREAS
  {
    code: 'QRAXX',
    subject: 'Restricted area',
    condition: 'Not available',
    category: 'Airspace',
    subcategory: 'Restricted',
    description: 'Restricted area not active',
    descriptionEs: 'Área restringida no activa',
  },
  {
    code: 'QRACH',
    subject: 'Restricted area',
    condition: 'Changed',
    category: 'Airspace',
    subcategory: 'Restricted',
    description: 'Restricted area changed',
    descriptionEs: 'Área restringida modificada',
  },
  {
    code: 'QRAAC',
    subject: 'Restricted area',
    condition: 'Active',
    category: 'Airspace',
    subcategory: 'Restricted',
    description: 'Restricted area active',
    descriptionEs: 'Área restringida activa',
  },
  {
    code: 'QRALT',
    subject: 'Restricted area',
    condition: 'Altitude',
    category: 'Airspace',
    subcategory: 'Restricted',
    description: 'Restricted area altitude limits changed',
    descriptionEs: 'Límites de altitud de área restringida modificados',
  },

  // AIRSPACE - PROHIBITED AREAS
  {
    code: 'QPAXX',
    subject: 'Prohibited area',
    condition: 'Not available',
    category: 'Airspace',
    subcategory: 'Restricted',
    description: 'Prohibited area not active',
    descriptionEs: 'Área prohibida no activa',
  },
  {
    code: 'QPACH',
    subject: 'Prohibited area',
    condition: 'Changed',
    category: 'Airspace',
    subcategory: 'Restricted',
    description: 'Prohibited area changed',
    descriptionEs: 'Área prohibida modificada',
  },
  {
    code: 'QPAAC',
    subject: 'Prohibited area',
    condition: 'Active',
    category: 'Airspace',
    subcategory: 'Restricted',
    description: 'Prohibited area active',
    descriptionEs: 'Área prohibida activa',
  },

  // AIRSPACE - MILITARY EXERCISE AREAS
  {
    code: 'QEMXX',
    subject: 'Military exercise',
    condition: 'Area active',
    category: 'Airspace',
    subcategory: 'Military',
    description: 'Military exercise area active',
    descriptionEs: 'Área de ejercicio militar activa',
  },
  {
    code: 'QEMCH',
    subject: 'Military exercise',
    condition: 'Changed',
    category: 'Airspace',
    subcategory: 'Military',
    description: 'Military exercise area changed',
    descriptionEs: 'Área de ejercicio militar modificada',
  },

  // AIRSPACE - TEMPORARY SEGREGATED AREAS
  {
    code: 'QTMXX',
    subject: 'TSA',
    condition: 'Active',
    category: 'Airspace',
    subcategory: 'Temporary',
    description: 'Temporary segregated area active',
    descriptionEs: 'Área temporalmente segregada activa',
  },
  {
    code: 'QTMCH',
    subject: 'TSA',
    condition: 'Changed',
    category: 'Airspace',
    subcategory: 'Temporary',
    description: 'Temporary segregated area changed',
    descriptionEs: 'Área temporalmente segregada modificada',
  },

  // AIRSPACE - TEMPORARY RESERVED AREAS
  {
    code: 'QTRXX',
    subject: 'TRA',
    condition: 'Active',
    category: 'Airspace',
    subcategory: 'Temporary',
    description: 'Temporary reserved area active',
    descriptionEs: 'Área temporalmente reservada activa',
  },
  {
    code: 'QTRCH',
    subject: 'TRA',
    condition: 'Changed',
    category: 'Airspace',
    subcategory: 'Temporary',
    description: 'Temporary reserved area changed',
    descriptionEs: 'Área temporalmente reservada modificada',
  },

  // PROCEDURES - COMPLETE SID
  {
    code: 'QPDSU',
    subject: 'SID',
    condition: 'Suspended',
    category: 'Procedures',
    subcategory: 'Departure',
    description: 'SID suspended',
    descriptionEs: 'SID suspendida',
  },
  {
    code: 'QPDWI',
    subject: 'SID',
    condition: 'Withdrawn',
    category: 'Procedures',
    subcategory: 'Departure',
    description: 'SID withdrawn',
    descriptionEs: 'SID cancelada',
  },

  // PROCEDURES - COMPLETE STAR
  {
    code: 'QPASU',
    subject: 'STAR',
    condition: 'Suspended',
    category: 'Procedures',
    subcategory: 'Arrival',
    description: 'STAR suspended',
    descriptionEs: 'STAR suspendida',
  },
  {
    code: 'QPAWI',
    subject: 'STAR',
    condition: 'Withdrawn',
    category: 'Procedures',
    subcategory: 'Arrival',
    description: 'STAR withdrawn',
    descriptionEs: 'STAR cancelada',
  },

  // PROCEDURES - APPROACH TYPES
  {
    code: 'QPIAS',
    subject: 'Approach',
    condition: 'ILS approach',
    category: 'Procedures',
    subcategory: 'Instrument',
    description: 'ILS approach not available',
    descriptionEs: 'Aproximación ILS no disponible',
  },
  {
    code: 'QPIVR',
    subject: 'Approach',
    condition: 'VOR approach',
    category: 'Procedures',
    subcategory: 'Instrument',
    description: 'VOR approach not available',
    descriptionEs: 'Aproximación VOR no disponible',
  },
  {
    code: 'QPIDB',
    subject: 'Approach',
    condition: 'NDB approach',
    category: 'Procedures',
    subcategory: 'Instrument',
    description: 'NDB approach not available',
    descriptionEs: 'Aproximación NDB no disponible',
  },
  {
    code: 'QPIRN',
    subject: 'Approach',
    condition: 'RNAV approach',
    category: 'Procedures',
    subcategory: 'Instrument',
    description: 'RNAV approach not available',
    descriptionEs: 'Aproximación RNAV no disponible',
  },
  {
    code: 'QPIGP',
    subject: 'Approach',
    condition: 'GNSS approach',
    category: 'Procedures',
    subcategory: 'Instrument',
    description: 'GNSS approach not available',
    descriptionEs: 'Aproximación GNSS no disponible',
  },
  {
    code: 'QPIRA',
    subject: 'Approach',
    condition: 'Radar approach',
    category: 'Procedures',
    subcategory: 'Instrument',
    description: 'Radar approach not available',
    descriptionEs: 'Aproximación radar no disponible',
  },
  {
    code: 'QPIVS',
    subject: 'Approach',
    condition: 'Visual approach',
    category: 'Procedures',
    subcategory: 'Visual',
    description: 'Visual approach not available',
    descriptionEs: 'Aproximación visual no disponible',
  },
  {
    code: 'QPICI',
    subject: 'Approach',
    condition: 'Circling',
    category: 'Procedures',
    subcategory: 'Visual',
    description: 'Circling approach not available',
    descriptionEs: 'Aproximación circular no disponible',
  },

  // PROCEDURES - MISSED APPROACH
  {
    code: 'QPMCH',
    subject: 'Missed approach',
    condition: 'Changed',
    category: 'Procedures',
    subcategory: 'Missed',
    description: 'Missed approach procedure changed',
    descriptionEs: 'Procedimiento de aproximación frustrada modificado',
  },

  // PROCEDURES - HOLDING
  {
    code: 'QPHCH',
    subject: 'Holding',
    condition: 'Changed',
    category: 'Procedures',
    subcategory: 'Holding',
    description: 'Holding procedure changed',
    descriptionEs: 'Procedimiento de espera modificado',
  },
  {
    code: 'QPHXX',
    subject: 'Holding',
    condition: 'Not available',
    category: 'Procedures',
    subcategory: 'Holding',
    description: 'Holding not available',
    descriptionEs: 'Espera no disponible',
  },

  // PROCEDURES - TRANSITION ALTITUDE
  {
    code: 'QPTCH',
    subject: 'Transition',
    condition: 'Altitude',
    category: 'Procedures',
    subcategory: 'Altitude',
    description: 'Transition altitude changed',
    descriptionEs: 'Altitud de transición modificada',
  },
  {
    code: 'QPTLV',
    subject: 'Transition',
    condition: 'Level',
    category: 'Procedures',
    subcategory: 'Altitude',
    description: 'Transition level changed',
    descriptionEs: 'Nivel de transición modificado',
  },

  // COMMUNICATIONS - COMPLETE FREQUENCY CODES
  {
    code: 'QCRAS',
    subject: 'Radar',
    condition: 'Frequency',
    category: 'Communications',
    subcategory: 'Radar',
    description: 'Radar frequency unserviceable',
    descriptionEs: 'Frecuencia de radar fuera de servicio',
  },
  {
    code: 'QCEMG',
    subject: 'Emergency',
    condition: 'Frequency',
    category: 'Communications',
    subcategory: 'Emergency',
    description: 'Emergency frequency changed',
    descriptionEs: 'Frecuencia de emergencia modificada',
  },
  {
    code: 'QCDCH',
    subject: 'Delivery',
    condition: 'Frequency',
    category: 'Communications',
    subcategory: 'Delivery',
    description: 'Clearance delivery frequency changed',
    descriptionEs: 'Frecuencia de autorizaciones modificada',
  },
  {
    code: 'QCFIS',
    subject: 'FIS',
    condition: 'Frequency',
    category: 'Communications',
    subcategory: 'FIS',
    description: 'Flight information service frequency changed',
    descriptionEs: 'Frecuencia de servicio de información de vuelo modificada',
  },

  // COMMUNICATIONS - DATALINK
  {
    code: 'QCDLXX',
    subject: 'Datalink',
    condition: 'Not available',
    category: 'Communications',
    subcategory: 'Datalink',
    description: 'Datalink service not available',
    descriptionEs: 'Servicio de enlace de datos no disponible',
  },
  {
    code: 'QCDLAS',
    subject: 'Datalink',
    condition: 'Unserviceable',
    category: 'Communications',
    subcategory: 'Datalink',
    description: 'Datalink unserviceable',
    descriptionEs: 'Enlace de datos fuera de servicio',
  },

  // COMMUNICATIONS - ACARS
  {
    code: 'QCACAR',
    subject: 'ACARS',
    condition: 'Service',
    category: 'Communications',
    subcategory: 'ACARS',
    description: 'ACARS service changed',
    descriptionEs: 'Servicio ACARS modificado',
  },

  // COMMUNICATIONS - CPDLC
  {
    code: 'QCCPD',
    subject: 'CPDLC',
    condition: 'Service',
    category: 'Communications',
    subcategory: 'CPDLC',
    description: 'CPDLC service not available',
    descriptionEs: 'Servicio CPDLC no disponible',
  },

  // LIGHTING - COMPLETE APPROACH LIGHTING
  {
    code: 'QLAXX',
    subject: 'Approach lighting',
    condition: 'Not available',
    category: 'Lighting',
    subcategory: 'Approach',
    description: 'Approach lighting system not available',
    descriptionEs: 'Sistema de iluminación de aproximación no disponible',
  },
  {
    code: 'QLAAS',
    subject: 'Approach lighting',
    condition: 'Unserviceable',
    category: 'Lighting',
    subcategory: 'Approach',
    description: 'Approach lighting system unserviceable',
    descriptionEs: 'Sistema de iluminación de aproximación fuera de servicio',
  },
  {
    code: 'QLACH',
    subject: 'Approach lighting',
    condition: 'Changed',
    category: 'Lighting',
    subcategory: 'Approach',
    description: 'Approach lighting system changed',
    descriptionEs: 'Sistema de iluminación de aproximación modificado',
  },
  {
    code: 'QLALI',
    subject: 'Approach lighting',
    condition: 'Limited',
    category: 'Lighting',
    subcategory: 'Approach',
    description: 'Approach lighting intensity limited',
    descriptionEs: 'Intensidad de iluminación de aproximación limitada',
  },

  // LIGHTING - RUNWAY LIGHTING COMPLETE
  {
    code: 'QLRCL',
    subject: 'Runway',
    condition: 'Centerline lights',
    category: 'Lighting',
    subcategory: 'Runway',
    description: 'Runway centerline lights unserviceable',
    descriptionEs: 'Luces de eje de pista fuera de servicio',
  },
  {
    code: 'QLRTL',
    subject: 'Runway',
    condition: 'Threshold lights',
    category: 'Lighting',
    subcategory: 'Runway',
    description: 'Runway threshold lights unserviceable',
    descriptionEs: 'Luces de umbral de pista fuera de servicio',
  },
  {
    code: 'QLRTD',
    subject: 'Runway',
    condition: 'Touchdown lights',
    category: 'Lighting',
    subcategory: 'Runway',
    description: 'Runway touchdown zone lights unserviceable',
    descriptionEs: 'Luces de zona de toma de contacto fuera de servicio',
  },
  {
    code: 'QLREL',
    subject: 'Runway',
    condition: 'End lights',
    category: 'Lighting',
    subcategory: 'Runway',
    description: 'Runway end lights unserviceable',
    descriptionEs: 'Luces de fin de pista fuera de servicio',
  },
  {
    code: 'QLREL',
    subject: 'Runway',
    condition: 'Edge lights',
    category: 'Lighting',
    subcategory: 'Runway',
    description: 'Runway edge lights unserviceable',
    descriptionEs: 'Luces de borde de pista fuera de servicio',
  },

  // LIGHTING - TAXIWAY LIGHTING COMPLETE
  {
    code: 'QLTCL',
    subject: 'Taxiway',
    condition: 'Centerline lights',
    category: 'Lighting',
    subcategory: 'Taxiway',
    description: 'Taxiway centerline lights unserviceable',
    descriptionEs: 'Luces de eje de calle de rodaje fuera de servicio',
  },
  {
    code: 'QLTEL',
    subject: 'Taxiway',
    condition: 'Edge lights',
    category: 'Lighting',
    subcategory: 'Taxiway',
    description: 'Taxiway edge lights unserviceable',
    descriptionEs: 'Luces de borde de calle de rodaje fuera de servicio',
  },

  // LIGHTING - APRON LIGHTING
  {
    code: 'QLAFL',
    subject: 'Apron',
    condition: 'Floodlights',
    category: 'Lighting',
    subcategory: 'Apron',
    description: 'Apron floodlights unserviceable',
    descriptionEs: 'Iluminación de plataforma fuera de servicio',
  },

  // LIGHTING - VISUAL AIDS
  {
    code: 'QLVAP',
    subject: 'VASI',
    condition: 'Not available',
    category: 'Lighting',
    subcategory: 'Visual Aids',
    description: 'VASI not available',
    descriptionEs: 'VASI no disponible',
  },
  {
    code: 'QLPAP',
    subject: 'PAPI',
    condition: 'Not available',
    category: 'Lighting',
    subcategory: 'Visual Aids',
    description: 'PAPI not available',
    descriptionEs: 'PAPI no disponible',
  },
  {
    code: 'QLPLI',
    subject: 'PAPI',
    condition: 'Limited',
    category: 'Lighting',
    subcategory: 'Visual Aids',
    description: 'PAPI intensity limited',
    descriptionEs: 'Intensidad PAPI limitada',
  },
  {
    code: 'QLRBI',
    subject: 'REI',
    condition: 'Lights',
    category: 'Lighting',
    subcategory: 'Visual Aids',
    description: 'Runway end identifier lights unserviceable',
    descriptionEs: 'Luces identificadoras de fin de pista fuera de servicio',
  },

  // LIGHTING - BEACON
  {
    code: 'QLBCN',
    subject: 'Beacon',
    condition: 'Aerodrome',
    category: 'Lighting',
    subcategory: 'Beacon',
    description: 'Aerodrome beacon unserviceable',
    descriptionEs: 'Faro de aeródromo fuera de servicio',
  },

  // LIGHTING - OBSTACLE LIGHTING
  {
    code: 'QLOBS',
    subject: 'Obstacle',
    condition: 'Lighting',
    category: 'Lighting',
    subcategory: 'Obstacles',
    description: 'Obstacle lights unserviceable',
    descriptionEs: 'Luces de obstáculos fuera de servicio',
  },

  // OBSTACLES - COMPLETE
  {
    code: 'QOBXX',
    subject: 'Obstacle',
    condition: 'New',
    category: 'Obstacles',
    subcategory: 'General',
    description: 'New obstacle erected',
    descriptionEs: 'Nuevo obstáculo erigido',
  },
  {
    code: 'QOBCH',
    subject: 'Obstacle',
    condition: 'Changed',
    category: 'Obstacles',
    subcategory: 'General',
    description: 'Obstacle changed',
    descriptionEs: 'Obstáculo modificado',
  },
  {
    code: 'QOBRE',
    subject: 'Obstacle',
    condition: 'Removed',
    category: 'Obstacles',
    subcategory: 'General',
    description: 'Obstacle removed',
    descriptionEs: 'Obstáculo removido',
  },
  {
    code: 'QOBLT',
    subject: 'Obstacle',
    condition: 'Lit',
    category: 'Obstacles',
    subcategory: 'Lighting',
    description: 'Obstacle lit',
    descriptionEs: 'Obstáculo iluminado',
  },
  {
    code: 'QOBUL',
    subject: 'Obstacle',
    condition: 'Unlit',
    category: 'Obstacles',
    subcategory: 'Lighting',
    description: 'Obstacle unlit',
    descriptionEs: 'Obstáculo sin iluminación',
  },
  {
    code: 'QOBCR',
    subject: 'Obstacle',
    condition: 'Crane',
    category: 'Obstacles',
    subcategory: 'Types',
    description: 'Crane operating',
    descriptionEs: 'Grúa en operación',
  },
  {
    code: 'QOBBL',
    subject: 'Obstacle',
    condition: 'Balloon',
    category: 'Obstacles',
    subcategory: 'Types',
    description: 'Captive balloon',
    descriptionEs: 'Globo cautivo',
  },

  // SERVICES - COMPLETE ATS
  {
    code: 'QSAXX',
    subject: 'ATS',
    condition: 'Not available',
    category: 'Services',
    subcategory: 'ATS',
    description: 'ATS service not available',
    descriptionEs: 'Servicio ATS no disponible',
  },
  {
    code: 'QSACH',
    subject: 'ATS',
    condition: 'Changed',
    category: 'Services',
    subcategory: 'ATS',
    description: 'ATS service changed',
    descriptionEs: 'Servicio ATS modificado',
  },
  {
    code: 'QSALI',
    subject: 'ATS',
    condition: 'Limited',
    category: 'Services',
    subcategory: 'ATS',
    description: 'ATS service limited',
    descriptionEs: 'Servicio ATS limitado',
  },

  // SERVICES - APPROACH CONTROL
  {
    code: 'QSAPP',
    subject: 'Approach',
    condition: 'Service',
    category: 'Services',
    subcategory: 'Approach',
    description: 'Approach control service changed',
    descriptionEs: 'Servicio de control de aproximación modificado',
  },

  // SERVICES - AREA CONTROL
  {
    code: 'QSACC',
    subject: 'ACC',
    condition: 'Service',
    category: 'Services',
    subcategory: 'Area Control',
    description: 'Area control service changed',
    descriptionEs: 'Servicio de control de área modificado',
  },

  // SERVICES - TOWER
  {
    code: 'QSTWR',
    subject: 'Tower',
    condition: 'Service',
    category: 'Services',
    subcategory: 'Tower',
    description: 'Tower service changed',
    descriptionEs: 'Servicio de torre de control modificado',
  },

  // SERVICES - ATIS
  {
    code: 'QSATIS',
    subject: 'ATIS',
    condition: 'Service',
    category: 'Services',
    subcategory: 'ATIS',
    description: 'ATIS not available',
    descriptionEs: 'ATIS no disponible',
  },
  {
    code: 'QSATCH',
    subject: 'ATIS',
    condition: 'Changed',
    category: 'Services',
    subcategory: 'ATIS',
    description: 'ATIS changed',
    descriptionEs: 'ATIS modificado',
  },

  // SERVICES - VOLMET
  {
    code: 'QSVOL',
    subject: 'VOLMET',
    condition: 'Service',
    category: 'Services',
    subcategory: 'VOLMET',
    description: 'VOLMET not available',
    descriptionEs: 'VOLMET no disponible',
  },

  // SERVICES - FUEL
  {
    code: 'QSFXX',
    subject: 'Fuel',
    condition: 'Not available',
    category: 'Services',
    subcategory: 'Fuel',
    description: 'Fuel not available',
    descriptionEs: 'Combustible no disponible',
  },
  {
    code: 'QSFCH',
    subject: 'Fuel',
    condition: 'Changed',
    category: 'Services',
    subcategory: 'Fuel',
    description: 'Fuel availability changed',
    descriptionEs: 'Disponibilidad de combustible modificada',
  },

  // SERVICES - RESCUE
  {
    code: 'QSRFI',
    subject: 'Rescue',
    condition: 'RFF',
    category: 'Services',
    subcategory: 'Rescue',
    description: 'Rescue and fire fighting service availability changed',
    descriptionEs: 'Disponibilidad del servicio de salvamento y extinción de incendios modificada',
  },
  {
    code: 'QSRXX',
    subject: 'Rescue',
    condition: 'Not available',
    category: 'Services',
    subcategory: 'Rescue',
    description: 'Rescue service not available',
    descriptionEs: 'Servicio de salvamento no disponible',
  },

  // SERVICES - CUSTOMS
  {
    code: 'QSCUS',
    subject: 'Customs',
    condition: 'Service',
    category: 'Services',
    subcategory: 'Customs',
    description: 'Customs not available',
    descriptionEs: 'Aduana no disponible',
  },

  // SERVICES - IMMIGRATION
  {
    code: 'QSIMM',
    subject: 'Immigration',
    condition: 'Service',
    category: 'Services',
    subcategory: 'Immigration',
    description: 'Immigration not available',
    descriptionEs: 'Inmigración no disponible',
  },

  // SERVICES - HEALTH
  {
    code: 'QSHLH',
    subject: 'Health',
    condition: 'Service',
    category: 'Services',
    subcategory: 'Health',
    description: 'Health service not available',
    descriptionEs: 'Servicio de sanidad no disponible',
  },

  // SERVICES - SECURITY
  {
    code: 'QSSEC',
    subject: 'Security',
    condition: 'Service',
    category: 'Services',
    subcategory: 'Security',
    description: 'Security screening changed',
    descriptionEs: 'Control de seguridad modificado',
  },

  // SERVICES - HANDLING
  {
    code: 'QSHND',
    subject: 'Handling',
    condition: 'Service',
    category: 'Services',
    subcategory: 'Handling',
    description: 'Aircraft handling service not available',
    descriptionEs: 'Servicio de asistencia en tierra no disponible',
  },

  // SERVICES - RVSM
  {
    code: 'QSRVM',
    subject: 'RVSM',
    condition: 'Service',
    category: 'Services',
    subcategory: 'ATM',
    description: 'RVSM not available',
    descriptionEs: 'RVSM no disponible',
  },

  // SERVICES - RNP
  {
    code: 'QSRNP',
    subject: 'RNP',
    condition: 'Requirement',
    category: 'Services',
    subcategory: 'ATM',
    description: 'RNP requirement changed',
    descriptionEs: 'Requisito RNP modificado',
  },

  // SERVICES - PBN
  {
    code: 'QSPBN',
    subject: 'PBN',
    condition: 'Specification',
    category: 'Services',
    subcategory: 'ATM',
    description: 'PBN specification changed',
    descriptionEs: 'Especificación PBN modificada',
  },

  // SERVICES - MNPS
  {
    code: 'QSMNP',
    subject: 'MNPS',
    condition: 'Requirement',
    category: 'Services',
    subcategory: 'ATM',
    description: 'MNPS airspace requirements changed',
    descriptionEs: 'Requisitos de espacio aéreo MNPS modificados',
  },

  // TRAFFIC - FLOW CONTROL
  {
    code: 'QTFXX',
    subject: 'Flow',
    condition: 'Control',
    category: 'Traffic',
    subcategory: 'Flow Control',
    description: 'Traffic flow control',
    descriptionEs: 'Control de flujo de tránsito',
  },
  {
    code: 'QTFCH',
    subject: 'Flow',
    condition: 'Changed',
    category: 'Traffic',
    subcategory: 'Flow Control',
    description: 'Traffic flow procedures changed',
    descriptionEs: 'Procedimientos de flujo de tránsito modificados',
  },

  // TRAFFIC - DELAYS
  {
    code: 'QTDEL',
    subject: 'Delay',
    condition: 'Expected',
    category: 'Traffic',
    subcategory: 'Delays',
    description: 'Delays expected',
    descriptionEs: 'Demoras esperadas',
  },

  // SURVEILLANCE - ADS-B
  {
    code: 'QSUAB',
    subject: 'ADS-B',
    condition: 'Service',
    category: 'Surveillance',
    subcategory: 'ADS-B',
    description: 'ADS-B service not available',
    descriptionEs: 'Servicio ADS-B no disponible',
  },

  // SURVEILLANCE - ADS-C
  {
    code: 'QSUAC',
    subject: 'ADS-C',
    condition: 'Service',
    category: 'Surveillance',
    subcategory: 'ADS-C',
    description: 'ADS-C service not available',
    descriptionEs: 'Servicio ADS-C no disponible',
  },

  // SURVEILLANCE - MLAT
  {
    code: 'QSUML',
    subject: 'MLAT',
    condition: 'Service',
    category: 'Surveillance',
    subcategory: 'MLAT',
    description: 'Multilateration service not available',
    descriptionEs: 'Servicio de multilateración no disponible',
  },

  // WARNINGS - COMPLETE BIRD HAZARD
  {
    code: 'QWBXX',
    subject: 'Bird',
    condition: 'Hazard',
    category: 'Warnings',
    subcategory: 'Wildlife',
    description: 'Bird hazard',
    descriptionEs: 'Peligro de aves',
  },
  {
    code: 'QWBSE',
    subject: 'Bird',
    condition: 'Severe',
    category: 'Warnings',
    subcategory: 'Wildlife',
    description: 'Bird hazard severe',
    descriptionEs: 'Peligro severo de aves',
  },

  // WARNINGS - WILDLIFE
  {
    code: 'QWWXX',
    subject: 'Wildlife',
    condition: 'Hazard',
    category: 'Warnings',
    subcategory: 'Wildlife',
    description: 'Wildlife hazard',
    descriptionEs: 'Peligro de fauna silvestre',
  },

  // WARNINGS - VOLCANIC ASH
  {
    code: 'QWVXX',
    subject: 'Volcanic',
    condition: 'Ash',
    category: 'Warnings',
    subcategory: 'Volcanic',
    description: 'Volcanic ash',
    descriptionEs: 'Ceniza volcánica',
  },

  // WARNINGS - MILITARY ACTIVITIES
  {
    code: 'QWMXX',
    subject: 'Military',
    condition: 'Activity',
    category: 'Warnings',
    subcategory: 'Military',
    description: 'Military exercise',
    descriptionEs: 'Ejercicio militar',
  },
  {
    code: 'QWMFI',
    subject: 'Military',
    condition: 'Firing',
    category: 'Warnings',
    subcategory: 'Military',
    description: 'Military firing',
    descriptionEs: 'Disparos militares',
  },

  // WARNINGS - PARACHUTE JUMPING
  {
    code: 'QWPXX',
    subject: 'Parachute',
    condition: 'Activity',
    category: 'Warnings',
    subcategory: 'Activities',
    description: 'Parachute jumping',
    descriptionEs: 'Salto en paracaídas',
  },

  // WARNINGS - UNMANNED AIRCRAFT
  {
    code: 'QWUXX',
    subject: 'UAV',
    condition: 'Activity',
    category: 'Warnings',
    subcategory: 'UAV',
    description: 'Unmanned aircraft activity',
    descriptionEs: 'Actividad de aeronaves no tripuladas',
  },

  // WARNINGS - LASER
  {
    code: 'QWLXX',
    subject: 'Laser',
    condition: 'Hazard',
    category: 'Warnings',
    subcategory: 'Hazards',
    description: 'Laser activity',
    descriptionEs: 'Actividad láser',
  },

  // WARNINGS - KITE FLYING
  {
    code: 'QWKXX',
    subject: 'Kite',
    condition: 'Activity',
    category: 'Warnings',
    subcategory: 'Activities',
    description: 'Kite flying',
    descriptionEs: 'Vuelo de cometas',
  },

  // WARNINGS - AEROBATICS
  {
    code: 'QWAXX',
    subject: 'Aerobatics',
    condition: 'Activity',
    category: 'Warnings',
    subcategory: 'Activities',
    description: 'Aerobatic activity',
    descriptionEs: 'Actividad acrobática',
  },

  // WARNINGS - AERIAL SURVEY
  {
    code: 'QWSXX',
    subject: 'Survey',
    condition: 'Aerial',
    category: 'Warnings',
    subcategory: 'Activities',
    description: 'Aerial survey',
    descriptionEs: 'Levantamiento aéreo',
  },

  // WARNINGS - ROCKET LAUNCHING
  {
    code: 'QWRXX',
    subject: 'Rocket',
    condition: 'Launch',
    category: 'Warnings',
    subcategory: 'Activities',
    description: 'Rocket/missile launching',
    descriptionEs: 'Lanzamiento de cohete/misil',
  },

  // WARNINGS - BALLOON
  {
    code: 'QWBAL',
    subject: 'Balloon',
    condition: 'Activity',
    category: 'Warnings',
    subcategory: 'Activities',
    description: 'Balloon activity',
    descriptionEs: 'Actividad de globos',
  },

  // WARNINGS - GLIDER ACTIVITY
  {
    code: 'QWGXX',
    subject: 'Glider',
    condition: 'Activity',
    category: 'Warnings',
    subcategory: 'Activities',
    description: 'Glider activity',
    descriptionEs: 'Actividad de planeadores',
  },

  // WARNINGS - HANG GLIDER
  {
    code: 'QWHXX',
    subject: 'Hang glider',
    condition: 'Activity',
    category: 'Warnings',
    subcategory: 'Activities',
    description: 'Hang glider activity',
    descriptionEs: 'Actividad de ala delta',
  },

  // WARNINGS - PARAGLIDING
  {
    code: 'QWPGX',
    subject: 'Paragliding',
    condition: 'Activity',
    category: 'Warnings',
    subcategory: 'Activities',
    description: 'Paragliding activity',
    descriptionEs: 'Actividad de parapente',
  },

  // WARNINGS - MODEL FLYING
  {
    code: 'QWMFL',
    subject: 'Model',
    condition: 'Flying',
    category: 'Warnings',
    subcategory: 'Activities',
    description: 'Model aircraft flying',
    descriptionEs: 'Vuelo de aeromodelos',
  },

  // WARNINGS - DEMOLITION
  {
    code: 'QWDEM',
    subject: 'Demolition',
    condition: 'Activity',
    category: 'Warnings',
    subcategory: 'Activities',
    description: 'Demolition work',
    descriptionEs: 'Trabajo de demolición',
  },

  // WARNINGS - FIREWORKS
  {
    code: 'QWFIR',
    subject: 'Fireworks',
    condition: 'Display',
    category: 'Warnings',
    subcategory: 'Activities',
    description: 'Fireworks display',
    descriptionEs: 'Exhibición de fuegos artificiales',
  },

  // OPERATIONS - COMPLETE
  {
    code: 'QOAXX',
    subject: 'Aerodrome',
    condition: 'Closed',
    category: 'Operations',
    subcategory: 'Aerodrome',
    description: 'Aerodrome closed',
    descriptionEs: 'Aeródromo cerrado',
  },
  {
    code: 'QOAOP',
    subject: 'Aerodrome',
    condition: 'Open',
    category: 'Operations',
    subcategory: 'Aerodrome',
    description: 'Aerodrome operational',
    descriptionEs: 'Aeródromo operativo',
  },
  {
    code: 'QOAHP',
    subject: 'Aerodrome',
    condition: 'Operating hours',
    category: 'Operations',
    subcategory: 'Aerodrome',
    description: 'Aerodrome operating hours changed',
    descriptionEs: 'Horario de operación del aeródromo modificado',
  },
  {
    code: 'QOAPR',
    subject: 'Aerodrome',
    condition: 'PPR',
    category: 'Operations',
    subcategory: 'Aerodrome',
    description: 'Prior permission required',
    descriptionEs: 'Permiso previo requerido',
  },

  // OPERATIONS - VFR/IFR
  {
    code: 'QOIFR',
    subject: 'Operations',
    condition: 'IFR only',
    category: 'Operations',
    subcategory: 'Flight Rules',
    description: 'IFR operations only',
    descriptionEs: 'Operaciones IFR únicamente',
  },
  {
    code: 'QOVFR',
    subject: 'Operations',
    condition: 'VFR only',
    category: 'Operations',
    subcategory: 'Flight Rules',
    description: 'VFR operations only',
    descriptionEs: 'Operaciones VFR únicamente',
  },

  // OPERATIONS - NIGHT OPERATIONS
  {
    code: 'QONXX',
    subject: 'Night',
    condition: 'Operations',
    category: 'Operations',
    subcategory: 'Hours',
    description: 'Night operations suspended',
    descriptionEs: 'Operaciones nocturnas suspendidas',
  },

  // OPERATIONS - TRAINING
  {
    code: 'QOTRN',
    subject: 'Training',
    condition: 'Flights',
    category: 'Operations',
    subcategory: 'Training',
    description: 'Training flights restricted',
    descriptionEs: 'Vuelos de entrenamiento restringidos',
  },

  // OPERATIONS - NOISE ABATEMENT
  {
    code: 'QONOI',
    subject: 'Noise',
    condition: 'Abatement',
    category: 'Operations',
    subcategory: 'Restrictions',
    description: 'Noise abatement procedures in effect',
    descriptionEs: 'Procedimientos de reducción de ruido en vigor',
  },

  // OPERATIONS - CURFEW
  {
    code: 'QOCUR',
    subject: 'Curfew',
    condition: 'Hours',
    category: 'Operations',
    subcategory: 'Restrictions',
    description: 'Curfew in effect',
    descriptionEs: 'Toque de queda en vigor',
  },

  // OPERATIONS - AIRCRAFT TYPE RESTRICTIONS
  {
    code: 'QOACT',
    subject: 'Aircraft',
    condition: 'Type restriction',
    category: 'Operations',
    subcategory: 'Restrictions',
    description: 'Aircraft type restrictions',
    descriptionEs: 'Restricciones de tipo de aeronave',
  },

  // OPERATIONS - SLOTS
  {
    code: 'QOSLT',
    subject: 'Slots',
    condition: 'Required',
    category: 'Operations',
    subcategory: 'Coordination',
    description: 'Slots required',
    descriptionEs: 'Franjas horarias requeridas',
  },

  // OPERATIONS - CIRCUIT PATTERNS
  {
    code: 'QOCCA',
    subject: 'Circuit',
    condition: 'Left hand',
    category: 'Operations',
    subcategory: 'Procedures',
    description: 'Circuit direction left hand',
    descriptionEs: 'Circuito por la izquierda',
  },
  {
    code: 'QOCCB',
    subject: 'Circuit',
    condition: 'Right hand',
    category: 'Operations',
    subcategory: 'Procedures',
    description: 'Circuit direction right hand',
    descriptionEs: 'Circuito por la derecha',
  },
  {
    code: 'QOCCH',
    subject: 'Circuit',
    condition: 'Changed',
    category: 'Operations',
    subcategory: 'Procedures',
    description: 'Circuit pattern changed',
    descriptionEs: 'Patrón de circuito modificado',
  },

  // OPERATIONS - HELICOPTER OPERATIONS
  {
    code: 'QOHXX',
    subject: 'Helicopter',
    condition: 'Operations',
    category: 'Operations',
    subcategory: 'Helicopter',
    description: 'Helicopter operations',
    descriptionEs: 'Operaciones de helicópteros',
  },
  {
    code: 'QOHCH',
    subject: 'Helicopter',
    condition: 'Changed',
    category: 'Operations',
    subcategory: 'Helicopter',
    description: 'Helicopter procedures changed',
    descriptionEs: 'Procedimientos de helicópteros modificados',
  },
  {
    code: 'QOHLA',
    subject: 'Helicopter',
    condition: 'Landing area',
    category: 'Operations',
    subcategory: 'Helicopter',
    description: 'Helicopter landing area status',
    descriptionEs: 'Estado de área de aterrizaje de helicópteros',
  },

  // OPERATIONS - SPECIAL PROCEDURES
  {
    code: 'QOSPC',
    subject: 'Special',
    condition: 'Procedures',
    category: 'Operations',
    subcategory: 'Procedures',
    description: 'Special procedures in effect',
    descriptionEs: 'Procedimientos especiales en vigor',
  },

  // METEOROLOGICAL - WEATHER MINIMA
  {
    code: 'QMWXX',
    subject: 'Weather',
    condition: 'Minima',
    category: 'Operations',
    subcategory: 'Weather',
    description: 'Weather minima changed',
    descriptionEs: 'Mínimos meteorológicos modificados',
  },

  // LIMITATIONS - WEIGHT
  {
    code: 'QLWXX',
    subject: 'Weight',
    condition: 'Limitation',
    category: 'Operations',
    subcategory: 'Limitations',
    description: 'Weight limitations',
    descriptionEs: 'Limitaciones de peso',
  },

  // LIMITATIONS - WINGSPAN
  {
    code: 'QLSXX',
    subject: 'Wingspan',
    condition: 'Limitation',
    category: 'Operations',
    subcategory: 'Limitations',
    description: 'Wingspan limitations',
    descriptionEs: 'Limitaciones de envergadura',
  },

  // LIMITATIONS - HEIGHT
  {
    code: 'QLHXX',
    subject: 'Height',
    condition: 'Limitation',
    category: 'Operations',
    subcategory: 'Limitations',
    description: 'Height limitations',
    descriptionEs: 'Limitaciones de altura',
  },

  // SPECIAL CASES
  {
    code: 'QXXXX',
    subject: 'Plain language',
    condition: 'Description',
    category: 'Other',
    subcategory: 'General',
    description: 'Information in plain language',
    descriptionEs: 'Información en lenguaje claro',
  },
];

// Helper functions for searching
export function searchQCodes(query: string): QCode[] {
  const lowerQuery = query.toLowerCase().trim();

  if (!lowerQuery) return [];

  return qcodesDatabase.filter((qcode) => {
    return (
      qcode.code.toLowerCase().includes(lowerQuery) ||
      qcode.subject.toLowerCase().includes(lowerQuery) ||
      qcode.condition.toLowerCase().includes(lowerQuery) ||
      qcode.category.toLowerCase().includes(lowerQuery) ||
      qcode.subcategory.toLowerCase().includes(lowerQuery) ||
      qcode.description.toLowerCase().includes(lowerQuery) ||
      qcode.descriptionEs.toLowerCase().includes(lowerQuery)
    );
  });
}

export function getQCodesByCategory(category: string): QCode[] {
  return qcodesDatabase.filter((qcode) => qcode.category === category);
}

export function getCategories(): string[] {
  const categories = new Set(qcodesDatabase.map((qcode) => qcode.category));
  return Array.from(categories).sort();
}

export function getQCodeByCode(code: string): QCode | undefined {
  return qcodesDatabase.find((qcode) => qcode.code.toUpperCase() === code.toUpperCase());
}
