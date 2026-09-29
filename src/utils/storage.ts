// localStorage can throw (blocked storage, some private modes). A preference that can't be
// saved isn't an error worth showing, so we fall back silently.

export function readStorage(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

export function writeStorage(key: string, value: string): void {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Ignore: the choice just won't be remembered.
  }
}
