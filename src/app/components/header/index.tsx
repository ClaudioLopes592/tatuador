import Link from "next/link"

export function Header() {
    return (
        <header className="w-full flex items-center px-2 py-4 bg-zinc-900 h-20 shadow-md">
            <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
                <Link href='/'>
                    <p className="font-bold text-white text-lg pl-1 hover:tracking-widest duration-300 md:text-2xl">
                        Sandro <span className="text-yellow-500 text-sm md:text-2xl">Luz</span>
                    </p>
                    <p className="text-white font-semibold text-sm md:text-lg">Tattoo</p>
                    <p className="text-white font-semibold text-sm md:text-lg">Shop</p>
                </Link>
                <div className="flex items-center justify-between gap-3 md:mr-9 md:gap-7">
                <Link href={'/servicos'}>
                    <span className="text-white text-sm md:text-xl">Serviços</span>
                </Link>
                <Link href={'/sobre'}>
                    <span className="text-white text-sm md:text-xl">Sobre Mim</span>
                </Link>
                <Link href={'/contato'}>
                    <span className="text-white text-sm md:text-xl">Contato</span>
                </Link>
                </div>
            </div>
        </header>
    )
}
