/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}" // اگه از Next.js app router استفاده میکنی
    ],
    theme: {
        extend: {
            fontFamily: {
                iransans: ['IRANSans', 'sans-serif'],
                // برای اینکه تمام کلاس‌های font-sans از IRANSans استفاده کنن، می‌تونیم override کنیم:
                sans: ['IRANSans', 'sans-serif'],
            },
        },
    },
    plugins: [],
};