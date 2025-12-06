// Route configuration for multi-language support
// Each route has paths for each supported language

export type RouteKey =
  | 'home'
  | 'about'
  | 'missionVision'
  | 'qualityPolicy'
  | 'codeOfEthics'
  | 'accreditation'
  | 'partnerships'
  | 'isoServices'
  | 'iso9001'
  | 'iso14001'
  | 'iso22301'
  | 'iso27001'
  | 'iso37001'
  | 'iso39001'
  | 'iso45001'
  | 'iso50001'
  | 'haccp'
  | 'ceMarking'
  | 'services'
  | 'energyEfficiency'
  | 'staffTraining'
  | 'professionalCard'
  | 'technologicalCard'
  | 'equipmentEvaluation'
  | 'contact'
  | 'faq'
  | 'termsConditions'
  | 'certificates'
  | 'certificateVerify'
  | 'quoteForm'
  | 'blog'
  | 'blogPost';

export type SupportedLanguage = 'en' | 'sq' | 'it';

export const routes: Record<RouteKey, Record<SupportedLanguage, string>> = {
  home: {
    en: '/',
    sq: '/sq/',
    it: '/it/'
  },
  about: {
    en: '/about-us/',
    sq: '/sq/rreth-nesh/',
    it: '/it/chi-siamo/'
  },
  missionVision: {
    en: '/about-us/mission-vision/',
    sq: '/sq/rreth-nesh/misioni-dhe-vizioni/',
    it: '/it/chi-siamo/missione-e-visione/'
  },
  qualityPolicy: {
    en: '/about-us/quality-policy/',
    sq: '/sq/rreth-nesh/politika-e-cilesise/',
    it: '/it/chi-siamo/politica-della-qualita/'
  },
  codeOfEthics: {
    en: '/about-us/code-of-ethics/',
    sq: '/sq/rreth-nesh/kodi-i-etikes/',
    it: '/it/chi-siamo/codice-etico/'
  },
  accreditation: {
    en: '/about-us/accreditation/',
    sq: '/sq/rreth-nesh/akreditimi/',
    it: '/it/chi-siamo/accreditamento/'
  },
  partnerships: {
    en: '/about-us/partnerships/',
    sq: '/sq/rreth-nesh/partneritetet/',
    it: '/it/chi-siamo/partnership/'
  },
  isoServices: {
    en: '/services/iso',
    sq: '/sq/sherbimet/iso',
    it: '/it/servizi/iso'
  },
  iso9001: {
    en: '/services/iso/iso-9001',
    sq: '/sq/sherbimet/iso/iso-9001',
    it: '/it/servizi/iso/iso-9001'
  },
  iso14001: {
    en: '/services/iso/iso-14001',
    sq: '/sq/sherbimet/iso/iso-14001',
    it: '/it/servizi/iso/iso-14001'
  },
  iso22301: {
    en: '/services/iso/iso-22301',
    sq: '/sq/sherbimet/iso/iso-22301',
    it: '/it/servizi/iso/iso-22301'
  },
  iso27001: {
    en: '/services/iso/iso-27001',
    sq: '/sq/sherbimet/iso/iso-27001',
    it: '/it/servizi/iso/iso-27001'
  },
  iso37001: {
    en: '/services/iso/iso-37001',
    sq: '/sq/sherbimet/iso/iso-37001',
    it: '/it/servizi/iso/iso-37001'
  },
  iso39001: {
    en: '/services/iso/iso-39001',
    sq: '/sq/sherbimet/iso/iso-39001',
    it: '/it/servizi/iso/iso-39001'
  },
  iso45001: {
    en: '/services/iso/iso-45001',
    sq: '/sq/sherbimet/iso/iso-45001',
    it: '/it/servizi/iso/iso-45001'
  },
  iso50001: {
    en: '/services/iso/iso-50001',
    sq: '/sq/sherbimet/iso/iso-50001',
    it: '/it/servizi/iso/iso-50001'
  },
  haccp: {
    en: '/services/iso/haccp',
    sq: '/sq/sherbimet/iso/haccp',
    it: '/it/servizi/iso/haccp'
  },
  ceMarking: {
    en: '/services/ce-marking',
    sq: '/sq/sherbimet/markimi-ce',
    it: '/it/servizi/marcatura-ce'
  },
  services: {
    en: '/services',
    sq: '/sq/sherbimet',
    it: '/it/servizi'
  },
  energyEfficiency: {
    en: '/services/additional/energy-efficiency',
    sq: '/sq/sherbimet/eficenca-energjetike',
    it: '/it/servizi/efficienza-energetica'
  },
  staffTraining: {
    en: '/services/additional/staff-training',
    sq: '/sq/sherbimet/trajnimi-i-stafit',
    it: '/it/servizi/formazione-del-personale'
  },
  professionalCard: {
    en: '/services/additional/professional-card',
    sq: '/sq/sherbimet/karta-profesionale',
    it: '/it/servizi/tessera-professionale'
  },
  technologicalCard: {
    en: '/services/additional/technological-card',
    sq: '/sq/sherbimet/karta-teknologjike',
    it: '/it/servizi/tessera-tecnologica'
  },
  equipmentEvaluation: {
    en: '/services/additional/equipment-evaluation',
    sq: '/sq/sherbimet/vleresimi-i-pajisjeve',
    it: '/it/servizi/valutazione-attrezzature'
  },
  contact: {
    en: '/contact',
    sq: '/sq/kontakt',
    it: '/it/contatti'
  },
  faq: {
    en: '/faq',
    sq: '/sq/pyetje-te-shpeshta',
    it: '/it/domande-frequenti'
  },
  termsConditions: {
    en: '/terms-and-conditions',
    sq: '/sq/kushtet-dhe-afatet',
    it: '/it/termini-e-condizioni'
  },
  certificates: {
    en: '/certificates',
    sq: '/sq/certifikatat',
    it: '/it/certificati'
  },
  certificateVerify: {
    en: '/certificate/:secureId',
    sq: '/sq/certifikata/:secureId',
    it: '/it/certificato/:secureId'
  },
  quoteForm: {
    en: '/quote/:isoCode',
    sq: '/sq/kerkese-oferte/:isoCode',
    it: '/it/richiesta-preventivo/:isoCode'
  },
  blog: {
    en: '/blog',
    sq: '/sq/blog',
    it: '/it/blog'
  },
  blogPost: {
    en: '/blog/:slug',
    sq: '/sq/blog/:slug',
    it: '/it/blog/:slug'
  }
};

