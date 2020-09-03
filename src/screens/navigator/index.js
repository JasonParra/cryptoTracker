import React from 'react';
import NavigateBar from '../../components/navigate-bar'
import Top from '../Top'
import Follow from '../follow'
import Wallet from '../wallet'

function Navigator() {
  return (
    <NavigateBar
      scenes={
        {
          Top: Top,
          Follow: Follow,
          Wallet: Wallet,
        }
      }
    />
  );
}

export default Navigator;

