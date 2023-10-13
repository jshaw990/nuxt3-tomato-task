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
	]
})
