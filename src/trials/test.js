// Simple event to put on timeline with multistim 
import { eventCodes } from "../config/main";
import { fractal_images } from "../lib/utils";
import { jitter50, removeCursor } from "../lib/utils";
import { pdSpotEncode, photodiodeGhostBox } from "../lib/markup/photodiode";
import { fixationHTML } from "../lib/markup/fixation";
import { jsPsych } from "jspsych-react";
//import { msm } from "../lib/jspsych-poldrack-multi-stim-multi-response";

const test = () => {
    
//  const startCode = eventCodes.fixationStart;
  return {
    
        type: 'poldrack-multi-stim-multi-response',
        stimuli: '',
        is_html: true,
        data: {
            trial_id: 'stim',
            exp_stage: 'practice'
        },
        
        choices: 68,
        timing_stim: 2000, //getISI, replace
        timing_response: 2000,
        response_ends_trial: true,
        on_finish: function() {
        // curr_data.trial_num = 1
        // jsPsych.data.addDataToLastTrial(curr_data)
        //current_trial += 1
        },
        timing_post_trial: 500
    //}
  };
};

export { test };
//export default test;
