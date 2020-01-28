import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Contact from '../components/Contact';
import Burger from '../components/Burger';
import MobileMenu from '../components/MobileMenu';
import TreasureHuntProgress from '../components/TreasureHuntProgress';

const ContactPage = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <>
      <Head>
        <title>Klink Fundriasing App | Contact Us for Questions About How to Fundraise </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Contact Klink Fundraising today if you have any questions about our app, how to fundraise, or have any ideas for us!" />
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
        <div style={{height: "150px"}}></div>
        <Contact />
        <TreasureHuntProgress/>
      </main>
    </>
  )
}

export default ContactPage