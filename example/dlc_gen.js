  //Motor Strat //////////////////////////

  Blockly.Python['stopMotor'] = function(block) {
    Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
  
    var code = 'beetlecar.stop()\n';
   
    return code;
  };

Blockly.Python['moveAward'] = function(block) {
  Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
  var second_move = block.getFieldValue1('move_sec');
  var speed = block.getFieldValue('speed');
  var code = `beetlecar.forward_forsec(${second_move},${speed})\n`;
  
  return code;
};

Blockly.Python['moveBack'] = function(block) {
  Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
  var second_move = block.getFieldValue1('move_sec');

  var speed = block.getFieldValue('speed');
  var code = `beetlecar.backward_forsec(${second_move},${speed})\n`;

  
  return code;
};

Blockly.Python['moveLeft'] = function(block) {
  Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
  var second_move = block.getFieldValue1('move_sec');

  var speed = block.getFieldValue('speed');
  var code = `beetlecar.left_forsec(${second_move},${speed})\n`;

  
  return code;
};

Blockly.Python['moveRight'] = function(block) {
  Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
  var second_move = block.getFieldValue1('move_sec');

  var speed = block.getFieldValue('speed');
  var code = `beetlecar.right_forsec(${second_move},${speed})\n`;

  
  return code;
};

Blockly.Python['Forward'] = function(block) {
  Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';


var speed = block.getFieldValue('speed');
var code = `beetlecar.forward(${speed})\n`;

return code;
};

Blockly.Python['Backward'] = function(block) {
  Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';

var speed = block.getFieldValue('speed');
var code = `beetlecar.backward(${speed})\n`;

return code;
};

Blockly.Python['Left'] = function(block) {
  Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
var speed = block.getFieldValue('speed');
var code = `beetlecar.left(${speed})\n`;

return code;
};

Blockly.Python['Right'] = function(block) {
  Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';
var speed = block.getFieldValue('speed');
var code = `beetlecar.right(${speed})\n`;

return code;
};
//Motor End ///////////////////////////////////

// servo Start ////////////////////////////////
Blockly.Python['servo'] = function(block) {
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin,PWM';
  

  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var code = `PWM(Pin(${value_pin}), freq=50).duty(int(25.57 + (((${value_angle}) / 180.0) * 102.3)))\n`;
  return code;
};
// servo End //////////////////////////////////

//OLED Start //////////////////////////////////
Blockly.Python['oled_init'] = function(block) {
Blockly.Python.definitions_['import_oled'] = 'import OLED';



var dropdown_size = block.getFieldValue('size');

var code = `oled = OLED.SSD1306_I2C(128, ${+dropdown_size == 0 ? 64 : 32})\n`;
return code;
};

Blockly.Python['oled_draw_text'] = function(block) {
Blockly.Python.definitions_['import_oled'] = 'import OLED';

var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);

var code = `oled.text(${value_text}, ${value_x}, ${value_y}, 1); oled.show()\n`;
return code;
};

Blockly.Python['oled_draw_line'] = function(block) {
Blockly.Python.definitions_['import_oled'] = 'import OLED';

var value_x1 = Blockly.Python.valueToCode(block, 'x1', Blockly.Python.ORDER_ATOMIC);
var value_y1 = Blockly.Python.valueToCode(block, 'y1', Blockly.Python.ORDER_ATOMIC);
var value_x2 = Blockly.Python.valueToCode(block, 'x2', Blockly.Python.ORDER_ATOMIC);
var value_y2 = Blockly.Python.valueToCode(block, 'y2', Blockly.Python.ORDER_ATOMIC);

var code = `oled.line(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2}, 1); oled.show()\n`;
return code;
};

Blockly.Python['oled_draw_rect'] = function(block) {
Blockly.Python.definitions_['import_oled'] = 'import OLED';

var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
var value_width = Blockly.Python.valueToCode(block, 'width', Blockly.Python.ORDER_ATOMIC);
var value_height = Blockly.Python.valueToCode(block, 'height', Blockly.Python.ORDER_ATOMIC);
var dropdown_fill = block.getFieldValue('fill');

var code = `oled.${(+dropdown_fill) ? 'fill_rect' : 'rect'}(${value_x}, ${value_y}, ${value_width}, ${value_height}, 1); oled.show()\n`;
return code;
};

Blockly.Python['oled_fill'] = function(block) {
var code = 'oled.fill(1); oled.show()\n';
return code;
};

Blockly.Python['oled_clear'] = function(block) {
var code = 'oled.fill(0); oled.show()\n';
return code;
};
//OLED END ////////////////////////////////////

// buzzer Start ///////////////////////////////

Blockly.Python['buzzer1'] = function(block) {
  Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';


var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
var value_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);

var code = `beetlecar.buzzerWrite(${value_pin}, freq=${value_freq}, stop=${value_time})\n`;
return code;
};
Blockly.Python['buzzer2'] = function(block) {
  Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';


var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
var value_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
var code = `beetlecar.buzzerWrite(${value_pin}, freq=${value_freq})\n`;
return code;
};
Blockly.Python['buzzer3'] = function(block) {
  Blockly.Python.definitions_['import_beetlecar'] = 'import beetlecar';

var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
var code = `beetlecar.buzzerWrite(${value_pin}, duty=0)\n`;
return code;
};
// buzzer End /////////////////////////////////