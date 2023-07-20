Blockly.Python['blue_con'] = function(block) {
    
    Blockly.Python.definitions_['import_blue_con'] = 'import blue_con';
    
    var code = '\n'
    return code;
  };

  Blockly.Python['blue_command'] = function(block) {
    Blockly.Python.definitions_['import_blue_con'] = 'import blue_con';

    
    var blue_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    
    
    var code = `blue_con.ble_msg == "${blue_text}"`;
    return code;
    };