<script setup lang="ts">
defineProps({
    isLoading: {
        type: Boolean,
        required: false,
        default: false
    }
})
</script>

<template>
    <main class="page-layout m-0 py-8 px-4 md:px-8 min-h-[calc(100vh-64px-24px)] bg-stone-50">
        <template v-if="isLoading">
            <div class="flex justify-center mx-auto my-20">
                <Icon name="svg-spinners:180-ring-with-bg" size="72px" />
            </div>
        </template>
        <template v-else>
            <slot />
        </template>

    </main>
</template>