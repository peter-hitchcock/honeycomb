(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t){e.exports={eventCodes:{fixation:1,evidence:5,show_earnings:7,test_connect:32,open_task:18}}},28:function(e,t,n){e.exports=n(61)},35:function(e,t,n){},47:function(e){e.exports={task:{name:"Honeycomb Task",end:"This experiment has ended."},prompt:{continue:{press:"Press any key to continue.",button:"Continue"},focus:"Make sure the photodiode is covering the spot and any external recordings have begun before continuing.",fullscreen:"Press 'cmd + ctrl + F' to toggle Fullscreen.",zoom:"Zoom in to enlarge the screen.",setting_up:"Setting up task..."},welcome:{large_window:"Please make this window as large as possible.",message:"Instructions"},userid:{set:"Please enter participant ID."},eventMarker:{found:"Note: event marker found.",not_found:"Note: no event marker found."},countdown:{message1:"Countdown for the first block",message2:"Countdown for the second block"},instructions:{adjust_volume:"Set tablet volume to 50/100."},quiz:{ask:{age:"What's your age?",demographics_age:"<p>How old are you?</p>",demographics_ethnicity:"<p>What is your ethnicity?</p>",demographics_race:"<p>What is your race?</p>",demographics_english:"<p>Are you fluent in English?</p>",demographics_gender:"<p>What is your gender?</p>",diagnoses:"<p>Have you ever been diagnosed with Parkinson's disease, Schizophrenia, Obsessive-Compulsive Disorder, or Depression?</p>"},prompt:{ius:{preamble:"This questionnaire is designed to measure intolerance of uncertainty. <br>Please answer the following questions as honestly as you can. <br>There are no right or wrong answers, and there are no trick questions.",upset:"1. Unforeseen events upset me greatly.",frustration:"2. It frustrates me not having all the information I need.",full_life:"3. Uncertainty keeps me from living a full life.",surprise_avoid:"4. One should always look ahead so as to avoid surprises.",unforeseen_spoil:"5. A small unforeseen event can spoil everything, even with the best of planning.",uncertainty_paralysis:"6. When it's time to act, uncertainty paralyzes me.",uncertainty_malfunction:"7. When I am uncertain I can't function very well.",future:"8. I always want to know what the future has in store of me.",surprise_intolerance:"9. I can't stand being taken by surprise",doubt_paralysis:"10. The smallest doubt can stop me from acting.",organize:"11. I should be able to organize everything in advance.",escape:"12. I must get away from all uncertain situations."},preamble:{demo_1:"<h1>Demographics (1/3)</h1>",demo_2:"<h1>Demographics (2/3)</h1>",demo_3:"<h1>Demographics (3/3)</h1>",survey_1:"<h1>Survey (1/1)</h1>"}},answer:{age:"Answer 12 no matter what.",abstain:"Prefer not to answer.",ius:{not:"1 - Not at all characteristic of me",little:"2 - A little characteristic of me",somewhat:"3 - Somewhat characteristic of me",very:"4 - Very characteristic of me",entirely:"5 - Entirely characteristic of me",abstain:"Prefer not to answer"},debriefing:{confirm_completion:"Confirm Completion"},demographics_ethnicity:{hispanic_latino:"Hispanic or Latino",no_hispanic_latino:"NOT Hispanic or Latino"},demographics_race:{asian:"Asian",african_american:"African-American",caucasian:"Caucasian",native_american_alaskan:"Native American/Alaskan",native_hawaiian_pacific_islander:"Native Hawaiian or Pacific Islander",other:"Other"},demographics_binary:{yes:"YES",no:"NO"},demographics_gender:{female:"Female",male:"Male",other:"Other",abstain:"Prefer to not say"},demographics_diagnoses:{no:"NO",parkinsons:"Parkinson's Disease",schizophrenia:"Schizophrenia",ocd:"Obsessive Compulsive Disorder",depression:"Depression"}},direction:{slider:{right:"Move the slider to the right.",left:"Move the slider to the left."}}}}},48:function(e){e.exports={welcome:{message:"Welcome to the NEURO experiment."},userid:{set:"Setting up user ID."}}},49:function(e,t,n){var a={"./blue_payout_correct_10.png":50,"./blue_payout_correct_100.png":51};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=49},50:function(e,t,n){e.exports=n.p+"static/media/blue_payout_correct_10.f515a81e.png"},51:function(e,t,n){e.exports=n.p+"static/media/blue_payout_correct_100.ae2416c7.png"},52:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(12),o=n.n(a),i=n(23),s=n.n(i),r=(n(35),n(13)),c=n.n(r),u=n(18),p=n(24),d=n(25),l=n(27),m=n(26),h=n(8),g=n(9),f=n.n(g),b=n(14),v=n(4),w=(b.eventCodes.open_task,!h.jsPsych.turk.turkInfo().outsideTurk),y=!0;try{window.require("electron")}catch(ke){y=!1}var O=n(47);if(w){var E=n(48);f.a.merge(O,E)}var k={conditions:["a","b","c"],repeats_per_condition:1,is_practice:!1,is_tutorial:!1,photodiode_active:!1},P=Object(v.init)({USE_PHOTODIODE:!1,USE_EEG:!1,USE_ELECTRON:y,USE_MTURK:w});n(15);if(P.IS_ELECTRON){var z=window.require("electron");z.ipcRenderer}var T=function(){var e=Object(u.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'<span style="color: green;">'.concat(O.eventMarker.found,"</span>"));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),q=function(){return{type:"html_button_response",stimulus:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return"<div class=".concat(n?"center_container":t?"main-prompt":"main",">").concat(e,"</div>")}("<div><h2 id='usb-alert'></h2></div>",!0)+function(){var e=P.USE_PHOTODIODE?"visible":"invisible";return'<div class="photodiode-box '.concat(e,'" id="photodiode-box">\n\t\t\t\t\t\t\t\t\t<span id="photodiode-spot" class="photodiode-spot"></span>\n  \t\t\t\t\t\t\t\t</div>')}(),prompt:["<br><h3>".concat(O.prompt.focus,"</h3>")],choices:[O.prompt.continue.button],on_load:function(){return T().then(function(e){return document.getElementById("usb-alert").innerHTML=e})}}};console.log("at_home",!0),console.log("env at home","true");var A,C={type:"html_keyboard_response",stimulus:"",timeline:P.USE_PHOTODIODE?[Object(v.showMessage)(P,{responseType:"html_button_response",message:O.task.name,responseEndsTrial:!0,buttons:[O.prompt.continue.button]}),Object(v.userId)(h.jsPsych,P,{setIdMessage:O.userid.set,defaultId:Object({NODE_ENV:"production",PUBLIC_URL:".",REACT_APP_AT_HOME:"true"}).REACT_APP_PATIENT_ID}),q(),Object(v.showMessage)(P,{duration:2e3,message:O.prompt.setting_up,taskCode:b.eventCodes.open_task,numBlinks:b.eventCodes.open_task})]:[Object(v.showMessage)(P,{responseType:"html_button_response",message:O.task.name,responseEndsTrial:!0,buttons:[O.prompt.continue.button]}),Object(v.userId)(h.jsPsych,P,{duration:800,setIdMessage:O.userid.set})]},I=function(e){return new Promise(function(t){return setTimeout(t,e)})},j=function(e){return JSON.parse(JSON.stringify(e))},R=((A=n(49)).keys().map(A),function(e){return"<div class='center_container'>\n    <h1 class='text-".concat(e>=0?"success":"danger","'>").concat("$"+parseFloat(e).toFixed(2),"</h1>\n    </div>")}),N=function(e,t,n){return{type:"html_keyboard_response",timeline:[Object(v.fixation)(P,{duration:650}),Object(v.showMessage)(P,{message:n,onstart:!0,taskCode:b.eventCodes.evidence}),Object(v.fixation)(P,{duration:650}),Object(v.showMessage)(P,{stimulus:R(Math.random()),taskCode:b.eventCodes.show_earnings})]}},U=function(e){var t=function(e){var t=e.conditions.map(function(t){return f.a.range(e.repeats_per_condition).map(function(){return t})});return f.a.shuffle(f.a.flatten(t))}(e),n={block_earnings:0,optimal_earnings:0,continue_block:!0},a=t.map(function(t){return N(e,n,t)}),o={type:"html_keyboard_response",stimulus:"",trial_duration:1,on_finish:function(t){return t.block_settings=e}};return a.unshift(o),{type:"html_keyboard_response",timeline:a}},D=j(k);D.conditions=["m","n"],D.repeats_per_condition=1,D.is_practice=!0;var M=j(k);M.is_tutorial=!0,M.photodiode_active=!1;var S=j(k);S.repeats_per_condition=2;var L=j(k);L.conditions=["e","f"],L.repeats_per_condition=2;var x=O.quiz.ask.age,H=O.quiz.answer.age,B="<div class='instructions'><h1>".concat(x,"<br><b>").concat(H,"</b></div>"),V=Object(v.survey)({stimulus:B}),F=O.quiz.direction.slider.right,W=Object(v.slider)(F),K="".concat(O.quiz.answer.abstain),J=O.quiz.prompt.preamble.survey_1,G=O.quiz.prompt.ius.preamble,Y={options:["".concat(O.quiz.answer.ius.not),"".concat(O.quiz.answer.ius.little),"".concat(O.quiz.answer.ius.somewhat),"".concat(O.quiz.answer.ius.very),"".concat(O.quiz.answer.ius.entirely),K]},Z=["".concat(O.quiz.prompt.ius.upset),"".concat(O.quiz.prompt.ius.frustration),"".concat(O.quiz.prompt.ius.full_life),"".concat(O.quiz.prompt.ius.surprise_avoid),"".concat(O.quiz.prompt.ius.unforeseen_spoil),"".concat(O.quiz.prompt.ius.uncertainty_paralysis),"".concat(O.quiz.prompt.ius.uncertainty_malfunction),"".concat(O.quiz.prompt.ius.future),"".concat(O.quiz.prompt.ius.surprise_intolerance),"".concat(O.quiz.prompt.ius.doubt_paralysis),"".concat(O.quiz.prompt.ius.organize),"".concat(O.quiz.prompt.ius.escape)],$=Object(v.multiSurvey)({preamble:[J+G],prompts:Z,ansChoices:Y}),Q=O.quiz.answer.debriefing.confirm_completion,X=Object(v.showMessage)(P,{responseType:"html_button_response",responseEndsTrial:!0,buttons:[Q]}),ee=O.quiz.ask.demographics_age,te=O.quiz.prompt.preamble.demo_1,ne=O.quiz.prompt.preamble.demo_2,ae=O.quiz.prompt.preamble.demo_3,oe=Object(v.survey)({preamble:te,stimulus:ee}),ie={ethnicity:[O.quiz.answer.demographics_ethnicity.hispanic_latino,O.quiz.answer.demographics_ethnicity.no_hispanic_latino],race:["".concat(O.quiz.answer.demographics_race.asian),"".concat(O.quiz.answer.demographics_race.african_american),"".concat(O.quiz.answer.demographics_race.caucasian),"".concat(O.quiz.answer.demographics_race.native_american_alaskan),"".concat(O.quiz.answer.demographics_race.native_hawaiian_pacific_islander),"".concat(O.quiz.answer.demographics_race.other)],yesNo:[O.quiz.answer.demographics_binary.yes,O.quiz.answer.demographics_binary.no],gender:[O.quiz.answer.demographics_gender.female,O.quiz.answer.demographics_gender.male,O.quiz.answer.demographics_gender.other]},se=["".concat(O.quiz.ask.demographics_ethnicity),"".concat(O.quiz.ask.demographics_race),"".concat(O.quiz.ask.demographics_english),"".concat(O.quiz.ask.demographics_gender)],re=Object(v.multiSurvey)({preamble:ne,prompts:se,ansChoices:ie}),ce=O.quiz.ask.diagnoses,ue={diagnoses:[O.quiz.answer.demographics_diagnoses.no,O.quiz.answer.demographics_diagnoses.parkinsons,O.quiz.answer.demographics_diagnoses.schizophrenia,O.quiz.answer.demographics_diagnoses.ocd,O.quiz.answer.demographics_diagnoses.depression]},pe={timeline:[oe,re,Object(v.multiSurvey)({responseType:"survey_multi_select",preamble:ae,prompts:[ce],ansChoices:ue})]},de=[C,V,W,Object(v.countdown)({message:O.countdown.message1}),U(D),Object(v.countdown)({message:O.countdown.message2}),U(S),pe,$,X,Object(v.showMessage)(P,{duration:5e3,message:O.task.end})],le=[C,Object(v.countdown)({message:O.countdown.message1}),U(M),Object(v.countdown)({message:O.countdown.message2}),U(L),Object(v.showMessage)(P,{duration:5e3,message:O.task.end})],_e=P.USE_MTURK?le:de,me=(n(52),n(53),n(54),n(19));n(58).config();var he,ge={apiKey:Object({NODE_ENV:"production",PUBLIC_URL:".",REACT_APP_AT_HOME:"true"}).REACT_APP_apiKey,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:".",REACT_APP_AT_HOME:"true"}).REACT_APP_authDomain,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:".",REACT_APP_AT_HOME:"true"}).REACT_APP_databaseURL,projectId:Object({NODE_ENV:"production",PUBLIC_URL:".",REACT_APP_AT_HOME:"true"}).REACT_APP_projectId,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:".",REACT_APP_AT_HOME:"true"}).REACT_APP_storageBucket,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:".",REACT_APP_AT_HOME:"true"}).REACT_APP_messagingSenderId,appId:Object({NODE_ENV:"production",PUBLIC_URL:".",REACT_APP_AT_HOME:"true"}).REACT_APP_appId};try{he=me.a.initializeApp(ge).firestore()}catch(ke){console.log("WARNING: Firease not connected")}var fe=function(e){var t=e.patient_id;he.collection("test").doc(t).collection("data").doc("trial_".concat(e.trial_index)).set(e)},be=me.a.firestore,ve=(be.TimeStamp,be.GeoPoint,me.a,!1),we=!1;if(P.IS_ELECTRON){var ye=window.require("electron");ve=ye.ipcRenderer}else P.USE_MTURK&&(window.lodash=_.noConflict(),we=new PsiTurk(function(){var e=h.jsPsych.turk.turkInfo();return"".concat(e.workerId,":").concat(e.assignmentId)}(),"/complete"));var Oe=Object({NODE_ENV:"production",PUBLIC_URL:".",REACT_APP_AT_HOME:"true"}).FIREBASE,Ee=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return console.log("Outside Turk:",h.jsPsych.turk.turkInfo().outsideTurk),console.log("Turk:",P.USE_MTURK),o.a.createElement("div",{className:"App"},o.a.createElement(h.Experiment,{settings:{timeline:_e,on_data_update:function(e){var t;Oe&&(1===e.trial_index&&(console.log(e.patient_id),t=e.patient_id,he.collection("test").doc(t).set({patientId:t,dateCreated:new Date}),fe(e)),e.trial_index>1&&fe(e)),ve?ve.send("data",e):we&&we.recordTrialData(e)},on_finish:function(e){if(ve)ve.send("end","true");else if(we){(function(){var e=Object(u.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return we.saveData(),e.next=3,I(5e3);case 3:we.completeHIT();case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()}else h.jsPsych.data.get().localSave("csv","neuro-task.csv")}}}))}}]),n}(o.a.Component);s.a.render(o.a.createElement(Ee,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.02053a9d.chunk.js.map