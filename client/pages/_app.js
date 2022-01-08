import '../styles/globals.css'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import React from 'react'
import { MoralisProvider } from "react-moralis";

function getLibrary(provider) {
  return new Web3(provider);
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <MoralisProvider appId={process.env.NEXT_PUBLIC_APP_ID} serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}>  */}
      <Web3ReactProvider getLibrary={getLibrary}>
          <Component{...pageProps} />
      </Web3ReactProvider>
     
    {/* </MoralisProvider> */}
    </>
  )
}

export default MyApp
