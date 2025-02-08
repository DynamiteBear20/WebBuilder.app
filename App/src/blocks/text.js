/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';
const body = {
  "type": "body",
  "tooltip": "",
  "helpUrl": "",
  "message0": "body %1 Attributes(Array): %2 Children: %3",
  "args0": [
    {
      "type": "input_dummy",
      "name": "NAME"
    },
    {
      "type": "input_value",
      "name": "ATTRIBUTES",
      "check": "Array"
    },
    {
      "type": "input_statement",
      "name": "STATEMENTS"
    }
  ],
  "previousStatement": null,
  "colour": 120
};
const head = {
  "type": "head",
  "tooltip": "",
  "helpUrl": "",
  "message0": "head %1 Attributes(Array): %2 Children: %3",
  "args0": [
    {
      "type": "input_dummy",
      "name": "NAME"
    },
    {
      "type": "input_value",
      "name": "ATTRIBUTES",
      "check": "Array"
    },
    {
      "type": "input_statement",
      "name": "STATEMENTS"
    }
  ],
  "nextStatement": null,
  "colour": 120
}
const attributes = {
  "type": "attributes",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Attributes %1 %2",
  "args0": [
    {
      "type": "input_dummy",
      "name": ""
    },
    {
      "type": "input_statement",
      "name": "NAME",
      "check":"attribute"
    }
  ],
  "output": null,
  "colour": 180
}
const attribute = {
  "type": "attribute",
  "tooltip": "A block representing a pair of attributes. (Like 'color:red')",
  "helpUrl": "",
  "message0": "%1 : %2",
  "args0": [
    {
      "type": "field_input",
      "name": "PARENT",
      "text": ""
    },
    {
      "type": "field_input",
      "name": "CHILD",
      "text": ""
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180
}
const p = {
  "type": "para",
  "tooltip": "A block representing <p> tag.",
  "helpUrl": "",
  "message0": "p %1 Attributes: %2 Children: %3",
  "args0": [
    {
      "type": "input_dummy",
      "name": ""
    },
    {
      "type": "input_value",
      "name": "ATTRIBUTES"
    },
    {
      "type": "input_statement",
      "name": "CHILDREN"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90
};
const img = {
  "type": "img",
  "tooltip": "A block representing <p> tag.",
  "helpUrl": "",
  "message0": "img %1 Attributes: %2",
  "args0": [
    {
      "type": "input_dummy",
      "name": ""
    },
    {
      "type": "input_value",
      "name": "ATTRIBUTES",
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90
};
const tag = {
  "type": "tag",
  "tooltip": "A wildcard block for any tag! Change the tag name to the tag you want without brackets (Like 'script'). Set weather it's empty or container. Add attributes or children alike!",
  "helpUrl": "",
  "message0": "Tag: %1 %2 Type: %3 %4 Attributes: %5 Children: %6",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "name"
    },
    {
      "type": "input_dummy",
      "name": ""
    },
    {
      "type": "field_dropdown",
      "name": "",
      "options": [
        [
          "Empty",
          "Empty"
        ],
        [
          "Container",
          "Container"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "name": "NAME",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "ATTRIBUTES",
      "align": "RIGHT"
    },
    {
      "type": "input_statement",
      "name": "CHILDREN"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90
};
const text = {
  "type": "text",
  "tooltip": "",
  "helpUrl": "",
  "message0": "\" %1 \" %2",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": ""
    },
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180
};
const text2 = {
  "type": "text2",
  "tooltip": "",
  "helpUrl": "",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": ""
    },
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180
}
                              

// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  body,head,attributes,attribute,p,img,tag,text,text2
]);
