import { roboto, courgette } from '@/app/fonts'
import Image from 'next/image'
import foto from '@/assets/retrato.webp'

export default function Sobre() {
    return (
        <div className="flex flex-col p-2 h-full bg-zinc-900 text-white md:h-full">
            <h1 className={`${roboto.className} font-bold text-xl px-3 py-4 md:text-4xl md:ml-6 md:mt-10`}>
                Prazer, sou <span className="text-yellow-400">Sandro Luz</span>
            </h1>
            <div className='flex flex-col md:flex-row md:px-8 md:p-8'>
                <article className='md:flex-1'>
                    <p className='text-sm text-justify p-3 md:py-5'>
                        Olá! Sou Sandro Luz, apaixonado pela arte que transcende o tempo e se imprime na pele.
                        Com mais de 10 anos de experiência no mundo da tatuagem, dedico-me a transformar visões
                        e emoções em arte corporal que expressa quem você é e o que você ama.
                    </p>
                    <p className='text-sm text-justify p-3 md:py-5'>
                        Cada tatuagem em meu estúdio é um trabalho de colaboração; ouço atentamente os desejos e
                        as histórias de meus clientes para que cada peça seja única e pessoal. Especializo-me em
                        vários estilos, desde o delicado traço fino até composições mais robustas e coloridas,
                        garantindo que cada design não só atenda, mas supere as expectativas.
                    </p>
                    <p className='text-sm text-justify p-3 md:py-5'>
                        Além da dedicação à arte, a segurança e o conforto são prioridades no meu estúdio. Utilizo
                        apenas equipamentos esterilizados e de alta qualidade, e sou rigoroso quanto aos protocolos
                        de higiene e segurança, garantindo uma experiência segura e confortável para todos.
                    </p>
                    <p className='text-sm text-justify p-3 md:py-5'>
                        Visite meu estúdio e veja como a arte pode se manifestar em sua pele. Estou aqui para ajudá-lo
                        a contar sua história de uma maneira única e eterna. Agende sua consulta e vamos juntos criar
                        algo extraordinário!
                    </p>
                    <h1 className={`${courgette.className} text-3xl italic md:py-5 md:px-2`}>Sandro Luz</h1>
                </article>
                <article className='md:flex-2'>
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
