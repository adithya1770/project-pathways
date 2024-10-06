import React from 'react'
import Image from 'next/image'

const resume = () => {
  return (
    <div>
      <Image
      src="/resume.png" 
      width={700}
      height={400}
      className="lg:ml-110 lg:mt-10 mt-32"
      />
      
    </div>
  )
}

export default resume
