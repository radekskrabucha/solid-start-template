import { Toast, type ToastRootProps, toaster } from '@kobalte/core/toast'
import { cva, type VariantProps } from 'class-variance-authority'
import { type Component, type JSXElement, splitProps } from 'solid-js'
import type { WithClass } from '~/types/common'
import { Icon } from './Icon'

type ToastProps = {
  title: JSXElement
  description?: JSXElement
} & ToastRootProps &
  VariantProps<typeof toastVariants> &
  WithClass

type ToastActionProps = Omit<ToastProps, 'toastId'>

const ToastA: Component<ToastProps> = props => {
  const [localProps, others] = splitProps(props, [
    'title',
    'description',
    'class',
    'variant'
  ])

  return (
    <Toast
      {...others}
      class={toastVariants({
        variant: props.variant,
        class: props.class
      })}
    >
      <div class="flex justify-between gap-2">
        <Toast.Title
          as="h3"
          class="line-clamp-2 text-lg font-medium uppercase tracking-wider text-white"
        >
          {localProps.title}
        </Toast.Title>
        <Toast.CloseButton class="cursor-pointer self-start text-white/50 hover:text-white">
          <Icon
            id="close"
            class="h-5 w-5 translate-x-2 fill-current transition-colors"
          />
        </Toast.CloseButton>
      </div>
      <Toast.Description
        as="p"
        class="line-clamp-4 text-sm text-white/50"
      >
        {localProps.description}
      </Toast.Description>
      <Toast.ProgressTrack class="absolute bottom-0 left-0 flex h-0.5 w-full">
        <Toast.ProgressFill class="h-full w-[--kb-toast-progress-fill-width] bg-current" />
      </Toast.ProgressTrack>
    </Toast>
  )
}

const show = (options: ToastActionProps) =>
  toaster.show(props => (
    <ToastA
      {...options}
      toastId={props.toastId}
    />
  ))

export const toast = {
  show
}

export const toastVariants = cva(
  'toast bg-background/50 relative flex w-full flex-col gap-2 overflow-hidden rounded-md border border-current/50 p-4 pt-3 shadow-2xl backdrop-blur-2xl',
  {
    variants: {
      variant: {
        info: 'text-white',
        success: 'text-success',
        warning: 'text-warning',
        error: 'text-error'
      }
    },
    defaultVariants: {
      variant: 'info'
    }
  }
)
