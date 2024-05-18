module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
  
    ],
    daisyui: {
      themes: [
        {
          dark: {
            ...require("daisyui/src/theming/themes")["nord"],
            "color":"#1c1c84"
          },
        },
      ],
    },
  
    theme: {
      extend: {},
    },
    plugins: [
      require('daisyui'),
    ],
  }
