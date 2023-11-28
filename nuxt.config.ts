export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {
                    rel: 'preconnect', href: 'https://fonts.googleapis.com'
                },
                {
                    rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'
                },
                {
                    rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;400;700;900&display=swap'
                }
            ]
        }
    },
    css: [
        '@/assets/styles.scss'
    ],
    modules: [
        '@nuxtjs/device',
        '@nuxtjs/eslint-module',
        '@nuxtjs/supabase',
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        'nuxt-icon',
    ],
    image: {
        provider: 'netlify'
    },
    supabase: {
        redirectOptions: {
            login: '/login',
            callback: '/confirm',
            exclude: ['/', '/register']
        }
    },
    runtimeConfig: {
        public: {
            currentEnv: process.env.NODE_ENV
        }
    },
    eslint: {
        fix: true
    },
    nitro: {
        preset: 'netlify'
    },
    build: {
        transpile:
            process.env.NODE_ENV === 'production' ? ['naive-ui'] : []
    },
    vite: {
        optimizeDeps: {
            include: process.env.NODE_ENV === 'development' ? ['naive-ui'] : []
        }
    }
})
