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

export const nameValidation = [required('Imię jest wymagane')]

export const emailValidation = [
  required('Email jest wymagany'),
  email('Email nie jest poprawnym adresem emailem')
]

export const messageValidation = [
  required('Wiadomość jest wymagana'),
  minLength(10, 'Wiadomość musi mieć co najmniej 10 znaków')
]
