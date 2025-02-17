// src/components/LanguageSwitcher.tsx
import { useState } from "react";

const LanguageSwitcher = ({
  onChange,
}: {
  onChange: (lang: string) => void;
}) => {
  const [lang, setLang] = useState("en");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value);
    onChange(e.target.value);
  };

  return (
    <select
      value={lang}
      onChange={handleLanguageChange}
      className="p-2 border rounded"
    >
      <option value="en">English</option>
      <option value="pl">Polish</option>
      <option value="gr">Greek</option>
    </select>
  );
};

export default LanguageSwitcher;