import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <Image
      src="https://github.com/adithya1770/embedded-with-pi/raw/main/raspy1.jpeg" 
      width={500}
      height={500}
      className='inline-block'
      />
      <Image
      src="https://github.com/adithya1770/embedded-with-pi/raw/main/raspy2.jpeg"
      width={500}
      height={500} 
      className='inline-block Lg:pt-0 pt-4'
      />
      <a href="/">
      <span class="material-symbols-outlined"><p className='text-4xl absolute lg:bottom-4 right-40 lg:right-8 lg:h-12 lg:w-12 lg:pl-1 lg:rounded-3xl lg:text-black lg:bg-white'>home</p></span>
      </a>
    </div>
  )
}

export default page
