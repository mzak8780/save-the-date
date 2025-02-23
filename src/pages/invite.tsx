import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import "../app/globals.css";
import Countdown from "../components/Countdown";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { getI18nStaticProps } from "../utils/getStaticProps";

export default function Invite() {
  const { t } = useTranslation("common"); // Ensure "common" is the correct namespace
  const router = useRouter();
  const { name } = router.query;
  const weddingDate = "2026-03-21T00:00:00";
  const weddingDateText = "21.03.2026";

  if (!name) return <p className="text-center">Loading...</p>;

  return (
    <div
      className="bg-accent flex flex-col font-montserrat items-center justify-center min-h-screen p-4"
      data-theme="pastel"
    >
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>{" "}
      <motion.h1
        className="text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>
          {t("welcome")} {name}!
        </h1>
      </motion.h1>
      <motion.h2
        className="text-4xl mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2>{t("couple")}</h2>
        <h2>{weddingDateText}</h2>
      </motion.h2>
      <motion.p
        className="mt-2 text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-xl mt-2">{t("countdown")} 🎉</p>
      </motion.p>
      <motion.div
        className="mt-6 p-4 bg-white shadow-lg rounded-box text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Countdown targetDate={weddingDate} />
      </motion.div>
      <motion.div
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          href="https://calendar.google.com/calendar/u/0/r/eventedit?text=M%26M%20Zak%20Wedding&dates=20260321T023000Z/20260321T130000Z&ctz=Australia/Sydney"
          className="mt-4 bg-success text-white p-2 rounded-md"
          target="_blank"
        >
          {t("addToCalendar")} 📅
        </Link>
      </motion.div>
    </div>
  );
}

export { getI18nStaticProps as getStaticProps };
