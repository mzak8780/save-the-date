// src/components/Countdown.tsx
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

const calculateTimeLeft = (targetDate: string) => {
  const difference = +new Date(targetDate) - +new Date();
  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const { t } = useTranslation("common");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 rounded-box text-neutral-content">
        <span className="countdown countdown-days text-5xl">
          <span
            style={{ "--value": timeLeft.days } as React.CSSProperties}
          ></span>
        </span>
        {t("days")}
      </div>
      <div className="flex flex-col p-2 rounded-box text-neutral-content">
        <span className="countdown  text-5xl">
          <span
            style={{ "--value": timeLeft.hours } as React.CSSProperties}
          ></span>
        </span>
        {t("hours")}
      </div>
      <div className="flex flex-col p-2  rounded-box text-neutral-content">
        <span className="countdown text-5xl">
          <span
            style={{ "--value": timeLeft.minutes } as React.CSSProperties}
          ></span>
        </span>
        {t("minutes")}
      </div>
      <div className="flex flex-col p-2 rounded-box text-neutral-content">
        <span className="countdown text-5xl">
          <span
            style={{ "--value": timeLeft.seconds } as React.CSSProperties}
          ></span>
        </span>
        {t("seconds")}
      </div>
    </div>
  );
};

export default Countdown;
