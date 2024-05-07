import type { IconId } from '~/types/icons'

export const getIconHref = (id: IconId) => `/icon-sprite.svg#${id}`
