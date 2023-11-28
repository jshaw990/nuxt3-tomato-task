/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    ////
    // STATE
    ////

    const authState = ref({
        uuid: '',
        email: '',
        phone: '',
        name: '',
        organizations: [],
        lastLogin: '',
        isEmailVerified: false,
        providers: []
    })

    ////
    // GETTERS
    ////

    const getUserIsAuth = computed(() => {
        return false
    })

    ////
    // SETTERS
    ////

    const setAuthState = (payload: unknown) => {
        authState.value.uuid = payload.id
        authState.value.email = payload.email
        authState.value.phone = payload.phone
        authState.value.name = payload.user_metadata.name
        authState.value.organizations = payload.user_metadata.organizations
        authState.value.lastLogin = payload.last_sign_in_at
        authState.value.isEmailVerified = false
        authState.value.providers = payload.app_metadata.providers
    }

    return {
        getUserIsAuth,
        setAuthState,
        authState
    }
}, {
    persist: true
})
