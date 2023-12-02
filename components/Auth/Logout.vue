<script setup lang="ts">
const state = reactive({
    errorMessages: [] as Array<string>,
    formData: {
        scope: ''
    },
    isProcessing: false
})

const setFieldValue = (value: string) => {
    state.formData.scope = value
}

const handleLogoutRequest = async () => {
    if (state.isProcessing) return

    state.isProcessing = true
    state.errorMessages = []
    const logoutErrors = await logoutUser(state.formData.scope)

    if (logoutErrors.length === 0) {
        return navigateTo('/')
    }

    state.errorMessages.push(...logoutErrors)
    state.isProcessing = false
}

</script>

<template>
    <FormContainer :errorMessages="state.errorMessages" :title="'Logout'">
        <div>Logout from your account</div>
        <FormInputCheck :checkKey="'local'" :checkText="'Only here'" :isChecked="state.formData.scope === 'local'"
            class="self-start" @inputChecked="setFieldValue" />
        <FormInputCheck :checkKey="'global'" :checkText="'Everywhere'" :isChecked="state.formData.scope === 'global'"
            class="self-start" @inputChecked="setFieldValue" />
        <FormInputCheck :checkKey="'others'" :checkText="'Everywhere, except for here'"
            :isChecked="state.formData.scope === 'others'" class="self-start" @inputChecked="setFieldValue" />
        <AppButton :buttonText="'Logout'" :isLoading="state.isProcessing" @buttonPressed="handleLogoutRequest" />
    </FormContainer>
</template>