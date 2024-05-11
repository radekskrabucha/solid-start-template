import type { Component } from 'solid-js'
import { Button, buttonVariants } from '~/components/Button'
import { Link } from '~/components/Link'
import { InternalLink } from '~/config/app'

type ErrorBoundaryProps = {
  onReset: VoidFunction
  error: Error
}

export const ErrorBoundary: Component<ErrorBoundaryProps> = props => (
  <section class="layout-section flex-1 items-center justify-center gap-6 text-center">
    <h1 class="text-3xl font-bold">Ulala... coś się popsuło! ⚠️</h1>
    <p class="text-lg">
      Wygląda na to, że wystąpił nieoczekiwany błąd. Nie martw się, już nad tym
      pracujemy 🫡
    </p>
    <div class="flex max-w-60 flex-col gap-4">
      <Button
        variant="primary"
        onClick={props.onReset}
      >
        Reset
      </Button>
      <Link
        class={buttonVariants({ variant: 'outline' })}
        href={InternalLink.home}
      >
        Wróć do strony głównej
      </Link>
    </div>
    <pre class="mt-6 text-xs text-current/50">{props.error.message}</pre>
  </section>
)
