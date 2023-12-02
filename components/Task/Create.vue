<script setup lang="ts">
import { ref } from 'vue'
import { NInput, NButton } from 'naive-ui'
import { useTomatoStore } from '@/store/tomatoStore'

const { addNewItemToTaskList } = useTomatoStore()

const state = reactive({
    isInvalid: false,
    title: ''
})

const addItemToTaskList = () => {
    const time = getUnixTimeInSeconds()

    const task = {
        ...state,
        time: time
    }

    const requestAdd = addNewItemToTaskList(task)

    if (requestAdd) {
        state.title = ''
        return
    }
    state.isInvalid = true
    // setTimeout(() => { taskData.value.isInvalid = false }, 1000)
}

const setFieldValue = (key: string, value: string, keyErrorLength: number) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state as any)[key] = value
    state.isInvalid = keyErrorLength === 0
}
</script>

<template>
    <div class="flex flex-col justify-center">
        <div class="mx-4 my-2">Create a new task</div>
        <div class="flex flex-row justify-between gap-4 items-center">
            <FormInputField :fieldKey="'title'" :fieldPlaceholder="'Add a new task'" :fieldType="'text'"
                :prependIcon="'mdi:pen'" :appendIcon="'mdi:plus'" @fieldBlurred="setFieldValue"
                @iconClicked="addItemToTaskList" />
        </div>
    </div>
</template>