// Helper function to get route for current language
export const getRoute = (routeKey: RouteKey, language: SupportedLanguage): string => {
  return routes[routeKey][language];
};

// Helper function to get all paths for a route (for defining React Router routes)
export const getAllPaths = (routeKey: RouteKey): string[] => {
  return Object.values(routes[routeKey]);
};

// Helper to detect language from URL path
export const detectLanguageFromPath = (path: string): SupportedLanguage => {
  if (path.startsWith('/sq/') || path === '/sq') return 'sq';
  if (path.startsWith('/it/') || path === '/it') return 'it';
  return 'en';
};

// Helper to switch language and get equivalent route
export const switchLanguageRoute = (
  currentPath: string,
  currentLang: SupportedLanguage,
  newLang: SupportedLanguage
): string => {
  // Find which route matches current path
  for (const [key, paths] of Object.entries(routes)) {
    const currentLangPath = paths[currentLang as keyof typeof paths];

    // Handle dynamic routes (with :params)
    if (currentLangPath.includes(':')) {
      const pattern = currentLangPath.replace(/:[^/]+/g, '([^/]+)');
      const regex = new RegExp(`^${pattern}$`);
      const match = currentPath.match(regex);

      if (match) {
        let newPath = paths[newLang as keyof typeof paths];
        // Replace params in new path
        const paramMatches = currentLangPath.match(/:[^/]+/g) || [];
        paramMatches.forEach((param, index) => {
          newPath = newPath.replace(param, match[index + 1]);
        });
        return newPath;
      }
    } else if (currentPath === currentLangPath || currentPath === currentLangPath.replace(/\/$/, '')) {
      return paths[newLang as keyof typeof paths];
    }
  }

  // Default: return home for new language
  return routes.home[newLang];
};
