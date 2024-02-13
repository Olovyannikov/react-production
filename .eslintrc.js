module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'ts-react-important-stuff',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:jsx-a11y/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    ignorePatterns: './.eslintignore',
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        'react-hooks',
        'jsx-a11y',
        'import',
        '@typescript-eslint',
        'hooks',
        'jest',
        'simple-import-sort',
    ],
    rules: {
        'no-empty': 'warn',
        'no-else-return': 'warn',
        'no-nested-ternary': ['warn'],
        'no-use-before-define': 'error',
        'no-useless-computed-key': 'warn',
        'no-unsafe-optional-chaining': 'warn',
        'no-param-reassign': ['error', { props: false }],
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'no-implicit-coercion': ['error', { disallowTemplateShorthand: false }],
        'arrow-body-style': ['warn', 'as-needed'],
        'default-case': 'error',
        'default-param-last': 'error',
        'object-curly-spacing': ['warn', 'always'],
        'prefer-const': 'error',
        'jest/no-focused-tests': 'error',
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/no-autofocus': 'off',
        'hooks/sort': [
            'error',
            {
                groups: ['useReducer', 'useContext', 'useRef', 'useState', 'useDispatch', 'useCallback', 'useEffect'],
            },
        ],

        'react/jsx-curly-brace-presence': [
            'error',
            {
                props: 'never',
                children: 'never',
            },
        ],
        'react/prop-types': 'off',
        'react/jsx-no-constructed-context-values': 'error',
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'arrow-function',
            },
        ],
        'react/jsx-fragments': ['error', 'syntax'],
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/ban-ts-comment': [
            'error',
            {
                'ts-expect-error': 'allow-with-description',
                'ts-ignore': 'allow-with-description',
                'ts-nocheck': 'allow-with-description',
                'ts-check': false,
                minimumDescriptionLength: 5,
            },
        ],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/array-type': ['warn', { default: 'generic', readonly: 'generic' }],
        'import/no-default-export': 'error',
        'simple-import-sort/imports': [
            'warn',
            {
                groups: [
                    ['^react', '^@?\\w'],
                    /* import 'foo*' or import '@foo*' */
                    [`^\\u0000@?\\w`],
                    /* import '@/foo*' */
                    ['^\\u0000@/\\w'],
                    /* import './foo*' or import '../foo*' */
                    ['^\\u0000\\.'],
                    /* import ... from 'foo*' or import ... from '@foo*' */
                    [`^@?\\w`],
                    /* import ... from '@/foo*' */
                    ['^@/\\w'],
                    /* import ... from './foo*' or import ... from '../foo*' */
                    ['^\\.'],
                    /* import types */
                    ['@/shared/types'],
                    /* style imports */
                    ['^.+\\.?(css)$'],
                ],
            },
        ],
        'import/first': 'error',
    },
    overrides: [
        {
            files: ['**/*.spec.*'],
            rules: {
                '@typescript-eslint/no-non-null-assertion': 'off',
                'react/jsx-no-constructed-context-values': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/array-type': 'off',
                '@typescript-eslint/ban-ts-comment': 'off',
                'react/jsx-key': 'off',
                'react-hooks/exhaustive-deps': 'off',
            },
        },
        {
            files: [
                'src/pages/**/*',
                'src/layouts/**/*',
                'src/app/**/*',
                'config/**/*',
                'src/components/ui/Snackbar/**/*',
            ],
            rules: {
                'import/no-default-export': 'off',
            },
        },
        {
            files: ['src/pages/**/*'],
            rules: {
                'react/function-component-definition': [
                    'error',
                    {
                        namedComponents: 'function-declaration',
                    },
                ],
            },
        },
    ],
    settings: {
        react: {
            version: '18.2.0',
        },
    },
};