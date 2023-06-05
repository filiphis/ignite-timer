import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { HandPalm, Play } from 'phosphor-react'
import {
  InterruptCycleButton,
  StartCycleButton,
  Wrapper
  // TimerContainer,
} from './styles'
import { useContext } from 'react'
import { NewCycleForm } from './NewCycleForm'
import { Countdown } from './Countdown'
import { CyclesContext } from '../../contexts/CyclesContext'

const newCycleFormValidationSchema = zod.object({
  task: zod
    .string()
    .min(1, 'Digite o nome de sua tarefa!')
    .max(150, 'A quantidade maxima de caracteres é de 150!'),
  minutes: zod
    .number()
    .min(1, 'O valor mínimo aceito é de 5 minutos')
    .max(60, 'Tempo máximo de 60 minutos!')
})

type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

type Cycle = {
  id: string
  task: string
  minutes: number
  startDate: Date
  interruptDate?: Date
  finishedDate?: Date
}

export function Timer() {
  const { createNewCycle, interruptCurrentCycle, activeCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm({
    resolver: zodResolver(newCycleFormValidationSchema)
  })

  const { watch, handleSubmit, reset } = newCycleForm

  // function handleCreateNewCycle(data: newCycleFormData) {
  //   createNewCycle(data)
  //   reset()
  // }

  const handleCreateNewCycle: SubmitHandler<newCycleFormData> = (data) => {
    createNewCycle(data)
    reset()
  }

  // console.log(formState.errors)
  // console.log(cycles)

  const task = watch('task')
  const minutesInput = watch('minutes')
  const hasInputTaskAndMinuteValue = task && minutesInput
  console.log('activeCycle:', activeCycle)

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        {/*
         FormProvider é o provider da biblioteca React Hook Form.
         Ele transmite as informações referentes ao formulário
        */}
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        {/* <TimerContainer> */}
        {!activeCycle ? (
          <StartCycleButton
            type="submit"
            disabled={!hasInputTaskAndMinuteValue}
          >
            <Play size={24} />
            Começar
          </StartCycleButton>
        ) : (
          <InterruptCycleButton type="button" onClick={interruptCurrentCycle}>
            <HandPalm size={24} />
            Interromper
          </InterruptCycleButton>
        )}
        {/* </TimerContainer> */}
      </form>
    </Wrapper>
  )
}
