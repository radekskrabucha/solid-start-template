import { reset } from '@modular-forms/solid'
import { createMutation } from '@tanstack/solid-query'
import { Button } from '~/components/Button'
import { LoaderCircle } from '~/components/LoaderCircle'
import { TextAreaInput } from '~/components/TextAreaInput'
import { TextInput } from '~/components/TextInput'
import { toast } from '~/components/Toast'
import { postContactMessage } from '../actions'
import {
  Form,
  Field,
  emailValidation,
  messageValidation,
  nameValidation,
  form
} from '../form/contactForm'

export const ContactForm = () => {
  const postContactMessageMutation = createMutation(() => ({
    mutationFn: postContactMessage,
    mutationKey: ['postContactMessage'],
    onSuccess: (_, variables) => {
      reset(form)
      toast.show({
        title: 'Wiadomość wysłana',
        description: `Twoja wiadomość została wysłana, wkrótce się z Tobą skontaktujemy ${variables.name} 🫡`,
        variant: 'success',
        priority: 'high'
      })
    },
    onError: (_, variables) => {
      toast.show({
        title: 'Uups! Wystąpił błąd 🤓',
        description: `Wystąpił błąd podczas wysyłania wiadomości, ale nie przejmuj się ${variables.name}. Spróbuj ponownie później lub skontaktuj się z nami w inny sposób.`,
        variant: 'error',
        priority: 'high'
      })
    }
  }))

  return (
    <Form
      onSubmit={values => postContactMessageMutation.mutate(values)}
      class="flex w-full max-w-2xl flex-col gap-4"
    >
      <Field
        name="name"
        validate={nameValidation}
      >
        {(field, props) => (
          <TextInput
            label="Imię"
            placeholder=" "
            disabled={postContactMessageMutation.isPending}
            {...field}
            {...props}
          />
        )}
      </Field>

      <Field
        name="email"
        validate={emailValidation}
      >
        {(field, props) => (
          <TextInput
            label="Email"
            placeholder=" "
            disabled={postContactMessageMutation.isPending}
            {...field}
            {...props}
            type="email"
          />
        )}
      </Field>

      <Field
        name="message"
        validate={messageValidation}
      >
        {(field, props) => (
          <TextAreaInput
            label="Wiadomość"
            placeholder=" "
            autoResize
            disabled={postContactMessageMutation.isPending}
            {...field}
            {...props}
          />
        )}
      </Field>
      <Button
        type="submit"
        class="mt-8"
        disabled={postContactMessageMutation.isPending}
      >
        {postContactMessageMutation.isPending && (
          <LoaderCircle class="animate-spin" />
        )}
        Wyślij wiadomość
      </Button>
    </Form>
  )
}
