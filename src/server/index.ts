import { Hono } from 'hono'
import { messageRoute } from './routes/message'

export const app = new Hono()

const routes = app.route('/api/message', messageRoute)

export type AppType = typeof routes
