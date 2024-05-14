import { reset } from '@modular-forms/solid'
import { createMutation } from '@tanstack/solid-query'
import { Button } from '~/components/Button'
import { LoaderCircle } from '~/components/LoaderCircle'
import { TextAreaInput } from '~/components/TextAreaInput'
import { TextInput } from '~/components/TextInput'
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
            label="Name"
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
            label="Message"
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
        Send
      </Button>
    </Form>
  )
}
