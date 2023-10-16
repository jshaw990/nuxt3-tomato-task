<script setup lang="ts">
import { computed, reactive } from 'vue'
import { NButton, NButtonGroup, NProgress } from 'naive-ui'
import { useTomatoStore } from '@/store/tomatoStore'

const store = useTomatoStore()

const state = reactive({
    currentTimeInSeconds: store.getStartingOptionTime,
    isProcessing: false,
    isRunning: false
})

const activateTimer = () => {
    setTimeout(() => {
        if (state.currentTimeInSeconds > 0 && state.isRunning) {
            state.currentTimeInSeconds = state.currentTimeInSeconds - 1

            if (state.currentTimeInSeconds === 0 || !state.isRunning) {
                state.isRunning = false
                return
            }

            if (state.currentTimeInSeconds % 15 === 0) {
                logTimerToStorage()
            }

            activateTimer()
        }
    }, 1000)
}

const logTimerToStorage = () => {
    const log = state

    store.setCurrentTimeInSeconds(state.currentTimeInSeconds)

    console.log(log)
}

const secondsToMinutesAndSeconds = computed((): string => {
    const seconds = state.currentTimeInSeconds
    const minutes: number = Math.floor(seconds / 60)  // Get the whole number of minutes
    const remainingSeconds: number = seconds % 60    // Get the remaining seconds

    // Format the result as "minutes:seconds"
    const timeFormat: string = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`

    return timeFormat
})

const determinePercentageOfTimer = computed(() => {
    return (state.currentTimeInSeconds / store.getStartingOptionTime) * 100
})

const resetTimer = () => {
    if (state.isProcessing) return

    state.isProcessing = true
    state.isRunning = false
    state.currentTimeInSeconds = store.getStartingOptionTime
    logTimerToStorage()
    state.isProcessing = false
}

const toggleTimerState = () => {
    state.isProcessing = true
    const timeAtToggle = state.currentTimeInSeconds
    state.isRunning = !state.isRunning
    if (state.isRunning) activateTimer()
    if (!state.isRunning) state.currentTimeInSeconds = timeAtToggle
    logTimerToStorage()
    store.toggleIsRunning()
    state.isProcessing = false
}

useSeoMeta({
    title: () => { return `${secondsToMinutesAndSeconds.value} | Tomato Task` }
})
</script>

<template>
    <div class="flex flex-col items-center gap-8">
        <n-progress :height="300" :processing="state.isRunning" type="circle" :percentage="determinePercentageOfTimer"
            style="width: 300px !important;">
            <div class="text-center">
                <div class="-mt-8 pb-4 text-4xl">{{ secondsToMinutesAndSeconds }}</div>
                <n-button-group>
                    <n-button round ghost class="w-[120px]" @click="toggleTimerState">
                        {{ state.isRunning ? 'Stop timer' : 'Start timer' }}
                    </n-button>
                    <n-button round ghost class="w-[120px]" @click="resetTimer">
                        Reset timer
                    </n-button>
                </n-button-group>
            </div>
        </n-progress>
        <TimerOptionRow />
    </div>
</template>