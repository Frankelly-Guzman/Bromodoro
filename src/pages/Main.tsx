import { UseTimerContext } from "@/utils/TimerContext";
import Timer from "../components/Timer"

export default function Main() {
  const ctx = UseTimerContext()

  const bgTransition = `background ${ctx.transitionDuration}s ease`

  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-screen"
      style={{
        background: ctx.timerPalette.bgStart,
        transition: bgTransition
      }}
    >
      <Timer />
    </div>
  );
};
