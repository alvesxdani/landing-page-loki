import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex justify-between items-center w-full h-[80px] p-4 bg-white">
      <Image
        src="/Images/logo-disney.png"
        alt="Disney Logo"
        width={190}
        height={80}
        className="w-[90px]"
        priority={true}
      />
      <p className='text-black'>Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer