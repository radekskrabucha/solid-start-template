import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { QueryClientProvider } from '@tanstack/solid-query'
import { MainLayout } from './layout/MainLayout'
import { queryClient } from './lib/solidQuery'
import './styles/app.css'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router root={props => <MainLayout>{props.children}</MainLayout>}>
        <FileRoutes />
      </Router>
    </QueryClientProvider>
  )
}
