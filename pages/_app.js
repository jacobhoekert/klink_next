import App from 'next/app';
import TreasureHuntProvider from '../components/TreasureHuntProvider';

class MyApp extends App {
  componentDidMount(){
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", vh + "px");
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <TreasureHuntProvider>
        <Component {...pageProps} />
      </TreasureHuntProvider>
    )
  }
}

export default MyApp