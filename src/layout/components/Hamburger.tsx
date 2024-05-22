import { cx } from 'class-variance-authority'
import type { Component } from 'solid-js'

type HamburgerProps = {
  isOpen: boolean
  onToggle: VoidFunction
}

export const Hamburger: Component<HamburgerProps> = props => (
  <button
    onClick={() => props.onToggle()}
    class="relative z-[1001] hidden h-5 w-6 cursor-pointer max-md:block"
    type="button"
  >
    <div
      class={cx(
        'absolute h-[2px] bg-white transition-all',
        props.isOpen ? 'top-[10px] left-1/2 w-0' : 'top-0 left-0 w-3/5'
      )}
    />
    <div
      class={cx(
        'absolute top-[10px] h-[2px] w-full bg-white transition-all',
        props.isOpen ? 'rotate-45 transform' : 'rotate-0 transform'
      )}
    />
    <div
      class={cx(
        'absolute top-[10px] h-[2px] w-full bg-white transition-all',
        props.isOpen ? '-rotate-45 transform' : 'rotate-0 transform'
      )}
    />
    <div
      class={cx(
        'absolute left-1/2 h-[2px] bg-white transition-all',
        props.isOpen ? 'top-[10px] w-0' : 'top-[20px] w-3/5'
      )}
    />
  </button>
)
