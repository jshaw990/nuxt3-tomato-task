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
    <main class="page-layout m-0 py-8 px-4 md:px-8 min-h-screen bg-stone-50">
        <template v-if="isLoading">
            <div>Loading</div>
        </template>
        <template v-else>
            <slot />
        </template>

    </main>
</template>