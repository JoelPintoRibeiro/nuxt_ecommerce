
module.exports = {
  theme: {
    extend: {
      gridTemplateColumns: {
        // // Simple 16 column grid
        // 16: 'repeat(16, minmax(0, 1fr))',

        // // Complex site-specific column configuration
        // footer: '200px minmax(900px, 1fr) 100px'
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  }

}
