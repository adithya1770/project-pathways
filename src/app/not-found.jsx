import React from 'react'
import Image from 'next/image'

const notFound = () => {
  return (
    <div>
      <Image
      src="https://www.prestashop.com/sites/default/files/wysiwyg/404_not_found.png"
      width={600}
      height={600}
      className='absolute lg:left-120 mt-32' 
      />
    </div>
  )
}

export default notFound
