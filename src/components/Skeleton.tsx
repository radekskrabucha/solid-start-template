import {
  Skeleton as KobalteSkeleton,
  type SkeletonRootProps
} from '@kobalte/core/skeleton'
import type { Component } from 'solid-js'
import type { WithClass } from '~/types/common'
import { cn } from '~/utils/styles'

export const Skeleton: Component<WithClass<SkeletonRootProps>> = props => (
  <KobalteSkeleton
    {...props}
    class={cn(
      'flex-1 rounded-lg bg-white/[0.03] data-[animate=true]:animate-pulse data-[visible=false]:bg-transparent',
      props.class
    )}
  />
)
