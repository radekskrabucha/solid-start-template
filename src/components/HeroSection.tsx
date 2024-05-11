import { cx } from 'class-variance-authority'
import type { Component, JSXElement } from 'solid-js'
import type { WithClass } from '~/types/common'
import { Image } from './Image'

type HeroSectionProps = {
  children: JSXElement
  imgUrl: string
} & WithClass

export const HeroSection: Component<HeroSectionProps> = props => (
  <section class="layout-section !py-0">
    <div class={cx('relative flex min-h-[500px] flex-1 flex-col', props.class)}>
      <Image
        src={props.imgUrl}
        class="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div class="font-main z-10 flex flex-1 flex-col items-center justify-center gap-4 bg-black/50 p-6 text-center text-6xl font-bold capitalize text-white max-md:text-5xl">
        {props.children}
      </div>
    </div>
  </section>
)
