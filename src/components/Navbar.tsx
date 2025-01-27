import React from "react";
import { Button } from "./ui/button";
import { FaChartBar } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import SettingsButton from "./SettingsButton";
import { useBackground } from "../utils/BackgroundContext";

const Navbar = () => {
  const { bgColor } = useBackground();

  return (
    <div
      className={`flex justify-end items-center p-4 gap-4 ${bgColor}`}
    >
      <SettingsButton />
      <Button className="flex flex-row gap-2 py-6">
        <FaChartBar />
        Reports
      </Button>
      <Button className="flex flex-row gap-2 py-6">
        <BsFillPeopleFill />
        Bromodoros
      </Button>
    </div>
  );
};

export default Navbar;
