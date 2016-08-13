module.exports = {
  'parser': 'babel-eslint',

  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
      'experimentalObjectRestSpread': true
    },
    'ecmaVersion': 6, // all the es6 features are enabled by default with this option
    'sourceType': 'module',
  },

  'env': {
    'es6': true
  },

  'extends': [
    'airbnb',
    'plugin:lodash/recommended',
    'plugin:react/recommended',
  ],

  'globals': {
    '__DEV__': false,
    'SyntheticEvent': false,
    'SyntheticKeyboardEvent': false,
    'SyntheticMouseEvent': false,
  },

  'plugins': [
    'flow-vars',
    'lodash',
    'react',
  ],

  'rules': {
    'array-bracket-spacing': [1, 'never'],
    'arrow-body-style': 0,
    'arrow-spacing': 1,
    'brace-style': [1, '1tbs'],
    'comma-dangle': [1, 'always-multiline'],
    'comma-style': [1, 'last'],
    'computed-property-spacing': [1, 'never'],
    'curly': 1,
    'flow-vars/define-flow-type': 1,
    'flow-vars/use-flow-type': 1,
    'import/no-unresolved': 0, // Flow does this for us.
    'global-require': 0,
    'indent': [1, 2, {
      'VariableDeclarator': 3
    }],
    'jsx-a11y/img-has-alt': 0,
    'jsx-a11y/redundant-alt': 0,
    'jsx-a11y/valid-aria-role': 0,
    'jsx-a11y/img-uses-alt': 0,
    'jsx-quotes': [1, 'prefer-double'],
    'keyword-spacing': 1,
    'lodash/prefer-constant': 0,
    'lodash/prefer-lodash-method': 0,
    'lodash/prefer-lodash-typecheck': 0,
    'lodash/prefer-noop': 0,
    'lodash/prop-shorthand': 0,
    'max-len': [2, 120, 2, {
      'ignoreUrls': true,
      'ignoreComments': false
    }],
    'new-cap': 0, // Some libraries like Immutable start with a capital letter
    'newline-per-chained-call': 0,
    'no-alert': 0,
    'no-console': 1,
    'no-else-return': 1,
    'no-empty-pattern': 2,
    'no-extra-semi': 1,
    'no-lonely-if': 2,
    'no-mixed-requires': 2,
    'no-multi-spaces': [1, {
      'exceptions': {
        'VariableDeclarator': true
      }
    }],
    'no-underscore-dangle': 0,
    'no-unused-expressions': [2, {
      'allowShortCircuit': true,
      'allowTernary': true
    }],
    'no-unused-vars': [2, {
      'varsIgnorePattern': 'debug'
    }],
    'no-use-before-define': 0, // Allow function hoisting
    'no-var': 2,
    'object-curly-spacing': [1, 'never'],
    'quotes': [1, 'single', 'avoid-escape'],
    'react/display-name': 0,
    'react/jsx-boolean-value': 1,
    'react/jsx-no-bind': 0, // Allow bind in jsx.
    'react/jsx-no-undef': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-unknown-property': 2,
    'react/prefer-stateless-function': 0,
    'react/prefer-stateless-function': 0, // Turn off until we can hotreload stateless components
    'react/prop-types': 0, // Flow does this for us
    'react/react-in-jsx-scope': 0,
    'react/self-closing-comp': 1,
    'react/sort-comp': 0, // We use different ordering inside components
    'react/wrap-multilines': 1,
    'semi': ['error', 'never'],
    'space-before-blocks': [1, 'always'],
    'space-before-function-paren': [1, 'never'],
    'space-in-parens': [1, 'never'],
    'space-infix-ops': 1,
    'spaced-comment': [1, 'always'],
    'strict': [2, 'global'],
  }
}
