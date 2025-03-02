import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Image from "next/image";
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
      className="flex flex-col font-montserrat items-center justify-center min-h-screen p-4"
      data-theme="pastel"
    >
      <div className="absolute top-0 left-4 z-0">
        <Image
          src="/flowers3.png"
          alt="Flowers"
          width={400}
          height={400}
          style={{ transform: "rotate(90deg)" }}
        />
      </div>
      <div className="absolute bottom-0 right-0 z-0">
        <Image
          src="/flowers3.png"
          alt="Flowers Bottom"
          width={400}
          height={400}
          style={{ transform: "rotate(-90deg)" }}
        />
      </div>
      <div className="absolute top-4 right-4 z-20">
        <LanguageSwitcher />
      </div>{" "}
      <motion.h1
        className="flex flex-col items-center justify-center text-6xl font-bold text-center pb-6 font-playfair mx-4 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="py-12">
          {t("welcome")} {name}!
        </h1>
      </motion.h1>
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Image
          src="/colour.jpg"
          alt="Couple"
          width={500}
          height={500}
          className="w-1/4 shadow-lg shadow-gray-500 rounded-sm border-4 border-white"
          style={{ transform: "rotate(-10deg)" }}
        />

        <Image
          src="/kiss.jpg"
          alt="Couple2"
          width={500}
          height={500}
          className="w-1/4 shadow-lg shadow-gray-500 rounded-sm border-4 border-white"
          style={{ transform: "rotate(10deg)" }}
        />
      </motion.div>
      <motion.h2
        className="text-6xl mt-6 text-center font-playfair z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2>{t("couple")}</h2>
        <h2>{weddingDateText}</h2>
      </motion.h2>
      <motion.div
        className="mt-6 p-4 bg-white text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Countdown targetDate={weddingDate} />
      </motion.div>
      <motion.div
        className="mt-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          href="https://calendar.google.com/calendar/u/0/r/eventedit?text=M%26M%20Zak%20Wedding&dates=20260321T023000Z/20260321T130000Z&ctz=Australia/Sydney"
          className="bg-neutral text-white p-2 rounded-md"
          target="_blank"
        >
          {t("addToCalendar")} 📅
        </Link>
      </motion.div>
    </div>
  );
}

export { getI18nStaticProps as getStaticProps };
