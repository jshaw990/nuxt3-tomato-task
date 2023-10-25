<script setup lang="ts">
import { useTomatoStore } from '@/store/tomatoStore'
import { NButton, NButtonGroup } from 'naive-ui'

const store = useTomatoStore()

const resetTimerState = () => {
    store.resetTimer()
}

const toggleTimerState = () => {
    store.toggleIsRunning()
}
</script>

<template>
    <n-button-group>
        <n-button color="#F44336" round class="w-[120px] box-border" text-color="#f44336" style="border: 1px solid #f44336;"
            @click="toggleTimerState">
            {{ store.getIsTimerRunning ? 'Stop timer' : 'Start timer' }}
        </n-button>
        <n-button color="#F44336" round class="w-[120px] box-border" text-color="#f44336" @click="resetTimerState"
            style="border: 1px solid #f44336;">
            Reset timer
        </n-button>
    </n-button-group>
</template>