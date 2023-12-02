<script setup lang="ts">
import { footer } from '@/data/Navigation'
</script>

<template>
    <div class="">
        <div class="flex flex-row gap-8 justify-center items-center bg-neutral-900 text-white pt-4 pb-6">
            <template v-for="item in footer" :key="item.id">
                <NuxtLink :to="item.link" class="" :class="item.class">
                    <!-- <span class="pl-1 text-sm">&#169;</span> -->
                    {{ item.title }}
                </NuxtLink>
            </template>
        </div>
        <div class="flex flex-row justify-center items-center w-full bg-neutral-600 text-white px-8 pt-4 pb-16 h-8">
            <NuxtLink to="https://jaydenshaw.com/" target="_blank" rel="noopener" class="text-xs">
                <span class="pl-1 text-sm">&#169;</span>
                2023 - Jayden Shaw
            </NuxtLink>
        </div>
    </div>
</template>