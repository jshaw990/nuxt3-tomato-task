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
        'nuxt-icon'
    ],
    eslint: {
        fix: true
    },
    nitro: {
        preset: 'netlify'
    },
    build: {
        transpile:
            process.env.NODE_ENV === 'production'
                ? [
                    'naive-ui',
                    'vueuc',
                    '@css-render/vue3-ssr',
                    '@juggle/resize-observer'
                ]
                : ['@juggle/resize-observer']
    },
    vite: {
        optimizeDeps: {
            include:
                process.env.NODE_ENV === 'development'
                    ? ['naive-ui']
                    : []
        }
    }
})
