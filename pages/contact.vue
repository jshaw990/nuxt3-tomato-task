<script setup lang="ts">
import { useAuthStore } from '@/store/authStore'
const store = useAuthStore()
</script>

<template>
    <NavPageLayout>
        <div class="flex flex-col md:flex-row justify-center md:justify-around gap-8">
            <div>Contact page</div>
        </div>
    </NavPageLayout>
</template>