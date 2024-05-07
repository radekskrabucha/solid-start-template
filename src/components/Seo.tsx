import { Match, Switch, type Component } from 'solid-js'
import { Title } from '@solidjs/meta'
import { AppName } from '~/config/app'
import type { Undefinable } from '~/types/common'

type SeoProps = {
  title: Undefinable<string>
}

export const SEO: Component<SeoProps> = props => (
  <>
    <Switch fallback={<Title>{AppName}</Title>}>
      <Match when={Boolean(props.title)}>
        <Title>{`${props.title} | ${AppName}`}</Title>
      </Match>
    </Switch>
  </>
)
