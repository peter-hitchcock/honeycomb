import React, { useState, useEffect, useCallback } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'

import Login from './components/Login'
import JsPsychExperiment from './components/JsPsychExperiment'

import { jsPsych } from 'jspsych-react'
import { getTurkUniqueId, getProlificId, sleep } from './lib/utils'
import { initParticipant, addToFirebase } from './firebase'

import { config } from './config/main'
import { version } from '../package.json'

//import { poldrack_multi_stim_multi_response } from './lib/poldrack_multi_stim_multi_response';
//import { alt_multi_stim_multi_response } from './lib/alt_multi_stim_multi_response';
//import { image_button_test } from './lib/image_button_test';
import { msmr } from "./lib/msmr";

function App () {
  // Variables for time
  const startDate = new Date().toISOString()
  // Variables for login
  const [loggedIn, setLogin] = useState(false)
  const [ipcRenderer, setRenderer] = useState(false)
  const [psiturk, setPsiturk] = useState(false)
  const [envParticipantId, setEnvParticipantId] = useState('')
  const [envStudyId, setEnvStudyId] = useState('')
  const [currentMethod, setMethod] = useState('default')
  const [reject, setReject] = useState(false)
  //jsPsych.plugins['poldrack_multi_stim_multi_response'] = poldrack_multi_stim_multi_response();
  //jsPsych.plugins['alt_multi_stim_multi_response'] = alt_multi_stim_multi_response();
  //jsPsych.plugins['image_button_test'] = image_button_test();
  jsPsych.plugins['msmr'] = msmr();

  const query = new URLSearchParams(window.location.search)

  // Validation functions for desktop case and firebase
  const defaultValidation = async () => {
    return true
  }
  const firebaseValidation = (participantId, studyId) => {
    return initParticipant(participantId, studyId, startDate)
  }

  // Adding data functions for firebase, electron adn Mturk
  const defaultFunction = () => {}
  const firebaseUpdateFunction = (data) => {
    addToFirebase(data)
  }
  const desktopUpdateFunction = (data) => {
    ipcRenderer.send('data', data)
  }
  const psiturkUpdateFunction = (data) => {
    psiturk.recordTrialData(data)
  }

  // On finish functions for electron, Mturk
  const defaultFinishFunction = () => {
    jsPsych.data.get().localSave('csv', 'neuro-task.csv')
  }
  const desktopFinishFunction = () => {
    ipcRenderer.send('end', 'true')
  }
  const psiturkFinishFunction = () => {
    const completePsiturk = async () => {
      psiturk.saveData()
      await sleep(5000)
      psiturk.completeHIT()
    }
    completePsiturk()
  }

  // Function to add jspsych data on login
  const setLoggedIn = useCallback(
    (loggedIn, studyId, participantId) => {
      if (loggedIn) {
        jsPsych.data.addProperties({
          participant_id: participantId,
          study_id: studyId,
          start_date: startDate,
          task_version: version
        })
      }
      setLogin(loggedIn)
    },
    [startDate]
  )

  // Login logic
  useEffect(() => {
    // For testing and debugging purposes
    console.log('Turk:', config.USE_MTURK)
    console.log('Firebase:', config.USE_FIREBASE)
    console.log('Prolific:', config.USE_PROLIFIC)
    console.log('Electron:', config.USE_ELECTRON)
    console.log('Video:', config.USE_CAMERA)
    console.log('Volume:', config.USE_VOLUME)
    console.log('Event Marker:', config.USE_EEG)
    console.log('Photodiode:', config.USE_PHOTODIODE)
    // If on desktop
    if (config.USE_ELECTRON) {
      const { ipcRenderer } = window.require('electron')
      setRenderer(ipcRenderer)
      ipcRenderer.send('updateEnvironmentVariables', config)
      // If at home, fill in fields based on environment variables
      const credentials = ipcRenderer.sendSync('syncCredentials')
      if (credentials.envParticipantId) {
        setEnvParticipantId(credentials.envParticipantId)
      }
      if (credentials.envStudyId) {
        setEnvStudyId(credentials.envStudyId)
      }
      setMethod('desktop')
    } else {
      // If MTURK
      if (config.USE_MTURK) {
        /* eslint-disable */
        window.lodash = _.noConflict()
        const turkId = getTurkUniqueId()
        setPsiturk(new PsiTurk(turkId, '/complete'))
        setMethod('mturk')
        setLoggedIn(true, 'mturk', turkId)
        /* eslint-enable */
      } else if (config.USE_PROLIFIC) {
        const pID = getProlificId()
        if (config.USE_FIREBASE && pID) {
          setMethod('firebase')
          setLoggedIn(true, 'prolific', pID)
        } else {
          setReject(true)
        }
      } else if (config.USE_FIREBASE) {
        setMethod('firebase')
        // Autologin with query parameters
        const participantId = query.get('participantID')
        const studyId = query.get('studyID')
        if (participantId) {
          setEnvParticipantId(participantId)
        }
        if (studyId) {
          setEnvStudyId(studyId)
        }
      } else {
        setMethod('default')
      }
    }
    // eslint-disable-next-line
  }, [])

  if (reject) {
    return (
      <div className="centered-h-v">
        <div className="width-50 alert alert-danger">
          Please ask your task provider to enable firebase.
        </div>
      </div>
    )
  } else {
    return (
      <>
        {loggedIn ? (
          <JsPsychExperiment
            dataUpdateFunction={
              {
                desktop: desktopUpdateFunction,
                firebase: firebaseUpdateFunction,
                mturk: psiturkUpdateFunction,
                default: defaultFunction,
              }[currentMethod]
            }
            dataFinishFunction={
              {
                desktop: desktopFinishFunction,
                mturk: psiturkFinishFunction,
                firebase: defaultFunction,
                default: defaultFinishFunction
              }[currentMethod]
            }
          />
        ) : (
          <Login
            validationFunction={
              {
                desktop: defaultValidation,
                default: defaultValidation,
                firebase: firebaseValidation,
              }[currentMethod]
            }
            envParticipantId={envParticipantId}
            envStudyId={envStudyId}
            onLogin={setLoggedIn}
          />
        )}
      </>
    )
  }
}

export default App
