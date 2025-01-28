import { FaArrowRotateLeft, FaBackwardStep, FaPause, FaPlay, FaFire } from "react-icons/fa6"
import { useTimerContext } from "@/utils/TimerContext"

const flexCenteredAll = [
  "flex",
  "justify-center",
  "items-center"
].join(" ")

// WARN: Not doing anims for now because it looks awkward when changing stuff to black
const animated = [
].join(" ")

interface TimerButtonProps {
  icon?: React.ReactNode
  action?: () => void;
}

// TODO: Clean up usage of context; maybe we could store a color palette instead of asking whether we are running
// We will actually NEED this when we implement timer modes!

function TimerButton({ icon, action }: TimerButtonProps) {
  const timerContext = useTimerContext();

  const bgStyles = [
    flexCenteredAll,
    animated,
    "bg-none",
    "rounded-[25px]",
    "px-2",
    "pt-2",
    "pb-4",
  ].join(" ")

  /*
  const bgHoverStyles = [
    timerContext.isRunning ? "bg-black" : "hover:bg-red-dark",
  ].join(" ")
  */

  const buttonBgStyles = [
    flexCenteredAll,
    animated,
    timerContext.isRunning ? "bg-black" : "bg-gray-default",
    timerContext.isRunning ? "bg-black" : "shadow-[0px_10px_0px_rgba(0,0,0,0.95)]",
    "w-[103px]",
    "h-[103px]",
    "rounded-[25px]",
  ].join(" ")

  const buttonBgHoverStyles = [
    timerContext.isRunning ? "bg-black" : "hover:bg-gray-light",
  ]

  const buttonBgActiveStyles = [
    "transform active:translate-y-[10px]",
    "active:shadow-[0px_0px_0px_rgba(0,0,0,0)]",
    "active:bg-gray-dark",
  ].join(" ")

  const iconStyle = [
    "font-extrabold",
    "text-white",
    "text-[64px]",
  ].join(" ")

  return (
    <div className={`${bgStyles}`}>
      <button type="button" onClick={action} className={`${buttonBgStyles} ${buttonBgHoverStyles} ${buttonBgActiveStyles}`}>
        <div className={iconStyle}>
          {icon}
        </div>
      </button>
    </div >
  )
}

function Timer() {
  const timerContext = useTimerContext()

  const timerBgStyles = [
    flexCenteredAll,
    timerContext.isRunning ? "" : "bg-gradient-to-b",
    timerContext.isRunning ? "" : "from-red-default",
    timerContext.isRunning ? "" : "to-red-dark",
    timerContext.isRunning ? "" : "shadow-[0px_15px_0px_rgba(0,0,0,0.5)]",
    "flex-col",
    "m-auto",
    `w-[660px]`,
    `h-[547px]`,
    "rounded-[72px]",
  ].join(" ")

  const timeBgStyles = [
    flexCenteredAll,
    timerContext.isRunning ? "bg-black" : "bg-gray-default",
    timerContext.isRunning ? "" : "shadow-[0px_-10px_0px_rgba(0,0,0,0.5)]",
    "flex-col",
    "mt-[32px]",
    "w-[597px]",
    "h-[50%]",
    "rounded-[72px]",
  ].join(" ")

  const bigTimerTextStyles = [
    "font-extrabold",
    "text-white",
    "text-center",
    "text-[128px]",
  ].join(" ")

  const smallTimerTextStyles = [
    flexCenteredAll,
    "gap-[6px]",
    "font-medium",
    "text-[32px]",
    "text-white",
  ].join(" ")

  const buttonContainerStyles = [
    flexCenteredAll,
    "flex-row",
    "gap-[20px]",
    "h-[50%]",
  ].join(" ")

  // Control action functions 
  function onPlayPause() {
    if (timerContext.isRunning) {
      timerContext.setIsRunning(false);
    } else {
      timerContext.setIsRunning(true);
    }
  }

  return (
    <div className={timerBgStyles}>
      <div className={timeBgStyles}>
        <div className={smallTimerTextStyles}>{<FaFire className="text-white" />}0</div>
        <div className={`${bigTimerTextStyles} mt-[-36px]`}>25:00</div>
        <div className={`${smallTimerTextStyles} mt-[-28px]`}>WORK 0/4</div>
      </div>
      <div className={buttonContainerStyles}>
        <TimerButton icon={<FaBackwardStep />} />
        <TimerButton icon={timerContext.isRunning ? <FaPause /> : <FaPlay />} action={onPlayPause} />
        <TimerButton icon={<FaArrowRotateLeft />} />
      </div>
    </div >
  )
}

export default Timer;
