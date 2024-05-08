import { type JSX, type Component } from 'solid-js'

type ImageProps = {
  src: string
  fill?: boolean
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
    style={
      props.fill
        ? {
            position: 'absolute',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            color: 'transparent'
          }
        : { color: 'transparent' }
    }
  />
)
