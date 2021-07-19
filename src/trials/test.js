// Simple event to put on timeline with multistim 
import { eventCodes } from "../config/main";
import { images } from "../lib/utils";
import { jitter50, removeCursor } from "../lib/utils";
import { pdSpotEncode, photodiodeGhostBox } from "../lib/markup/photodiode";
import { fixationHTML } from "../lib/markup/fixation";
import { jsPsych } from "jspsych-react";


//let stimuli = ["../assets/images/blue_payout_correct_10.png", "../assets/images/blue_payout_correct_100.png"]
//let stimuli = ["/blue_payout_correct_10.png", "/blue_payout_correct_100.png"]; //["blue_payout_correct_10.png", "blue_payout_correct_100.png"];

const test = () => {
let stimuli = [images[0], images[1]]; 
// let stimuli = ["f2.jpg", "f3.jpg"];
// jsPsych.pluginAPI.preloadImages(stimuli);
const startCode = eventCodes.fixationStart;

  return {
    //type: "poldrack_multi_stim_multi_response",
    type: "alt_multi_stim_multi_response",
    stimuli: stimuli,
    is_html: true,
    data: {
        trial_id: 'stim',
        exp_stage: 'practice'
    },
    choices: jsPsych.NO_KEYS,
    timing_response: 2000,
    response_ends_trial: true,
    timing_stim: 2000, //getISI, replace
    on_load: () => {
      //removeCursor("experiment");
      pdSpotEncode(startCode);
    },
    on_finish: (data) => {
      data.code = startCode;
    },
    timing_post_trial: 500
  };
};

// Testing in format that worked in experiment factory setup 
// let stimuli = [images[0], images[1]];
// const startCode = eventCodes.fixationStart;
// var test = {
    
// 	type: 'poldrack_multi_stim_multi_response',
// 	stimuli: stimuli, 
// 	is_html: true,
// 	data: {
// 		trial_id: 'stim',
// 		exp_stage: 'practice'
// 	},
	
// 	choices: 68,
// 	timing_stim: 2000, //getISI, replace
// 	timing_response: 2000,
// 	response_ends_trial: true,
// 	on_finish: function() {
// 		//let trial_num = 1
// 		// jsPsych.data.addDataToLastTrial(curr_data)
// 		//current_trial += 1
// 	},
// 	timing_post_trial: 500
// //}
// };

export { test };

// const test = () => {
    
// //  const startCode = eventCodes.fixationStart;
//   return {
    
//         type: 'poldrack_multi_stim_multi_response',
//         stimuli: '',
//         is_html: true,
//         data: {
//             trial_id: 'stim',
//             exp_stage: 'practice'
//         },
        
//         choices: 68,
//         timing_stim: 2000, //getISI, replace
//         timing_response: 2000,
//         response_ends_trial: true,
//         on_finish: function() {
//          let trial_num = 1
//         // jsPsych.data.addDataToLastTrial(curr_data)
//         //current_trial += 1
//         },
//         timing_post_trial: 500
//     //}
//   };
// };

//export { test };
//export default test;
