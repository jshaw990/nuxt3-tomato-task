<script setup lang="ts">
import { header } from '@/data/Navigation'
const user = useSupabaseUser()

</script>

<template>
    <div class="flex flex-row justify-between items-center w-full bg-neutral-800 text-white px-8 py-4">
        <NuxtLink to="/" class="flex flex-row gap-4 items-center h-8">
            <NuxtImg src="/tomato.svg" width="32px" />
            <h1 class="text-2xl">Tomato Task</h1>
        </NuxtLink>
        <div class="flex flex-row gap-4 items-center">
            <!-- <template v-if="isUserAuth">
                <div class="hidden md:block">User.name</div>
                <div class="w-8 h-8 rounded-full bg-tt-orange-1" />
            </template>
            <template v-else>
                <NuxtLink to="/authenticate" class="hidden md:block">Login</NuxtLink>
                <NuxtLink to="/authenticate" class="hidden md:block">Register</NuxtLink>
            </template> -->
            <template v-for="item in header" :key="item.id">
                <template v-if="item.isAuth && user">
                    <NuxtLink :to="item.link" :class="item.class">{{ item.title }}</NuxtLink>
                </template>
                <template v-else-if="!item.isAuth && user === null">
                    <NuxtLink :to="item.link" :class="item.class">{{ item.title }}</NuxtLink>
                </template>
            </template>
        </div>
    </div>
</template>