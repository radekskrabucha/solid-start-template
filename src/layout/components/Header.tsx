import type { Component } from 'solid-js'
import { Link } from '~/components/Link'
import { InternalLink } from '~/config/app'

export const Header: Component = () => (
  <header class="layout-container bg-background sticky top-0 border-b border-white/10">
    <div class="layout-section">
      <nav class="flex items-center gap-4">
        <Link
          class="z-[1001] text-4xl"
          href={InternalLink.home}
        >
          😎
        </Link>
        {/* <HeaderMenu /> */}
      </nav>
    </div>
  </header>
)
