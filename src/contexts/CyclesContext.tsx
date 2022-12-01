import { createContext, ReactNode, useState } from 'react'

type CreateCycleData = {
  task: string
  minutes: number
}

type Cycle = {
  id: string
  task: string
  minutes: number
  startDate: Date
  interruptDate?: Date
  finishedDate?: Date
}

type CyclesContextType = {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleFinished: () => void
  setSecondsPassed: (seconds: number) => void
  clearActiveCycleId: () => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
}

type CyclesContextProviderProps = {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider({
  children
}: CyclesContextProviderProps) {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      })
    )
  }

  function clearActiveCycleId() {
    setActiveCycleId(null)
  }

  function createNewCycle(data: CreateCycleData) {
    const cycleId = String(new Date().getTime())
    const newCycle: Cycle = {
      id: cycleId,
      task: data.task,
      minutes: data.minutes,
      startDate: new Date()
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(cycleId)
    setAmountSecondsPassed(0)
  }

  function interruptCurrentCycle() {
    console.log('Ciclo interrompido!')
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptDate: new Date() }
        } else {
          return cycle
        }
      })
    )

    setActiveCycleId(null)
  }
  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleFinished,
        amountSecondsPassed,
        setSecondsPassed,
        clearActiveCycleId,
        createNewCycle,
        interruptCurrentCycle
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
