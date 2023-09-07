import React from "react";
import * as Section from "../Section";
import { MyTabs } from "./MyTabs";
import { ResumeButton } from "./ResumeButton";
import data from "../../config.json";

const aboutData = data.pt.about;

const About = () => {
  return (
    <Section.Structure name={"about"}>
      <Section.Content customClass="flex flex-col justify-center items-center w-full h-auto">
        <Section.TitlePicDivided
          title={aboutData.title}
          pic={data.profile_pic}
          text={aboutData.text}
        />
        <Section.Content customClass="max-w-[1000px] w-full px-8 mb-16">
          <MyTabs />
        </Section.Content>
        {/* Curriculum Button */}
        <Section.Content
          customClass={
            "max-w-[1000px] w-full px-4 flex flex-row justify-center text-center"
          }
        >
          <ResumeButton resume_path={data.resume_path} />
        </Section.Content>
      </Section.Content>
    </Section.Structure>
  );
};

export default About;
