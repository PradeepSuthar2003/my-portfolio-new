"use client";

import Image from "next/image";
import MyImage from "@/public/images/img1.png";
import React from "react";

const Intro = () => {
  return (
    <>
      <div>
        <span className="text-lg block">Full Stack Developer</span>
        <span className="text-4xl">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Hi, <span className="text-blue-200">I'm</span> Pradeep Suthar
        </span>
      </div>
      <div>
        <Image src={MyImage} alt="MyImage" width={500} height={500} />
      </div>
    </>
  );
};

export default Intro;
