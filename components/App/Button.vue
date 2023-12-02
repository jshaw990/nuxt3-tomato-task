<script setup lang="ts">
const emit = defineEmits(['buttonPressed'])
const props = defineProps({
    buttonText: {
        type: String,
        required: true
    },
    isDisabled: {
        type: Boolean,
        required: false,
        default: false
    },
    isLoading: {
        type: Boolean,
        required: false,
        default: false
    },
})

const getButtonStyles = computed(() => {
    if (props.isDisabled) {
        return ''
    }
    return 'bg-neutral-800 hover:bg-tt-red-1 border-neutral-800 text-white border-2'
})

const handleButtonPressed = (event) => {
    event.preventDefault()
    if (props.isDisabled || props.isLoading) return

    emit('buttonPressed')
}
</script>

<template>
    <button class="px-6 py-4 rounded-lg uppercase tracking-widest font-bold min-w-[10rem]" :class="getButtonStyles"
        @click="handleButtonPressed">
        <template v-if="props.isLoading">
            <Icon name="svg-spinners:180-ring-with-bg" />
        </template>
        <template v-else>
            {{ props.buttonText }}
        </template>
    </button>
</template>