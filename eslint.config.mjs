import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
    extends: [
        // Подключаем стандартные правила ESLint
        'eslint:recommended',
        // Для поддержки Vue
        'plugin:vue/vue3-recommended',
        // Включаем Prettier для совместимости с ним
        'plugin:prettier/recommended',
        // Подключаем стандарт для TypeScript
        'plugin:@typescript-eslint/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    parser: '@typescript-eslint/parser',
    rules: {
        // Применяем правило Prettier для всех файлов
        'prettier/prettier': 'error', // Выводим ошибку, если форматирование не соответствует Prettier
        '@typescript-eslint/explicit-module-boundary-types': 'off', // Пример кастомизации правил для TS
        // Добавьте другие правила по вашему усмотрению
    },
});
