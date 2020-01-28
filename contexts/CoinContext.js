import React from 'react';

export const CoinContext = React.createContext({
  active: false,
  found: [],
  addOne: (id) => {},
  enabled: true
});