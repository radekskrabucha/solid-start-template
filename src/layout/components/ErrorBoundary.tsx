import type { Component } from 'solid-js'
import { Link } from '~/components/Link'
import { InternalLink } from '~/config/app'

type ErrorBoundaryProps = {
  onReset: VoidFunction
  error: Error
}

export const ErrorBoundary: Component<ErrorBoundaryProps> = props => (
  <section class="layout-section items-center gap-6 text-center">
    <h1 class="text-3xl font-bold">Uh oh, something went sideways! ⚠️</h1>
    <p class="text-lg">
      It appears an unexpected error has occurred. Don't worry, our engineers
      are already on it. ️
    </p>
    <button onClick={props.onReset}>Try Again</button>
    <Link href={InternalLink.home}>Go Back to Homepage</Link>
    <pre class="mt-6 text-xs">{props.error.message}</pre>
  </section>
)
