import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">{t("language")}:</span>
      <button
        onClick={() => changeLanguage("en")}
        className={`px-2 py-1 rounded ${i18n.language === "en" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}
      >EN</button>
      <button
        onClick={() => changeLanguage("es")}
        className={`px-2 py-1 rounded ${i18n.language === "es" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}
      >ES</button>
    </div>
  );
};

export default LanguageSwitcher; 