/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { timerOptions } from '~/assets/timerTypes'
import { TimerOption } from '~/models/Timer'

export const useTomatoStore = defineStore('tomato', () => {
    ////
    // STATE
    ////

    const timerState = ref({
        currentTimeInSeconds: 0,
        currentTimerOptionIndex: 0,
        isRunning: false,
        timerOptions: timerOptions,
    })

    ////
    // GETTERS
    ////

    const getTimerOptions = computed(() => {
        return timerState.value.timerOptions
    })

    const getTimerState = computed(() => {
        return timerState.value
    })

    const getStartingOptionTime = computed(() => {
        return timerState.value.timerOptions[timerState.value.currentTimerOptionIndex].time
    })

    ////
    // SETTERS
    ////

    const setCurrentTimeInSeconds = (seconds: number) => {
        timerState.value.currentTimeInSeconds = seconds
    }

    const setcurrentTimerOptionIndex = (index: number) => {
        timerState.value.currentTimerOptionIndex = index
    }

    const setTimerOptions = (options: Array<any>) => {
        timerState.value.timerOptions = options
    }

    const toggleIsRunning = () => {
        timerState.value.isRunning = !timerState.value.isRunning
    }

    return {
        getStartingOptionTime,
        getTimerOptions,
        getTimerState,
        setCurrentTimeInSeconds,
        setcurrentTimerOptionIndex,
        setTimerOptions,
        timerState,
        toggleIsRunning
    }
})