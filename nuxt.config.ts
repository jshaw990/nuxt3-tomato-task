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
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
        '@pinia/nuxt',
        'nuxt-icon'
    ],
    image: {
        provider: 'netlify'
    },
    // plugins: ['@/plugins/piniaStorage'],
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
