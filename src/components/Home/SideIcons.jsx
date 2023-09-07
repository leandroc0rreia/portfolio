import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import data from "../../config.json";

const socialMedia = data.social_media;

export const SideIcons = () => {
  return (
    <div className="hidden md:flex flex-col fixed left-0 top-[30%] z-10">
      <ul>
        <a className="flex" href={socialMedia.github.url}>
          <li className="w-[160px] h-[60px] flex justify-between items-center text-white font-medium ml-[-100px] hover:ml-0 duration-300 bg-warm-gray-900 dark:bg-warm-gray-700 p-4 rounded-r-2xl">
            {socialMedia.github.text}
            <FaGithub size={24} className={"mr-1"} />
          </li>
        </a>
        <a className="flex" href={socialMedia.facebook.url}>
          <li className="w-[160px] h-[60px] flex justify-between items-center text-white font-medium ml-[-100px] hover:ml-0 duration-300 bg-blue-600 p-4 rounded-r-2xl">
            {socialMedia.facebook.text}
            <FaFacebook size={24} className={"mr-1"} />
          </li>
        </a>
        <a className="flex" href={socialMedia.instagram.url}>
          <li className="w-[160px] h-[60px] flex justify-between items-center text-white font-medium ml-[-100px] hover:ml-0 duration-300 bg-pink-600 p-4 rounded-r-2xl">
            {socialMedia.instagram.text}
            <FaInstagram size={24} className={"mr-1"} />
          </li>
        </a>
        <a className="flex" href={socialMedia.linkedin.url}>
          <li className="w-[160px] h-[60px] flex justify-between items-center text-white font-medium ml-[-100px] hover:ml-0 duration-300 bg-blue-700 p-4 rounded-r-2xl">
            {socialMedia.linkedin.text}
            <FaLinkedin size={24} className={"mr-1"} />
          </li>
        </a>
        <a className="flex" href={socialMedia.email.url}>
          <li className="w-[160px] h-[60px] flex justify-between items-center text-white font-medium ml-[-100px] hover:ml-0 duration-300 bg-gray-500 p-4 rounded-r-2xl">
            {socialMedia.email.text}
            <FaEnvelope size={24} className={"mr-1"} />
          </li>
        </a>
      </ul>
    </div>
  );
};
