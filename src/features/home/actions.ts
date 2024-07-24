import { mockFetch } from '~/lib/fetch'
import type { ContactForm } from './form/contactForm'

export const postContactMessage = (req: ContactForm) => {
  'use server'
  return mockFetch<typeof req, { status: string }>({
    mockData: {
      status: 'test'
    },
    shouldReject: false,
    timeout: 2000
  })
}
