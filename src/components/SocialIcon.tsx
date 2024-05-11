import type { Component, JSXElement } from 'solid-js'
import { Link } from '~/components/Link'

type SocialIconProps = {
  href: string
  ariaLabel: string
  children: JSXElement
}

export const SocialIcon: Component<SocialIconProps> = props => (
  <Link
    href={props.href}
    aria-label={props.ariaLabel}
    class="hover:border-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/50"
  >
    {props.children}
  </Link>
)
