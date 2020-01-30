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
import TreasureHuntProgress from '../components/TreasureHuntProgress';
import DialogManager from '../components/DialogManager';

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
      <body>
        <TeamTopSection />
        <MissionSection />
        <HowWeMetSection />
        <PersonalBlogsSection />
        <TreasureHuntProgress />
        <DialogManager/>
      </body>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default TeamPage