export type WithClass<T = object> = {
  class?: string
} & T

export type Undefinable<T> = T | undefined
export type Nullable<T> = T | null
export type Nilable<T> = T | undefined | null
