'use client'

import { useEffect, useState } from 'react'

export function useLocalTime(timeZone = 'America/Bogota', locale = 'es-CO') {
  const [time, setTime] = useState('')

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat(locale, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone,
    })

    const update = () => setTime(formatter.format(new Date()))

    update()
    const interval = setInterval(update, 30_000)
    return () => clearInterval(interval)
  }, [timeZone, locale])

  return time
}
