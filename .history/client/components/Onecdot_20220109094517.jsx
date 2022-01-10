import React from 'react'
import axios from 'axios'
ONECDOT_KEY='b9ec0ef1-d959-442f-905a-92cdad366fa0'
ONECDOT_API='https://api.onec.in/api/v1/nass/mintNFT'

useEffect(() => {
    axios.post(ONECDOT_API, {
        "nft_id": "0x0000000000000000000000000000000000000000",
        "nft_name": "NFTasker",
        "nft_symbol": "NFT",
        "nft_uri": "https://onec.in/nftasker",
        "nft_description": "This is World`&apos;s First Gamified Todo Dapp with Blockchain implementation and NFTs as Rewards.",
        "nft_image": "https://info.trello.com/hubfs/Imported_Blog_Media/gamification_of_life-1024x512.jpg",
        "nft_image_uri": "https://info.trello.com/hubfs/Imported_Blog_Media/gamification_of_life-1024x512.jpg",
        "nft_image_uri_small": "https://info.trello.com/hubfs/Imported_Blog_Media/gamification_of_life-1024x512.jpg",
        "nft_image_uri_medium": "https://info.trello.com/hubfs/Imported_Blog_Media/gamification_of_life-1024x512.jpg",
        
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
