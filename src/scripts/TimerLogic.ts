let runningTimer: NodeJS.Timeout

export let seconds = 0

export function startTimer() {
  const startTime = Date.now()
  runningTimer = setInterval(() => {
    const elapsedTime = Date.now() - startTime // Total time elapsed since start 
    const elapsedTimeInSeconds = Math.floor(elapsedTime / 1000) // Convert to seconds

    // Run logic here!
    seconds = elapsedTimeInSeconds
  }, 1000)
}

export function stopTimer() {
  clearInterval(runningTimer)
}

export function getTimerData() {
  const timerMinutes = Math.floor(seconds / 60)
  const timerSeconds = Math.floor(seconds) % 60

  return { minutes: timerMinutes, seconds: timerSeconds }
}
