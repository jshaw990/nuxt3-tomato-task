// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'@nuxtjs/device',
		'@nuxtjs/eslint-module',
		'@nuxtjs/tailwindcss',
		'nuxt-icon'
	]
})
