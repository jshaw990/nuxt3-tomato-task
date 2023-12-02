<script setup lang="ts">
import { NButton, NButtonGroup } from 'naive-ui'
// import { useTomatoStore } from '@/store/tomatoStore'
const { isMobile } = useDevice()

const handleUpdateTimerOption = (index: number) => {
    // console.log('hello', index)
}

const taskOption = [
    {
        icon: '',
        index: 0,
        name: 'Save'
    },
    {
        icon: '',
        index: 1,
        name: 'Clear'
    },
]

</script>

<template>
    <n-button-group>
        <template v-for="option in taskOption" :key="option.index">
            <n-button round ghost :class="isMobile ? 'w-[110px]' : 'w-[150px]'"
                @click="handleUpdateTimerOption(option.index)">
                <template v-if="!isMobile" #icon>
                    <Icon :name="option.icon" />
                </template>
                {{ option.name }}
            </n-button>
        </template>
    </n-button-group>
</template>