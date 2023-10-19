<script setup lang="ts">
import { LayoutKey } from '#build/types/layouts'
// import { useRuntimeConfig } from 'nuxt/app'
import { computed } from 'vue'

// const { public: { currentEnv } } = useRuntimeConfig()

const layoutName = computed((): LayoutKey => {
    // return currentEnv === 'development' ? 'default' : 'construction'
    return 'default'
})
</script>

<template>
    <main>
        <NuxtLayout :name="layoutName">
            <NuxtPage />
        </NuxtLayout>
    </main>
</template>
