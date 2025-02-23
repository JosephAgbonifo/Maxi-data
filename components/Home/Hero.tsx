import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <Image
        src="/maxi.png"
        alt="maxi-logo"
        width={500}
        height={500}
        className="opacity-20 absolute"
      />
      <h1 className="text-8xl font-black">Maxi Data</h1>
    </div>
  );
};

export default Hero;
