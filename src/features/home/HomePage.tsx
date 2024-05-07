import type { Component } from 'solid-js'
import { Link } from '~/components/Link'
import { InternalLink } from '~/config/app'

export const HomePage: Component = () => (
  <section class="layout-section">
    <h1>Hello world!</h1>
    <Link href={InternalLink.about}>About page</Link>
    <p>
      Visit <Link href="https://start.solidjs.com">start.solidjs.com</Link> to
      learn how to build SolidStart apps.
    </p>
  </section>
)
