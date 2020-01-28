import React, {useState} from 'react';

import ChallengeDialog from './ChallengeDialog';
import CompletionDialog from './CompletionDialog';
import SignupDialog from './SignupDialog';
import ThankYouDialog from './ThankYouDialog';

import {DialogContext} from '../contexts/DialogContext';
import '../styles/dialogs.scss';


const DialogManager = () => {
  return(
    <DialogContext.Consumer>
      {({progress, setProgress}) => (
        <>
          <ChallengeDialog progress={progress} setProgress={setProgress}/>
          <CompletionDialog progress={progress} setProgress={setProgress}/>
          <SignupDialog progress={progress} setProgress={setProgress}/>
          <ThankYouDialog progress={progress} setProgress={setProgress}/>
        </>
      )}
    </DialogContext.Consumer>
  )
}

export default DialogManager