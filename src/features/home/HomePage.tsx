import type { Component } from 'solid-js'
import { Image } from '~/components/Image'
import { Link } from '~/components/Link'
import { AppName, ExternalLink } from '~/config/app'
import { ContactFormSection } from './components/ContactFormSection'

export const HomePage: Component = () => (
  <>
    <section class="layout-section flex-1 items-center justify-center gap-2 text-center">
      <h1 class="mb-4 text-4xl font-bold">{AppName}</h1>
      <Image
        src="/images/homepage/virgin-de-guadalupe.jpeg"
        alt="Virgin de Guadalupe"
      />
      <p>
        This is a SolidStart app. You can edit <code>src/routes/index.tsx</code>{' '}
        to start building your site.
      </p>
      <p>
        The SolidStart development server is running at the address{' '}
        <code>localhost:3000</code>.
      </p>
      <p>
        Open the <code>src/routes</code> directory to see the files and folders
        related to routes.
      </p>
      <p>
        Check out the{' '}
        <Link
          class="underline"
          href={ExternalLink.solidJsSourceCode}
        >
          source code
        </Link>
        , or the{' '}
        <Link
          class="underline"
          href={ExternalLink.solidJsDocs}
        >
          {' '}
          Solid documentation{' '}
        </Link>
        , to learn how everything works.
      </p>
    </section>
    <ContactFormSection />
  </>
)
