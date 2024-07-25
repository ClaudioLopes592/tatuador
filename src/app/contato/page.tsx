import foto from '@/assets/tattoo.webp'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from "react-icons/fa"

export default function Contato() {
    return (
        <div className="flex flex-col p-2 h-full bg-zinc-900 text-white md:h-full">
            <div className='flex flex-col md:flex-row md:px-8 md:p-8'>
                <article className="md:flex-2 md:mr-40">
                    <h1 className='text-2xl font-bold mt-7 mb-5 md:text-4xl'>
                        Entre em
                        <span className='text-yellow-400 font-bold'> Contato</span>
                    </h1>
                    <h2 className='text-sm mb-2 md:text-xl md:mb-4'>Clique no botão abaixo e envie uma mensagem.</h2>
                    <h2 className='text-sm mb-6 md:text-xl md:mb-4'>Vamos conversar!</h2>
                    <div className='flex items-center w-52 p-2 rounded-lg mb-5 gap-2 md:mt-8 bg-gray-700'>
                        <FaWhatsapp size={20} color='#fff'/>
                        <Link href='https://www.whatsapp.com/?lang=pt_BR' target='_blank'>
                            <button 
                            className='text-xl'>
                                Enviar Whatsapp
                                <p className='text-xs'>(+55 11 999999999)</p>
                            </button>
                        </Link>
                    </div>
                </article>
                <article className="md:flex-1">
                    <Image
                        src={foto}
                        alt="foto tatuador"
                        priority
                        quality={100}
                        className="max-w-sm md:max-w-xl h-full w-auto md:h-screen"
                    />
                </article>
            </div>
        </div>
    )
}
