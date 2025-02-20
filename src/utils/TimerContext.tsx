import React, { createContext, SetStateAction, useContext, useEffect, useState } from "react";

// NOTE: enums use string values for readability but we could omit and just leave numbers
export enum TimerMode {
  Work = "WORK",
  Break = "BREAK",
  LongBreak = "LONG_BREAK"
}

type TimerColorPalette = {
  bgStart: string,
  bgEnd: string,
  bgButton: string,
  streakFlame: string
}

type TimerContextInfo = {
  timerMode: TimerMode,
  setTimerMode: React.Dispatch<SetStateAction<TimerMode>>,
  timerRunning: boolean,
  setTimerRunning: React.Dispatch<SetStateAction<boolean>>,
  timerPalette: TimerColorPalette,
  transitionDuration: number
}

const TimerContext = createContext<TimerContextInfo | null>(null);

export function TimerContextProvider({ children }: { children: React.ReactNode }) {
  const [timerMode, setTimerMode] = useState<TimerMode>(TimerMode.Work)
  const [timerRunning, setTimerRunning] = useState(false)
  const [timerPalette, setTimerPalette] = useState<TimerColorPalette>({
    bgStart: "black",
    bgEnd: "black",
    bgButton: "black",
    streakFlame: "white",
  }) // modify using ... operator with set function since we can't mutate directly

  useEffect(() => {
    if (timerRunning) {
      // full black timer when running to be less distracting
      setTimerPalette({
        bgStart: "black",
        bgEnd: "black",
        bgButton: "black",
        streakFlame: "white"
      })
    } else {
      // change background depending on mode
      switch (timerMode) {
        case TimerMode.Work:
          setTimerPalette((prevPalette) => ({
            ...prevPalette,
            bgStart: "#FF0200",
            bgEnd: "#7E0201"
          }))
          break;
        case TimerMode.Break:
          setTimerPalette((prevPalette) => ({
            ...prevPalette,
            bgStart: "#316AD5",
            bgEnd: "#234A93"
          }))
          break;
        case TimerMode.LongBreak:
          setTimerPalette((prevPalette) => ({
            ...prevPalette,
            bgStart: "#FF6EAD",
            bgEnd: "#821243"
          }))
          break;
      }

      // the streak flame and buttons background share the same colors when not running
      setTimerPalette((prevPalette) => ({
        ...prevPalette,
        bgButton: "#1E1E1E",
        streakFlame: "#FF890B"
      }))

    }
  }, [timerMode, timerRunning])

  // exclude setter for timer palette bc we handle that internally here 
  const timerState: TimerContextInfo = {
    timerMode,
    setTimerMode,
    timerRunning,
    setTimerRunning,
    timerPalette,
    transitionDuration: 0.2
  }

  return (
    <TimerContext.Provider value={timerState}>
      {children}
    </TimerContext.Provider>
  );
};

export function UseTimerContext() {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("no context cuuh");
  }

  return context;
};
