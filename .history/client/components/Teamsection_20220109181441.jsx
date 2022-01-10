import React from 'react'
import  Image  from 'next/image'
const Teamsection = () => {
    return (
<div className='flex flex-row flex-auto  w-full '>
    
    <div className="flex flex-row flex-1  text-white  p-2 gap-6 place-content-center items-center bg-glassmorphism-welcome" >
        <div className="p-2 h-auto w-64 eth-card white-glassmorphism space-x-2 space basis-1/5  md:basis-1/5">
            <div className='relative p-5'>
                <Image className='h-52 w-64 m-auto object-cover' src='https://www.notion.so/cdn-cgi/image/format=auto,width=664,quality=100/front-static/pages/product/home-page-hero-refreshed-v3.png' layout='fill 'alt=''></Image>
                <h1 className='text-center  font-bold text-3xl '>Individual</h1>
                <p className=' text-inline capitalize mt-2 text-white font-light text-l'>Individual person can create their own ToDo list and assign their Good and Bad habits</p>
            </div>
        </div>

        <div className="p-2 h-auto eth-card white-glassmorphism space-x-2 space basis-1/5 md:basis-1/5 ">
            <div className='relative p-5'>
                <Image className='h-52 w-64 m-auto object-cover' src='https://www.notion.so/cdn-cgi/image/format=auto,width=664,quality=100/front-static/pages/product/home-page-hero-refreshed-v3.png'alt=''></Image>
                <h1 className='text-center font-bold text-3xl '>Team</h1>
                <p className=' text-inline capitalize mt-2 text-white font-light text-l'>Join or Create your own Group and set you resolution and follow and win NFTs</p>
            </div>
        </div>

        <div className="p-2 h-auto white-glassmorphism eth-card space-x-2 space basis-1/5 md:basis-1/5 ">
            <div className='relative p-5'>
                <Image className='h-52 w-64 m-auto object-cover' src='https://www.notion.so/cdn-cgi/image/format=auto,width=664,quality=100/front-static/pages/product/home-page-hero-refreshed-v3.png'alt=''></Image>
                <h1 className='text-center text-xl '>Join Organisation</h1>
                <p className=' text-inline capitalize mt-2 text-white font-light text-l'>Create tracks for you teambers and track then then verify then to set the score Board</p>
            </div>
        </div>

        <div className="p-2 h-auto white-glassmorphism eth-card space-x-2 space basis-1/5 md:basis-1/5 ">
            <div className='relative p-5'>
                <Image className='h-52 w-64 m-auto object-cover' src='https://www.notion.so/cdn-cgi/image/format=auto,width=664,quality=100/front-static/pages/product/home-page-hero-refreshed-v3.png' alt=''></Image>
                <h1 className='text-center text-xl '>Win NFTs</h1>
                <p className=' text-inline capitalize mt-2 text-white font-light text-l'>You will get NFTs as rewards,<br />Top 5 members will get rare NTFs Weekly</p>
            </div>
        </div>


        
        
        
    </div>
</div>
    )
}

export default Teamsection