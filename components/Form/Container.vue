<script setup lang="ts">
const props = defineProps({
    errorMessages: {
        type: Array<string>,
        required: false,
        default: []
    },
    title: {
        type: String,
        required: false,
        default: ''
    }
})
</script>

<template>
    <div class="flex flex-col flex-nowrap items-center mx-auto justify-center gap-8">
        <h6 v-if="props.title.length > 0" class="text-2xl tracking-widest">
            {{ props.title }}
        </h6>
        <div v-if="props.errorMessages.length > 0"
            class="flex flex-col flex-nowrap items-center mx-auto justify-center gap-4">
            <template v-for="(error, index) in props.errorMessages" :key="index">
                <FormErrorMessage :error-text="error" />
            </template>
        </div>
        <slot />
    </div>
</template>