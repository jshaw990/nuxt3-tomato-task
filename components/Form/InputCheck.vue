<script setup lang="ts">
const emit = defineEmits(['inputChecked'])
const props = defineProps({
    checkKey: {
        type: String,
        required: true
    },
    checkText: {
        type: String,
        required: true
    },
    isChecked: {
        type: Boolean,
        required: true
    }
})

const emitCheckboxClicked = () => {
    emit('inputChecked', props.checkKey)
}
</script>

<template>
    <div class="flex flex-row gap-2 items-center justify-center" @click="emitCheckboxClicked">
        <input type="checkbox" :checked="props.isChecked" :id="'input-check' + props.checkKey"
            class="accent-tt-green-1 w-6 cursor-pointer" />
        <label :for="'input-check' + props.checkKey" class="cursor-pointer">{{ props.checkText }}</label>
    </div>
</template>