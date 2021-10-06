# eslint-plugin-no-default-error

The plugin restricts the usage of default (unextended) errors

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-default-error`:

```sh
npm install eslint-plugin-no-default-error --save-dev
```

## Usage

Add `no-default-error` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-default-error"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-default-error/no-default-error": 2
    }
}
```

## Supported Rules

no-default-error
