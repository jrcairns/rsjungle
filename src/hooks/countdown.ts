import { useEffect, useState } from "react";

export default function useCountdown(date: Date) {
  const [comingDate] = useState(date)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const des = comingDate.getTime() - now.getTime()

      setDays(Math.floor(des / (1000 * 60 * 60 * 24)))
      setHours(Math.floor(des % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
      setMinutes(Math.floor(des % (1000 * 60 * 60) / (1000 * 60)))
      setSeconds(Math.floor(des % (1000 * 60) / 1000))

      if (des <= 0) clearInterval(interval)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const getTrueNumber = (x: number) => {
    if (x < 10) return '0' + x;
    else return x;
  }

  return {
    days: getTrueNumber(days),
    hours: getTrueNumber(hours),
    minutes: getTrueNumber(minutes),
    seconds: getTrueNumber(seconds),
  }
}