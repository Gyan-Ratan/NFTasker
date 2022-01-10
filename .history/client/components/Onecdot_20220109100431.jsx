import React from 'react'
import axios from 'axios'
ONECDOT_KEY='b9ec0ef1-d959-442f-905a-92cdad366fa0'
ONECDOT_API='https://api.onec.in/api/v1/naas/mintNFT/'

useEffect(() => {
    axios.post(ONECDOT_API, {
        {
            "metadata_list": [
                
              {
                "public_address": "string",
                "metadata": {
                  "additionalProp1": "string"
                  
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

