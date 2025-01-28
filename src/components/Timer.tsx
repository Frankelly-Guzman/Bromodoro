import { FaArrowRotateLeft, FaBackwardStep, FaPause, FaFire } from "react-icons/fa6"

const flexCenteredAll = [
  "flex",
  "justify-center",
  "items-center"
].join(" ")

const animated = [
  "transition-all",
  "duration-[0.5s]",
].join(" ")

interface TimerButtonProps {
  icon?: React.ReactNode
}

function TimerButton({ icon }: TimerButtonProps) {
  const bgStyles = [
    flexCenteredAll,
    animated,
    "bg-none",
    "rounded-[25px]",
    "px-2",
    "pt-2",
    "pb-4",
  ].join(" ")

  const bgHoverStyles = [
    "hover:bg-red-dark",
  ].join(" ")

  const buttonBgStyles = [
    flexCenteredAll,
    animated,
    "w-[103px]",
    "h-[103px]",
    "bg-gray-default",
    "rounded-[25px]",
    "shadow-[0px_10px_0px_rgba(0,0,0,0.95)]",
  ].join(" ")

  const buttonBgActiveStyles = [
    "transform active:translate-y-[10px]",
    "active:shadow-[0px_0px_0px_rgba(0,0,0,0)]",
    "active:bg-black",
  ].join(" ")

  const iconStyle = [
    "font-extrabold",
    "text-white",
    "text-[64px]",
  ].join(" ")

  return (
    <div className={`${bgStyles} ${bgHoverStyles}`}>
      <div className={`${buttonBgStyles} ${buttonBgActiveStyles}`}>
        <div className={iconStyle}>
          {icon}
        </div>
      </div>
    </div >
  )
}

function Timer() {
  const timerBgStyles = [
    flexCenteredAll,
    "flex-col",
    "m-auto",
    `w-[660px]`,
    `h-[547px]`,
    "rounded-[72px]",
    "bg-gradient-to-b",
    "from-red-default",
    "to-red-dark",
    "shadow-[0px_15px_0px_rgba(0,0,0,0.5)]"
  ].join(" ")

  const timeBgStyles = [
    flexCenteredAll,
    "flex-col",
    "mt-[32px]",
    "w-[597px]",
    "h-[50%]",
    "rounded-[72px]",
    "bg-gray-default",
    "shadow-[0px_-10px_0px_rgba(0,0,0,0.5)]"
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

  return (
    <div className={timerBgStyles}>
      <div className={timeBgStyles}>
        <div className={smallTimerTextStyles}>{<FaFire className="text-orange-default" />}0</div>
        <div className={`${bigTimerTextStyles} mt-[-36px]`}>25:00</div>
        <div className={`${smallTimerTextStyles} mt-[-28px]`}>WORK 0/4</div>
      </div>
      <div className={buttonContainerStyles}>
        <TimerButton icon={<FaBackwardStep />} />
        <TimerButton icon={<FaPause />} />
        <TimerButton icon={<FaArrowRotateLeft />} />
      </div>
    </div >
  )
}

export default Timer;
