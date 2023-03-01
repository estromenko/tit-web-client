module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte'],
  },
  env: {
    es2022: true,
    browser: true,
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    'eol-last': ['warn', 'always'],
    'block-spacing': 'warn',
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    'import/extensions': 'off',
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'object-curly-spacing': ['warn', 'never'],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    semi: ['error', 'never'],
    'semi-spacing': ['warn'],
    'comma-dangle': [2, 'only-multiline'],
    'comma-style': ['warn'],
    'no-unused-vars': 'off',
    'max-len': [
      'error',
      {
        code: 100,
        ignorePattern: "className='.*'",
      },
    ],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'no-multi-spaces': 'warn',
    'simple-import-sort/imports': 'warn',
  },
  settings: {
    'svelte3/typescript': require('typescript'),
    // ignore style tags in Svelte because of Tailwind CSS
    // See https://github.com/sveltejs/eslint-plugin-svelte3/issues/70
    'svelte3/ignore-styles': () => true,
  },
  plugins: ['svelte3', '@typescript-eslint', 'simple-import-sort'],
  ignorePatterns: ['node_modules', 'svelte.config.js'],
}
