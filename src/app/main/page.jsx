import React from 'react'
import './main.css'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,200" />
        <div class="screen">
            <div class="road"></div>
        </div>
        <div className='absolute lg:left-10 lg:top-64 top-52 lg:h-64 lg:w-64 h-32 w-32'>
                <a href="/main/web">
                <Image
                src="https://png.pngtree.com/png-vector/20190319/ourmid/pngtree-vector-web-icon-png-image_847779.jpg"
                height={220}
                width={220} 
                />
                </a>
                <p className='ibm-plex-mono-medium lg:text-2xl text-xl ml-2'>Web Development Projects</p>
            </div>
           <a href="/main/app">
           <div className='absolute lg:left-80 lg:top-64 top-130 lg:h-64 lg:w-64 h-32 w-32'>
            <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp4UxcUIekEUHtGhSIbNBjnyiBHuGGRFQlDA&s"
                height={220}
                width={220} 
                />
                <div>
                <p className='ibm-plex-mono-medium lg:text-2xl text-xl ml-2'>App Development Projects</p>
                </div>
            </div>
           </a>
            <a href="/main/iot">
            <div className='absolute lg:right-80 lg:top-64 top-10 right-2 lg:h-64 lg:w-64 h-32 w-32'>
            <Image
                src="https://cdn-icons-png.freepik.com/512/5969/5969235.png"
                height={200}
                width={200} 
                />
                <p className='ibm-plex-mono-medium lg:text-2xl text-xl ml-2 mt-4'>Automation Projects</p>
            </div>
            </a>
            <a href="/main/console">
            <div className='absolute lg:right-14 lg:top-72 top-96 right-2 lg:h-64 lg:w-64 h-32 w-32'>
            <Image
                src="https://icon-library.com/images/controller-icon-white/controller-icon-white-22.jpg"
                height={200}
                width={200} 
                />
                <p className='ibm-plex-mono-medium lg:text-2xl text-xl ml-2 mt-12'>Game Development Projects</p>
            </div>
            </a>
    </div>
  )
}

export default page
