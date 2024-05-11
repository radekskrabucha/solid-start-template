import type { Component } from 'solid-js'
import { Image } from '~/components/Image'
import { Link } from '~/components/Link'
import type { FeaturedProject } from '~/models/project'

export const ProjectCard: Component<FeaturedProject> = props => (
  <Link
    href={props.href}
    class="group relative flex aspect-[14/10] flex-1"
  >
    <Image
      src={props.imageUrl}
      class="absolute inset-0 h-full w-full object-cover object-center"
      alt={props.title}
    />
    <div class="z-10 flex flex-1 flex-col items-start justify-end bg-black/50 p-4 text-left leading-normal opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <h3 class="font-main text-lg font-medium capitalize">{props.title}</h3>
      <h4 class="font-secondary text-primary text-sm font-normal tracking-widest">
        {props.tag}
      </h4>
    </div>
  </Link>
)
