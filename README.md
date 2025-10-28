# NOTAM Q-Code Identifier

Aviation AIS/ARO tool for searching, building, and referencing NOTAM Q-codes.

## Overview

NOTAM Q-Code Identifier is a comprehensive web application designed to simplify Q-code identification and construction for aviation professionals working in Aeronautical Information Services (AIS) and Air Traffic Services Reporting Offices (ARO). The tool provides intelligent search, guided Q-code building, and a complete reference library based on ICAO standards.

## Database

### Complete ICAO Q-Codes Database

✅ **333 Official ICAO Q-Codes** from ICAO Annex 15 and PANS-AIM Doc 10066

#### Coverage by Category:

- **Runway (QMRXX):** 32+ codes - Surface conditions, lighting, distances, operations
- **Taxiway (QMTXX):** 18+ codes - Conditions, lighting, markings, operations
- **Apron (QMAXX):** 12+ codes - Stands, services, lighting, restrictions
- **Navigation Aids:** 60+ codes
  - VOR/DME (QNMXX, QNDXX)
  - ILS/MLS/GLS (QNIXX, QNLXX, QNJXX)
  - NDB/TACAN (QNBXX, QNTXX)
  - Radar/GNSS (QNRXX, QNGXX)
  - Waypoints & Routes (QNWXX, QNHXX)
- **Airspace:** 25+ codes
  - FIR/UIR (QAFXX, QAUXX)
  - TMA/CTA/CTR (QATXX, QACXX, QARZXX)
  - Airways & RNAV (QAYX, QANXX)
- **Procedures:** 45+ codes
  - SID/STAR (QPDXX, QPAXX)
  - Approaches (QPIXX) - ILS, VOR, NDB, RNAV, GNSS, Visual, Circling
  - Missed Approach & Holding (QPMXX, QPHXX)
  - Transition Altitude/Level (QPTXX)
- **Communications:** 20+ codes
  - Frequencies (Tower, Approach, ACC, ATIS, VOLMET)
  - Datalink/CPDLC (QCDLXX, QCCPD)
  - ACARS (QCACAR)
- **Lighting:** 25+ codes
  - Approach Lighting (QLAXX)
  - Runway Lighting (QLRXX) - Centerline, threshold, touchdown, edge
  - Visual Aids (QLVAP, QLPAP) - VASI, PAPI, REI
  - Beacon & Obstacles (QLBCN, QLOBS)
- **Obstacles:** 10+ codes - Cranes, balloons, lighting status
- **Aerodrome Services:** 30+ codes
  - ATS Services (QSAXX)
  - Fuel, Rescue, Customs, Immigration (QSFXX, QSRXX, QSCUS, QSIMM)
  - ATIS, VOLMET (QSATIS, QSVOL)
- **Traffic & Surveillance:** 15+ codes
  - Flow Control & Delays (QTFXX, QTDEL)
  - ADS-B/ADS-C/MLAT (QSUAB, QSUAC, QSUML)
- **Warnings:** 25+ codes
  - Wildlife (QWBXX, QWWXX) - Birds, severe hazard
  - Activities (QWPXX, QWUXX, QWLXX) - Parachuting, UAV, laser
  - Military (QWMXX, QWMFI)
  - Sports (QWAXX, QWGXX, QWHXX) - Aerobatics, gliders, hang gliders
  - Other Hazards (QWVXX, QWDEM, QWFIR) - Volcanic ash, demolition, fireworks
- **Operations:** 20+ codes
  - Aerodrome Status (QOAXX) - Closed, open, hours, PPR
  - Flight Rules (QOIFR, QOVFR)
  - Restrictions (QONXX, QOCUR, QONOI) - Night ops, curfew, noise
  - Limitations (QLWXX, QLSXX, QLHXX) - Weight, wingspan, height

### Bilingual Support

- **English:** Complete ICAO standard descriptions
- **Spanish:** Full translations for all Q-codes
- Professional aviation terminology

## Features

