export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'rinkbolt-theme'

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  document.documentElement.style.colorScheme = theme
}

export function useTheme() {
  const theme = useState<Theme>('rinkbolt-theme', () => 'light')

  const setTheme = (nextTheme: Theme) => {
    theme.value = nextTheme
    applyTheme(nextTheme)
    localStorage.setItem(STORAGE_KEY, nextTheme)
  }

  const toggleTheme = () => setTheme(theme.value === 'dark' ? 'light' : 'dark')

  onMounted(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    theme.value = savedTheme === 'dark' || (!savedTheme && prefersDark) ? 'dark' : 'light'
    applyTheme(theme.value)
  })

  return { theme, setTheme, toggleTheme }
}
