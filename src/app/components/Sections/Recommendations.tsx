import Image from 'next/image'
import React from 'react'

const Recommendations = () => {
  return (
    <section
      id="recommendations"
      className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-[#111] p-6 gap-10"
    >
      <h2 className="text-4xl font-bold font-space">Só no Disney+</h2>
      <div className="flex flex-col md:flex-row gap-4 flex-wrap justify-center">
        <Image
          src="/Images/poster1.png"
          alt="The Mandalorian"
          width={300}
          height={200}
          className="w-[200px]"
        />
        <Image
          src="/Images/poster2.png"
          alt="The Mandalorian"
          width={300}
          height={287}
          className="w-[200px]"
        />
        <Image
          src="/Images/poster3.png"
          alt="The Mandalorian"
          width={300}
          height={287}
          className="w-[200px]"
        />
        <Image
          src="/Images/poster4.png"
          alt="The Mandalorian"
          width={300}
          height={287}
          className="w-[200px]"
        />
        <Image
          src="/Images/poster5.png"
          alt="The Mandalorian"
          width={300}
          height={287}
          className="w-[200px]"
        />
      </div>
    </section>
  )
}

export default Recommendations
