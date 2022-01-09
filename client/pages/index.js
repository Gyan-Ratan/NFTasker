import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'
import { useMoralis } from 'react-moralis'
import { Login, Todo, Footer,Header, NavBar,Teamsection,Welcome,Alanait} from '../components'

// This is for Alan AI

// const {  logout } = useMoralis();
export default function Home() {
  
  // const isAuthenticated = false;
  // if (!isAuthenticated) { return <LoginMoralis /> }
  return (

    <div className='w-full h-screen'>

      <Head>
        <title>NFTasker</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='gradient-bg-welcome '>
        <NavBar />
        <Header />
        <Teamsection />
        <Welcome /> 
        {/* <Alanait /> */}
        
        <Footer />
      </div>
    </div>

  )
}




