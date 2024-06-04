import type { APIHandler } from '@solidjs/start/server'
import { hc } from 'hono/client'
import type { AppType } from '~/server'
import { app } from '~/server'

export const createHonoHandler = (): APIHandler => async event =>
  await app.fetch(event.request, {
    h3Event: event.nativeEvent
  })

export const client = hc<AppType>(import.meta.env.VITE_APP_BASE_URL).api
