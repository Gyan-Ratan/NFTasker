import React from 'react'
import axios from 'axios'
import {useWeb3React} from '@web3-react/core'
import {shortenAddress} from '../utils/shortenAddress'
ONECDOT_KEY='b9ec0ef1-d959-442f-905a-92cdad366fa0'
ONECDOT_API='https://api.onec.in/api/v1/naas/mintNFT/'

const {active,account,library, connector, activate,deactivate}=useWeb3React()
    
    async function connect(){
        try{
            await activate(injected)
        }catch(e){
            console.log(e)
        }
        
    }

    const headers = 
    { 
            'NAAS-APIKEY':'b9ec0ef1-d959-442f-905a-92cdad366fa0',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':  'POST',
            }
            
useEffect(() => {
    axios.post(ONECDOT_API, {
        {
            "metadata_list": [

              {
                "public_address": `${shortenAddress(account)}`,
                "metadata": {
                  "name": "NFTASKER",
                  "image": "https://www.notion.so/cdn-cgi/image/format=auto,width=664,quality=100/front-static/pages/product/home-page-hero-refreshed-v3.png", 
                }
              }
            ],
        }
        .then(function (response) {
            console.log(response);
        }
    )
    .catch(function (error) {
        console.log(error);
    }) ;
}, [account])
// {active ? `${shortenAddress(account)}` : 'Connect Wallet'}

const Onecdot = () => {
    return (
        <div>
            <button onClick={connect}>Connect</button>
        </div>
    )
}

export default Onecdot


