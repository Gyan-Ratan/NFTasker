import '../styles/globals.css'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import React from 'react';
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import LoadingScreen from "../components/Common/Loading";
// import store from "../store";
import {Provider} from "react-redux";
import Wait from "../Wait";
import Head from "next/head";
// import Layout from "../layout/Layout";


function getLibrary(provider) {
  return new Web3(provider);
}

function MyApp({ Component, pageProps }) {

  const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        await Wait(500)
        setLoading(false);

        const handleStart = async (url) => {
            if (url !== router.pathname)
                setLoading(true)
            await Wait(500)
            setLoading(false);
        };
        const handleComplete = async (url) => {
            await Wait(500)
            setLoading(false)
        };
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);


    }, [router]);
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component{...pageProps} />
    </Web3ReactProvider>

  )
}

export default MyApp
