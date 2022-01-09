import React from 'react'
import { Footer, Header, Welcome } from '.'
import NavBar from './Navbar'

const Main = () => {
    return (
        <div className='bg-glassmorphi'>
            <NavBar />
            <Header/>
            <Welcome  />
            <Footer />
        </div>
    )
}

export default Main
