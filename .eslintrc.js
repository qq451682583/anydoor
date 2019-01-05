module.exports = {
    "extends": ["eslint:recommended"],
    "parser": "babel-eslint",
    "rules": {
        "no-console": ["error", {
            "allow": ["warn","error","info"]
        }]
    },
    "env": {
        "node": true,
        "mocha": true,
        "es6": true
    },
    "globals": {
        "window": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "script"
    },
};

