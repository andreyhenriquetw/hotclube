"use client"
import { Card, CardContent } from "./ui/card"
import { FaWhatsapp } from "react-icons/fa"
import { Button } from "./ui/button"
import Link from "next/link"

const Carrocelvideo = () => {
  const itens = [
    {
      video:
        "https://gallery.dditscdn.com/public/10/1270a4f37363b530007e9d623280d4df.mp4",
      usuario: "Hellen Freitas",
      nome: "Chamada de vídeo",
      link: "/modelo/hellen-freitas",
    },
    {
      video:
        "https://gallery.dditscdn.com/public/11/dce09bb7177d8f8b27d1e0a4e3132acd.mp4",
      usuario: "Erica Boture",
      nome: "Chamada de vídeo",
      link: "/modelo/erica-boture",
    },
    {
      video:
        "https://gallery0.dditscdn.com/9fc9731a64b517c9ba87dae9012515d41c/863c1e8e237d6166e8c3a0954f44cdae.mp4",
      usuario: "Chistinha cena",
      nome: "Chamada de vídeo",
      link: "/modelo/christina-cena",
    },
    {
      video:
        "https://gallery.dditscdn.com/public/11/979f6a782adbd715b0cf858cefdb3fee.mp4",
      usuario: "Cassandra Oliver",
      nome: "Chamada de vídeo",
      link: "/modelo/cassandra-oliver",
    },
  ]

  return (
    <div className="-ml-2 w-full overflow-x-auto [&::-webkit-scrollbar]:hidden">
      <div className="flex gap-3">
        {itens.map((item, index) => (
          <Card
            key={index}
            className="w-[259px] flex-shrink-0 rounded-xl shadow-[0_0_20px_-8px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-transform duration-150 hover:scale-[1.00]"
          >
            <CardContent className="p-2 pb-3">
              {/* VÍDEO */}
              <div className="relative h-[179px] w-full overflow-hidden rounded-lg">
                <video
                  src={item.video}
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              {/* NOME DO USUÁRIO */}
              <p className="mt-2 text-center text-[14px] font-medium text-gray-200">
                {item.usuario}
              </p>

              {/* TEMPO + VALOR + WHATS APP */}
              <p className="mt-1 flex items-center justify-center gap-2 font-sans text-[14px] text-gray-400">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/30">
                  <FaWhatsapp size={13} color="white" />
                </span>
                {item.nome}
              </p>

              {/* BOTÃO */}
              <Link href={item.link}>
                <Button variant="secondary" className="mt-3 w-full">
                  Reservar
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Carrocelvideo
