import React from 'react'
import { Welcome } from '.'
import NavBar from './Navbar'

const Home = () => {
    return (
        <div>
            <NavBar />
            <Header/>
            <Welcome  />
            <Footer />
        </div>
    )
}

export default Home
