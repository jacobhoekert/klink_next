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
        <title>Klink Fundriasing App | The Best and Easy Way to Raise Support</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.jpg" />
        <script>
          const vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty('--vh', vh+'px');
        </script>
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
        <TreasureHuntProgress />
        <DialogManager/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default TeamPage