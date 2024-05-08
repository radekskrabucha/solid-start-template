import { HttpStatusCode } from '@solidjs/start'
import { buttonVariants } from '~/components/Button'
import { Link } from '~/components/Link'
import { SEOTitle } from '~/components/Seo'
import { InternalLink } from '~/config/app'

export default function NotFound() {
  return (
    <>
      <SEOTitle title="Whoops! Page Not Found" />
      <HttpStatusCode code={404} />
      <section class="layout-section flex-1 items-center justify-center gap-6 text-center">
        <h2 class="text-3xl font-bold">
          Seems like you've stumbled upon a missing piece{' '}
        </h2>
        <p class="text-lg">
          The page you requested might be under construction ️, taking a siesta
          , or it may have simply gotten lost in the digital world. No worries,
          though!
        </p>
        <Link
          class={buttonVariants()}
          href={InternalLink.home}
        >
          Go back to homepage
        </Link>
      </section>
    </>
  )
}
