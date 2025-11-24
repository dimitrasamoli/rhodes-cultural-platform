import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutRhodes = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 rounded-2xl shadow-md p-6 px-4 py-8 max-w-4xl mx-auto">
      
      <h1 className = "text-3xl font-bold text-center mb-6"> 🌿 {t("about_rhodes.title")}</h1>

      <p className = "mb-4 leading-relaxed text-lg">{t("about_rhodes.paragraph1")}</p>     
      <p className = "mb-4 leading-relaxed text-lg">{t("about_rhodes.paragraph2")}</p>    
      <p className = "mb-4 leading-relaxed text-lg">{t("about_rhodes.paragraph3")}</p>    
      <p className = "mb-8 leading-relaxed text-lg">{t("about_rhodes.paragraph4")}</p>    

      <h2 className = "text-2xl font-semibold mt-10 mb-2"> ℹ️ {t("about_rhodes.quick_facts_title")}</h2>
      <ul className = "list-disc list-inside ml-4 text-base mb-6">
        {t("about_rhodes.quick_facts", { returnObjects: true }).map((facts, idx) => (
          <li key={idx}>{facts}</li>
        ))}
      </ul>

      <h2 className = "text-2xl font-semibold mt-10 mb-2"> 💡 {t("about_rhodes.fun_facts_title")}</h2>
      <ul className = "list-disc list-inside ml-4 text-base"> 
        {t("about_rhodes.fun_facts", { returnObjects: true }).map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
    
    </div>
  );
};

export default AboutRhodes;