import { EventEmitter } from "eventemitter3";
import TimerMode from "../utils/TimerMode.ts"

// the purpose of this eventemitter is to tell react when to update state
// i.e. we signal it to change something whenever this timer does something important

function minToMs(n: number): number {
  return n * 1000 * 60
}

class PomodoroTimer extends EventEmitter {
  private mode = TimerMode.Work

  // these are in ms!
  private maxWorkTimeLeft = minToMs(25)
  private maxBreakTimeLeft = minToMs(5)
  private maxLongBreakTimeLeft = minToMs(15)
  private timeLeft = this.maxWorkTimeLeft // in ms 

  private maxIntervalsLeft = 4
  private intervalsLeft = this.maxIntervalsLeft
  private intervalsDone = 0
  private interval: NodeJS.Timeout | null = null

  private streak = 0

  start() {
    console.log("Starting pomo timer!")

    // TODO: make precise! is prone to drifting rn
    this.interval = setInterval(() => {
      this.timeLeft -= 1000
      this.emit("tick") // emit event to update components!

      if (this.timeLeft <= 0) {
        this.next()
      }
    }, 1000)
  }

  stop() {
    console.log("Stopping pomo timer!")

    if (this.interval) {
      clearInterval(this.interval)
    }

    this.emit("stop")
  }

  next() {
    // move mode
    switch (this.mode) {
      case TimerMode.LongBreak:
        this.intervalsLeft = this.maxIntervalsLeft
        this.intervalsDone = 0
        this.timeLeft = this.maxWorkTimeLeft
        this.mode = TimerMode.Work
        break;
      case TimerMode.Break:
        this.timeLeft = this.maxWorkTimeLeft
        this.mode = TimerMode.Work
        break;
      case TimerMode.Work:
        this.intervalsDone++;
        this.intervalsLeft--;

        if (this.intervalsLeft === 0) {
          this.timeLeft = this.maxLongBreakTimeLeft
          this.streak++;
          this.mode = TimerMode.LongBreak

        } else {
          this.timeLeft = this.maxBreakTimeLeft
          this.mode = TimerMode.Break
        }
        break;
    }

    this.emit("modeswitch")

    this.stop()
  }

  // return formatted time string
  getTimeString() {
    const minsLeft = Math.floor((this.timeLeft / 1000) / 60)
    const secsLeft = Math.floor((this.timeLeft / 1000) % 60)

    return `${minsLeft.toString().padStart(2, "0")}:${secsLeft.toString().padStart(2, "0")}`
  }

  getIntervalsString() {
    return `${this.intervalsDone.toString()}/${this.maxIntervalsLeft.toString()}`
  }

  getStreakString() {
    return this.streak.toString()
  }

  getTimerMode() {
    return this.mode
  }

  setTimeLeft(newTime: number) {
    this.maxWorkTimeLeft = isNaN(newTime) ? 0 : newTime
    this.timeLeft = this.maxWorkTimeLeft

    this.emit("update")
  }
}

export const pomodoroTimer = new PomodoroTimer()
