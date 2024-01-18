import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {

  
  return (
    <div className="w-screen h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] p-4 flex items-center justify-center">
      {/* box */}
      <div className="w-full h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[70%]">
        <div className="relative h-1/3 w-full md:w-1/2 md:h-full">
          <Image src={"/loginBg.png"} alt={""} fill className="object-cover" />
        </div> 
        <div className="flex flex-col gap-8 p-4 md:w-1/2 md:h-full lg:p-8">
          <h1 className="font-bold text-xl lg:text-3xl">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md lg:w-[60%]">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-container"
            />
            <span>Sign in with Google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md lg:w-[60%]">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-container"
            />
            <span>Sign in with Facebook</span>
          </button>
          <p className="text-sm ">
            Have a problem? <Link className="underline" href="/">Contact Us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
