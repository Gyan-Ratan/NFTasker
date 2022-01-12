import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Welcome from '../components/Welcome'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Teamsection from '../components/Teamsection'
import Todo from '../components/Todo'
import { useMoralis } from 'react-moralis'
import { useWeb3React } from '@web3-react/core'
import LoginMoralis from '../components/LoginMoralis'
import Main from '../components/Main'

// import Alanait from '../components/Alanait'

// This is for Alan AI

// const {  logout } = useMoralis();
export default function Home() {
  const {active,account,library, connector, activate,deactivate}=useWeb3React()
    
  async function connect(){
      try{
          await activate(injected)
      }catch(e){
          console.log(e)
      }
      
  }
  // const { isAuthenticated,logout } = useMoralis();

   const isAuthenticated = false;
  if (!isAuthenticated) { return <Main /> }
  
  return (

    <div className='w-full h-screen'>

      <Head>
        <title>NFTasker</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='gradient-bg-welcome '>
        {/* <Alanait /> */}
        {/* <LoginMoralis /> */}
        {/* <Todo/> */}
   <NavBar />     
      </div>
    </div>

  )
}



