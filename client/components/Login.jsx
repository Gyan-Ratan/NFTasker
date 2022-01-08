import Image from 'next/image'
import React from 'react'


import { useMoralis } from "react-moralis";
function Login() {
    // const {authenticate} = useMoralis();
    return (
        

        <div className=' '>
            
            <h1>Login</h1>
            <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-3'>
                {/* logo */}
                {/* <Image className='object-contain rounded-full' src={profile} width={150} height={150} /> */}
                   
                {/* <button onClick= {authenticate}
                    className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse'> 
                    Login to NxtGen</button> */}

                </div>
                <div className='w-full h-screen '>
                   
                </div>
        </div>
    )
}

export default Login
