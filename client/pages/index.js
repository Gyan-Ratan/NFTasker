import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='w-full h-screen'>
      <Head>
        <title>NFTasker</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <div className='gradient-bg-welcome '>
      <Navbar/>
      <Welcome/>
      </div>
      <Footer/>
    </div>
  )
}
