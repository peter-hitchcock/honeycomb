// Simple event to put on timeline with multistim 
import { eventCodes } from "../config/main";
import { images } from "../lib/utils";
import { jitter50, removeCursor } from "../lib/utils";
import { pdSpotEncode, photodiodeGhostBox } from "../lib/markup/photodiode";
import { fixationHTML } from "../lib/markup/fixation";
import { jsPsych } from "jspsych-react";

const test3 = () => {
  let stimulus = images[1]; 
    
  const startCode = eventCodes.fixationStart;

  return {
    type: "image_button_test",
    choices: jsPsych.NO_KEYS,
    stimulus: stimulus,
    response_ends_trial: false,
    trial_duration: 100000,//jitter50(duration),
    on_load: () => {
      //removeCursor("experiment");
      pdSpotEncode(startCode);
    },
    on_finish: (data) => {
      data.code = startCode;
    },
  };
};

export { test3 };
