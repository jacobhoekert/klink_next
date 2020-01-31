import App from 'next/app';
import TreasureHuntProvider from '../components/TreasureHuntProvider';
import mixpanel from 'mixpanel-browser';
import keys from '../mixpanel.config';

class MyApp extends App {
  componentWillMount(){
    mixpanel.init(keys.prod);
  }

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