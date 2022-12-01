import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect, useState } from 'react'
import { CyclesContext } from '../../../contexts/CyclesContext'
import { CountdownContainer, Separator } from './style'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleFinished,
    amountSecondsPassed,
    setSecondsPassed,
    clearActiveCycleId
  } = useContext(CyclesContext)

  const totalSeconds = activeCycleId ? activeCycle?.minutes * 60 : 0
  console.log('activeCycle no Countdown:', activeCycle)

  useEffect(() => {
    let interval: number
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
          clearActiveCycleId()
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    activeCycleId,
    totalSeconds,
    markCurrentCycleFinished,
    setSecondsPassed,
    clearActiveCycleId
  ])

  const currentSeconds = activeCycleId ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `Tempo restante ${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  return (
    <CountdownContainer className="timer">
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
