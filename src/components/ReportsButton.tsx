import { FaChartBar } from "react-icons/fa";
import { Button } from "./ui/button";
import { useTimerContext } from "@/utils/TimerContext";
//import StatsPopup from "./StatsPopup";
import { useState } from "react";
import StatsGraph from "./StatsGraph";

const ReportsButton = () => {  
    const timerContext = useTimerContext()
    const buttonBgColor = timerContext.isRunning ? "bg-black" : "bg-gray-default"
    //const navBgColor = timerContext.isRunning ? "bg-black" : "bg-red-default"
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button className={`flex flex-row gap-2 py-6 ${buttonBgColor} hover:bg-gray-light` } onClick={() => setOpen(true)}>
            <FaChartBar />
            Reports
            </Button>

            <StatsGraph open={open} onClose={() => setOpen(false)} />
        </>
    );
  };

  export default ReportsButton;