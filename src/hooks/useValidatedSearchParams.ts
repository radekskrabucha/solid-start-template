import { useSearchParams, type NavigateOptions } from '@solidjs/router'
import { createSignal } from 'solid-js'
import type { ZodType, z } from 'zod'

export const useValidatedSearchParams = <T extends ZodType<{}>>(schema: T) => {
  const [rawParams, setParams] = useSearchParams<z.infer<T>>()
  const [params, setSignalParams] = createSignal<z.infer<T>>(
    schema.parse(rawParams)
  )

  return {
    rawParams,
    params,
    setParams: (params: z.TypeOf<T>, options?: Partial<NavigateOptions>) => {
      setParams(params, options)
      setSignalParams(prev => ({
        ...prev,
        ...params
      }))
    }
  }
}
