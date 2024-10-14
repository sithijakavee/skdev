import { Html } from "@react-three/drei";
import React from "react";

const BookLoader = () => {
  return (
    <div className="overflow-hidden fixed top-0  z-100 h-screen w-screen bg-black">
      
      {/* <img src="/images/loading.gif" alt="loading" className="w-[50%] h-fit rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] m-auto"/> */}
      <h1 className="text-white text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] m-auto ">Last line, <br /> Gimme a sec.....</h1>
    </div>
  );
};

export default BookLoader;
