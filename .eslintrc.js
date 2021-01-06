module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "eslint-plugin-import",
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": [
            "error",
            {
                "default": "array"
            }
        ],
        "@typescript-eslint/consistent-type-assertions": "off",
        "@typescript-eslint/indent": "error",
        "@typescript-eslint/naming-convention": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/quotes": [
            "error",
            "single"
        ],
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/triple-slash-reference": [
            "error",
            {
                "path": "always",
                "types": "prefer-import",
                "lib": "always"
            }
        ],
        "@typescript-eslint/type-annotation-spacing": "off",
        "arrow-body-style": "error",
        "constructor-super": "error",
        "eol-last": "error",
        "eqeqeq": [
            "error",
            "always"
        ],
        "import/no-deprecated": "error",
        "import/no-unassigned-import": "error",
        "max-len": [
            "error",
            {
                "code": 350
            }
        ],
        "max-lines": [
            "error",
            1000
        ],
        "new-parens": "error",
        "no-caller": "error",
        "no-cond-assign": "off",
        "no-console": "error",
        "no-debugger": "error",
        "no-fallthrough": "error",
        "no-invalid-this": "off",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 3
            }
        ],
        "no-new-wrappers": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-unsafe-finally": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "one-var": [
            "error",
            "never"
        ],
        "prefer-const": "error",
        "radix": "error",
        "space-before-function-paren": [
            "error",
            "never"
        ],
        "use-isnan": "error",
        "valid-typeof": "error"
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
};
