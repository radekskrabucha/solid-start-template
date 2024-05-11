import type { Component } from 'solid-js'
import { Link } from '~/components/Link'

type NavLinkProps = {
  href: string
  text: string
  onClick: VoidFunction
}

export const NavLink: Component<NavLinkProps> = props => (
  <li>
    <Link
      onClick={props.onClick}
      href={props.href}
      class="font-secondary hover:text-primary text-white/75 transition-colors duration-150"
    >
      <p>{props.text}</p>
    </Link>
  </li>
)
