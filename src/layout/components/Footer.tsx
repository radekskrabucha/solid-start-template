import type { Component } from 'solid-js'
import { Link } from '~/components/Link'
import { AppName, ExternalLink, InternalLink } from '~/config/app'
import { getCurrentYear } from '~/utils/date'
import { SocialIcons } from './SocialIcons'

export const Footer: Component = () => (
  <footer class="layout-container bg-background border-t border-white/10 text-white">
    <div class="layout-section">
      <div class="flex flex-wrap items-center justify-between gap-3 pb-4">
        <div class="flex flex-wrap items-center gap-2">
          <Link
            class="text-4xl"
            href={InternalLink.home}
          >
            😎
          </Link>
          <div>
            <h3 class="font-main text-lg">{AppName}</h3>
            <p class="font-secondary text-sm text-white/50 max-sm:max-w-none">
              A starter for SolidStart with TypeScript and Tailwind CSS.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-end gap-2 max-sm:items-start">
          <SocialIcons />
          <Link href={ExternalLink.email}>
            <p class="font-secondary text-right text-sm text-white/50 transition-colors duration-150 hover:text-white/75 max-sm:text-left">
              {import.meta.env.VITE_EMAIL}
            </p>
          </Link>
        </div>
      </div>
      <div class="border-t border-white/10 pt-4">
        <p class="text-sm text-white/20">
          © {getCurrentYear()} Radek Skrabucha
        </p>
      </div>
    </div>
  </footer>
)
