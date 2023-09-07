import React from "react";
import * as Section from "../Section";
import { LecoContainer } from "./LecoContainer";
import { SideIcons } from "./SideIcons";


const Home = () => {
  return (
    <Section.Structure name="home" customClass="w-full h-screen dark:bg-warm-gray-900 transition-all duration-300">
      <LecoContainer />
      <SideIcons />
    </Section.Structure>
  );
};

export default Home;
