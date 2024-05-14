import { Link as KobalteLink, type LinkRootProps } from '@kobalte/core/link'
import { A, type AnchorProps } from '@solidjs/router'
import { type JSX, type Component } from 'solid-js'
import { isExternalLink } from '~/utils/regexes'

type ExternalLinkProps = {
  href: string
} & Pick<
  JSX.AnchorHTMLAttributes<HTMLAnchorElement>,
  | 'class'
  | 'onClick'
  | 'onMouseEnter'
  | 'onTouchStart'
  | 'children'
  | 'id'
  | 'target'
  | 'rel'
  | 'aria-label'
> &
  Omit<LinkRootProps, 'href'>

type InternalLinkProps = {
  href: string
  disabled?: false
} & Pick<
  JSX.AnchorHTMLAttributes<HTMLAnchorElement>,
  | 'class'
  | 'onClick'
  | 'onMouseEnter'
  | 'onTouchStart'
  | 'children'
  | 'id'
  | 'aria-label'
  | 'ref'
> &
  Pick<
    AnchorProps,
    'replace' | 'noScroll' | 'state' | 'end' | 'activeClass' | 'inactiveClass'
  >

type LinkProps = ExternalLinkProps | InternalLinkProps

export const Link: Component<LinkProps> = props => {
  if (isExternalLink(props.href) || props.disabled) {
    return (
      <KobalteLink
        target="_blank"
        rel="noopener noreferrer"
        {...(props as ExternalLinkProps)}
      />
    )
  }

  return <A {...(props as InternalLinkProps)} />
}
