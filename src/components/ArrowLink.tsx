import type { Component, JSXElement } from 'solid-js'
import type { WithClass } from '~/types/common'
import { cn } from '~/utils/styles'
import { Icon } from './Icon'

type ArrowLinkProps = {
  children: JSXElement
} & WithClass

export const ArrowLink: Component<ArrowLinkProps> = props => (
  <div
    class={cn(
      'hover:text-primary flex items-center gap-1 uppercase tracking-widest text-white transition-colors',
      props.class
    )}
  >
    {props.children}
    <Icon
      id="arrow"
      class="h-5 w-5 fill-current stroke-current"
    />
  </div>
)
