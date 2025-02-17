import { useState } from "react";

interface LanguageSwitcherProps {
  onChange: (lang: "en" | "pl" | "gr") => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ onChange }) => {
  const [lang, setLang] = useState<"en" | "pl" | "gr">("en");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value as "en" | "pl" | "gr";
    setLang(selectedLang);
    onChange(selectedLang);
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