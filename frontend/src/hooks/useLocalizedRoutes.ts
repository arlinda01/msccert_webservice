import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes, RouteKey, SupportedLanguage, detectLanguageFromPath, switchLanguageRoute } from '../config/routes';

export const useLocalizedRoutes = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;

  // Get localized path for a route
  const getPath = (routeKey: RouteKey, params?: Record<string, string>): string => {
    let path = routes[routeKey][currentLang];

    // Replace any params
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        path = path.replace(`:${key}`, value);
      });
    }

    return path;
  };

  // Change language and navigate to equivalent route
  const changeLanguage = (newLang: SupportedLanguage) => {
    const newPath = switchLanguageRoute(location.pathname, currentLang, newLang);
    i18n.changeLanguage(newLang);
    navigate(newPath);
  };

  // Sync language from URL (call this on route change)
  const syncLanguageFromUrl = () => {
    const urlLang = detectLanguageFromPath(location.pathname);
    if (urlLang !== currentLang) {
      i18n.changeLanguage(urlLang);
    }
  };

  return {
    getPath,
    changeLanguage,
    syncLanguageFromUrl,
    currentLang
  };
};

export default useLocalizedRoutes;
