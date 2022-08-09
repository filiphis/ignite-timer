import { Outlet, Routes } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer, PagesContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <PagesContainer>
        <Header />
        <Outlet />
      </PagesContainer>
    </LayoutContainer>
  )
}
