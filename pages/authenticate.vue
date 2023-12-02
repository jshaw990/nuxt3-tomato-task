<script setup lang="ts">
const user = useSupabaseUser()

const state = reactive({
    isLoading: false
})

const handleAuthSuccess = () => {
    state.isLoading = true

    setTimeout(() => {
        return navigateTo('/')
    }, 2500)
}

</script>

<template>
    <NavPageLayout :isLoading="state.isLoading">
        <div class="flex flex-col md:flex-row justify-start items-start md:justify-between gap-24 md:gap-8">
            <template v-if="user">
                <AuthLogout />
            </template>
            <template v-else>
                <AuthLogin @authSuccess="handleAuthSuccess" />
                <AuthRegister />
            </template>
        </div>
    </NavPageLayout>
</template>