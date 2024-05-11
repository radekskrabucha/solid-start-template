import { type JSX, type Component } from 'solid-js'

type ImageProps = {
  src: string
} & Pick<
  JSX.ImgHTMLAttributes<HTMLImageElement>,
  | 'alt'
  | 'class'
  | 'width'
  | 'height'
  | 'loading'
  | 'decoding'
  | 'crossorigin'
  | 'elementtiming'
  | 'fetchpriority'
  | 'referrerpolicy'
  | 'sizes'
  | 'srcset'
>

export const Image: Component<ImageProps> = props => (
  <img
    {...props}
    decoding={props.decoding || 'async'}
    loading={props.loading || 'lazy'}
  />
)
