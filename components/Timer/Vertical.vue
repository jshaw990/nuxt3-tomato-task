<script setup lang="ts">
import { NProgress } from 'naive-ui'

const props = defineProps({
    percentage: {
        type: Number,
        required: true
    },
    isRunning: {
        type: Boolean,
        required: true
    },
    timeDisplay: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="w-full max-w-[270px] md:max-w-sm mx-auto">
        <div class="pb-0 text-sm" :class="`ml-[${props.percentage}%]`" :style="`margin-left: ${props.percentage}%`">{{
            props.timeDisplay }}</div>
        <n-progress :percentage="props.percentage" type="line" color="#F44336" border-radius="12px 2px"
            fill-border-radius="12px 2px" :height="32" :processing="props.isRunning" :show-indicator="false" />
        <!-- <div>{{ Math.round(percentage) }}%</div> -->
    </div>
</template>