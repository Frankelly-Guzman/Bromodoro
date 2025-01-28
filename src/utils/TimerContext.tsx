import React, { createContext, useContext, useEffect, useState } from "react";

// Timer context itself 
const TimerContext = createContext<any>(null);

// Timer context provider
// Stuff related to the timer must go in here!
interface TimerContextProps {
  children: React.ReactNode
}

export function TimerContextProvider({ children }: TimerContextProps) {
  // Is timer running? (True/False)
  // What mode is timer in? (Work/Rest/Long Rest)
  // This is all used to define background color 

  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("work")
  const [bgColor, setBgColor] = useState("red-default")

  useEffect(() => {
    // Black when running, otherwise decide color based on timer mode 
    if (isRunning) {
      setBgColor("black")
    } else {
      if (mode == "work") {
        setBgColor("red-default")
      } else if (mode == "break") {
        setBgColor("blue-default")
      } else {
        setBgColor("purple-default")
      }
    }
  }, [isRunning, mode]) // Run hook func. when isRunning or mode change

  // Pack context values
  const contextInfo = {
    isRunning,
    setIsRunning,
    mode,
    setMode,
    bgColor
  }

  return (
    // If any component inside this background provider asks for BackgroundContext, give them the packed values 
    // We'll be asking for these values with useTimerContext()
    <TimerContext.Provider value={contextInfo}>
      {children}
    </TimerContext.Provider>
  );
};

// Hook to use context
export function useTimerContext() {
  const context = useContext(TimerContext);

  if (!context) {
    throw new Error("TimerContext must be used inside a TimerContextProvider!");
  }

  return context;
};
