import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import WinksTopSection from '../components/WinksTopSection';
import TipsSection from '../components/TipsSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SubscribeSection from '../components/SubscribeSection';
import Burger from '../components/Burger';
import MobileMenu from '../components/MobileMenu';
import TreasureHuntProgress from '../components/TreasureHuntProgress';
import {CoinContext} from '../contexts/CoinContext';
import {DialogContext} from '../contexts/DialogContext';
import DialogManager from '../components/DialogManager';

const WinksPage = () => {
  const [open, setOpen] = useState(false);

  const addOne = (id) => {
    setCoinProgress(state => ({
      ...state,
      found: [...state.found, id],
      active: true
    }));
  }

  const setProgress = (progress) => {
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
      <Head>
        <title>Klink Fundriasing App | The Best and Easy Way to Raise Support</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <nav>
        <NavBar />
        <Burger open={open} setOpen={setOpen}/>
        { open &&
          <div>
            <MobileMenu open={open} setOpen={setOpen}/>
          </div>
        }
      </nav>
      <main>
        <CoinContext.Provider value={coinProgress}>
          <DialogContext.Provider value={dialogProgress}>
            <WinksTopSection />
            <TipsSection />
            <Contact />
            <SubscribeSection />
            <TreasureHuntProgress/>
            <DialogManager/>
          </DialogContext.Provider>
        </CoinContext.Provider>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default WinksPage