import { Link } from '~/components/Link'
import { SEO } from '~/components/Seo'
import { InternalLink } from '~/config/app'

export default function About() {
  return (
    <section class="layout-section">
      <SEO title="About" />
      <h1>About</h1>
      <Link href={InternalLink.home}>Home</Link>
    </section>
  )
}
