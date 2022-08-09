import { Play } from 'phosphor-react'
import { TimerContainer, Wrapper } from './styles'

export function Timer() {
  return (
    <Wrapper>
      <TimerContainer>
        <header>
          <span>Vou trabalhar em </span>
          <input type="text" placeholder="Dê um nome para o seu projeto" />
          <span> durante </span>
          <input type="number" min={0} />
          <span> minutos</span>
        </header>
        <div className="timer">
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </div>
        <button>
          <Play size={24} />
          Começar
        </button>
      </TimerContainer>
    </Wrapper>
  )
}
