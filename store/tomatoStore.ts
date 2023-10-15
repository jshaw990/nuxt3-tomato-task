import { defineStore } from 'pinia'

export const useTomatoStore = defineStore('tomato', () => {
    const timerState = ref({
        isRunning: false,
        currentTimeInSeconds: 0
    })

    const setCurrentTimeInSeconds = (seconds: number) => {
        timerState.value.currentTimeInSeconds = seconds
    }

    const toggleIsRunning = () => {
        timerState.value.isRunning = !timerState.value.isRunning
    }

    return {
        setCurrentTimeInSeconds,
        timerState,
        toggleIsRunning
    }
})