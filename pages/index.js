import React, { useState, useEffect } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import HomeTopSection from "../components/HomeTopSection";
import HowSection from "../components/HowSection";
import CalculatorSection from "../components/CalculatorSection";
import EarlyAccessSection from "../components/EarlyAccessSection";
import Footer from "../components/Footer";
import QuoteBoxSection from "../components/QuoteBoxSection";
import Burger from "../components/Burger";
import MobileMenu from "../components/MobileMenu";
import "../styles/global.css";
import TreasureHuntProgress from "../components/TreasureHuntProgress";
import DialogManager from "../components/DialogManager";

const Home = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>
          Klink App: Easy and Simple Fundraising | Round Up Donor Spare Change
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Klink is mobile app that makes support raising easy by rounding up donors' credit card transactions. Quickly create a campaign for your mission trip or cause today."
        />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <nav>
        <NavBar />
        <Burger open={open} setOpen={setOpen} />
        {open && (
          <div>
            <MobileMenu open={open} setOpen={setOpen} />
          </div>
        )}
      </nav>
      <main>
      <body>
        <HomeTopSection />
        <HowSection />
        <CalculatorSection />
        <QuoteBoxSection />
        <EarlyAccessSection />
        <TreasureHuntProgress />
        <DialogManager />
      </body>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
