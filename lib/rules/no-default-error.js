/**
 * @fileoverview The rule restricts the usage of default (unextended) error
 * @author Andrii Myronenko
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: null,
    docs: {
      description: "The rule restricts the usage of default (unextended) error",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null,
    schema: [],
  },

  create: (context) => {
    return {
      NewExpression(node) {
        if (node.callee.name === 'Error') {
          context.report({
            node,
            message: "Default error object should not be used in this project"
          });
        }
      },
      CallExpression(node) {
        if (node.callee.name === 'Error') {
          context.report({
            node,
            message: "Default error object should not be used in this project"
          });
        }
      }
    }
  },
};
