<script setup lang="ts">
useSeoMeta({ title: 'Tomato Task' })
</script>

<template>
    <div class="flex flex-col items-center gap-8 mx-auto">
        <TimerVertical />
        <TimerActionButtons />
        <TimerOptionRow />

    </div>
</template>