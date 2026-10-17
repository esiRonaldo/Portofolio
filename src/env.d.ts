// Types for the VITE_ variables from the .env files (see .env.example).
// Vite copies their values into the built JavaScript: they are public configuration, never secrets.
interface ImportMetaEnv {
  /** Formspree form endpoint, e.g. https://formspree.io/f/abcdwxyz. Unset → the form isn't connected. */
  readonly VITE_CONTACT_ENDPOINT?: string
}
