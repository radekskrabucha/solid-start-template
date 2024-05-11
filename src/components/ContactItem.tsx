import type { Component, JSXElement } from 'solid-js'
import { Link } from './Link'

type ContactItemProps = {
  label: string
  href: string
  hrefLabel: string
  children: JSXElement
}

export const ContactItem: Component<ContactItemProps> = props => (
  <div class="flex items-center gap-4 text-white">
    {props.children}
    <div class="flex flex-col gap-2">
      <h4 class="font-main text-lg font-bold capitalize leading-none">
        {props.label}
      </h4>
      <Link
        href={props.href}
        class="text-sm text-white/50 transition-colors hover:text-white/75"
      >
        {props.hrefLabel}
      </Link>
    </div>
  </div>
)
