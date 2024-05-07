import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { MainLayout } from './layout/MainLayout'
import './styles/app.css'

export default function App() {
  return (
    <Router root={props => <MainLayout>{props.children}</MainLayout>}>
      <FileRoutes />
    </Router>
  )
}
