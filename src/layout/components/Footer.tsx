import type { Component } from 'solid-js'
import { A } from '@solidjs/router'
import { ExternalLink, InternalLink } from '~/config/app'
import { getCurrentYear } from '~/utils/date'

export const Footer: Component = () => (
  <footer class="layout-container bg-primary text-white">
    <div class="layout-section">
      <div class="flex flex-wrap items-center justify-between gap-3 pb-4">
        <div class="flex flex-wrap items-center gap-2">
          <A
            class="text-4xl"
            href={InternalLink.home}
          >
            🥑
          </A>
          <div>
            <h3 class="font-main text-lg text-gray-400">
              Next app router template
            </h3>
            <p class="font-secondary max-w-[260px] text-sm text-gray-500 max-sm:max-w-none">
              A starter for SolidStart with TypeScript and Tailwind CSS.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-end gap-2 max-sm:items-start">
          {/* <SocialIcons /> */}
          <A
            href={ExternalLink.email}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p class="font-secondary text-right text-sm text-gray-500 transition-colors duration-150 hover:text-gray-300 max-sm:text-left">
              {import.meta.env.VITE_EMAIL}
            </p>
          </A>
        </div>
      </div>
      <div class="border-t border-gray-700 pt-4">
        <p class="text-sm text-gray-500">
          © {getCurrentYear()} Radek Skrabucha
        </p>
      </div>
    </div>
  </footer>
)
