/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				primary_color:"#222831",
				secondary_color:"#393E46",
				text_color:"#EEEEEE",
				accent_color:"#00ADB5"
			}
		},
	},
	plugins: [],
}