### ✈️ Q-Code Search and Identification

- Intelligent search with fuzzy matching
- Search by code, description, category, or phraseology
- Instant results with relevance scoring
- Detailed Q-code breakdown and explanations
- Bilingual search (English/Spanish)

### 🔧 Q-Code Builder Tool

- Step-by-step guided Q-code construction
- 24 subject options × 17 condition options
- Validation against official database
- Real-time preview of complete Q-code
- Copy to clipboard functionality
- Bilingual interface

### 📚 Quick Reference Library

- Browse Q-codes by category (Runway, Taxiway, Apron, Navigation Aids, etc.)
- 16 main categories with subcategories
- Comprehensive descriptions and examples
- Standards-based categorization (ICAO Annex 15)
- Category statistics and counts

### 🌐 Internationalization

- Language toggle (English ↔ Spanish)
- 400+ translated UI strings
- Persistent language preference
- Professional aviation translations

### 🕐 Recent Searches History

- Automatic history tracking
- Quick access to frequently used codes
- Local storage persistence
- Clear history option

## Tech Stack

- **Framework:** Next.js 15.5.6 (App Router)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS 3.4
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Database:** In-memory TypeScript (333 official ICAO codes)
- **Icons:** Lucide React
- **Theme:** next-themes (Dark/Light mode)
- **i18n:** Custom React Context
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ or later
- npm, yarn, or pnpm
- Turso account (for database)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/notam-qcode-app.git
cd notam-qcode-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Turso credentials:

```env
TURSO_DATABASE_URL=your_turso_database_url
TURSO_AUTH_TOKEN=your_turso_auth_token
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Turso Database Setup

1. Sign up at [https://turso.tech](https://turso.tech)
2. Install Turso CLI:

```bash
curl -sSfL https://get.tur.so/install.sh | bash
```

3. Create a database:

```bash
turso db create notam-qcode-db
```

4. Get the database URL:

```bash
turso db show notam-qcode-db
```

5. Generate an auth token:

```bash
turso db tokens create notam-qcode-db
```

6. Copy the URL and token to your `.env.local` file.

## Project Structure

```
notam-qcode-app/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles and CSS variables
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── layout/           # Layout components (header, theme)
├── lib/                   # Utilities and shared logic
│   ├── db/               # Database client and queries
│   ├── types/            # TypeScript type definitions
│   ├── hooks/            # Custom React hooks
│   └── utils.ts          # Utility functions (cn helper)
├── public/               # Static assets
├── .env.local.example    # Environment variables template
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript compiler checks
- `npm run format` - Format code with Prettier

### Code Style

- **TypeScript:** Strict mode enabled
- **Formatting:** Prettier with 2-space indents, single quotes
- **Linting:** ESLint with Next.js recommended rules
- **Components:** Functional components with TypeScript
- **Styling:** Tailwind utility classes with `cn()` helper

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Add environment variables in Vercel project settings:
   - `TURSO_DATABASE_URL`
   - `TURSO_AUTH_TOKEN`
4. Deploy!

Vercel will auto-detect Next.js and configure build settings.

### Other Platforms

The application can be deployed to any platform supporting Next.js:

- Netlify
- Railway
- Render
- AWS Amplify

Ensure environment variables are configured on your chosen platform.

## Standards and References

This application implements Q-code standards based on:

- **ICAO Annex 15:** Aeronautical Information Services
- **ICAO Doc 10066 (PANS-AIM):** Procedures for Air Navigation Services - Aeronautical Information Management
- **ICAO Doc 8400:** ICAO Abbreviations and Codes

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit changes: `git commit -m 'Add my feature'`
4. Push to branch: `git push origin feature/my-feature`
5. Submit a pull request

### Code Conventions

- Follow existing code style
- Write meaningful commit messages
- Add TypeScript types for all functions
- Test components before submitting

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Support

For issues, questions, or feature requests, please open an issue on GitHub.

---

Built with ❤️ for aviation professionals worldwide.
# notam-qcode-app
