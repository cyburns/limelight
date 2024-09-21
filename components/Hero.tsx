import React from "react";
import Button from "./ui/Button";
import { IconChevronRight } from "@tabler/icons-react";
import SpotLight from "./ui/SpotLight";

const Hero = () => {
  return (
    <div className="pt-28 px-7">
      <SpotLight />
      <div className="font-semibold">
        <h1 className="text-6xl">
          Limelight is a purpose-built tool for <br /> planning and building
          products
        </h1>
        <h2 className="text-[#bebebe] text-2xl mt-10">
          Meet the system for modern software development. <br />
          Streamline issues, projects, and product roadmaps.
        </h2>
      </div>
      <div className="mt-10 ">
        <Button variant="primary">Start building</Button>
        <span className="ml-5">
          <Button variant="secondary">
            <span className="flex flex-row items-center">
              New: React Native
              <IconChevronRight className="ml-1" />
            </span>
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Hero;
