import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import solid from 'eslint-plugin-solid'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const config = [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'warn'
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  solid.configs['flat/typescript'],
  eslintConfigPrettier
]

export default config
