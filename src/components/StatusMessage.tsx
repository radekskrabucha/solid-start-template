import { type VariantProps, cva } from 'class-variance-authority'
import type { Component, JSX } from 'solid-js'

export type StatusMessageProps = VariantProps<typeof statusMessageVariants> &
  Pick<
    JSX.HTMLAttributes<HTMLSpanElement>,
    'class' | 'id' | 'children' | 'ref' | 'aria-label' | 'role'
  >

export const StatusMessage: Component<StatusMessageProps> = props => (
  <span
    class={statusMessageVariants({
      variant: props.variant,
      class: props.class
    })}
    {...props}
  >
    {props.children}
  </span>
)

export const statusMessageVariants = cva('text-sm', {
  variants: {
    variant: {
      info: 'text-white/50',
      success: 'text-success',
      warning: 'text-warning',
      error: 'text-error'
    }
  },
  defaultVariants: {
    variant: 'info'
  }
})
