import { useTimerContext } from "@/utils/TimerContext";
import Timer from "../components/Timer"

const Main = () => {
  const bgColor = `bg-${useTimerContext().bgColor}`

  return (
    <div className={`flex min-w-screen min-h-screen ${bgColor}`}>
      <Timer />
    </div>
  );
};

export default Main;
