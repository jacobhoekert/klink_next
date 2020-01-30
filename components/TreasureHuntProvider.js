import React, {useState, useEffect} from 'react';
import {CoinContext} from '../contexts/CoinContext';
import {DialogContext} from '../contexts/DialogContext';
import mixpanel from 'mixpanel-browser';

const TreasureHuntProvider = ({ children }) => {
  const addOne = (id) => {
    mixpanel.track("Coin Action", {"Action" : id});
    setCoinProgress(state => ({
      ...state,
      found: [...state.found, id],
      active: true
    }));
  }

  const setProgress = (progress) => {
    mixpanel.track("Dialog Action", {"Progress" : progress});
    setDialogProgress(state => ({
      ...state,
      progress: progress
    }));
  }

  const [coinProgress, setCoinProgress] = useState({active: false, found: [], addOne: addOne, enabled: false});
  const [dialogProgress, setDialogProgress] = useState({progress: 0, setProgress: setProgress});

  useEffect(() => {
    setCoinProgress({active: false, found: [], addOne: addOne, enabled: localStorage.getItem("treasure") == null ? true : false})
    window.scrollTo(0,0);
  }, [])

  return (
    <>
      <CoinContext.Provider value={coinProgress}>
        <DialogContext.Provider value={dialogProgress}>
          {children}
        </DialogContext.Provider>
      </CoinContext.Provider>
    </>
  )
}

export default TreasureHuntProvider