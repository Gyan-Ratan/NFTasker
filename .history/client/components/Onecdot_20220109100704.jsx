import React from 'react'
import axios from 'axios'
import {}
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
useEffect(() => {
    axios.post(ONECDOT_API, {
        {
            "metadata_list": [

              {
                "public_address": "string",
                "metadata": {
                  "name": "NFTASKER",
                  "image": "https://www.notion.so/cdn-cgi/image/format=auto,width=664,quality=100/front-static/pages/product/home-page-hero-refreshed-v3.png"
                    
                  
                }
              }
            ]
          })
        .then(function (response) {
            console.log(response);
        }
    )
    .catch(function (error) {
        console.log(error);
    });
}, [])
      
export default Onecdot

