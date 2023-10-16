<script setup lang="ts">
import { NButton, NButtonGroup } from 'naive-ui'
import { useTomatoStore } from '@/store/tomatoStore'

const { getTimerOptions, setcurrentTimerOptionIndex } = useTomatoStore()

const handleUpdateTimerOption = (index: number) => {
    console.log(index)
    setcurrentTimerOptionIndex(index)
}

</script>

<template>
    <n-button-group>
        <template v-for="option in getTimerOptions" :key="option.index">
            <n-button round ghost class="w-[150px]" @click="handleUpdateTimerOption(option.index)">
                <template #icon>
                    <Icon :name="option.icon" />
                </template>
                {{ option.name }}
            </n-button>
        </template>
    </n-button-group>
</template>