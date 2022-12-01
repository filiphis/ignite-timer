import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'
import { StatusTask, TableContainer, Title, Wrapper } from './styles'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <Wrapper>
      <Title>Meu histórico</Title>

      {/* <pre>{JSON.stringify(cycles, null, 2)}</pre> */}

      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutes}</td>
                <td>
                  {formatDistanceToNow(cycle.startDate, {
                    addSuffix: true,
                    locale: ptBR
                  })}
                </td>
                <td>
                  {cycle.finishedDate && (
                    <StatusTask status="green">Concluído</StatusTask>
                  )}

                  {cycle.interruptDate && (
                    <StatusTask status="red">Finalizado</StatusTask>
                  )}

                  {!cycle.finishedDate && !cycle.interruptDate && (
                    <StatusTask status="yellow">Em andamento</StatusTask>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableContainer>
    </Wrapper>
  )
}
