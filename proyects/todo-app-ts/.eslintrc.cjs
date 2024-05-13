module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project":"C:/Users/David/Desktop/React/proyects/todo-app-ts/package.json"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'react/react-in-jsx-scope': 'off'
    }
}
