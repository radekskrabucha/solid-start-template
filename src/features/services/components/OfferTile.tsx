import type { Component, JSXElement } from 'solid-js'

type OfferTileProps = {
  children: JSXElement
  price: string
}

export const OfferTile: Component<OfferTileProps> = props => (
  <div class="border-primary text-primary flex flex-1 flex-col gap-6 p-6 first:border-none max-lg:border-t lg:border-l">
    {props.children}
    <h4 class="font-main mt-auto text-lg font-medium capitalize text-white">
      {props.price}
    </h4>
  </div>
)
