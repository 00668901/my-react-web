/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0EA5E9', // sky-500
                secondary: '#38BDF8', // sky-400
                accent: '#7DD3FC', // sky-300
                neutral: '#F8FAFC', // light neutral
            },
        },
    },
    plugins: [require("daisyui")],
}