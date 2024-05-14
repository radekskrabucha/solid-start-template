import { createForm, email, minLength, required } from '@modular-forms/solid'

export type ContactForm = {
  name: string
  email: string
  message: string
}

export const [form, { Form, Field }] = createForm<ContactForm>({
  initialValues: {
    name: '',
    email: '',
    message: ''
  }
})

export const nameValidation = [required('Name is required')]

export const emailValidation = [
  required('Email is required'),
  email('Email is not valid')
]

export const messageValidation = [
  required('Message is required'),
  minLength(10, 'Message must be at least 10 characters')
]
