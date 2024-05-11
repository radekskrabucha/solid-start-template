import type { Component } from 'solid-js'
import { InternalLink } from '~/config/app'
import { NavLink } from './NavLink'

type NavLinksProps = {
  onNavLinkClick: VoidFunction
}

export const NavLinks: Component<NavLinksProps> = props => (
  <ul class="flex gap-6 max-md:flex-col max-md:items-center">
    <NavLink
      href={InternalLink.home}
      text="Home"
      onClick={props.onNavLinkClick}
    />
    <NavLink
      href={InternalLink.about}
      text="O nas"
      onClick={props.onNavLinkClick}
    />
    <NavLink
      href={InternalLink.portfolio}
      text="Portfolio"
      onClick={props.onNavLinkClick}
    />
    <NavLink
      href={InternalLink.offer}
      text="Oferta"
      onClick={props.onNavLinkClick}
    />
    <NavLink
      href={InternalLink.contact}
      text="Kontakt"
      onClick={props.onNavLinkClick}
    />
  </ul>
)
