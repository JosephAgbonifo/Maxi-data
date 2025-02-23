"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CiMenuKebab } from "react-icons/ci";

function HeaderButton({ text, link }: { text: string; link: string }) {
  return (
    <Link
      className="hidden p-3 rounded m-3 bg-maxiLight text-background"
      href={link}
    >
      {text}
    </Link>
  );
}

export default function Header() {
  const [menu, toggleMenu] = useState("off");
  const [scrollVisible, setScrollVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setScrollVisible(true);
      } else {
        setScrollVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {scrollVisible ? (
        <div className="flex items-center fixed w-screen">
          <Image
            src="/maxi.png"
            width={70}
            height={70}
            alt="Maxi data"
            className="m-5"
          />
          <h1 className="text-2xl font-bold h-full">Maxi Data</h1>
        </div>
      ) : null}
    </>
  );
}
