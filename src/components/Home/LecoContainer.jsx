import React from "react";
import data from "../../config.json";

const homeData = data.pt.home;
export const LecoContainer = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full ">
      <div className="flex lg:text-10xl md:text-8xl sm:text-6xl text-5xl font-black text-warm-gray-900 dark:text-warm-gray-50 mx-auto">
        <div className="flex">
          <div className="text-yellow-400">{homeData.leName}</div>
          {homeData.androName}&nbsp;
        </div>
        <div className="flex">
          <div className="text-blue-600">{homeData.coName}</div>
          {homeData.rreiaName}
        </div>
      </div>
      <div className="lg:text-6xl md:text-6xl sm:text-4xl text-3xl font-black mb-4 text-warm-gray-900 dark:text-warm-gray-50 mx-auto">
        {homeData.role}
      </div>
    </div>
  );
};
