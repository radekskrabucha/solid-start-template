import { cx } from 'class-variance-authority'
import type { Component } from 'solid-js'
import type { WithClass } from '~/types/common'

type AboutUsTileProps = {
  label: string
  value: string
} & WithClass

export const AboutStatTile: Component<AboutUsTileProps> = props => (
  <div class={cx('flex flex-col p-4 capitalize leading-normal', props.class)}>
    <h3 class="font-main text-2xl font-medium max-sm:text-xl">{props.value}</h3>
    <p class="max-xs:text-xs max-sm:text-sm">{props.label}</p>
  </div>
)
