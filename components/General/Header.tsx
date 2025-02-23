"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  return (
    <div className="flex items-center fixed w-[100vw]">
      <Image
        src="/maxi.png"
        width={70}
        height={70}
        alt="Maxi data"
        className="m-5"
      />
      <h1 className="text-2xl font-bold h-full">Maxi Data</h1>
      <div
        className={
          menu === "off"
            ? `w-0`
            : `w-[50%] lg:flex-1 text-end pr-10 fixed h-[100vh] transition-all duration-500 top-0 bg-background lg:bg-transparent lg:h-auto lg:relative`
        }
      >
        <HeaderButton text="Signup" link="/signup" />
        <HeaderButton text="Signin" link="/signin" />
        <HeaderButton text="Contact Us" link="/contact" />
      </div>
      <div className="lg:hidden">
        <CiMenuKebab className="flex-1 text-end" />
      </div>
    </div>
  );
}
