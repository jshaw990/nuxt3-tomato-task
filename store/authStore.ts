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

    const getMainUserData = computed(() => {
        return {
            name: authState.value.name,
            email: authState.value.email,
            phone: authState.value.phone
        }
    })
    
    const isUserAuth = computed(() => {
        return authState.value.uuid.length > 0
    })

    ////
    // SETTERS
    ////

    const clearAuthState = () => {
        authState.value.uuid = ''
        authState.value.email = ''
        authState.value.phone = ''
        authState.value.name = ''
        authState.value.organizations = []
        authState.value.lastLogin = ''
        authState.value.isEmailVerified = false
        authState.value.providers = []
    }

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
        // GETTERS
        getMainUserData,
        isUserAuth,
        // SETTERS
        clearAuthState,
        setAuthState,
        // STATE
        authState
    }
}, {
    persist: true
})
