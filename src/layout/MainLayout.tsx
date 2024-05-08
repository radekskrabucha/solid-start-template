import {
  ErrorBoundary,
  Suspense,
  type Component,
  type JSXElement
} from 'solid-js'
import { MetaProvider } from '@solidjs/meta'
import { SEO } from '~/components/Seo'
import { defaultSeoTags } from '~/config/app'
import { ErrorBoundary as ErrorBoundaryFallback } from './components/ErrorBoundary'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

type MainLayoutProps = {
  children: JSXElement
}

export const MainLayout: Component<MainLayoutProps> = props => (
  <MetaProvider>
    <SEO
      title={undefined}
      description={defaultSeoTags.description}
      siteUrl={defaultSeoTags.siteUrl}
      imageUrl="/images/og-image.jpg"
    />
    <Header />
    <main class="layout-container flex-1 bg-white">
      <Suspense>
        <ErrorBoundary
          fallback={(error, onReset) => (
            <ErrorBoundaryFallback
              error={error}
              onReset={onReset}
            />
          )}
        >
          {props.children}
        </ErrorBoundary>
      </Suspense>
    </main>
    <Footer />
  </MetaProvider>
)
