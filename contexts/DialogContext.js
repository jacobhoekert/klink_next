import React from 'react';

export const DialogContext = React.createContext({
  progress: 0,
  setProgress: (progress) => {},
});