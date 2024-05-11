import type { Component } from 'solid-js'
import { Image } from '~/components/Image'
import { Link } from '~/components/Link'
import { InternalLink } from '~/config/app'
import { HeaderMenu } from './HeaderMenu'

export const Header: Component = () => (
  <header class="layout-container bg-background sticky top-0 z-[1000] border-b border-white/10">
    <div class="layout-section !py-4">
      <nav class="flex items-center gap-4">
        <Link
          class="z-[1002] text-4xl"
          href={InternalLink.home}
          aria-label="Home"
        >
          <Image
            src="images/shared/logo-kaes.webp"
            width={160}
          />
        </Link>
        <HeaderMenu />
      </nav>
    </div>
  </header>
)
