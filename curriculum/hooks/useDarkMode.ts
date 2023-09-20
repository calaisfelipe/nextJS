import {create} from 'zustand'


type useDarkModeProps = {
    isDark: boolean
    setDark: () =>  void
    setLight: () => void
}

export const useDarkMode = create<useDarkModeProps>((set) => ({
    isDark: false,
    setDark: () => set({isDark: true}),
    setLight: () => set({isDark: false})
  }))