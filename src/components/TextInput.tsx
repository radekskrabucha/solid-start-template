import { TextField, type TextFieldRootProps } from '@kobalte/core/text-field'
import { type JSX, Show, type Component, type JSXElement } from 'solid-js'
import { statusMessageVariants } from './StatusMessage'

type TextInputProps = {
  label?: JSXElement
  error?: JSXElement
  description?: JSXElement
  inputId?: string
  type?: 'text' | 'email' | 'tel' | 'password' | 'url' | 'date'
  wrapperRef?: TextFieldRootProps['ref']
} & Pick<
  JSX.InputHTMLAttributes<HTMLInputElement>,
  | 'onBlur'
  | 'onFocus'
  | 'placeholder'
  | 'onChange'
  | 'autofocus'
  | 'ref'
  | 'onInput'
> &
  Omit<TextFieldRootProps, 'validationState' | 'onChange' | 'ref'>

export const TextInput: Component<TextInputProps> = props => (
  <TextField
    defaultValue={props.defaultValue}
    disabled={props.disabled}
    required={props.required}
    id={props.id}
    name={props.name}
    value={props.value}
    readOnly={props.readOnly}
    ref={props.wrapperRef}
    validationState={props.error ? 'invalid' : 'valid'}
    class="flex flex-col gap-2"
  >
    <Show when={props.description}>
      <TextField.Description
        as="span"
        class={statusMessageVariants({ class: 'order-1' })}
      >
        {props.description}
      </TextField.Description>
    </Show>

    <TextField.Input
      id={props.inputId}
      onChange={props.onChange}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      // @ts-ignore
      onInput={props.onInput}
      placeholder={props.placeholder}
      type={props.type}
      ref={props.ref}
      autofocus={props.autofocus}
      class="peer font-secondary data-[invalid]:!border-b-error order-3 !border-b border-transparent !border-b-white/50 bg-transparent py-2 outline-none transition-colors focus:!border-b-white disabled:cursor-not-allowed disabled:opacity-50"
    />

    <Show when={props.label}>
      <TextField.Label class="order-2 -mb-4 origin-left translate-y-[25px] self-start text-white/50 transition-transform peer-not-placeholder-shown:translate-y-0 peer-not-placeholder-shown:scale-75 peer-focus:translate-y-0 peer-focus:scale-75">
        {props.label}
      </TextField.Label>
    </Show>

    <Show when={props.error}>
      <TextField.ErrorMessage
        as="span"
        class={statusMessageVariants({
          variant: 'error',
          class: 'animate-show order-4'
        })}
      >
        {props.error}
      </TextField.ErrorMessage>
    </Show>
  </TextField>
)
