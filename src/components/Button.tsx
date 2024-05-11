import { cva, type VariantProps } from 'class-variance-authority'
import { type JSX, type Component } from 'solid-js'
import { cn } from '~/utils/styles'

type ButtonElementProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = Pick<
  ButtonElementProps,
  'class' | 'children' | 'onClick' | 'disabled' | 'type' | 'id'
> &
  VariantProps<typeof buttonVariants>

export const Button: Component<ButtonProps> = props => (
  <button
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
  </button>
)

export const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-1 text-sm capitalize ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          "hover:bg-primary relative overflow-visible bg-white py-3 px-4 text-black before:absolute before:-top-1.5 before:right-0 before:-bottom-1.5 before:left-0 before:border-r before:border-l before:border-white/50 before:content-[''] after:absolute after:top-0 after:-right-1.5 after:bottom-0 after:-left-1.5 after:border-t after:border-b after:border-white/50 after:content-[''] disabled:bg-white/50",
        outline:
          "relative overflow-visible bg-transparent py-3 px-4 text-white before:absolute before:-top-1.5 before:right-0 before:-bottom-1.5 before:left-0 before:border-r before:border-l before:border-white/50 before:content-[''] after:absolute after:top-0 after:-right-1.5 after:bottom-0 after:-left-1.5 after:border-t after:border-b after:border-white/50 after:content-[''] hover:bg-white/10 hover:text-white/70 disabled:bg-white/50",
        link: 'underline underline-offset-2 disabled:opacity-50'
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
)
