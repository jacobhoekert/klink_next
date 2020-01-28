import App from 'next/app'
import TreasureHuntProvider from '../components/TreasureHuntProvider'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <TreasureHuntProvider>
        <Component {...pageProps} />
      </TreasureHuntProvider>
    )
  }
}

export default MyApp