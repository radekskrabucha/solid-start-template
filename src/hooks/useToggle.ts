import { createSignal } from 'solid-js'

export const useToggle = (initialValue = false) => {
  const [isOn, setIsOn] = createSignal(initialValue)

  return {
    isOn,
    toggle: (cb?: VoidFunction) => {
      setIsOn(prev => !prev)
      cb?.()
    },
    setIsOn,
    setOn: (cb?: VoidFunction) => {
      setIsOn(true)
      cb?.()
    },
    setOff: (cb?: VoidFunction) => {
      setIsOn(false)
      cb?.()
    }
  }
}
