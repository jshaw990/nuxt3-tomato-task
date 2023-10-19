<script setup lang="ts">
import { NButton, NButtonGroup } from 'naive-ui'
import { useTomatoStore } from '@/store/tomatoStore'
const { isMobile } = useDevice()

const { getTimerOptions, setCurrentTimerOptionIndex } = useTomatoStore()

const handleUpdateTimerOption = (index: number) => {
    setCurrentTimerOptionIndex(index)
}

</script>

<template>
    <n-button-group>
        <template v-for="option in getTimerOptions" :key="option.index">
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