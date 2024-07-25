export default function Serviços() {
    return (
        <div className="flex flex-col p-2 bg-zinc-900 text-white md:h-screen">
            <h1 className="text-yellow-400 font-bold text-xl py-4 md:text-2xl md:ml-6 md:mt-10">Serviços</h1>
            <div className="md:grid grid-cols-4 md:text-white md:gap-x-5 md:gap-y-4 md:m-5">
                <div>
                    <h2 className="text-lg font-bold mt-2 mb-2">Tatuagens Personalizadas</h2>
                    <p className="text-justify mb-4 text-slate-500">
                        Oferecemos a criação de tatuategens personalizadas, onde cada design é desenvolvido
                        em colaboração diretacom o cliente. A partir de uma ideia inicial, trabalhamos juntos
                        para criar uma obra de arte única que reflete sua personalidade e sentimentos.
                    </p>
                </div>
                <div>
                    <h2 className="text-lg font-bold mt-2 mb-2">Cover-Up</h2>
                    <p className="text-justify mb-4 text-slate-500">
                        Especializamo-nos em transformar tatuagens antigas ou indesejadas em novas obras de arte.
                        Se você tem uma tatuagem que não representa mais quem você é, nós podemos ajuda-lo a
                        reformulá-la com um design criativo e original.
                    </p>

                </div>
                <div>
                    <h2 className="text-lg font-bold mt-2 mb-2">Restauração</h2>
                    <p className="text-justify mb-4 text-slate-500">
                        Com o tempo, algumas tatuagens podem desbotar ou perder a definição. Oferecemos serviços de
                        restauração para revitalizar sua tatuagem antiga, realçando as cores e contornos para que
                        ela volte a ter a aparência de quando foi feita pela primeira vez.
                    </p>

                </div>
                <div>
                    <h2 className="text-lg font-bold mt-2 mb-2">Henna</h2>
                    <p className="text-justify mb-4 text-slate-500">
                        Para aqueles que não estão prontos para um compromisso permanente ou desejam testar um design
                        antes de tatuá-lo definitivamente, oferecemos tatuagens temporárias de alta qualidade que
                        duram de algumas semanas a alguns meses.
                    </p>
                </div>
            </div>

        </div>
    )
}
