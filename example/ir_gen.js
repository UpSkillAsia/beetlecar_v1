Blockly.Python['ir_get_sig'] = function(block) {
    
  Blockly.Python.definitions_['import_ir_beetlecar'] = 'import ir_beetlecar';

    var code = '#while True:\ncommand = beetlecar.read_ircode(beetlecar.ird)\nprint(command)\ntime.sleep(1)'
    return code;
  };
Blockly.Python['ir_com'] = function(block) {
  Blockly.Python.definitions_['import_ir_beetlecar'] = 'import ir_beetlecar';
      
      
    var ir_but = block.getFieldValue('ir_but');
      
    code = '';;
    if(ir_but == "1"){
      code = `ir_beetlecar.command_reader() == "1"`;
    }else if(ir_but == "2"){
      code = `ir_beetlecar.command_reader() == "2"`;
    }else if(ir_but == "3"){
      code = `ir_beetlecar.command_reader() == "3"`;
    }else if(ir_but == "4"){
      code = `ir_beetlecar.command_reader() == "4"`;
    }else if(ir_but == "5"){
      code = `ir_beetlecar.command_reader() == "5"`;
    }else if(ir_but == "6"){
      code = `ir_beetlecar.command_reader() == "6"`;
    }else if(ir_but == "7"){
      code = `ir_beetlecar.command_reader() == "7"`;
    }else if(ir_but == "8"){
      code = `ir_beetlecar.command_reader() == "8"`;
    }else if(ir_but == "9"){
      code = `ir_beetlecar.command_reader() == "9"`;
    }else if(ir_but == "0"){
      code = `ir_beetlecar.command_reader() == "0"`;
    }else if(ir_but == "#"){
      code = `ir_beetlecar.command_reader() == "#"`;
    }else if(ir_but == "*"){
      code = `ir_beetlecar.command_reader() == "*"`;
    }else if(ir_but == "Up"){
      code = `ir_beetlecar.command_reader() == "Up"`;
    }else if(ir_but == "Down"){
      code = `ir_beetlecar.command_reader() == "Down"`;
    }else if(ir_but == "Left"){
      code = `ir_beetlecar.command_reader() == "Left"`;
    }else if(ir_but == "Right"){
      code = `ir_beetlecar.command_reader() == "Right"`;
    }else if(ir_but == "Ok"){
      code = `ir_beetlecar.command_reader() == "Ok"`;
    }
    return [code, Blockly.Python.ORDER_NONE];
  };