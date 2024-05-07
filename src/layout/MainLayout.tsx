import { Suspense, type Component, type JSXElement } from 'solid-js'
import { MetaProvider, Title } from '@solidjs/meta'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

type MainLayoutProps = {
  children: JSXElement
}

export const MainLayout: Component<MainLayoutProps> = props => (
  <MetaProvider>
    <Title>My website bla bla bla</Title>
    <Header />
    <main class="layout-container flex-1">
      <Suspense>{props.children}</Suspense>
    </main>
    <Footer />
  </MetaProvider>
)
