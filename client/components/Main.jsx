import React from 'react'
import { Footer, Header, Welcome ,Teamsection} from '.'
import NavBar from './Navbar'

const Main = () => {
    return (
        <div className='gradient-bg-welcome'>
            <NavBar />
            <Header/>
            <Teamsection/>
            <Welcome  />
            <Footer />
        </div>
    )
}

export default Main
