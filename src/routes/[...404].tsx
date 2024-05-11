import { HttpStatusCode } from '@solidjs/start'
import { buttonVariants } from '~/components/Button'
import { Icon } from '~/components/Icon'
import { Link } from '~/components/Link'
import { SEOTitle } from '~/components/Seo'
import { InternalLink } from '~/config/app'

export default function NotFound() {
  return (
    <>
      <SEOTitle title="Uups! Nie znaleziono" />
      <HttpStatusCode code={404} />
      <section class="layout-section flex-1 items-center justify-center gap-6 text-center">
        <Icon
          id="not-found"
          class="fill-primary h-72 w-72"
        />
        <h2 class="text-3xl font-bold">Opss... Nie Znaleziono</h2>
        <p class="text-lg">Strona, której szukasz nie istnieje 🤷</p>
        <Link
          class={buttonVariants()}
          href={InternalLink.home}
        >
          Wróć do strony głównej
        </Link>
      </section>
    </>
  )
}
