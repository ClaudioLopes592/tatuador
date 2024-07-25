import { FaWhatsapp } from "react-icons/fa"

export function Footer() {
    return (
        <footer className="flex flex-col w-full bg-zinc-950 gap-3 p-3 md:flex-row md:items-center md:justify-center md:gap-x-3">
            <p className="text-sm text-white">Sandro Luz Tatoo Shop 
                <span className="text-3xl text-yellow-500 font-bold"> . </span></p>
            <p className="text-sm text-white">Rua Limoeiro, 1000 - Catalão - SP 
                <span className="text-3xl text-yellow-500 font-bold"> . </span></p>
            <p className="flex md:mt-3">
                <FaWhatsapp size={24} color="#fff" />
                <span className="text-sm text-white">(+55 11)999999999</span>
            </p>
        </footer>
    )
}
