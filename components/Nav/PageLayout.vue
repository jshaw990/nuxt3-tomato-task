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
    <main class="page-layout m-0 p-8 min-h-screen bg-stone-50">
        <template v-if="isLoading">
            <div>Loading</div>
        </template>
        <template v-else>
            <slot />
        </template>

    </main>
</template>