import {
  Button as KobalteButton,
  type ButtonRootProps
} from '@kobalte/core/button'
import { cva, type VariantProps } from 'class-variance-authority'
import { type JSX, type Component } from 'solid-js'
import { cn } from '~/utils/styles'

type ButtonElementProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = Pick<
  ButtonElementProps,
  'class' | 'children' | 'onClick' | 'id'
> &
  VariantProps<typeof buttonVariants> &
  ButtonRootProps

export const Button: Component<ButtonProps> = props => (
  <KobalteButton
    {...props}
    type={props.type || 'button'}
    class={cn(
      buttonVariants({
        variant: props.variant,
        class: props.class
      })
    )}
  >
    {props.children}
  </KobalteButton>
)

export const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-1 rounded-md text-sm font-medium capitalize ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-black py-2 px-4 text-white hover:bg-black/80 disabled:bg-black/50',
        outline:
          'border border-black py-2 px-4 text-black hover:border-black/60 hover:text-black/60 disabled:border-black/20 disabled:text-black/20',
        link: 'underline underline-offset-2 disabled:opacity-50'
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
)
