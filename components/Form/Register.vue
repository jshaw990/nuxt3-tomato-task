<script setup lang="ts">
const state = reactive({
    errorMessages: [] as Array<any>,
    formData: {
        email: '',
        name: '',
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

    const creationErrors = await createNewUser(state.formData)

    if (creationErrors.length === 0) {
        return navigateTo('/')
    }

    state.errorMessages.push(...creationErrors)
    state.isProcessing = false
}
</script>

<template>
    <FormContainer :errorMessages="state.errorMessages" :title="'Create an account'">
        <FormInputField :fieldKey="'name'" :fieldPlaceholder="'Name'" :prependIcon="'mdi:account'"
            @fieldBlurred="setFieldValue" />
        <FormInputField :fieldKey="'email'" :validationType="'email'" :fieldPlaceholder="'Email'" :fieldType="'email'"
            :prependIcon="'mdi:mail'" @fieldBlurred="setFieldValue" />
        <FormInputField :fieldKey="'password'" :validationType="''" :fieldPlaceholder="'Passphrase'" :fieldType="'password'"
            @fieldBlurred="setFieldValue" />
        <AppButton :buttonText="'Create an account'" :isLoading="state.isProcessing" @buttonPressed="handleLoginRequest" />
    </FormContainer>
</template>