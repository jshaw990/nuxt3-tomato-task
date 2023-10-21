<script setup lang="ts">
import { useTomatoStore } from '~/store/tomatoStore'

const { getTaskList } = useTomatoStore()


</script>

<template>
    <div class="flex flex-col items-center gap-4 w-80">
        <TaskCreate />
        <div v-for="task in getTaskList" :key="task.title">
            {{ task.title }}
        </div>
    </div>
</template>