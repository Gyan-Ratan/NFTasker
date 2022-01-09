import React from 'react'
import { useMoralis } from "react-moralis";


function LoginMoralis() {
    const {authenticate} = useMoralis();
    return (
        <div className='bg-eth-card '>
            
            
                   
                <button onClick= {authenticate}
                    className='bg-yellow-500 rounded-lg p-5 ethfont-bold animate-pulse'> 
                    Login to Todo</button>
            
                
        </div>
    )
}

export default LoginMoralis
