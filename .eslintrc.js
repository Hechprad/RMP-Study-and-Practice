const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
)

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react', 'jsx-a11y', 'react-hooks'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'import/imports-first': 0,
    'import/no-cycle': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    indent: 0,
    'jsx-a11y/aria-props': 0,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    'jsx-a11y/label-has-associated-control': [
      0,
      {
        controlComponents: ['Input'],
      },
    ],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/role-has-required-aria-props': 0,
    'jsx-a11y/role-supports-aria-props': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 0,
    'no-underscore-dangle': [
      2,
      {
        allow: [
          '__REDUX_DEVTOOLS_EXTENSION__',
          '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
        ],
      },
    ],
    'no-unused-vars': 2,
    'no-use-before-define': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'prefer-template': 2,
    'react/destructuring-assignment': 0,
    'react/boolean-prop-naming': [
      'error',
      {
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        message:
          'Your prop ({{ propName }}) is Boolean, and need to start with "is" or "has"',
        propTypeNames: ['fullContent', 'fullScreen'],
      },
    ],
    'react/jsx-closing-tag-location': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-uses-vars': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 2,
    'react/require-default-props': 1,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/prefer-stateless-function': 0,
    'react/sort-comp': 0,
    'require-yield': 0,
  },
}
