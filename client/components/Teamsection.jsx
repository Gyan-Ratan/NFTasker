import React from 'react'
const Teamsection = () => {
    return (
<div className='flex felx-col flex-1  w-full'>
    
    <div className="grid grid-cols-4 text-white gradient-bg-welcome w-full p-2 gap-6 place-content-center items-center bg-glassmorphism-welcome" >
        <div className="w p-2 h-96 white-glassmorphism space-x-2 space">
            <div className='h-48 w-64 m-auto rounded-sm'>
            <img className='h-48 w-64 rounded-sm object-cover' src='https://www.notion.so/cdn-cgi/image/format=auto,width=664,quality=100/front-static/pages/product/home-page-hero-refreshed-v3.png'></img>
                <h1 className='text-center text-xl '>Individual</h1>
            </div>
        </div>
        <div className="w h-96 p-2 white-glassmorphism space-x-2">
        <div className='h-48 w-64 m-auto rounded-sm  '>
                <img className='h-48 w-64 rounded-sm object-cover' src='https://www.notion.so/cdn-cgi/image/format=auto,width=664,quality=100/front-static/pages/product/home-page-hero-refreshed-v3.png'></img>
                <h1 className='text-center text-xl '>Team Collaboration</h1>
            </div>
        </div>
        <div className="w h-96 p-2 white-glassmorphism space-x-2">
        <div className='h-48 w-64 m-auto rounded-sm  '>
                <img className='h-48  w-auto rounded-sm object-cover' src='https://www.notion.so/cdn-cgi/image/format=auto,width=664,quality=100/front-static/pages/product/home-page-hero-refreshed-v3.png'></img>
                <h1 className='text-center text-xl '>Join Organisation</h1>
            </div>
        </div>

        <div className="w h-96 p-2 white-glassmorphism space-x-2">
        <div className='h-48 w-64 m-auto rounded-sm  '>
                <img className='h-48 w-64 rounded-sm object-cover' src='https://www.notion.so/cdn-cgi/image/format=auto,width=664,quality=100/front-static/pages/product/home-page-hero-refreshed-v3.png'></img>
                <h1 className='text-center text-xl '>Win NFTs</h1>
            </div>
        </div>
        
    </div>
</div>
    )
}

export default Teamsection