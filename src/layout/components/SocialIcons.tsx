import type { Component } from 'solid-js'
import { Icon } from '~/components/Icon'
import { Link } from '~/components/Link'
import { ExternalLink } from '~/config/app'

export const SocialIcons: Component = () => (
  <div class="flex items-center gap-3 text-white">
    <Link
      href={ExternalLink.github}
      aria-label="Github"
    >
      <Icon
        id="github"
        class="h-6 w-6 fill-current transition-colors duration-150 hover:text-white/50"
      />
    </Link>
    <Link
      href={ExternalLink.twitter}
      aria-label="Twitter"
    >
      <Icon
        id="twitter"
        class="h-6 w-6 fill-current transition-colors duration-150 hover:text-white/50"
      />
    </Link>
    <Link
      href={ExternalLink.linkedin}
      aria-label="LinkedIn"
    >
      <Icon
        id="linkedin"
        class="h-6 w-6 fill-current transition-colors duration-150 hover:text-white/50"
      />
    </Link>
  </div>
)
