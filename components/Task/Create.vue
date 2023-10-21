<script setup lang="ts">
import { ref } from 'vue'
import { NInput, NButton } from 'naive-ui'
import { useTomatoStore } from '@/store/tomatoStore'

const { addNewItemToTaskList } = useTomatoStore()

const addItemToTaskList = () => {
    const time = getUnixTimeInSeconds()

    const task = {
        ...taskData.value,
        time: time
    }

    const requestAdd = addNewItemToTaskList(task)

    if (requestAdd) {
        taskData.value.title = ''
        // return
    }
    taskData.value.isInvalid = true

    // setTimeout(() => { taskData.value.isInvalid = false }, 1000)
}

const taskData = ref({
    isInvalid: false,
    title: ''
})


</script>

<template>
    <div class="flex flex-col justify-center p-4">
        <div class="mx-4 my-2">Create a new task</div>
        <div class="flex flex-row justify-between gap-4 items-center">
            <n-input v-model:value="taskData.title" type="text" round placeholder="Add a new task" size="large" class="w-72"
                :status="taskData.isInvalid ? 'error' : undefined" :class="taskData.isInvalid ? 'shake-y-short' : ''" />
            <n-button :type="taskData.isInvalid ? 'error' : 'default'" circle class="h-9 w-9"
                :color="taskData.isInvalid ? '' : ''">
                <Icon :name="'material-symbols:add-circle-outline'" size="20px" @click="addItemToTaskList" />
            </n-button>
        </div>
    </div>
</template>