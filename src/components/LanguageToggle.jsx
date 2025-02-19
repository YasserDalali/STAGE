import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
        >
            {/*             <span className="mr-2">{i18n.language === 'en' ? '🇬🇧' : '🇫🇷'}</span>
 */}            {i18n.language.toUpperCase()}
        </button>
    );
};

export default LanguageToggle; 