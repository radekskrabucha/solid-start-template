import { Suspense, type Component, type JSXElement } from 'solid-js'
import { MetaProvider } from '@solidjs/meta'
import { SEO } from '~/components/Seo'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

type MainLayoutProps = {
  children: JSXElement
}

export const MainLayout: Component<MainLayoutProps> = props => (
  <MetaProvider>
    <SEO title={undefined} />
    <Header />
    <main class="layout-container flex-1 bg-white">
      <Suspense>{props.children}</Suspense>
    </main>
    <Footer />
  </MetaProvider>
)
