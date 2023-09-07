import React from "react";
import data from "../../config.json";

const aboutData = data.pt.about;

export const ResumeButton = ({resume_path}) => {
  return (
    <div className="items-center">
      <div className="mb-4 row dark:text-warm-gray-50">{aboutData.text_cv}</div>
      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        <a href={resume_path} className="flex items-center">
          <svg
            className="fill-white w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>{aboutData.text_cv_btn}</span>
        </a>
      </button>
    </div>
  );
};
