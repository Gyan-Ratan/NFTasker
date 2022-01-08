import React,{useContext} from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
// import { Loader } from './'

import { TransactionsContext } from '../context/TransactionsContext'
import shortenAddress from '../utils/shortenAddress';
const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-white text-sm font-light text-white'

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        step='0.0001'
        value={value}
        onChange={(e) => handleChange(e, name)}
        className='w-full h-10 p-2 rounded-sm outline-none bg-transparent border-none text-white my-2 text-sm white-glassmorphism'
    />
);

const Welcome = () => {
    // const { connectWallet, currentAccount,formData,sendTransaction,handleChange} = useContext(TransactionsContext);

    // console.log(connectWallet);
   

    const handleSubmit = (e) => {
        const {addressTo, amount ,keyword,message} = formData;

        e.preventDefault();
        if(!addressTo || !amount || !keyword || !message){
            alert('Please fill all the fields')
        }else{
            sendTransaction();
        }

    }

    return (
        <div className='flex w-full justify-center items-center  '>
            <div className='flex mf:flex-row flex-row justify-between md:p-20 py12 px-4'>
                <div className='flex flex-1 justify-start flex-col mf:mr-10'>
                    <h1 className='text-3xl sm:text-5xl capitalize text-transparent bg-clip-text bg-gradient-to-br from-slate-100  py-1'>
                        send crypto <br /> across world
                    </h1>
                    <p className='text-ledt mt-5 text-slate-100 font-light md:w-9/12 w-11/12 text-base '>
                        Explore the Crypto World. Buy and Sell Cryptocurrencies easily with our Crypto Exchange.
                    </p>
                    {/* {!currentAccount && ( */}
                        <button type='button' 
                            // onClick={connectWallet}
                            className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] '
                        >
                            <p className='text-white text-base font-semibold'>Connect Wallet</p>
                        </button>
                    {/* )} */}

                    <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
                        <div className={`rounded-tl-2xl ${commonStyles}`}>
                            Reliability
                        </div>
                        <div className={commonStyles}>
                            Security
                        </div>
                        <div className={`rounded-tr-2xl ${commonStyles}`}>
                            Ethereum
                        </div>
                        <div className={`rounded-bl-2xl ${commonStyles}`}>
                            Web 3.0
                        </div>
                        <div className={commonStyles}>
                            Low Fee
                        </div>
                        <div className={`rounded-br-2xl ${commonStyles}`}>
                            BlockChain
                        </div>
                    </div>
                </div>
                <div className='flex flex-col flex-1 items-center justify-start w-full  mf:mt-0 mt-10 '>
                    <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism '>
                        <div className='flex justify-between flex-col w-full h-full '>
                            <div className='flex justify-between items-start '>
                                <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
                                    <SiEthereum fontSize={21} color='#fff' />
                                </div>
                                <BsInfoCircle fontSize={17} color='#fff' />
                            </div>
                            <div >
                                <p className='text-white font-light text-sm  '>
                                {/* {currentAccount ? `${shortenAddress(currentAccount)}` : 'Connect Wallet'} */}
                                {'connect Wallet'}
                                </p>
                                <p className='text-white font-semibold text-lg mt-1'>
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className='p-5 sm:w-96 w-full flex flex-col justify-center items-center blue-glassmorphism'>
                        <Input placeholder='Address To' name='addressTo' type='text' handleChange={()=>(null)} />
                        <Input placeholder='Amount (ETH)' name='amount' type='number' handleChange={()=>(null)} />
                        <Input placeholder='Keyword (GIF)' name='keyword' type='text' handleChange={()=>(null)} />
                        <Input placeholder='Enter Message' name='message' type='text' handleChange={()=>(null)} />
                        <div className='h-[1px] w-full bg-gray-400 my-2 ' />
                        {false ? (
                             <Loader />
                        ) : (
                            <button
                                type='button'
                                onClick={handleSubmit}
                                className='w-full text-white mt-2 border-[1px] p-2 border-[#3d47fc] rounded-full cursor-pointer  hover:bg-[#3d47fc]'
                            >
                                send now
                            </button>
                          )} 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
