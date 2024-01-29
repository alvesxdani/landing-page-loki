import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <header className='flex justify-between items-center w-full h-[100px] bg-white p-3'>
      <Image
       src="/Images/logo-disney.png"
       alt="Disney Logo"
       width={190}
       height={80}
       className='w-[90px]'
       priority={true}
      />
      <Button theme='full' size='small'>Assine agora</Button>
    </header>
  )
}

export default Header