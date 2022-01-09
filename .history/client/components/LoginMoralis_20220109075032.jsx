import React from 'react'
import { useMoralis } from "react-moralis";


function LoginMoralis() {
    const {authenticate} = useMoralis();
    return (
        <div className='eth-card '>
            
            
                   
                <button onClick= {authenticate}
                    className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse'> 
                    Login to NxtGen</button>
                </div>
                
        </div>
    )
}

export default LoginMoralis
