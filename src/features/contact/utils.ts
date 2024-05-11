import { AppNameFull } from '~/config/app'
import { getCurrentDate } from '~/utils/date'
import type { PostContactMessageRequest } from './actions'
import type { ContactForm } from './form/contactForm'

export const getContactMessage = (
  values: ContactForm
): PostContactMessageRequest => ({
  ...values,
  access_key: import.meta.env.VITE_WEB3_FORM_KEY,
  subject: `${AppNameFull} [${getCurrentDate()}] - Wiadomość z formularza kontaktowego od ${values.name}`
})
