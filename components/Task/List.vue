<script setup lang="ts">
import { useTomatoStore } from '~/store/tomatoStore'
const { getTaskList } = useTomatoStore()
</script>

<template>
    <div class="flex flex-col justify-center">
        <h6 class="uppercase mx-4 my-2">Task list</h6>
        <div v-for="task in getTaskList" :key="task.title">
            <!-- {{ task.title }} -->
            <TaskItem :taskItem="task" />
        </div>
    </div>
</template>