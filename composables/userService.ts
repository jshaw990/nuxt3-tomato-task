import { useAuthStore } from '@/store/authStore'

export const createNewUser = async (newUserData: any) => {
    const supabase = useSupabaseClient()
    const store = useAuthStore()
    const errors: Array<any> = []

    try {
        const { data, error } = await supabase.auth.signUp({
            email: newUserData.email,
            password: newUserData.password,
            options: {
                data: {
                    name: newUserData.name,
                    organizations: []
                }
            }
        })

        if (error !== null) {
            errors.push(error)
        }

        if (data !== null) {
            store.setAuthState(data.user)
        }
    } catch (error) {
        errors.push(error)
    }

    return errors
}

export const loginUser = async (loginData) => {
    const supabase = useSupabaseClient()
    const store = useAuthStore()
    const errors: Array<any> = []

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: loginData.email,
            password: loginData.password
        })

        debugger

        if (error !== null) {
            errors.push(error)
        }

        if (data !== null) {
            store.setAuthState(data.user)
        }
    } catch (error) {
        errors.push(error)
    }

    return errors
}