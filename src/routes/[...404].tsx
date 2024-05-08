import { HttpStatusCode } from '@solidjs/start'
import { Link } from '~/components/Link'
import { SEOTitle } from '~/components/Seo'
import { InternalLink } from '~/config/app'

export default function NotFound() {
  return (
    <>
      <SEOTitle title="Whoops! Page Not Found" />
      <HttpStatusCode code={404} />
      <section class="layout-section items-center text-center">
        <h2 class="text-success mb-6 text-3xl font-bold">
          Seems like you've stumbled upon a missing piece{' '}
        </h2>
        <p class="mb-4 text-lg">
          The page you requested might be under construction ️, taking a siesta
          , or it may have simply gotten lost in the digital world. No worries,
          though!
        </p>
        <Link href={InternalLink.home}>Take me back to familiar ground {}</Link>
      </section>
    </>
  )
}
