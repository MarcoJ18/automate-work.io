/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				background_color:"#311D3F",
				content_color:"#522546",
				content_color_ligth:"#88304E",
				letter_color:"#E23E57"
			}
		},
	},
	plugins: [],
}
