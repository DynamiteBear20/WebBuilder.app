import * as Blockly from 'blockly';

export const htmlGenerator = new Blockly.Generator('html');

const Order = {
    ATOMIC: 0,
    COMMA:17
};

htmlGenerator.forBlock['body'] = function(block, generator) {
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_attributes = generator.valueToCode(block, 'ATTRIBUTES', Order.ATOMIC);
  
    const statement_statements = generator.statementToCode(block, 'STATEMENTS');
  
    // TODO: Assemble javascript into the code variable.
    const code = `("body",[${value_attributes}],[${statement_statements}],'Container')`;
    return code;
};
htmlGenerator.forBlock['head'] = function(block, generator) {
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_attributes = generator.valueToCode(block, 'ATTRIBUTES', Order.ATOMIC);
  
    const statement_statements = generator.statementToCode(block, 'STATEMENTS');
  
    // TODO: Assemble javascript into the code variable.
    const code = `("head",[${value_attributes}],[${statement_statements}],'Container')`;
    return code;
};
htmlGenerator.forBlock['attributes'] = function(block,generator) {
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_name = generator.statementToCode(block, 'NAME', Order.COMMA);
  
    // TODO: Assemble javascript into the code variable.
    const code = `${value_name}`;
    return [code,Order.ATOMIC];
  };
htmlGenerator.forBlock['attribute'] = function(block,generator) {
    const text_parent = block.getFieldValue('PARENT');
    const text_child = block.getFieldValue('CHILD');
  
    // TODO: Assemble javascript into the code variable.
    const code = `("${text_parent}","${text_child}")`;
    return code;
  };
htmlGenerator.scrub_ = function(block, code, thisOnly) {
    const nextBlock =
        block.nextConnection && block.nextConnection.targetBlock();
    if (nextBlock && !thisOnly) {
      return code + ',\n' + htmlGenerator.blockToCode(nextBlock);
    }
    return code;
  };
htmlGenerator.forBlock['para'] = function(block,generator) {
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_attributes = generator.valueToCode(block, 'ATTRIBUTES', Order.ATOMIC);
  
    const statement_children = generator.statementToCode(block, 'CHILDREN');
  
    // TODO: Assemble javascript into the code variable.
    const code = '("p",['+value_attributes+'],['+statement_children+'],"Container")';
    return code;
  };
htmlGenerator.forBlock['img'] = function(block,generator) {
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_attributes = generator.valueToCode(block, 'ATTRIBUTES', Order.ATOMIC);
    // TODO: Assemble javascript into the code variable.
    const code = '("img",['+value_attributes+'],"Empty")';
    return code;
  };
htmlGenerator.forBlock['tag'] = function(block,generator) {
    const text_name = block.getFieldValue('NAME');
  
    const dropdown_ = block.getFieldValue('');
  
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_attributes = generator.valueToCode(block, 'ATTRIBUTES', Order.ATOMIC);
  
    const statement_children = generator.statementToCode(block, 'CHILDREN');
  
    // TODO: Assemble javascript into the code variable.
    const code = `('${text_name}',[${value_attributes}],[${statement_children}],'${dropdown_}')`;
    return code;
  };
htmlGenerator.forBlock['text'] = function(block) {
    const text_name = block.getFieldValue('NAME');
  
    // TODO: Assemble javascript into the code variable.
    const code = `"${text_name}"`;
    return code;
  }
htmlGenerator.forBlock['text2'] = function(block) {
    const text_name = block.getFieldValue('NAME');
  
    // TODO: Assemble javascript into the code variable.
    const code = text_name;
    return code;
  }