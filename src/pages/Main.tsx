import { useTimerContext } from "../components/bromo/TimerContext";
import Timer from "../components/bromo/Timer"
import clsx from "clsx"

const Main = () => {
  const timerContext = useTimerContext()

  const bgColor = clsx(
    timerContext.isRunning ? "bg-black" : `bg-${timerContext.color}-default`
  )

  return (
    <div className={`flex items-center justify-center min-w-screen min-h-screen ${bgColor}`}>
      <Timer />
    </div>
  );
};

export default Main;
