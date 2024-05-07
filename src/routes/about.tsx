import { Link } from '~/components/Link'
import { InternalLink } from '~/config/app'

export default function About() {
  return (
    <section class="layout-section">
      <h1>About</h1>
      <Link href={InternalLink.home}>Home</Link>
    </section>
  )
}
