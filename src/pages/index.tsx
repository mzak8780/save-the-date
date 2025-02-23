import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Autosuggest from "../components/Autosuggest";
import "../app/globals.css";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { getI18nStaticProps } from "../utils/getStaticProps";

export default function Home() {
  const { t } = useTranslation("common");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    router.push(`/invite?name=${encodeURIComponent(name)}`);
  };

  return (
    <div
      className="flex flex-col font-montserrat items-center justify-center min-h-screen bg-secondary p-4"
      data-theme="pastel"
    >
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>

      <h1 className="text-primary-content text-4xl font-bold mb-4">
        {t("enterYourName")}
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-row gap-2">
        <Autosuggest setName={setName} />
        <button
          type="submit"
          className="btn btn-primary text-white p-2 rounded-box"
          disabled={!name}
        >
          {t("submit")}
        </button>
      </form>
    </div>
  );
}

export { getI18nStaticProps as getStaticProps };
