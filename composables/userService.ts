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

        if (data.user !== null) {
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
    const errors: Array<string> = []

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: loginData.email,
            password: loginData.password
        })

        if (error !== null) {
            errors.push(error)
        }

        if (data.user !== null) {
            store.setAuthState(data.user)
        }
    } catch (error) {
        errors.push(error)
    }

    return errors
}

export const logoutUser = async (scope: any = undefined) => {
    const supabase = useSupabaseClient()
    const store = useAuthStore()
    const errors: Array<string> = []
    
    try {
        const { error } = await supabase.auth.signOut({ scope: scope })

        if (error !== null) {
            errors.push(error)
        } else {
            store.clearAuthState()
        }
    } catch (error) {
        errors.push(error)
    }
    
    return errors
}