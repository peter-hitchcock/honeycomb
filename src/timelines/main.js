import preamble from "./preamble";
import taskBlock from "./taskBlock";
import { countdown } from "@brown-ccv/behavioral-task-trials";
import { cameraStart, cameraEnd } from "../trials/camera"
import { lang, config } from "../config/main";
import { practiceBlock } from "../config/practice";
import { tutorialBlock } from "../config/tutorial";
import { exptBlock1, exptBlock2 } from "../config/experiment";
import { showMessage } from "@brown-ccv/behavioral-task-trials";
//import { test } from "../trials/test";

//import { test2 } from "../trials/test2";
//import { test3 } from "../trials/test3";
import { test4 } from "../trials/test4";

import {
  ageCheck,
  sliderCheck,
  demographics,
  iusSurvey,
  debrief,
} from "../trials/quizTrials";

let primaryTimeline = [
  preamble,
  //test(),
  //test2(),
  //test3(),
  test4(),
  //test(), // as function 
  //test, // as variable
  ageCheck,
  sliderCheck,
  countdown({ message: lang.countdown.message1 }),
  taskBlock(practiceBlock),
  countdown({ message: lang.countdown.message2 }),
  taskBlock(exptBlock1),
  demographics,
  iusSurvey,
  debrief,
];

if (config.USE_CAMERA) {
  primaryTimeline.splice(1,0,cameraStart())
  primaryTimeline.push(cameraEnd(5000))
}

primaryTimeline.push(showMessage(config, {
  duration: 5000,
  message: lang.task.end,
}))

const mturkTimeline = [
  preamble,
  countdown({ message: lang.countdown.message1 }),
  taskBlock(tutorialBlock),
  countdown({ message: lang.countdown.message2 }),
  taskBlock(exptBlock2),
  showMessage(config, {
    duration: 5000,
    message: lang.task.end,
  }),
];

export const tl = config.USE_MTURK ? mturkTimeline : primaryTimeline;
