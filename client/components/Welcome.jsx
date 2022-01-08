import React,{useContext} from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
import { Loader } from './'
import shortenAddress from '../utils/shortenAddress';
import { injected } from './Wallet/Connected'
import { useWeb3React } from '@web3-react/core'
// import { connect } from 'net'

const {ethers} = window();

const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-white text-sm font-light text-white'
const  Welcome = () => {
    const {active,account,library, connector, activate,deactivate}=useWeb3React()
    
    async function connect(){
        try{
            await activate(injected)
        }catch(e){
            console.log(e)
        }
        
    }

    return (
        <div className='flex w-full justify-center items-center  '>
            <div className='flex mf:flex-row flex-row justify-between md:p-20 py12 px-4'>
                <div className='flex flex-1 justify-start flex-col mf:mr-10'>
                    <h1 className='text-3xl sm:text-5xl capitalize text-transparent bg-clip-text bg-gradient-to-br from-slate-100  py-1'>
                        Get NFT <br /> As Reward
                    </h1>
                    <p className='text-ledt mt-5 text-slate-100 font-light md:w-9/12 w-11/12 text-base '>
                        NFTasker give you NFTs to do your TASK Honestly. and You can get NFTs as reward for your Familys to do their TASK.
                    </p>
                    {/* {!currentAccount && ( */}
                        <button type='button' 
                            onClick={connect}
                            className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] '
                        >
                            <p className='text-white text-base font-semibold'>Connect Wallet</p>
                        </button>
                     {/* )}  */}

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
                                {active ? `${shortenAddress(account)}` : 'Connect Wallet'}
                                {/* {'connect Wallet'} */}
                                </p>
                                <p className='text-white font-semibold text-lg mt-1'>
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>


                    
                </div>
            </div>
        </div>
    )
}

export default Welcome
