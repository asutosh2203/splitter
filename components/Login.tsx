"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="bg-[#343541] h-screen flex flex-col items-center justify-center text-center text-white">
      {/* <Image
        src={'https://bit.ly/3YAJ5oZ'}
        height={200}
        width={200}
        alt={'logo'}
      /> */}
      <p className="m-8">
        Welcome to Splitter
        <br /> Log in to continue
      </p>
      <button
        onClick={() => signIn("google")}
        className="font-bold text-3xl animate-pulse bg-black rounded-full p-5"
      >
        Sign In with Google
      </button>
      {/* <button
        onClick={() => signIn('azure-ad')}
        className='font-bold text-3xl animate-pulse'
      >
        Sign In with Microsoft
      </button> */}
    </div>
  );
};

export default Login;
