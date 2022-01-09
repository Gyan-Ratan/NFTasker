import React from 'react'
import axios from 'axios'
ONECDOT_KEY='b9ec0ef1-d959-442f-905a-92cdad366fa0'
ONECDOT_API='https://api.onec.in/api/v1/nass/mintNFT'

useEffect(() => {
    axios.post(ONECDOT_API, {
        "nft_id": "0x0000000000000000000000000000000000000000",
    const getClientSecret = async () => {
        const response = await axios({
            method: 'post',
            url: `${ONECDOT_API}`,
        })
        setClientSecret(response.data.clientSecret);
    }
    getClientSecret();
}, []);
const Onecdot = () => {
    return (
        <div>
            <form id="form" method='post'>
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="email" placeholder="Email" />


            </form>

        </div>
    )
}

export default Onecdot
