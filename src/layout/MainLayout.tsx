import { Toast } from '@kobalte/core/toast'
import { MetaProvider } from '@solidjs/meta'
import {
  ErrorBoundary,
  Suspense,
  type Component,
  type JSXElement
} from 'solid-js'
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
      imageUrl="/images/shared/og-image.png"
    />
    <Header />
    <main class="layout-container bg-background-dark flex-1">
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
          <Toast.Region>
            <Toast.List class="fixed right-0 bottom-0 z-[9999] m-0 flex w-md max-w-full list-none flex-col gap-4 p-6 outline-none" />
          </Toast.Region>
        </ErrorBoundary>
      </Suspense>
    </main>
    <Footer />
  </MetaProvider>
)
