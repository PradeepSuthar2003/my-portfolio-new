"use client";

import React from "react";
import Linkedin from "@/public/techImg/linkedin-svgrepo-com.svg";
import Phone from "@/public/techImg/phone-svgrepo-com.svg";
import Mail from "@/public/techImg/mail-svgrepo-com.svg";
import Github from "@/public/techImg/github-svgrepo-com.svg";
import Image from "next/image";

const CONTACTS = [
  {
    icon: Mail,
    value: "pradeepsuthar409@gmail.com",
  },
  {
    icon: Phone,
    value: "+918955994118",
  },
];

const Contact = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl pt-2 pb-2 text-blue-200">Contact me</h1>
      {CONTACTS.map((contact) => (
        <div key={contact.value} className="flex gap-5 pt-2 pb-2">
          <Image width={30} height={30} src={contact.icon} alt="mailImg" />
          <span>{contact.value}</span>
        </div>
      ))}
      <div className="flex pt-2 pb-2 gap-2 mb-5">
        <a href="https://www.linkedin.com/in/pradeepsuthar409/">
          <Image
            className="cursor-pointer"
            width={30}
            height={30}
            src={Linkedin}
            alt="mailImg"
          />
        </a>
        <a href="https://github.com/PradeepSuthar2003">
          <Image
            className="cursor-pointer"
            width={30}
            height={30}
            src={Github}
            alt="mailImg"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
