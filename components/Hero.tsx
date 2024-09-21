import React from "react";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <div className="pt-32 px-7">
      <div className="font-semibold">
        <h1 className="text-6xl">
          Limelight is a purpose-built tool for <br /> planning and building
          products
        </h1>
        <h2 className="text-[#bebebe] text-2xl mt-10">
          Meet the system for modern software development. Streamline issues,
          projects, and product roadmaps.
        </h2>
      </div>
      <div className="mt-10">
        <Button variant="primary">Start building</Button>
        <Button variant="secondary">New: React Native</Button>
      </div>
    </div>
  );
};

export default Hero;
