# The rule restricts the usage of default (unextended) error (no-default-error)

## Rule Details

This rule aims to rescrict the usage of default errors in the project (in favor of custom ones)

Examples of **incorrect** code for this rule:

```js

throw new Error();
throw Error();

```

Examples of **correct** code for this rule:

```js

class CustomError extends Error {
  constructor(message) {
    super(message);
  }
}

throw new CustomError();

```
