import Image from "next/image"
import { roboto, anton } from './fonts'
import retrato from '@/assets/retrato.webp'

export default function Home() {
  return (
    <main className="flex h-screen bg-zinc-900 min-h-[calc(100vh-80px)]">
      <div className=" flex w-full items-center justify-center relative">
        <h1 className={`text-8xl tracking-widest md:text-9xl text-zinc-800 absolute ${anton.className}`}>TATTOO</h1>
        <p className={`text-4xl mt-0 mr-16 md:text-6xl md:mr-5 text-zinc-600 absolute ${roboto.className}`}>INSPIRE-SE</p>
        <p className={`text-4xl mt-20 mr-6 md:mt-32 md:text-6xl md:ml-16 text-zinc-600 absolute ${roboto.className}`}>EXPRESSE-SE</p>
        <p className={`text-4xl mt-44 mr-24 md:text-6xl md:ml-8 md:mt-64 text-yellow-400 absolute ${roboto.className}`}>TATUE-SE</p>
        <Image
        src={retrato}
        alt="foto tatuador"
        priority
        quality={100}
        className="max-w-sm md:max-w-xl h-full w-auto md:ml-96"
        />
      </div>
    </main>
  )
}
