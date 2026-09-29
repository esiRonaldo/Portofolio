import type en from './en'

// Typed as the English messages, so a missing or extra key is a type error.
const de: typeof en = {
  demo: {
    title: 'Los geht’s',
    switchLanguage: 'English',
  },
}

export default de
