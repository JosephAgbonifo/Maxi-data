"use client";
import Image from "next/image";
import React from "react";

function Signup({
  setAuth,
}: {
  setAuth: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="flex-1 flex justify-center items-center h-[100vh]">
      <div className="w-[70%] lg:w-[50%] h-[70%] border-2 border-foreground rounded-2xl p-5">
        <h2 className="text-3xl font-bold pb-10">Sign Up</h2>
        <form className="flex flex-col space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 shadow-maxi bg-transparent focus:outline-none rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 shadow-maxi bg-transparent focus:outline-none rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 shadow-maxi bg-transparent focus:outline-none rounded-lg"
          />
          <button className="p-3 bg-maxiLight text-background rounded-lg">
            Sign Up
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <span
              className="text-background cursor-pointer p-1 bg-maxiLight rounded"
              onClick={() => setAuth("Signin")}
            >
              Signin
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

function Signin({
  setAuth,
}: {
  setAuth: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="flex-1 flex justify-center items-center h-[100vh]">
      <div className="w-[70%] lg:w-[50%] h-[70%] border-2 border-foreground rounded-2xl p-5">
        <h2 className="text-3xl font-bold pb-10">Sign In</h2>
        <form className="flex flex-col space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="p-3 shadow-maxi bg-transparent focus:outline-none rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 shadow-maxi bg-transparent focus:outline-none rounded-lg"
          />
          <button className="p-3 bg-maxiLight text-background rounded-lg">
            Sign In
          </button>
          <p className="text-center">
            Don't have an account?{" "}
            <span
              className="text-background cursor-pointer p-1 bg-maxiLight rounded"
              onClick={() => setAuth("signup")}
            >
              Signup
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

const Hero = () => {
  const [auth, setAuth] = React.useState("signup");
  return (
    <div className="w-[100vw] lg:h-[100vh] lg:flex">
      <div className="w-[100vw] lg:w-[50%] flex items-center justify-center flex-col h-[100vh] lg:h-auto ">
        <Image
          src="/maxi.png"
          alt="maxi-logo"
          width={500}
          height={500}
          className="opacity-20 absolute"
        />
        <h1 className="text-8xl font-black text-center">Maxi Data</h1>
        <p className="text-center text-3xl p-10">Your Surest Data Plug🔌</p>
      </div>
      {auth === "signup" ? (
        <Signup setAuth={setAuth} />
      ) : (
        <Signin setAuth={setAuth} />
      )}
    </div>
  );
};

export default Hero;
