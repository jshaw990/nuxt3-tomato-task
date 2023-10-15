<script setup lang="ts">
import { LayoutKey } from '#build/types/layouts'

const { public: { currentEnv } } = useRuntimeConfig()

const layoutName: LayoutKey = currentEnv === 'development' ? 'default' : 'construction'
</script>

<template>
    <main>
        <NuxtLayout :name="layoutName">
            <NuxtPage />
        </NuxtLayout>
    </main>
</template>
