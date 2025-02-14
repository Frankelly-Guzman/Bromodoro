import { Button } from "../generic/button";
import { FaChartBar } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import SettingsButton from "../generic/SettingsButton";

const Navbar = () => {
  return (
    <div className="flex w-full absolute justify-end items-center p-4 gap-4">
      <SettingsButton />
      <Button className="flex flex-row gap-2 py-6 hover:bg-gray-light">
        <FaChartBar />
        Reports
      </Button>
      <Button className="flex flex-row gap-2 py-6 hover:bg-gray-light" >
        <BsFillPeopleFill />
        Bromodoros
      </Button>
    </div >
  );
};

export default Navbar;
