<script setup lang="ts">
import { LayoutKey } from '#build/types/layouts'
// import { useRuntimeConfig } from 'nuxt/app'
import { computed } from 'vue'

// const { public: { currentEnv } } = useRuntimeConfig()

const layoutName = computed((): LayoutKey => {
    // return currentEnv === 'development' ? 'default' : 'construction'
    return 'default'
})

useHead({
    script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-ME0NZ6S1CS', async: true },
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-ME0NZ6S1CS');`
    ]
})
</script>

<template>
    <main>
        <NuxtLayout :name="layoutName">
            <NuxtPage />
        </NuxtLayout>
    </main>
</template>
