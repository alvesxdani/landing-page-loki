import { Archivo, Space_Grotesk } from 'next/font/google'

const grotesk = Space_Grotesk({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--space-grotesk',
})

const archivo = Archivo({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--archivo',
})

export { grotesk, archivo }
