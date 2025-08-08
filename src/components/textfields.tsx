import React, { useState, useEffect } from "react";
import { toGruefnisch, fromGruefnisch } from "secret-languages";
import LanguageSelector from "./LanguageSelector";

const Translator: React.FC = () => {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("Deutsch");
  const [targetLang, setTargetLang] = useState("Grüfnisch");

  const handleTranslate = () => {
    let res = "";
    if (sourceLang === "Deutsch" && targetLang === "Grüfnisch") res = toGruefnisch(sourceText);
    else if (sourceLang === "Grüfnisch" && targetLang === "Deutsch") res = fromGruefnisch(sourceText);
    setTranslatedText(res);
  };

  useEffect(() => {
    handleTranslate();
  }, [sourceText, sourceLang, targetLang]);

  const swapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  return (
    <div className="p-4 max-w-md mx-auto space-y-4 text-center">
      <LanguageSelector
        languages={["Deutsch", "Grüfnisch"]}
        sourceLang={sourceLang}
        targetLang={targetLang}
        onSourceChange={setSourceLang}
        onTargetChange={setTargetLang}
        onSwap={swapLanguages}
      />
      {sourceLang === targetLang && (
        <div className="border rounded border-yellow-500 text-yellow-500">Sprachen dürfen nicht gleich sein!</div>
      )}
      <textarea
        className="w-full rounded p-2 border-none bg-slate-700"
        rows={4}
        placeholder="Gib hier den zu übersetzenden Text ein..."
        value={sourceText}
        onChange={(e) => setSourceText(e.target.value)}
      />

      <textarea
        className="w-full rounded p-2 focus:outline-none border-none bg-slate-700"
        rows={4}
        placeholder="Übersetzung erscheint hier..."
        value={translatedText}
        readOnly
      />
    </div>
  );
};

export default Translator;
