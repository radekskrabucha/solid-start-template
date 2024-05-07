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
      class="font-secondary text-lg text-white/50 transition-colors duration-150 hover:text-white max-md:text-base"
      activeClass="text-primary"
    >
      <p>{props.text}</p>
    </Link>
  </li>
)
