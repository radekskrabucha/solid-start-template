import { Match, Switch, type Component } from 'solid-js'
import type { JSX } from 'solid-js/jsx-runtime'
import { A, type AnchorProps } from '@solidjs/router'
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
      {/* @ts-ignore */}
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
} & Pick<
  JSX.AnchorHTMLAttributes<HTMLAnchorElement>,
  | 'class'
  | 'onClick'
  | 'onMouseEnter'
  | 'onTouchStart'
  | 'children'
  | 'id'
  | 'href'
  | 'target'
  | 'rel'
  | 'aria-label'
>

type SpanProps = {
  disabled?: true
} & Pick<
  JSX.AnchorHTMLAttributes<HTMLSpanElement>,
  | 'class'
  | 'onClick'
  | 'onMouseEnter'
  | 'onTouchStart'
  | 'children'
  | 'id'
  | 'href'
  | 'aria-label'
>
