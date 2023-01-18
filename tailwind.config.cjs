const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
  ],

  theme: {
    extend: {
      height: {
        '90v': '90vh',
      },
    },
  },

  plugins: [require('flowbite/plugin')],
  darkMode: 'class',
}

module.exports = config
