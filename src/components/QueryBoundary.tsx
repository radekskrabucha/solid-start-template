import type { CreateQueryResult } from '@tanstack/solid-query'
import type { Component, JSXElement } from 'solid-js'
import { ErrorBoundary, Match, Show, Suspense, Switch } from 'solid-js'
import { Button } from './Button'
import { LoaderCircle } from './LoaderCircle'

export interface QueryBoundaryProps<T = unknown> {
  query: CreateQueryResult<T, Error | unknown>
  loadingFallback?: JSXElement
  notFoundFallback?: JSXElement
  errorFallback?: (err: Error, retry: () => void) => JSXElement
  children: (data: Exclude<T, null | false | undefined>) => JSXElement
}

export function QueryBoundary<T>(props: QueryBoundaryProps<T>) {
  return (
    <Suspense fallback={props.loadingFallback}>
      <ErrorBoundary
        fallback={(error: Error, reset) =>
          props.errorFallback ? (
            props.errorFallback(error, async () => {
              await props.query.refetch()
              reset()
            })
          ) : (
            <DefaultErrorFallback
              error={error}
              retry={async () => {
                await props.query.refetch()
                reset()
              }}
              errorUpdateCount={props.query.errorUpdateCount}
              isRefetching={props.query.isFetching}
            />
          )
        }
      >
        <Switch>
          <Match
            when={
              (!props.query.isFetching && !props.query.data) ||
              (!props.query.isFetching &&
                Array.isArray(props.query.data) &&
                props.query.data.length === 0)
            }
          >
            {props.notFoundFallback ? (
              props.notFoundFallback
            ) : (
              <DefaultNotFoundFallback />
            )}
          </Match>

          <Match when={props.query.data}>
            {props.children(
              props.query.data as Exclude<T, null | false | undefined>
            )}
          </Match>
        </Switch>
      </ErrorBoundary>
    </Suspense>
  )
}

type DefaultErrorFallbackProps = {
  error: Error
  retry: () => void
  errorUpdateCount: number
  isRefetching: boolean
}

const DefaultErrorFallback: Component<DefaultErrorFallbackProps> = props => (
  <div class="flex flex-1 flex-col items-center justify-center gap-6 text-balance text-center">
    <h2 class="text-3xl font-bold">Oopss... we've got an error! 🚧</h2>
    <Show
      when={props.errorUpdateCount < 4}
      fallback={
        <p class="text-white/50">
          Seems like an unexpected error has occurred during the data fetching.
          <br />
          Please try again later.
        </p>
      }
    >
      <p class="text-white/50">
        Seems like an unexpected error has occurred during the data fetching.
        <br />
        Click the button below or try again later.
      </p>
      <Button
        variant="primary"
        onClick={props.retry}
        class="w-full max-w-52"
        disabled={props.isRefetching}
      >
        <Show when={props.isRefetching}>
          <LoaderCircle />
        </Show>
        Try again
      </Button>
    </Show>
    <pre class="mt-6 text-xs text-current/50">{props.error.message}</pre>
  </div>
)

const DefaultNotFoundFallback: Component = () => (
  <div class="flex flex-1 flex-col items-center justify-center gap-6 text-balance text-center">
    <h2 class="text-3xl font-bold">Upsss... not found 🤔</h2>
    <p class="text-white/50">
      Seems like there is nothing here yet.🤷
      <br />
      Try again later.
    </p>
  </div>
)
