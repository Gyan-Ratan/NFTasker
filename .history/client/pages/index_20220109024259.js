import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Teamsection from '../components/Teamsection'
import Todo from '../components/Todo'
import { useMoralis } from 'react-moralis'
import Login from './Login'
// import Alanait from '../components/Alanait'

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
      
      
        
        {/* <Navbar />
        <Header />
        <Teamsection />
        <Welcome />
        <Alanait />
        
        <Footer /> */}
      </div>
    </div>

  )
}



