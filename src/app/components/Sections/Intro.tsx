import React from 'react'
import Image from 'next/image'
import { LuClock3 } from 'react-icons/lu'
import { FaStar } from 'react-icons/fa6'
import Button from '../Button'

const Intro = () => {
  return (
    <section
      id="intro"
      className="flex flex-col justify-center items-center gap-32 w-full min-h-[100vh] p-6"
    >
      <div className="font-space text-white text-2xl">
        <p>ESTÁ DISPONÍVEL AGORA</p>
        <h1 className="font-bold text-8xl text-center">LOKI</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-12 max-w-[800px] font-archivo justify-center items-center">
        <Image
          src="/Images/capa.png"
          width={200}
          height={291}
          className="w-[200px] md:w-[400px]"
          alt="Capa da série Loki"
          quality={80}
          priority={true}
        />
        <div className="flex flex-col gap-12">
          <p>
            Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston)
            retoma seu papel como o Deus do Mal em uma nova série que ocorre
            após os eventos de “Vingadores: Endgame”.
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <LuClock3 />
              {'51 min'}
            </div>
            <div className="flex items-center">
              <FaStar color="#FFD23F" />
              <FaStar color="#FFD23F" />
              <FaStar color="#FFD23F" />
              <FaStar color="#FFD23F" />
              <FaStar color="#FFD23F" opacity={0.5} />
            </div>
            <div className="font-bold">2021</div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-8">
            <Button size="medium" theme="full">
              Assistir agora
            </Button>
            <Button size="medium" theme="outline">
              Ver o trailer
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
