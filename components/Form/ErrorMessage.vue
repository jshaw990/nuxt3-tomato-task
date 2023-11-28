<script setup lang="ts">
const props = defineProps({
    errorText: {
        type: String,
        required: true
    },
    errorIcon: {
        type: String,
        required: false,
        default: 'mdi:alert'
    }
})
</script>

<template>
    <div class="w-full flex flex-row gap-5 pl-5 pr-1 items-center text-tt-red-1">
        <Icon :name="props.errorIcon" size="20px" class="flex-shrink-0" />
        <div class="text-sm">{{ props.errorText }}</div>
    </div>
</template>