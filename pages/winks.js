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

const WinksPage = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
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
        <link href="https://fonts.googleapis.com/css?family=Catamaran:600|Roboto&display=swap" rel="stylesheet" async />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" async/>
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
        <WinksTopSection />
        <TipsSection />
        <Contact />
        <SubscribeSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default WinksPage