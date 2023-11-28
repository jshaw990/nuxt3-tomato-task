<script setup lang="ts">
const supabase = useSupabaseClient()

const state = reactive({
    errorMessages: [] as Array<any>,
    formData: {
        email: '',
        password: ''
    },
    isFormValidated: false,
    isProcessing: false
})

const setFieldValue = (key: string, value: string, keyErrorLength: number) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state.formData as any)[key] = value
    state.isFormValidated = keyErrorLength === 0
}

const handleLoginRequest = async () => {
    debugger
    if (!state.isFormValidated || state.isProcessing) return

    state.isProcessing = true
    debugger

    const loginErrors = await loginUser(state.formData)
    debugger

    if (loginErrors.length === 0) {
        return navigateTo('/')
    }

    state.errorMessages.push(...loginErrors)

    state.isProcessing = false
}
</script>

<template>
    <FormContainer :errorMessages="state.errorMessages" :title="'Login'">
        <FormInputField :fieldKey="'email'" :fieldPlaceholder="'Email'" :fieldType="'email'" :prependIcon="'mdi:mail'"
            @fieldBlurred="setFieldValue" />
        <FormInputField :fieldKey="'password'" :fieldPlaceholder="'Passphrase'" :fieldType="'password'"
            @fieldBlurred="setFieldValue" />
        <AppButton :buttonText="'Login'" :isLoading="state.isProcessing" @buttonPressed="handleLoginRequest" />
    </FormContainer>
</template>