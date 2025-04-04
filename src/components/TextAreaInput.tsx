import { TextField, type TextFieldRootProps } from '@kobalte/core/text-field'
import { Show, type Component, type JSX, type JSXElement } from 'solid-js'
import { statusMessageVariants } from './StatusMessage'

type TextAreaInputProps = {
  label?: JSXElement
  error?: JSXElement
  description?: JSXElement
  inputId?: string
  autoResize?: boolean
  submitOnEnter?: boolean
  wrapperRef?: TextFieldRootProps['ref']
} & Pick<
  JSX.TextareaHTMLAttributes<HTMLTextAreaElement>,
  | 'onBlur'
  | 'onFocus'
  | 'placeholder'
  | 'onChange'
  | 'autofocus'
  | 'ref'
  | 'onInput'
> &
  Omit<TextFieldRootProps, 'validationState' | 'onChange' | 'ref'>

export const TextAreaInput: Component<TextAreaInputProps> = props => (
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

    <TextField.TextArea
      id={props.inputId}
      onChange={props.onChange}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      // @ts-expect-error incompatible types
      onInput={props.onInput}
      placeholder={props.placeholder}
      autoResize={props.autoResize}
      submitOnEnter={props.submitOnEnter}
      autofocus={props.autofocus}
      class="peer data-[invalid]:!border-b-error font-secondary order-3 !border-b border-transparent !border-b-black/50 bg-transparent py-2 transition-colors outline-none focus:!border-b-black disabled:cursor-not-allowed disabled:opacity-50"
    />

    <Show when={props.label}>
      <TextField.Label class="order-2 -mb-4 origin-left translate-y-[25px] self-start text-black/50 transition-transform peer-not-placeholder-shown:translate-y-0 peer-not-placeholder-shown:scale-75 peer-focus:translate-y-0 peer-focus:scale-75">
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
