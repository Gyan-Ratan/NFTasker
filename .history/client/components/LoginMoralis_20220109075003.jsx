import React from 'react'
import { useMoralis } from "react-moralis";


function LoginMoralis() {
    const {authenticate} = useMoralis();
    return (
        <div className='eth '>
            <h1>Login</h1>
            <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-3'>
                   
                <button onClick= {authenticate}
                    className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse'> 
                    Login to NxtGen</button>
                </div>
                
        </div>
    )
}

export default LoginMoralis
