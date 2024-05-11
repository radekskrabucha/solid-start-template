import { ContactItem } from '~/components/ContactItem'
import { Icon } from '~/components/Icon'
import { SocialIcons } from '~/components/SocialIcons'
import { ExternalLink, ownerEmail, ownerPhoneNumber } from '~/config/app'

export const ContactInformationSection = () => (
  <section class="layout-section !grid grid-cols-3 gap-x-12 gap-y-6 max-lg:grid-cols-1">
    <div class="bg-background-light flex flex-1 py-16 px-6 max-lg:py-12">
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
    </div>

    <div class="bg-background-light flex flex-1 py-16 px-6 max-lg:py-12">
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

    <div class="bg-background-light flex flex-1 items-center justify-center py-16 px-6 max-lg:py-12">
      <SocialIcons />
    </div>
  </section>
)
