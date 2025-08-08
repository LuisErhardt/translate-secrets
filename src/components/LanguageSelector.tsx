import React from "react";

interface LanguageSelectorProps {
  languages: string[];
  sourceLang: string;
  targetLang: string;
  onSourceChange: (lang: string) => void;
  onTargetChange: (lang: string) => void;
  onSwap?: () => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  languages,
  sourceLang,
  targetLang,
  onSourceChange,
  onTargetChange,
  onSwap,
}) => {
  return (
    <div className="flex items-center gap-2">
      <select className="flex-1 border rounded p-2" value={sourceLang} onChange={(e) => onSourceChange(e.target.value)}>
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>

      {onSwap && (
        <button type="button" onClick={onSwap} className="px-2 py-1 border hover:bg-gray-300" title="Sprachen tauschen">
          ↔
        </button>
      )}

      <select className="flex-1 border rounded p-2" value={targetLang} onChange={(e) => onTargetChange(e.target.value)}>
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
