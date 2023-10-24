import { isNullOrEmpty } from './stringExtensions'

/**
 * Clear all local storage
 */
const clearLocalStorage = () => {
    localStorage.clear()
}

const getItemFromLocalStorage = (key: string) => {
    const value = localStorage.getItem(key)
    debugger

    if (isNullOrEmpty(value) || value == null) return ''

    return JSON.parse(value)
}

const writeToLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value)
}

export const localStore = () => {
    return {
        clearLocalStorage,
        getItemFromLocalStorage,
        writeToLocalStorage
    }
}