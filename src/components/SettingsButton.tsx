/**
 * SettingsButton Component
 * 
 * This component renders a button that triggers a dropdown menu for settings.
 * It includes options to set working time, short break time, and long break time.
 * Additionally, it has toggle switches for various settings.
 */

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaCog } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { useTimerContext } from "@/utils/TimerContext";

/**
 * SettingsButton Component
 * 
 * @returns {JSX.Element} The rendered SettingsButton component.
 */
const SettingsButton = () => {
  const [open, setOpen] = useState(false);
  const [workingTime, setWorkingTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);
  const [toggleA, setToggleA] = useState(false);
  const [toggleB, setToggleB] = useState(false);
  const [toggleC, setToggleC] = useState(false);

  /**
   * Handle input click event
   * 
   * @param {React.MouseEvent} e - The mouse event.
   */
  const handleInputClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the dropdown from closing
  };

  /**
   * Handle toggle change event
   * 
   * @param {React.MouseEvent} e - The mouse event.
   * @param {React.Dispatch<React.SetStateAction<boolean>>} setToggle - The state setter function for the toggle.
   */
  const handleToggleChange = (e: React.MouseEvent, setToggle: React.Dispatch<React.SetStateAction<boolean>>) => {
    e.stopPropagation(); // Prevent the dropdown from closing
    setToggle((prev) => !prev); // Toggle the state
  };

  // BG color
  // TODO: Once again we need a palette instead of a boolcheck
  const timerContext = useTimerContext()
  const bgColor = timerContext.isRunning ? "bg-black" : "bg-gray-default"

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger>
        <Button className={`flex flex-row gap-2 py-6 ${bgColor} hover:bg-gray-light`}>
          <FaCog />
          Settings
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`${bgColor} text-white`}>
        <DropdownMenuLabel className="flex flex-row gap-2 items-center">
          <FaClock />
          Timer
        </DropdownMenuLabel>
        <DropdownMenuLabel>Time (Minutes)</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Work</DropdownMenuLabel>
        <DropdownMenuItem>
          <input
            type="number"
            value={workingTime}
            onChange={(e) => setWorkingTime(parseInt(e.target.value))}
            onClick={handleInputClick} // Prevent dropdown close
            className="w-full p-2 border rounded text-black"
          />
        </DropdownMenuItem>
        <DropdownMenuLabel>Short Break</DropdownMenuLabel>
        <DropdownMenuItem>
          <input
            type="number"
            value={shortBreakTime}
            onChange={(e) => setShortBreakTime(parseInt(e.target.value))}
            onClick={handleInputClick} // Prevent dropdown close
            className="w-full p-2 border rounded text-black"
          />
        </DropdownMenuItem>
        <DropdownMenuLabel>Long Break</DropdownMenuLabel>
        <DropdownMenuItem>
          <input
            type="number"
            value={longBreakTime}
            onChange={(e) => setLongBreakTime(parseInt(e.target.value))}
            onClick={handleInputClick} // Prevent dropdown close
            className="w-full p-2 border rounded text-black"
          />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="flex flex-row gap-2 items-center">
          <FaClock />
          Toggles
        </DropdownMenuLabel>
        <DropdownMenuItem>
          Toggle A
          <Switch
            checked={toggleA}
            onClick={(e) => handleToggleChange(e, setToggleA)}
            className="bg-gray-300 data-[state=checked]:bg-green-500"
          />
        </DropdownMenuItem>
        <DropdownMenuItem>
          Toggle B
          <Switch
            checked={toggleB}
            onClick={(e) => handleToggleChange(e, setToggleB)}
            className="bg-gray-300 data-[state=checked]:bg-green-500"
          />
        </DropdownMenuItem>
        <DropdownMenuItem>
          Toggle C
          <Switch
            checked={toggleC}
            onClick={(e) => handleToggleChange(e, setToggleC)}
            className="bg-gray-300 data-[state=checked]:bg-green-500"
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingsButton;
