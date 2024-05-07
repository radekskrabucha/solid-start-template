// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server'

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <link
            rel="icon"
            href="/favicon.ico"
          />
          {assets}
        </head>
        <body
          id="app"
          class="relative flex h-screen w-full flex-col items-center overflow-x-hidden"
        >
          {children}
          {scripts}
        </body>
      </html>
    )}
  />
))
