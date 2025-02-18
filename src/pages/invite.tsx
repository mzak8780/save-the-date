import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import "../app/globals.css";
import Countdown from "../components/Countdown";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Invite() {
  const { t } = useTranslation("common"); // Ensure "common" is the correct namespace
  const router = useRouter();
  const { name } = router.query;
  const weddingDate = "2026-03-21T00:00:00";

  if (!name) return <p className="text-center">Loading...</p>;

  return (
    <div
      className="bg-accent flex flex-col items-center justify-center min-h-screen p-4"
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
        <h1 className="text-4xl font-bold mt-4">{t("welcome")}</h1>
        {name}!
      </motion.h1>
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

        <p className="text-gray-700 text-lg p-2">{t("march21")}</p>
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

// ✅ Fetch translations on server-side
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
