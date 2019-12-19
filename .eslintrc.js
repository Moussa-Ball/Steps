module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", "eslint:recommended"],
    rules: {
        "no-console": 0
    },
    parserOptions: {
        parser: "babel-eslint"
    },
    overrides: [
        {
            files: ["**/__tests__/*.{j,t}s?(x)"],
            env: {
                mocha: true
            }
        }
    ],
    globals: {
        $: true,
        jQuery: true
    }
};
