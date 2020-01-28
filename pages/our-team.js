import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import TeamTopSection from '../components/TeamTopSection';
import MissionSection from '../components/MissionSection';
import HowWeMetSection from '../components/HowWeMetSection';
import PersonalBlogsSection from '../components/PersonalBlogsSection';
import Footer from '../components/Footer';
import Burger from '../components/Burger';
import MobileMenu from '../components/MobileMenu';

const TeamPage = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <>
      <Head>
        <title>Klink Fundraising | Meet Our Mission and Founding Team</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Klink's mission is to help missionaries and difference makers fundraise so they can change their communities and the world. Meet the founding team and hear our story." />
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
        <TeamTopSection />
        <MissionSection />
        <HowWeMetSection />
        <PersonalBlogsSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default TeamPage