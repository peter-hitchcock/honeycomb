// Simple event to put on timeline with multistim 
import { eventCodes } from "../config/main";
import { images } from "../lib/utils";
import { jitter50, removeCursor } from "../lib/utils";
import { pdSpotEncode, photodiodeGhostBox } from "../lib/markup/photodiode";
import { fixationHTML } from "../lib/markup/fixation";
import { jsPsych } from "jspsych-react";

const test4 = () => {
  let stimulus = images[1]; 
    
  const startCode = eventCodes.fixationStart;
  let overtChoices1 = ['D', 'B'];//[68, 66];
  let overtChoices2 = ['K', 'U']; //[75, 85];
  let overtChoices = overtChoices1.concat(overtChoices2);

  return {
    type: "msmr",
    choices: overtChoices, //['D', 'K'], //68, //jsPsych.NO_KEYS,
    stimulus: stimulus,
    response_ends_trial: true,
    trial_duration: 1500,//jitter50(duration),
    on_load: () => {
      //removeCursor("experiment");
      pdSpotEncode(startCode);
    },
    on_finish: (data) => {
      data.code = startCode;
    },
  };
};

export { test4 };
