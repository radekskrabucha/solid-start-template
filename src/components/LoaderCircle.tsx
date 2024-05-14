import type { Component } from 'solid-js'
import type { WithClass } from '~/types/common'
import { cn } from '~/utils/styles'

export const LoaderCircle: Component<WithClass> = props => (
  <div
    class={cn(
      'inline-block size-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent',
      props.class
    )}
    role="status"
  />
)
