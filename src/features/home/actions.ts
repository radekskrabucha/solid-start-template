import { request } from '~/lib/axios'
import type { ContactForm } from './form/contactForm'

export const postContactMessage = (req: ContactForm) => {
  'use server'
  return request<ContactForm, undefined>({
    method: 'post',
    url: 'https://your-api-endpoint.com/example',
    req,
    axiosClient: 'basic'
  })
}
