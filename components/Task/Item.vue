<script setup lang="ts">
const props = defineProps({
    taskItem: {
        type: undefined,
        required: true
    }
})
</script>

<template>
    <div class="flex flex-row mx-4 justify-between flex-nowrap items-center w-full">
        <div>{{ props.taskItem.title }}</div>
        <div class="text-xs">{{ getTimeStampFromUnixTimeInSeconds(props.taskItem.time) }}</div>
    </div>
</template>