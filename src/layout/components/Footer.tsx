import type { Component } from 'solid-js'
import { ContactItem } from '~/components/ContactItem'
import { Icon } from '~/components/Icon'
import { Image } from '~/components/Image'
import { Link } from '~/components/Link'
import { SocialIcons } from '~/components/SocialIcons'
import {
  AppNameFull,
  ExternalLink,
  InternalLink,
  ownerEmail,
  ownerPhoneNumber
} from '~/config/app'
import { getCurrentYear } from '~/utils/date'

export const Footer: Component = () => (
  <footer class="layout-container bg-background border-t border-white/10 text-white">
    <div class="layout-section !flex-row flex-wrap justify-between gap-x-12 gap-y-8">
      <div class="flex flex-col gap-6">
        <h3 class="font-main text-3xl font-bold capitalize max-md:text-2xl">
          kontakt
        </h3>
        <ContactItem
          label="E-mail"
          href={ExternalLink.email}
          hrefLabel={ownerEmail}
        >
          <Icon
            id="mail"
            class="h-5 w-5 stroke-current"
          />
        </ContactItem>
        <ContactItem
          label="Telefon"
          href={ExternalLink.phoneNumber}
          hrefLabel={ownerPhoneNumber}
        >
          <Icon
            id="phone"
            class="h-5 w-5 fill-current"
          />
        </ContactItem>
      </div>

      <div class="flex flex-col gap-6">
        <Link
          href={InternalLink.home}
          aria-label="Home"
        >
          <Image
            src="images/shared/logo-kaes.webp"
            width={220}
            alt="KaeS"
          />
        </Link>
        <SocialIcons />
        <p class="text-sm tracking-wider text-white/50 sm:max-w-56">
          © {AppNameFull} {getCurrentYear()}. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </div>
  </footer>
)
