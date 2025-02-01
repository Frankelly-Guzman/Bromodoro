import { useTimerContext } from "@/utils/TimerContext";
import Timer from "../components/Timer"
import clsx from "clsx"

const Main = () => {
  const timerContext = useTimerContext()

  const bgColor = clsx(
    timerContext.isRunning ? "bg-black" : `bg-${timerContext.color}-default`
  )

  return (
    <div className={`flex min-w-screen min-h-screen ${bgColor}`}>
      <Timer />
    </div>
  );
};

export default Main;
