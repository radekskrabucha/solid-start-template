import { type InferRequestType, type InferResponseType } from 'hono/client'
import { request } from '~/lib/axios'
import type { client } from '~/lib/hono'

type PostContactMessageReq = InferRequestType<
  typeof client.message.$post
>['json']
type PostContactMessageRes = InferResponseType<typeof client.message.$post>

export const postContactMessage = (req: PostContactMessageReq) => {
  return request<PostContactMessageReq, PostContactMessageRes>({
    method: 'post',
    url: '/api/message',
    req,
    axiosClient: 'basic'
  })
}
