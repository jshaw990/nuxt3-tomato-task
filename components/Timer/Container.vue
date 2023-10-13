<script setup lang="ts">
import { reactive } from 'vue'
import { NButton, NProgress } from 'naive-ui'

const state = reactive({
    isRunning: false,
    percentage: 80
})

const activateTimer = () => {
    if (state.percentage > 0 && state.isRunning) {
        if (state.percentage === 0) {
            state.isRunning = false
            return
        }
        setTimeout(() => {
            state.percentage = state.percentage - 1
            console.log('timer at ', state.percentage)
            activateTimer()
        }, 1000)
    }
}

const startTimer = () => {
    state.isRunning = true
    console.log('timer started')
    activateTimer()
}
</script>

<template>
    <div class="flex flex-col items-center gap-8">
        <n-progress type="circle" :percentage="state.percentage" />
        <n-button type="primary" ghost @click="startTimer">Start</n-button>
    </div>
</template>