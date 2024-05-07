import { Title } from '@solidjs/meta'
import { HttpStatusCode } from '@solidjs/start'
import { Link } from '~/components/Link'

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <p>
        Visit <Link href="https://start.solidjs.com">start.solidjs.com</Link> to
        learn how to build SolidStart apps.
      </p>
    </main>
  )
}
