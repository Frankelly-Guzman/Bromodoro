import { Button } from "./ui/button";
import { FaChartBar } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import SettingsButton from "./SettingsButton";

const Navbar = () => {
  return (
    <div
      className="absolute w-full flex justify-end items-center p-4 gap-4"
    >
      <SettingsButton />
      <Button className="flex flex-row gap-2 py-6 bg-gray-default">
        <FaChartBar />
        Reports
      </Button>
      <Button className="flex flex-row gap-2 py-6 bg-gray-default">
        <BsFillPeopleFill />
        Bromodoros
      </Button>
    </div>
  );
};

export default Navbar;
