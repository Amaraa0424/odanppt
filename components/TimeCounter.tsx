"use client";
import { useState, useEffect } from "react";

const TimeCounter = () => {
  const [timeLeft, setTimeLeft] = useState(8 * 60); // 8 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-0 text-white z-50 font-bold text-2xl p-6 rounded-b-2xl border-gray-600/50 bg-zinc-700">
      <h1>Time Left: {formatTime(timeLeft)}</h1>
    </div>
  );
};

export default TimeCounter;
