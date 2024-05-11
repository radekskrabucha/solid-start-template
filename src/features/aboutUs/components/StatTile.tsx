import type { Component } from 'solid-js'

type StatTileProps = {
  label: string
  value: string
}

export const StatTile: Component<StatTileProps> = props => (
  <div class="before:bg-background-light after:border-b-background-light relative z-[1] flex flex-col gap-6 p-4 capitalize leading-normal before:absolute before:right-0 before:bottom-0 before:-z-[1] before:h-8 before:w-10 before:content-[''] after:absolute after:right-0 after:bottom-8 after:-z-[1] after:h-0 after:w-0 after:border-t-[40px] after:border-b-[50px] after:border-l-[40px] after:border-transparent after:content-['']">
    <h3 class="font-main text-primary text-4xl font-bold">{props.value}</h3>
    <p class="text-sm uppercase tracking-widest">{props.label}</p>
  </div>
)
