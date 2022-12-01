import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../contexts/CyclesContext'
import { Header, MinutesInput, TaskInput } from './style'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)

  const { register } = useFormContext() //Contexto servido pelo React Hook Form,
  return (
    <Header>
      <span>Vou trabalhar em </span>
      <TaskInput
        className="input--textLarge"
        type="text"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        {...register('task')}
        disabled={!!activeCycle}
      />
      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Pão de batata" />
      </datalist>

      <span> durante </span>
      <MinutesInput
        placeholder="00"
        type="number"
        step={5}
        min={1}
        max={60}
        maxLength={2}
        {...register('minutes', { valueAsNumber: true })}
        disabled={!!activeCycle}
      />
      <span> minutos.</span>
    </Header>
  )
}
