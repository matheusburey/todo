/** @type {import('tailwindcss').Config} */

module.exports = {
	// NOTE: Update this to include the paths to all files that contain Nativewind classes.
	content: ["./src/**/*.tsx"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			fontFamily: {
				title: ["Inter_700Bold"],
				body: ["Inter_400Regular"],
				button: ["Inter_600SemiBold"],
			},
			colors: {
				purple: {
					500: "#8615DF",
					600: "#570E91",
					800: "#38085C",
					900: "#190429",
				},
				gray: {
					50: "#F6F6F7",
					100: "#EEEEEE",
					200: "#D4D4D4",
					300: "#9E9EA7",
					400: "#666665",
					900: "#111111",
				},
				red: {
					600: "#DF1545",
					700: "#A91031",
				},
				green: {
					600: "#168821",
					700: "#0B5A11",
				},
			},
		},
	},
	plugins: [],
};
