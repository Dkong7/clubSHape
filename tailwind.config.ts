import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#333333',
        customOrange: '#FFA500',
        customLightOrange: '#FFECB3',
        customCoolOrange: '#FFB347',
        customDarkGray: '#1C1C1C',
        customPrimary: '#FFA500', // Añadido para unificación con el CSS
        customPrimaryDark: '#FFB347', // Añadido para unificación con el CSS
        customFocus: '#FFA500', // Añadido para unificación con el CSS
        customFocusDark: '#FFB347', // Añadido para unificación con el CSS
        customBorder: '#333333', // Añadido para unificación con el CSS
        customBorderDark: '#1C1C1C', // Añadido para unificación con el CSS
        customPlaceholder: '#CCCCCC', // Añadido para unificación con el CSS
        customPlaceholderDark: '#666666', // Añadido para unificación con el CSS
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
