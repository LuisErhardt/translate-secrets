import React from "react";

interface LanguageSelectorProps {
  languages: string[];
  sourceLang: string;
  targetLang: string;
  onTargetChange: (lang: string) => void;
  onSwap?: () => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  languages,
  sourceLang,
  targetLang,
  onTargetChange,
  onSwap,
}) => {
  const otherSelector = (
    <select
      className="flex-1 border rounded p-2"
      value={sourceLang === "Deutsch" ? targetLang : sourceLang}
      onChange={(e) => onTargetChange(e.target.value)}
    >
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );

  return (
    <div className="flex items-center gap-2">
      {sourceLang === "Deutsch" ? (
        <>
          <div className="flex-1 border rounded p-1">Deutsch</div>
          <button
            type="button"
            onClick={onSwap}
            className="px-2 py-1 border hover:bg-gray-300"
            title="Sprachen tauschen"
          >
            ↔
          </button>
          {otherSelector}
        </>
      ) : (
        <>
          {otherSelector}
          <button
            type="button"
            onClick={onSwap}
            className="px-2 py-1 border hover:bg-gray-300"
            title="Sprachen tauschen"
          >
            ↔
          </button>
          <div className="flex-1 border rounded p-1">Deutsch</div>
        </>
      )}
    </div>
  );
};

export default LanguageSelector;
