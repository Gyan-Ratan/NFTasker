import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';
export const TransactionsContext = React.createContext();



const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(); //ethereum
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
    console.log({
        provider,
        signer,
        transactionsContract
    });
}

export const TransactionsProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState('');
    const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount]= useState(localStorage.getItem('transactionCount'));

    const handleChange = (e, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    }


    const checkIfWalletIsConnected = async () => {
      try {
        if (!ethereum) return alert('Please connect to your wallet');
          const accounts = await ethereum.request({ method: 'eth_accounts' });

          if (accounts.length) {
            setCurrentAccount(accounts[0]);
                //getAllTransactions();
            } else {
                console.log('no accounts');
            }
        } catch (error) {
            console.log(error);
            throw new Error("No Ethereum object");
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert('Please connect to your wallet');
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error("No Ethereum object");
        }
    }

    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert('Please connect to your wallet');

            //get data from the form.......
            const { addressTo, amount, keyword, message } = formData;
            const transactionContract = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);

            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x5208',
                    value: parsedAmount._Hex,
                }]
            });

            //send data to the contract
            const transactionsHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

            setIsLoading(true);
            console.log(`Loading - ${transactionsHash.hash}`);
            await transactionsHash.wait();
            console.log(`Success ${transactionsHash.hash}`);
            setIsLoading(false);
            const transactionCount = await transactionContract.getTransactionCount();

            setTransactionCount(transactionCount.toNumber());
            // }
            // else{
            //     console.log('No ethereum object');
            // }

        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
        }
    };

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return (
        <TransactionsContext.Provider 
            value={{ 
                connectWallet, 
                currentAccount, 
                formData, 
                setFormData, 
                handleChange, 
                sendTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}

