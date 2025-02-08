/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/*
This toolbox contains nearly every single built-in block that Blockly offers,
in addition to the custom block 'add_text' this sample app adds.
You probably don't need every single block, and should consider either rewriting
your toolbox from scratch, or carefully choosing whether you need each block
listed here.
*/

export const toolbox = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind:'category',
      name:'Head & Body',
      colour: "120",
      contents:[
        {
          kind:'block',
          type:'head'
        },
        {
          kind:'block',
          type:'body'
        }
      ]
    },
    {
      kind:'category',
      name:'Attributes',
      colour:"180",
      contents:[
        {
          kind:'block',
          type:'attributes'
        },
        {
          kind:'block',
          type:'attribute'
        },
        {
          kind:'block',
          type:'text'
        },
        {
          kind:'block',
          kind:'text2'
        }
      ]
    },
    {
      kind:'category',
      name:'Elements',
      colour:"90",
      contents:[
        {
          kind:'block',
          type:'para'
        },
        {
          kind:'block',
          type:'img'
        },
        {
          kind:'block',
          type:'tag'
        }
      ]
    }
  ]
};
