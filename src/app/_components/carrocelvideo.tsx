"use client"
import { Card, CardContent } from "./ui/card"
import { FaWhatsapp } from "react-icons/fa"
import { Button } from "./ui/button"
import Link from "next/link"

const Carrocelvideo = () => {
  const itens = [
    {
      video: "https://hotclube.s3.sa-east-1.amazonaws.com/videoo22.mp4",
      usuario: "Rebeca Santos",
      nome: "Chamada de vídeo",
      link: "/modelo/rebeca-santos",
    },
    {
      video: "https://hotclube.s3.sa-east-1.amazonaws.com/video11.mp4",
      usuario: "Ana Clara",
      nome: "Chamada de vídeo",
      link: "/modelos/ana-clara",
    },
    {
      video: "https://hotclube.s3.sa-east-1.amazonaws.com/videoo33.mp4",
      usuario: "Lara Silva",
      nome: "Chamada de vídeo",
      link: "/modelos/lara-silva",
    },
    {
      video: "https://hotclube.s3.sa-east-1.amazonaws.com/videoo44.mp4",
      usuario: "Maria Eduarda",
      nome: "Chamada de vídeo",
      link: "/modelos/maria-eduarda",
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
              <p className="mt-2 text-center text-[13px] font-medium text-gray-200">
                {item.usuario}
              </p>

              {/* TEMPO + VALOR + WHATS APP */}
              <p className="mt-1 flex items-center justify-center gap-2 font-sans text-[13px] text-gray-400">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/30">
                  <FaWhatsapp size={11} color="white" />
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
