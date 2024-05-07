import { cx } from 'class-variance-authority'
import { type Component } from 'solid-js'
import { useToggle } from '~/hooks/useToggle'
import { Hamburger } from './Hamburger'
import { NavLinks } from './NavLinks'
import { SocialIcons } from './SocialIcons'

export const HeaderMenu: Component = () => {
  const { isOn, toggle, setOff } = useToggle()

  return (
    <div class="flex flex-1 items-center justify-end gap-6">
      <div
        class={cx(
          'max-md:bg-background flex flex-1 items-center justify-end gap-6 max-md:fixed max-md:top-0 max-md:left-full max-md:z-[1000] max-md:h-screen max-md:w-full max-md:flex-col max-md:justify-center max-md:overflow-hidden max-md:transition-all max-md:duration-300 max-md:ease-in-out',
          isOn() ? 'max-md:-translate-x-full' : 'max-md:translate-x-0'
        )}
      >
        <NavLinks onNavLinkClick={() => setOff()} />
        <SocialIcons />
      </div>
      <Hamburger
        isOpen={isOn()}
        onToggle={() => toggle()}
      />
    </div>
  )
}
