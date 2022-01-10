import React from 'react'
import { useMoralis } from "react-moralis";
import Main from '../components/Main';
import Todo from 
function LoginMoralis() {
    const {authenticate} = useMoralis();
    return (
        <div className='bg-eth-card '>
            <button onClick= {authenticate}
                className='rounded-lg p-5 eth-card font-bold animate-pulse'> 
                <Todo />
            </button>       
        </div>
    )
}

export default LoginMoralis
