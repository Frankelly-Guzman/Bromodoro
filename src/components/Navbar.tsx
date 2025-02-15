import { Button } from "./ui/button";
import { FaChartBar } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import SettingsButton from "./SettingsButton";
import { useTimerContext } from "@/utils/TimerContext";
import clsx from "clsx"

const Navbar = () => {
  const timerContext = useTimerContext()

  const buttonBgColor = clsx(timerContext.isRunning ? "bg-black" : "bg-gray-default")
  const navBgColor = clsx(timerContext.isRunning ? "bg-black" : `bg-${timerContext.color}-default`)

  return (
    <div
      className={`flex justify-end items-center p-4 gap-4 ${navBgColor}`}
    >
      <SettingsButton />
      <Button className={`flex flex-row gap-2 py-6 ${buttonBgColor} hover:bg-gray-light`}>
        <FaChartBar />
        Reports
      </Button>
      <Button className={`flex flex-row gap-2 py-6 ${buttonBgColor} hover:bg-gray-light`}>
        <BsFillPeopleFill />
        Bromodoros
      </Button>
    </div>
  );
};

export default Navbar;
