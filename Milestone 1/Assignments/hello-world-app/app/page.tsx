"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Home() {
  const [txtColor, setTxtColor] = useState("text-neutral-950");
  const colors = [
    "text-red-600",
    "text-orange-400",
    "text-amber-400",
    "text-yellow-400",
    "text-lime-400",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTxtColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`border-double border-4 border-sky-500  my-60 transition-colors duration-500 mx-70`}>
      <h1
        className={`${txtColor} hofont-extrabold italic antialiased font-serif text-center text-7xl`}
      >
        Hello World!
      </h1>
    </div>
  );
}
