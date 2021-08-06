/*
 * @Author: your name
 * @Date: 2021-06-30 11:13:44
 * @LastEditTime: 2021-08-05 17:52:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icp-dao/Users/chenglei/work/tailwind-next/.eslintrc.js
 */
module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        React: 'writable'
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        indent: [2, 4],
        'react/prop-types': [0],
        'no-shadow': [0],
        'no-use-before-define': ['error', 'nofunc'],
        'no-nested-ternary': [0],
        'react/react-in-jsx-scope': 'off',
        'react/no-unescaped-entities': 'off',
        '@next/next/no-page-custom-font': 'off',
        'react/jsx-no-target-blank': [0],
        'react/display-name': [0],
        'space-before-function-paren': ['error', 'never'],
        'jsx-a11y/anchor-is-valid': [
            0
            // {
            //     components: ['Link'],
            //     specialLink: ['hrefLeft', 'hrefRight'],
            //     aspects: ['noHref', 'invalidHref', 'preferButton']
            // }
        ]
    },
    plugins: ['react', 'react-hooks'],
    extends: [
        'eslint:recommended',
        'standard',
        // 'plugin:prettier/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended'
    ]
    // extends: ["eslint:recommended", "nextjs"],
}
// "extends": ["next", "next/core-web-vitals"]