# StdError

A small extension of the error adding code and context.

`npm i @robotmayo/stderror`

## Usage

Use it similar to how you would use a normal error.

```javascript
import StdError from "@robotmayo/stderror";
// Or with commonjs
const StdError = require("@robotmayo/stderror").default;
function thisWillThrow() {
  throw new StdError("Something went wrong.", "AUTH_ERROR");
}
```

## Api

`new StdError(message, code, [context])`

| Parameter | Required | Type   | Description                                                               |
| --------- | -------- | ------ | ------------------------------------------------------------------------- |
| message   | True     | string | The error message                                                         |
| code      | True     | string | The error code. Recommended to be all caps, underscores instead of spaces |
| context   | False    | Object | Object containing potentially useful meta information with the error      |
