import { jsPsych } from "jspsych-react";
//import * as $ from 'jquery'

export function msmr() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('msmr', 'stimulus', 'image');

  plugin.info = {
    name: 'msmr',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.IMAGE,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The image to be displayed'
      },
      stimulus_height: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Image height',
        default: null,
        description: 'Set the image height in pixels'
      },
      stimulus_width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Image width',
        default: null,
        description: 'Set the image width in pixels'
      },
      maintain_aspect_ratio: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Maintain aspect ratio',
        default: true,
        description: 'Maintain the aspect ratio after setting width or height'
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Choices',
        default: jsPsych.ALL_KEYS,
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Any content here will be displayed below the stimulus.'
      },
      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus duration',
        default: null,
        description: 'How long to hide the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show trial before it ends.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, trial will end when subject makes a response.'
      },
    }
  }

  plugin.trial = function(display_element, trial) {

    // default parameters
    trial.response_ends_trial = (typeof trial.response_ends_trial === 'undefined') ? true : trial.response_ends_trial;
    // timing parameters
    var default_timing_array = [];
    for (var j = 0; j < trial.stimulus.length; j++) {
      default_timing_array.push(1000);
    }
    trial.timing_gap = trial.timing_gap || 0 //gap between stimuli
    trial.timing_stim = trial.timing_stim || default_timing_array;
    trial.timing_response = trial.timing_response || -1; // if -1, then wait for response forever
    trial.timing_post_trial = (typeof trial.timing_post_trial === 'undefined') ? 1000 : trial.timing_post_trial;
    // optional parameters
    trial.is_html = (typeof trial.is_html === 'undefined') ? false : trial.is_html;
    trial.prompt = (typeof trial.prompt === 'undefined') ? "" : trial.prompt;
    // trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);

    // this array holds handlers from setTimeout calls
    // that need to be cleared if the trial ends early
    var setTimeoutHandlers = [];

    // array to store if we have gotten a valid response for
    // all the different response types
    var validResponses = [];
    //let i = null; 
    for (var k = 0; k < trial.choices.length; k++) {
      validResponses[k] = false;
    }

    // array for response times for each of the different response types
    var responseTimes = [];
    for (var m = 0; m < trial.choices.length; m++) {
      responseTimes[m] = -1;
    }

    // array for response keys for each of the different response types
    var responseKeys = [];
    for (var r = 0; r < trial.choices.length; r++) {
      responseKeys[r] = -1;
    }

    // display stimulus
    var html = '<img src="'+trial.stimulus+'" id="jspsych-image-keyboard-response-stimulus" style="';
    if(trial.stimulus_height !== null){
      html += 'height:'+trial.stimulus_height+'px; '
      if(trial.stimulus_width == null && trial.maintain_aspect_ratio){
        html += 'width: auto; ';
      }
    }
    if(trial.stimulus_width !== null){
      html += 'width:'+trial.stimulus_width+'px; '
      if(trial.stimulus_height == null && trial.maintain_aspect_ratio){
        html += 'height: auto; ';
      }
    }
    html +='"></img>';

    // render
    display_element.innerHTML = html;

    // flattened version of the choices array
    var allchoices = [];
    for (var i = 0; i < trial.choices.length; i++) {
      allchoices = allchoices.concat(trial.choices[i]);
    }
    
    /********************************** START FUNCTION DEFINITIONS **************************************/
    /**********************************--------------------------****************************************/
    // function to check if all of the valid responses are received
    function checkAllResponsesAreValid() {
        for (var i = 0; i < validResponses.length; i++) {
          if (validResponses[i] === false) {
            return false;
          }
        }
        return true;
    };

    // function to end trial when it is time
    var end_trial = function() {

        // kill any remaining setTimeout handlers
        for (var i = 0; i < setTimeoutHandlers.length; i++) {
          clearTimeout(setTimeoutHandlers[i]);
        }
  
        // kill keyboard listeners
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
  
        if (trial.response_ends_trial) {
          //If all responses are valid, add up the rt's and the gaps between them to determine block duration
          if (checkAllResponsesAreValid()) {
            var overall_time = 0;
            for (var t = 0; t < validResponses.length; t++) {
              overall_time += (responseTimes[i] + trial.timing_gap)
            }
            //overall_time - trial.timing_gap
          } else {
            var block_duration = trial.timing_response
          }
        } else {
          var block_duration = trial.timing_response
        }
  
        // gather the data to store for the trial
        var trial_data = {
          "rt": JSON.stringify(responseTimes),
          "stimuli": JSON.stringify(trial.stimuli),
          "key_presses": JSON.stringify(responseKeys),
          "possible_responses": trial.choices,
          "stim_durations": JSON.stringify(trial.timing_stim),
          "block_duration": block_duration,
          "timing_post_trial": trial.timing_post_trial
        };
  
        // clear the display
        //display_element.html('');
  
        // move on to the next trial
        jsPsych.finishTrial(trial_data);
      };
  
      // function to handle responses by the subject
      var after_response = function(info) {
  
        var whichResponse;
        for (var i = 0; i < trial.choices.length; i++) {
  
          // allow overlap between response groups
          if (validResponses[i]) {
            continue;
          }

            for (var j = 0; j < trial.choices[i].length; j++) {
            // *NEED TO PUT BACK *
            let keycode = jsPsych.pluginAPI.convertKeyCharacterToKeyCode(trial.choices[i][j]);
            //var keycode = (typeof trial.choices[i][j] === 'string') ? jsPsych.pluginAPI.convertKeyCharacterToKeyCode(trial.choices[i][j]) : trial.choices[i][j];
            console.log(info.key)
                if (info.key === keycode) {
                    console.log(j);
                    whichResponse = i;
                    break;
                }
            }
        
          if (typeof whichResponse !== 'undefined') {
            break;
          };
        }
  
        if (validResponses[whichResponse] !== true) {
          validResponses[whichResponse] = true;
          responseTimes[whichResponse] = info.rt;
          responseKeys[whichResponse] = info.key;
        }
  
        if (trial.response_ends_trial) {
  
          if (checkAllResponsesAreValid()) {
            end_trial();
          }
  
        }
  
      };
    /**********************************--------------------------****************************************/
    /********************************** END FUNCTION DEFINITIONS ****************************************/
    

    // store response
    // var response = {
    //   rt: null,
    //   key: null
    // };
    
    // start the response listener
    if (trial.choices !== jsPsych.NO_KEYS) {
      var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
        rt_method: 'performance',
        persist: true, //false,
        allow_held_key: false
      });
    }

    // hide stimulus if stimulus_duration is set
    if (trial.stimulus_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        display_element.querySelector('#jspsych-image-keyboard-response-stimulus').style.visibility = 'hidden';
      }, trial.stimulus_duration);
    }

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }

  };

  return plugin;
}
