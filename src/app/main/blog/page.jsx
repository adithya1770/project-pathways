import React from 'react'
import Image from 'next/image'
import '../web.css'
import './hiding.css'
import Data from '../data/blog-content.json';

const page = () => {
  return (
    <div className='lg:overflow-hidden'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <header>
      <h1 className='lg:text-9xl lg:ml-135 lg:mt-10 ibm-plex-mono-medium text-9xl mt-10'>Blogs</h1>
      <h1 className='text-8xl absolute lg:top-10 lg:left-20'>:)</h1>
      </header>
      {
        Data.map((snippet) => (
          <div key={snippet.key} className='lg:w-224 text-white bg-white lg:mt-14 lg:ml-80 rounded-xl font-mono m-10 mt-40 pb-2 lg:pb-10'>
            <br />
            <details className='lg:m-10 bgm rounded-2xl lg:p-6 m-2'>
              <summary className='font-bold lg:text-3xl m-4 text-4xl pt-4'>
                {snippet.title}
              </summary>
              <p className='italic lg:mt-2 m-4 text-2xl font-serif'>
                {snippet.desc}
              </p>
              <p className=' lg:mt-4 m-4'>
                Stack Used - {snippet.Tech_used}
                <br />
                Projects - {snippet.projects}
              </p>
              <p className=' lg:mt-4 m-4 font-bold pb-3'>
                {snippet.date}
              </p>
            </details>
          </div>
        ))
      }
      <a href="/">
      <span className="material-symbols-outlined"><p className='text-4xl absolute lg:bottom-4 right-44 lg:right-8 lg:h-12 lg:w-12 lg:pl-1 lg:rounded-3xl lg:text-black lg:bg-white'>home</p></span>
      </a>
    </div>
  )
}

export default page
