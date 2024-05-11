import type { Component, JSXElement } from 'solid-js'
import { ArrowLink } from '~/components/ArrowLink'
import { Image } from '~/components/Image'
import { Link } from '~/components/Link'

type ServiceTileProps = {
  title: string
  description: string
  children: JSXElement
  href: string
  imgUrl: string
}

export const ServiceTile: Component<ServiceTileProps> = props => (
  <Link
    href={props.href}
    class="relative flex flex-1 flex-col text-center text-white"
  >
    <Image
      src={props.imgUrl}
      class="absolute inset-0 h-full w-full object-cover object-center"
    />
    <div class="bg-background-light z-10 flex flex-1 flex-col items-center justify-between gap-20 text-balance p-6 transition-colors duration-300 hover:bg-black/70">
      <div class="flex flex-col items-center gap-5">
        {props.children}
        <h3 class="font-main text-lg font-bold capitalize">{props.title}</h3>
        <p class="text-sm text-white/50">{props.description}</p>
      </div>
      <ArrowLink>zobacz więcej</ArrowLink>
    </div>
  </Link>
)
