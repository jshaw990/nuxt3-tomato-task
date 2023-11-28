<script setup lang="ts">
const supabase = useSupabaseClient()

const state = reactive({
    errorMessages: [],
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

    const { data, error } = await supabase.auth.signInWithPassword({
        email: state.formData.email,
        password: state.formData.password
    })

    debugger

    console.log(data)

    if (error) {
        console.log(error)
        state.errorMessages.push(error.message)
    }

    state.isProcessing = false
}
</script>

<template>
    <FormContainer :errorMessages="state.errorMessages" :title="'Login'">
        <FormInputField :fieldKey="'email'" :validationType="'email'" :fieldPlaceholder="'Email'" :fieldType="'email'"
            :prependIcon="'mdi:mail'" @fieldBlurred="setFieldValue" />
        <FormInputField :fieldKey="'password'" :validationType="'password'" :fieldPlaceholder="'Passphrase'"
            :fieldType="'password'" @fieldBlurred="setFieldValue" />
        <AppButton :buttonText="'Login'" :isLoading="state.isProcessing" @buttonPressed="handleLoginRequest" />
    </FormContainer>
</template>