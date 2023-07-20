Blockly.Msg.but1 = "1";
Blockly.Msg.but2 = "2";
Blockly.Msg.but3 = "3";
Blockly.Msg.but4 = "4";
Blockly.Msg.but5 = "5";
Blockly.Msg.but6 = "6";
Blockly.Msg.but7 = "7";
Blockly.Msg.but8 = "8";
Blockly.Msg.but9 = "9";
Blockly.Msg.but0 = "0";
Blockly.Msg.buttag = "#";
Blockly.Msg.butstar = "*";
Blockly.Msg.butup = "Up";
Blockly.Msg.butdown = "Down";
Blockly.Msg.butleft = "Left";
Blockly.Msg.butright = "Right";
Blockly.Msg.butokay = "Ok";



Blockly.defineBlocksWithJsonArray([
    { 
    "type": "ir_get_sig",
    "message0": "IR signal",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": " #FE0000",
    "tooltip": "",
    "helpUrl": ""
  },
  {
  "type":"ir_com",
  "message0": "Put Button %1",
  "args0":[
    {
      "type" : "field_dropdown",
      "name" : "ir_but",
      "options" : [
        [
          Blockly.Msg.but1, "1"
        ],
        [
          Blockly.Msg.but2 , "2"
        ],
        [
          Blockly.Msg.but3 , "3"
        ],
        [
          Blockly.Msg.but4 , "4"
        ],
        [
          Blockly.Msg.but5 , "5"
        ],
        [
          Blockly.Msg.but6 , "6"
        ],
        [
          Blockly.Msg.but7 , "7"
        ],
        [
          Blockly.Msg.but8 , "8"
        ],
        [
          Blockly.Msg.but9 , "9"
        ],
        [
          Blockly.Msg.but0 , "0"
        ],
        [
          Blockly.Msg.buttag , "#"
        ],
        [
          Blockly.Msg.butstar , "*"
        ],
        [
          Blockly.Msg.butup , "Up"
        ],
        [
          Blockly.Msg.butdown , "Down"
        ],
        [
          Blockly.Msg.butleft , "Left"
        ],
        [
          Blockly.Msg.butright , "Right"
        ],
        [
          Blockly.Msg.butokay , "Ok"
        ],
        

      ]
    }
  ],
"output": ["Number", "Boolean"],
"inputsInline": true,
//"peviousStatement": null,
//"nextStatement": null,
"colour": "#FE0000",
"tooltip": "",
"helpUrl": ""

},
  
])
