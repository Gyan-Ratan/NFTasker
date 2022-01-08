import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Teamsection from '../components/Teamsection'
// import Alanait from '../components/Alanait'
import TodosApp from "../todo/TodosApp";
// This is for Alan AI



export default function Home() {
  // return (
   
  //   <div className='w-full h-screen'>
      
  //     <Head>
  //       <title>NFTasker</title>
  //       <meta name="description" content="" />
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>
     
  //     <div className='gradient-bg-welcome '>
  //     <Navbar/>
  //     <Header/>
  //     <Teamsection/>
  //     <Welcome/>
  //     {/* <Alanait/> */}
      
      
  //     <Footer/>
  //     </div> 
  //   </div>
   
  // )
const handleAddTodo = () => {
  console.log("add");
};
  return (
    <>
    <TodosApp/> 
    </>
  )
}
