import { cx } from 'class-variance-authority'
import type { Component, JSXElement } from 'solid-js'
import { Image } from '~/components/Image'

type SectionHeroProps = {
  title: string
  imgUrl: string
  imageLabel: string
  children: JSXElement
  isOdd?: boolean
}

export const SectionHero: Component<SectionHeroProps> = props => (
  <div
    class={cx(
      'mb-8 flex flex-1 items-center !gap-12 text-balance text-left max-md:flex-col max-md:text-center',
      props.isOdd ? 'flex-row-reverse' : 'flex-row'
    )}
  >
    <div class="relative flex aspect-square max-w-3xs flex-1 max-md:aspect-video max-md:max-w-full max-md:self-stretch">
      <div
        class={cx(
          'dotted-bg absolute -top-6 h-full w-full',
          props.isOdd ? 'left-6' : 'right-6'
        )}
      />
      <Image
        src={props.imgUrl}
        class="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div class="bg-primary absolute bottom-0 left-0 w-full p-4 text-center text-xs uppercase tracking-[10px] text-black/50">
        {props.imageLabel}
      </div>
    </div>
    <div class="flex flex-1 flex-col gap-6">
      <h2 class="font-main text-primary text-4xl font-bold capitalize max-md:text-3xl">
        {props.title}
      </h2>
      <p class="text-white/50">{props.children}</p>
    </div>
  </div>
)
