import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
          // 기본 JS 미사용 변수 룰 끄기
        'no-unused-vars': 'off',
        //  수정이 없는 let 변수 룰 끄기
        'prefer-const': 'off',

          // TypeScript 미사용 변수 룰 완전히 끄기
        '@typescript-eslint/no-unused-vars': 'off',
    },
  },
])
