import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1),
  email: z.string().min(1).email(),
  message: z.string().min(10)
})

export const messageRoute = new Hono().post(
  '/',
  zValidator('json', schema),
  c => {
    console.log(c.req.valid)
    return c.json(
      {
        ok: true,
        message: 'Created!'
      },
      201
    )
  }
)
