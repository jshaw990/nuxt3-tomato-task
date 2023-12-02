<script setup lang="ts">
import { loginUser } from '@/composables/userService'

const emit = defineEmits(['authSuccess'])
const state = reactive({
    errorMessages: [] as Array<string>,
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

const handleGuestLogin = async () => {
    state.formData.email = 'abc123@abc.com'
    state.formData.password = 'abc123'
    state.isFormValidated = true
    await handleLoginRequest()
}

const handleLoginRequest = async () => {
    if (!state.isFormValidated || state.isProcessing) return

    state.isProcessing = true
    state.errorMessages = []
    const loginErrors = await loginUser(state.formData)

    if (loginErrors.length === 0) {
        // return navigateTo('/')
        emit('authSuccess')
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
        <AppButton :buttonText="'Guest'" :isLoading="state.isProcessing" @buttonPressed="handleGuestLogin" />
    </FormContainer>
</template>