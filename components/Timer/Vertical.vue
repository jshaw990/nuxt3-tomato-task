<script setup lang="ts">
import { NProgress } from 'naive-ui'
import { useTomatoStore } from '@/store/tomatoStore'

const store = useTomatoStore()
</script>

<template>
    <div class="w-full max-w-[270px] md:max-w-sm mx-auto">
        <div class="pb-0 text-sm" :class="`ml-[${store.getTimerPercentage}%]`"
            :style="`margin-left: ${store.getTimerPercentage}%`">
            <!-- {{ secondsToMinutesAndSeconds }} -->
            {{ Math.round(store.getTimerPercentage) }}%
        </div>
        <n-progress :percentage="store.getTimerPercentage" type="line" color="#F44336" border-radius="12px 2px"
            fill-border-radius="12px 2px" :height="32" :show-indicator="false" />
    </div>
</template>