<script setup lang="ts">
import { computed, ref } from 'vue'
import { NButton, NButtonGroup, NProgress } from 'naive-ui'
import { useTomatoStore } from '@/store/tomatoStore'

const store = useTomatoStore()

const state = store.getTimerState

const isProcessing = ref(false)

const activateTimer = () => {
    console.log(`Timer is toggled ${!state.isRunning} at ${Date.now()}`)
    setTimeout(() => {
        if (state.currentTimeInSeconds > 0 && state.isRunning) {
            store.setCurrentTimeInSeconds(state.currentTimeInSeconds - 1)

            if (state.currentTimeInSeconds === 0 || !state.isRunning) {
                console.log(`Timer is at 0 at ${Date.now()}`)
                store.setIsRunning(false)
                return
            }

            activateTimer()
        }
    }, 1000)
}

const determinePercentageOfTimer = computed(() => {
    return (state.currentTimeInSeconds / store.getStartingOptionTime) * 100
})

const resetTimer = () => {
    if (isProcessing.value) return
    isProcessing.value = true
    store.setIsRunning(false)
    store.setCurrentTimeInSeconds(store.getStartingOptionTime)
    isProcessing.value = false
}

const toggleTimerState = () => {
    if (isProcessing.value) return
    isProcessing.value = true
    const timeAtToggle = state.currentTimeInSeconds
    store.toggleIsRunning()
    if (state.isRunning) activateTimer()
    if (!state.isRunning) store.setCurrentTimeInSeconds(timeAtToggle)
    isProcessing.value = false
}

useSeoMeta({ title: 'Tomato Task' })
</script>

<template>
    <div class="flex flex-col items-center gap-8">
        <n-progress :height="300" :processing="state.isRunning" color="#F44336" type="circle"
            :percentage="determinePercentageOfTimer" style="width: 300px !important;">
            <div class="text-center">
                <div class="-mt-8 pb-4 text-4xl">{{ store.secondsToMinutesAndSeconds }}</div>
                <n-button-group>
                    <n-button color="#F44336" round class="w-[120px] box-border" text-color="#f44336"
                        style="border: 1px solid #f44336;" @click="toggleTimerState">
                        {{ state.isRunning ? 'Stop timer' : 'Start timer' }}
                    </n-button>
                    <n-button color="#F44336" round class="w-[120px] box-border" text-color="#f44336" @click="resetTimer"
                        style="border: 1px solid #f44336;">
                        Reset timer
                    </n-button>
                </n-button-group>
            </div>
        </n-progress>
        <TimerOptionRow />
    </div>
</template>