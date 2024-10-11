import { Html } from "@react-three/drei";
import React from "react";

const BookLoader = () => {
  return (
    <div className="overflow-hidden fixed top-0  z-100 h-screen w-screen ">
      <h1 className="text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] m-auto  ">Loading.....</h1>
    </div>
  );
};

export default BookLoader;
