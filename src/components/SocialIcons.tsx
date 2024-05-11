import { cx } from 'class-variance-authority'
import type { Component } from 'solid-js'
import { Icon } from '~/components/Icon'
import { ExternalLink } from '~/config/app'
import type { WithClass } from '~/types/common'
import { SocialIcon } from './SocialIcon'

export const SocialIcons: Component<WithClass> = props => (
  <div class={cx('flex items-center gap-4 text-white', props.class)}>
    <SocialIcon
      href={ExternalLink.facebook}
      ariaLabel="Facebook"
    >
      <Icon
        id="facebook"
        class="h-[20px] w-[10px] fill-current"
      />
    </SocialIcon>
    <SocialIcon
      href={ExternalLink.instagram}
      ariaLabel="Instagram"
    >
      <Icon
        id="instagram"
        class="h-6 w-6 stroke-current"
      />
    </SocialIcon>
    <SocialIcon
      href={ExternalLink.tiktok}
      ariaLabel="TikTok"
    >
      <Icon
        id="tiktok"
        class="h-5 w-5 fill-current"
      />
    </SocialIcon>
  </div>
)
