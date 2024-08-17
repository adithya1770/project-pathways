"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import './titleBar.css'

const TitleBar = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggleDropDown = () => setisOpen(!isOpen);
  return (
    <main>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,200" />
      <div className='h-44 w-full bg-white'>
        <p className='lg:text-7xl text-5xl ibm-plex-mono-medium tracking-wide text-black lg:pt-12 lg:pl-10 pt-9 lg:mt-0 mt-12 pl-4'>Adithya's Dev Journal</p>
      </div>
          <span className="material-symbols-outlined lg:text-black absolute lg:right-20 lg:top-14 top-2 right-8 text-white">
            <button onClick={toggleDropDown}><p className='lg:text-6xl text-2xl'>menu</p></button>
          </span>
          {isOpen && (
            <div className='absolute lg:right-20 lg:top-32 lg:text-white text-black rounded-xl right-8 top-10 p-4 backdrop-blur-md lg:backdrop-blur-xl ibm-plex-mono-medium border-2 border-white lg:p-4'>
              <a href="/main/blog">
              <p className='lg:text-3xl lg:mb-4 lg:pr-4 font-bold lg:hover:text-black hover:text-gray-400 pl-2'>My Blog!</p>
              </a>
              <hr />
              <a href="https://adithyaps.vercel.app/">
              <p className='lg:text-3xl lg:mb-4 lg:pr-4 lg:mt-4 font-bold lg:hover:text-black hover:text-gray-400 pl-2'>Know me!</p>
              </a>
            </div>
          )}
      <a href="https://github.com/adithya1770"><Image
      src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
      width={80}
      height={80} 
      className='fixed lg:absolute lg:right-44 lg:top-12 bottom-4 right-8 rounded-3xl text-white'
      /></a>
      <p className='text-white lg:text-8xl eb-garamond-400 absolute lg:top-72 lg:left-64 text-5xl top-72 left-4'>hiStrangeUser( );</p>
      <p className='ibm-plex-mono-medium lg:mt-64 lg:m-64 lg:mb-0 lg:sticky absolute top-80 m-8'><strong className='text-3xl eb-garamond-400'>H</strong>ey, I’m Adithya! I’m a CS student and a programmer in training. I’ve built an indie music app and a farmers portal—kind of like the “I’ll do it myself” meme, but with code. Right now, I’m diving into web development and app development. I’m also working on a personal website to share my coding journey. <a className="underline italic text-2xl font-bold" href="/main">Travel With Me!</a></p>
      <footer className='absolute lg:left-162 lg:bottom-10 bottom-2'>
          <a href="mailto:adithyaps929@gmail.com?subject=Query I had!"><span className="material-symbols-outlined"><p className='text-5xl lg:m-4 lg:mb-0 ml-4 m-2'>mail</p></span></a>
          <a href=""><span className="material-symbols-outlined"><p className='text-5xl lg:m-4 lg:mb-0 m-2'>forum</p></span></a>
          <a href="/resume"><span className="material-symbols-outlined"><p className='text-5xl lg:m-4 lg:mb-0 m-2'>person_book</p></span></a>
      </footer>
    </main>
  )
}

export default TitleBar
