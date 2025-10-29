"use client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"
import { Button } from "./ui/button"

const Carroceloferta = () => {
  const itens = [
    {
      img: "/perfildani4.png",
      usuario: "Daniela Lima",
      nome: "5 minutos 30,00",
    },
    { img: "/perfil1.jpg", usuario: "Amanda Ribeiro", nome: "7 minutos 35,00" },
    {
      img: "/perfildani2.jpeg",
      usuario: "Luiza Sonza",
      nome: "20 minutos 70,00",
    },
    {
      img: "/perfil2.jpg",
      usuario: "Beatriz Henrique",
      nome: "10 minutos 50,00",
    },
  ]

  return (
    <div className="-ml-2 w-full overflow-x-auto [&::-webkit-scrollbar]:hidden">
      <div className="flex gap-3">
        {itens.map((item, index) => (
          <Card
            key={index}
            className="w-[159px] flex-shrink-0 rounded-xl shadow-[0_0_20px_-8px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-transform duration-150 hover:scale-[1.00]"
          >
            <CardContent className="p-2">
              {/* IMAGEM */}
              <div className="relative h-[179px] w-full overflow-hidden rounded-lg">
                <Image
                  alt={item.usuario}
                  src={item.img}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
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
              <Button variant="secondary" className="mt-3 w-full">
                Reservar
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Carroceloferta
