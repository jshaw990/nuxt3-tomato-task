<script setup lang="ts">
import { computed, reactive } from 'vue'
import { NButton, NButtonGroup, NProgress } from 'naive-ui'

const state = reactive({
    currentTimeInSeconds: 600,
    isProcessing: false,
    isRunning: false,
    startTimeInSeconds: 600
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
    return (state.currentTimeInSeconds / state.startTimeInSeconds) * 100
})

const resetTimer = () => {
    if (state.isProcessing) return

    state.isProcessing = true
    state.isRunning = false
    state.currentTimeInSeconds = state.startTimeInSeconds
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
    state.isProcessing = false
}
</script>

<template>
    <div class="flex flex-col items-center gap-8">
        <NProgress :height="300" :processing="state.isRunning" type="line" :percentage="determinePercentageOfTimer"
            style="width: 300px !important;">
            <div class="text-center">
                <div class="-mt-8 pb-4 text-4xl">{{ secondsToMinutesAndSeconds }}</div>
                <NButtonGroup>
                    <NButton round ghost class="w-[120px]" @click="toggleTimerState">
                        {{ state.isRunning ? 'Stop timer' : 'Start timer' }}
                    </NButton>
                    <NButton round ghost class="w-[120px]" @click="resetTimer">
                        Reset timer
                    </NButton>
                </NButtonGroup>
            </div>
        </NProgress>
        <NButtonGroup>
            <NButton round ghost class="w-[150px]">
                <template #icon>
                    <Icon name="ph:coffee-bold" />
                </template>
                Long break
            </NButton>
            <NButton round ghost class="w-[70px] md:w-[150px]">
                Work
            </NButton>
            <NButton round ghost class="w-[150px]" icon-placement="right">
                Short break
                <template #icon>
                    <Icon name="ph:coffee-bold" />
                </template>
            </NButton>
        </NButtonGroup>
    </div>
</template>