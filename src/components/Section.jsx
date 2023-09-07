import React from "react";

export const Structure = ({ customClass, name, children }) => {
  return (
    <div
      name={name}
      className={
        customClass
          ? customClass
          : "w-full px-8 pt-[20%] md:pt-[10%] pb-[10%] dark:bg-warm-gray-900 transition-all duration-300"
      }
    >
      {children}
    </div>
  );
};

export const Header = ({ title, text }) => {
  return <></>;
};

export const Title = ({ title }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <p className="dark:text-warm-gray-50 lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-black text-center border-b-4 lg:border-b-8 md:border-b-8 border-yellow-400">
            {title}
          </p>
        </div>
        <div className="basis-1/5"></div>
      </div>
    </div>
  );
};

export const TitlePicDivided = ({ pic, title, text }) => {
  return (
    <div className="max-w-[1000px] w-full px-4 flex flex-row gap-2 mb-16">
      <div className="lg:block hidden basis-2/5">
        <img
          className="rounded-full"
          src={pic}
          alt="profilepicture"
          width="350"
          height="350"
        ></img>
      </div>
      {/* Title + Text */}
      <div className="basis-5/5 lg:basis-3/5">
        <div className="max-w-[1000px] w-full px-4 flex flex-row mb-12">
          <div className="basis-1/5"></div>
          <div className="basis-3/5">
            <p className="dark:text-warm-gray-50 lg:text-6xl md:text-6xl sm:text-5xl text-4xl font-black text-center border-b-4 lg:border-b-8 md:border-b-8 border-yellow-400">
              {title}
            </p>
          </div>
          <div className="basis-1/5"></div>
        </div>
        <div className="dark:text-warm-gray-50 justify-center text-center px-8 text-lg">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export const Text = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <div className="basis-1/5"></div>
      <div className="basis-3/5">
        <p className="dark:text-warm-gray-50 lg:text-xl md:text-xl sm:text-lg text-md font-medium text-center">
          {text}
        </p>
      </div>
      <div className="basis-1/5"></div>
    </div>
  );
};

export const Content = ({ customClass, children }) => {
  const classDefault =
    "max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full mt-16";
  return (
    <div className={customClass ? customClass : classDefault}>{children}</div>
  );
};

export const Card = ({ title, text }) => {
  return <></>;
};
