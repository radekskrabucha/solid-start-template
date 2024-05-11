import { request } from '~/lib/axios'
import type { ContactForm } from './form/contactForm'
import { getContactMessage } from './utils'

export type PostContactMessageRequest = {
  subject: string
  access_key: string
} & ContactForm

export const postContactMessage = (req: ContactForm) => {
  'use server'
  return request<PostContactMessageRequest, undefined>({
    method: 'post',
    url: 'https://api.web3forms.com/submit',
    req: getContactMessage(req),
    axiosClient: 'basic'
  })
}
