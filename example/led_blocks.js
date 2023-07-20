Blockly.Msg.LED_LIFT_Msg = "Left_ON";
Blockly.Msg.LED_RIGHT_Msg = "Right_ON";

Blockly.Msg.LEFT_OFF = "Left_OFF";
Blockly.Msg.RIGHT_OFF = "Right_OFF";



Blockly.defineBlocksWithJsonArray([
{        
            "type": "led_onoff",
            "message0": "LED: %1",
            "args0":[
            {
              "type": "field_dropdown",
              "name": "pin_trig",
              "options": [
                [Blockly.Msg.LED_LIFT_Msg , "1"],
                [Blockly.Msg.LEFT_OFF , "2"],
                [Blockly.Msg.LED_RIGHT_Msg , "3"],                
                [Blockly.Msg.RIGHT_OFF , "4"]
              ]
                
            }
          ], 
          "inputsInline": true,
          "previousStatement": null,
          "nextStatement": null,
          "colour": "#27AE60",
          "tooltip": "",
          "helpUrl": ""
          },
])