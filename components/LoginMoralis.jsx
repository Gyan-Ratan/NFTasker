import React from 'react'
import { useMoralis } from "react-moralis";
import { NavBar } from '.';
import Main from '../components/Main';
import Header from '../components/Header';
import Todo from '../components/Todo';
function LoginMoralis() {
    const {authenticate} = useMoralis();
    return (
        <div className='bg-black relative '>
            <h1>Login</h1>
            <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-3'>
                {/* logo */}
                <Image className='object-contain rounded-full' src={profile} width={150} height={150} />
                   
                <button onClick= {authenticate}
                    className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse'> 
                    Login to NxtGen</button>

                {/* loginbutton */}
                </div>
        </div>
    )
}

export default LoginMoralis
