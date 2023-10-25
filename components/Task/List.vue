<script setup lang="ts">
import { useTomatoStore } from '~/store/tomatoStore'
const { getTaskList } = useTomatoStore()
</script>

<template>
    <div class="flex flex-col justify-center">
        <div class="mx-4 my-2">Task list</div>
        <div v-for="task in getTaskList" :key="task.title">
            <!-- {{ task.title }} -->
            <TaskItem :taskItem="task" />
        </div>
    </div>
</template>