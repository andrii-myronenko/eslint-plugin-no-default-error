/**
 * @fileoverview The rule restricts the usage of default (unextended) error
 * @author Andrii Myronenko
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-default-error"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-default-error", rule, {
  valid: [
    {
      code: "var x = 23;"
    }
  ],

  invalid: [
    {
      code: "throw new Error();",
      errors: [{ message: "Default error object should not be used in this project", type: "NewExpression" }],
    },
    {
      code: "throw Error()",
      errors: [{ message: "Default error object should not be used in this project", type: "CallExpression" }],
    },
  ],
});
