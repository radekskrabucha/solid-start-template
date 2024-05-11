import { cx } from 'class-variance-authority'
import type { Component } from 'solid-js'
import { ArrowLink } from '~/components/ArrowLink'
import { Image } from '~/components/Image'
import { Link } from '~/components/Link'
import type { FeaturedProject as FeaturedProjectModel } from '~/models/project'

type FeaturedProjectProps = {
  noHidden?: boolean
} & FeaturedProjectModel

export const FeaturedProject: Component<FeaturedProjectProps> = props => (
  <Link
    href={props.href}
    class="group flex flex-1 overflow-hidden"
  >
    <Image
      src={props.imageUrl}
      class={cx(
        'absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300 group-hover:opacity-100',
        props.noHidden ? 'opacity-100' : 'opacity-0'
      )}
      alt={props.title}
    />
    <div
      class={cx(
        'relative z-10 flex flex-1 flex-col justify-between gap-[356px] transition-colors duration-300 group-hover:bg-black/50 max-lg:gap-[120px]',
        !props.noHidden && 'border-white/80 max-lg:border-t lg:border-l'
      )}
    >
      <div class="font-main relative flex flex-col gap-6 p-6 font-medium leading-normal">
        <div class="absolute inset-0 -z-[1] origin-top scale-y-0 bg-black transition-transform duration-300 group-hover:scale-y-100" />
        <h4 class="text-primary text-sm uppercase tracking-widest">
          {props.tag}
        </h4>
        <h3 class="text-xl">{props.title}</h3>
      </div>

      <div class="translate-y-16 p-6 transition-transform duration-300 group-hover:translate-y-0">
        <ArrowLink>zobacz projekt</ArrowLink>
      </div>
    </div>
  </Link>
)
