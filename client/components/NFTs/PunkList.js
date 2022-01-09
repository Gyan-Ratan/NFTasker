import React from 'react'
import CollectionCard from './CollectionCard'
import './PunkList.css'
const PunkList = ({ punkListData,setSelectedPunk }) => {
    // const [selectedPunk,setSelectedPunk] = useState(0)
    return (
        <div className='punkList'>
            {punkListData.map(punk => (
                <div onClick={()=> setSelectedPunk(punk.token_id)}>
                    <CollectionCard
                    key={punk.token_id} 
                    id={punk.token_id}
                    name={punk.name}
                    image={punk.image_original_url}
                    traits={punk.traits}
                    />
                </div>
            ))}
        </div>
    )
}

export default PunkList
