/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
localStorage.clear();
import * as Blockly from 'blockly';
import {blocks} from './blocks/text';
//import {forBlock} from './generators/javascript';
//import {javascriptGenerator} from 'blockly/javascript';
import {save, load} from './serialization';
import {toolbox} from './toolbox';
import './index.css';
import {htmlGenerator} from './generators/html';

Blockly.common.defineBlocks(blocks);
//Object.assign(javascriptGenerator.forBlock, forBlock);
// Set up UI elements and inject Blockly
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv, {toolbox,
  media: 'media/',
  zoom:true
});

// Gets csrf token!
function getCookie(name) {
  alert(document.getCookie('csrftoken'))
  return document.getCookie('csrftoken')
}
// This function resets the code and output divs, shows the
// generated code from the workspace, and evals the code.
// In a real application, you probably shouldn't use `eval`.
const runCode = () => {
  const code = htmlGenerator.workspaceToCode(ws);
  const messenger = new XMLHttpRequest();
  messenger.open('POST','http://127.0.0.1:8000/playground/result/build',true);
  messenger.onreadystatechange = function() {
    if (this.readystate == 4 && this.status == 200) {
      console.log(this.responseText)
    }
  };
  const name = new URL(window.location.href)
  var csrftoken = getCookie('csrftoken')
  messenger.setRequestHeader("X-CSRFToken",csrftoken)
  messenger.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  messenger.send(`code=[\n${code}\n]&name="${name.pathname}"`);
};

// Load the initial state from storage and run the code.
load(ws);
runCode();

// Every time the workspace changes state, save the changes to storage.
ws.addChangeListener((e) => {
  // UI events are things like scrolling, zooming, etc.
  // No need to save after one of these.
  //if (e.isUiEvent) return;
  save(ws);
});

// Whenever the workspace changes meaningfully, run the code again.
ws.addChangeListener((e) => {
  // Don't run the code when the workspace finishes loading; we're
  // already running it once when the application starts.
  // Don't run the code during drags; we might have invalid state.
  if (
    e.isUiEvent ||
    e.type == Blockly.Events.FINISHED_LOADING ||
    ws.isDragging()
  ) {
    return;
  }
  runCode();
});
