import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (key, setOn) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, setOn)
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return [darkMode, toggleDarkMode]
}