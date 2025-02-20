import { EventEmitter } from "eventemitter3";

// NOTE: the purpose of this eventemitter is to tell react when to update state
// i.e. we signal it to change something whenever this timer does something important

class PomodoroTimer extends EventEmitter {
  private timeLeft = 5000 // in ms
  private intervalsLeft = 4
  private interval: NodeJS.Timeout | null = null

  start() {
    console.log("Starting pomo timer!")

    this.interval = setInterval(() => {
      this.timeLeft -= 1000
      this.emit("tick") // emit event to update components!

      if (this.timeLeft <= 0) {
        this.stop()
        this.intervalsLeft--
        this.emit("stop")
      }
    }, 1000)
  }

  stop() {
    console.log("Stopping pomo timer!")

    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  // return formatted time string
  getTimeString() {
    const minsLeft = Math.floor((this.timeLeft / 1000) / 60)
    const secsLeft = Math.floor((this.timeLeft / 1000) % 60)

    return `${minsLeft.toString().padStart(2, "0")}:${secsLeft.toString().padStart(2, "0")}`
  }

  getIntervalsString() {
    return this.intervalsLeft.toString()
  }
}

export const pomodoroTimer = new PomodoroTimer()
