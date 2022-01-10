import Image from 'next/image';
import React from 'react'
import { useMoralis } from 'react-moralis';
const {user,logout }= useMoralis();
function Avatar({username, logoutOnPress}) {
    


    return (
        <Image className='rounded-full bg-black cursor-pointer hover:opacity-75'
            src={`https://avatars.dicebear.com/api/avataaars/${username || user.get('username')}.svg`}
            alt='avatar'
            onClick={()=>logoutOnPress && logout()}
            layout='fill'
        />
      
    )
}

export default Avatar
