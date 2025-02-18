import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { query, pathname, asPath } = router; // Get current path and query params

  const changeLanguage = (lang: string) => {
    router.push({ pathname, query }, asPath, { locale: lang });
  };

  return (
    <div className="flex space-x-2">
      <button onClick={() => changeLanguage("en")}>🇬🇧 English</button>
      <button onClick={() => changeLanguage("pl")}>🇵🇱 Polish</button>
      <button onClick={() => changeLanguage("gr")}>🇬🇷 Greek</button>
    </div>
  );
};

export default LanguageSwitcher;
