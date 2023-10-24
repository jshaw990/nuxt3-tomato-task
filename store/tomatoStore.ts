/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { timerOptions } from '~/assets/timerTypes'

export const useTomatoStore = defineStore('tomato', () => {
    ////
    // STATE
    ////

    const timerState = ref({
        currentTimeInSeconds: timerOptions[1].time,
        currentTimerOptionIndex: 1,
        isReset: false,
        isRunning: false,
        taskList: [] as Array<any>,
        timerOptions: timerOptions,
        timerStats: []
    })

    ////
    // GETTERS
    ////

    const getTaskList = computed(() => {
        return timerState.value.taskList
    })

    const getTimerOptions = computed(() => {
        return timerState.value.timerOptions
    })

    const getTimerState = computed(() => {
        return timerState.value
    })

    const getStartingOptionTime = computed(() => {
        return timerState.value.timerOptions[timerState.value.currentTimerOptionIndex].time
    })

    const secondsToMinutesAndSeconds = computed((): string | void => {
        const seconds = timerState.value.currentTimeInSeconds
        const minutes: number = Math.floor(seconds / 60)  // Get the whole number of minutes
        const remainingSeconds: number = seconds % 60    // Get the remaining seconds

        // Format the result as "minutes:seconds"
        const timeFormat: string = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`

        return timeFormat
    })

    ////
    // SETTERS
    ////

    const setTimerStateToDefault = () => {
        timerState.value.isReset = true
        timerState.value.currentTimeInSeconds = getStartingOptionTime.value
    }

    const setCurrentTimeInSeconds = (seconds: number) => {
        timerState.value.currentTimeInSeconds = seconds
    }

    const setCurrentTimerOptionIndex = (index: number) => {
        timerState.value.isRunning = false
        timerState.value.currentTimerOptionIndex = index
        timerState.value.isReset = true
        setTimerStateToDefault()
    }

    const setIsRunning = (value: boolean) => {
        timerState.value.isRunning = value
    }

    const setTimerOptions = (options: Array<any>) => {
        timerState.value.timerOptions = options
    }

    const toggleIsRunning = () => {
        timerState.value.isRunning = !timerState.value.isRunning
        timerState.value.isReset = timerState.value.isRunning ? false : timerState.value.isReset
    }

    const addNewItemToTaskList = (item: any) => {
        if (item === null || item === undefined) return
        timerState.value.taskList.push(item)
        return true
    }

    const setStateValueFromStorage = (storedState: any) => {
        timerState.value = storedState
        console.log('set! => ', storedState)
    }

    return {
        getStartingOptionTime,
        getTaskList,
        getTimerOptions,
        getTimerState,
        secondsToMinutesAndSeconds,
        setCurrentTimeInSeconds,
        setCurrentTimerOptionIndex,
        setIsRunning,
        addNewItemToTaskList,
        setTimerOptions,
        setTimerStateToDefault,
        setStateValueFromStorage,
        timerState,
        toggleIsRunning
    }
})
