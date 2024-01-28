import React from 'react'
import Image from 'next/image'

const Intro = () => {
  return (
    <section id='intro' className="flex flex-col justify-center items-center gap-32 w-full h-[100vh]">
      <div className="font-space text-white text-2xl">
        <p>ESTÁ DISPONÍVEL AGORA</p>
        <h1 className="font-bold text-8xl text-center">LOKI</h1>
      </div>
      <div className="flex gap-12 w-[1008px]">
        <Image
          src="/Images/capa.png"
          width={200}
          height={291}
          alt="Capa da série Loki"
          sizes="200px"
          priority={true}
        />
        <div className="flex flex-col gap-12">
          <p>
            Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston)
            retoma seu papel como o Deus do Mal em uma nova série que ocorre
            após os eventos de “Vingadores: Endgame”.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Intro