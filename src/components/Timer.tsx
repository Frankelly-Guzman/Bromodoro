import { FaArrowRotateLeft, FaPlay, FaFire, FaPause, FaForwardStep } from "react-icons/fa6"
import { UseTimerContext } from "@/utils/TimerContext"
import { useCallback, useEffect, useState } from "react"
import { pomodoroTimer } from "../scripts/pomodoroTimer"
import clsx from "clsx"

interface TimerButtonProps {
  icon?: React.ReactNode
  action?: () => void;
}

function TimerButton({ icon, action }: TimerButtonProps) {
  const ctx = UseTimerContext();

  const transformTransition = `all ${ctx.transitionDuration}s ease`

  return (
    <div
      className="flex justify-center items-center relative rounded-[25px] p-1 shadow-[0px_10px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-3"
      style={{
        background: ctx.timerPalette.bgButton,
        transition: transformTransition
      }}
    >
      <button
        type="button"
        onClick={action}
        className="flex items-center justify-center w-[103px] h-[103px] rounded-[25px]"
      >
        <div className="font-extrabold text-white text-[64px] mb-1">
          {icon}
        </div>
      </button>
    </div >
  )
}

function Timer() {
  const ctx = UseTimerContext()

  const smallTimerTextStyles = clsx(
    "flex items-center justify-center gap-[6px] font-medium text-[32px] text-white"
  )

  // tailwind support for styling things with variables isnt very good
  // we will use the style attribute to handle things that change using arbitrary style values 
  // e.g. the timer background

  const bgTransition = `background ${ctx.transitionDuration}s ease`
  const colorTransition = `color ${ctx.transitionDuration}s ease`

  const [streak, setStreak] = useState<string>(pomodoroTimer.getStreakString())
  const [timeLeft, setTimeLeft] = useState<string>(pomodoroTimer.getTimeString())
  const [intervalsLeft, setIntervalsLeft] = useState<string>(pomodoroTimer.getIntervalsString())

  // usestate triggers rerender on change
  // this recreates everything, even functions
  // recreated functions will pull the new state
  // if we dont recreate functions on rerender, they will always pull old state value
  // NOTE: when a function doesnt interact with component state, its best not to recreate it

  const updateTimeLeft = useCallback(() => {
    setTimeLeft(pomodoroTimer.getTimeString())
  }, [])

  const onTimerStop = useCallback(() => {
    ctx.setTimerRunning(false)
    ctx.setTimerMode(pomodoroTimer.getTimerMode())

    setIntervalsLeft(pomodoroTimer.getIntervalsString())
    setStreak(pomodoroTimer.getStreakString()) // we don't need to do this every stop but it's too much to give it its dedicated event
    
    updateTimeLeft()
  }, [ctx, updateTimeLeft]) // WARN: not sure why we need to pass this as dep, READ about react and function re-creations

  const onTimerUpdate = useCallback(() => {
    setTimeLeft(pomodoroTimer.getTimeString())
  }, [])

  useEffect(() => {
    pomodoroTimer.on("tick", updateTimeLeft)
    pomodoroTimer.on("stop", onTimerStop)
    pomodoroTimer.on("update", onTimerUpdate)
  }, [updateTimeLeft, onTimerStop, onTimerUpdate])

  function onPlayPauseClick() {
    if (ctx.timerRunning) {
      ctx.setTimerRunning(false)
      pomodoroTimer.stop()
    } else {
      ctx.setTimerRunning(true)
      pomodoroTimer.start()
    }
  }

  function onSkipClick() {
    pomodoroTimer.next()
  }

  return (
    <div
      className="flex items-center justify-center flex-col w-[660px] h-[547px] rounded-[72px] relative overflow-hidden"
      style={{
        background: ctx.timerPalette.bgStart,
        transition: bgTransition
      }}
    >
      <div className="absolute bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.6)] w-full h-full z-0" />
      <div
        className="flex items-center justify-center flex-col mt-[32px] w-[597px] h-[50%] rounded-[72px] z-20"
        style={{
          background: ctx.timerPalette.bgButton,
          transition: bgTransition
        }}
      >
        <div className={smallTimerTextStyles}>{<FaFire style={{ color: ctx.timerPalette.streakFlame, transition: colorTransition }} />}{streak}</div>
        <div className="font-extrabold text-white text-center text-[128px] mt-[-36px]">{timeLeft}</div>
        <div className={`${smallTimerTextStyles} mt-[-28px]`}>WORK {intervalsLeft}</div>
      </div>
      <div className="flex items-center justify-center flex-row gap-[20px] h-[50%] z-30">
        <TimerButton icon={<FaArrowRotateLeft />} />
        <TimerButton icon={ctx.timerRunning ? <FaPause /> : <FaPlay />} action={onPlayPauseClick} />
        <TimerButton icon={<FaForwardStep />} action={onSkipClick} />
      </div>
    </div >
  )
}

export default Timer;
