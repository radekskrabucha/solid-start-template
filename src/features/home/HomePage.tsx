import type { Component } from 'solid-js'
import { A } from '@solidjs/router'
import { InternalLink } from '~/config/app'

export const HomePage: Component = () => (
  <section class="layout-section">
    <h1>Hello world!</h1>
    <A href={InternalLink.about}>About page</A>
    <p>
      Visit{' '}
      <a
        href="https://start.solidjs.com"
        target="_blank"
      >
        start.solidjs.com
      </a>{' '}
      to learn how to build SolidStart apps.
    </p>
  </section>
)
