import React from 'react'

const shortenAddress = (address) => 
    `${address.slice(0, 6)}...${address.slice(address.length - 4)}`;


export default shortenAddress

