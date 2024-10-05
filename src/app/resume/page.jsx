import React from 'react'
import Image from 'next/image'

const resume = () => {
  return (
    <div>
      <Image
      src="/resume.png" 
      width={700}
      height={400}
      className="ml-120"
      />
    </div>
  )
}

export default resume
