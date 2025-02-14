import React, { createContext, useContext, useEffect, useState } from "react";

const TimerContext = createContext<any | null>(null);

interface TimerContextProps {
  children: React.ReactNode
}

export function TimerContextProvider({ children }: TimerContextProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("longbreak")
  const [color, setColor] = useState("red")

  useEffect(() => {
    if (isRunning) {
      setColor("black")
    } else {
      if (mode == "work") {
        setColor("red")
      } else if (mode == "break") {
        setColor("blue")
      } else {
        setColor("purple")
      }
    }
  }, [isRunning, mode])

  const contextInfo = {
    isRunning,
    setIsRunning,
    mode,
    setMode,
    color,
    setColor
  }

  return (
    <TimerContext.Provider value={contextInfo}>
      {children}
    </TimerContext.Provider>
  );
};

export function useTimerContext() {
  const context = useContext(TimerContext);

  if (!context) {
    throw new Error("TimerContext must be used inside a TimerContextProvider!");
  }

  return context;
};
