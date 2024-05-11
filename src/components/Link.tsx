import { A, type AnchorProps } from '@solidjs/router'
import { type JSX, Match, Switch, type Component } from 'solid-js'
import { isExternalLink } from '~/utils/regexes'

type LinkProps = InternalLinkProps | ExternalLinkProps | SpanProps

export const Link: Component<LinkProps> = props => (
  <Switch fallback={<A {...(props as AnchorProps)} />}>
    <Match when={!props.href || props?.disabled}>
      <span
        aria-disabled="true"
        {...(props as SpanProps)}
      />
    </Match>
    <Match when={props.href && isExternalLink(props.href)}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    </Match>
  </Switch>
)

type InternalLinkProps = {
  disabled?: false
  href: undefined
} & Pick<
  AnchorProps,
  | 'class'
  | 'onClick'
  | 'onMouseEnter'
  | 'onTouchStart'
  | 'children'
  | 'id'
  | 'href'
  | 'activeClass'
  | 'inactiveClass'
  | 'replace'
  | 'noScroll'
  | 'state'
  | 'end'
  | 'aria-label'
>

type ExternalLinkProps = {
  disabled?: false
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
>

type SpanProps = {
  disabled?: true
  href: string
} & Pick<
  JSX.AnchorHTMLAttributes<HTMLSpanElement>,
  | 'class'
  | 'onClick'
  | 'onMouseEnter'
  | 'onTouchStart'
  | 'children'
  | 'id'
  | 'aria-label'
>
