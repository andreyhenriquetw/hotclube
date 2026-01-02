"use client"
import { Button } from "@/app/_components/ui/button"
import { Card, CardContent } from "@/app/_components/ui/card"
import { BadgeCheckIcon, ChevronLeftIcon, MenuIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"

const ValeriaBrito = () => {
  const itens = [
    {
      video:
        "https://gallery.dditscdn.com/public/16/c89ee993f5b58d1f2a0fea915290ba1b.mp4",
      usuario: "Valeria Brito",
      nome: "Chamada de vídeo e conteúdos",
      link: "/modelo/rebeca-santos",
    },
  ]

  // GALERIA MISTA (FOTOS + VIDEOS)
  const midia = [
    {
      tipo: "video",
      src: "https://gallery.dditscdn.com/public/12/6f6e64f5d96d2cc1460027d86bbfdbeb.mp4",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/1c/cb4343b94782a631f7c8da4fd358fb15.jpg",
    },
    {
      tipo: "foto",
      src: "https://img.dditscdn.com/ff268cab8d9fbae1ed7506f97496274f15/58bc4d4580e29e5b1523412efd454a28_glamour_1024x576.jpg?cno=763c",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/18/534b2554524d4bc22dab2857e71623b5.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/19/54ac4735e25143ace73d8712b7c9f9b1.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/16/295d36501f33d407894c1bb7b729c4a1.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/1d/9ae33ffbf3a4df2b30b806e3402962bb.jpg",
    },

    {
      tipo: "video",
      src: "https://gallery.dditscdn.com/public/12/27bb2b2448c6f8aa5b0daa8b625efc98.mp4",
    },

    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/1f/d342ecec8091ade61712d1e96c573f35.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/17/cc359621000becd465b36dab8690946d.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/15/176732b57aa46301485850734c582c04.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/1d/889d08879145c995745d858a533a7356.jpg",
    },
  ]

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center bg-black p-0">
      {/* === CARD PRINCIPAL (VÍDEO) === */}
      <div className="flex justify-center">
        {itens.map((item, index) => (
          <Card
            key={index}
            className="mt-4 h-[650px] w-[360px] overflow-hidden rounded-xl md:w-[430px] lg:w-[480px]"
          >
            <CardContent className="p-2 pb-3">
              {/* VÍDEO */}
              <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
                <video
                  src={item.video}
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />

                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute left-2 top-2"
                >
                  <ChevronLeftIcon />
                </Button>

                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute right-2 top-2"
                >
                  <MenuIcon />
                </Button>
              </div>

              {/* NOME */}
              <p className="mt-4 flex items-center justify-center gap-1 text-[16px] font-medium text-gray-200">
                {item.usuario}
                <BadgeCheckIcon size={17} className="text-blue-500" />
              </p>

              {/* WHATS */}
              <p className="mt-2 flex items-center justify-center gap-2 text-[15px] text-gray-300">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                  <FaWhatsapp size={14} color="white" />
                </span>
                {item.nome}
              </p>

              {/* BOTÃO */}
              <Link href={item.link}>
                <Button
                  variant="secondary"
                  className="mt-4 w-full bg-green-500"
                >
                  INICIAR CHAMADA DE VÍDEO
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* === CARD DE ASSINATURAS === */}
      <Card className="mt-5 w-[360px] rounded-xl bg-zinc-900/70 p-4 text-center shadow-lg md:w-[430px] lg:w-[480px]">
        <CardContent>
          <h2 className="mb-4 text-lg font-semibold text-white">
            Planos de Assinatura
          </h2>

          <div className="flex flex-col gap-4">
            <Button
              variant="secondary"
              className="w-full bg-pink-600 text-[15px] hover:bg-pink-700"
            >
              💖 Assinatura Mensal – R$19,90
            </Button>
            <Button
              variant="secondary"
              className="w-full bg-purple-600 text-[15px] hover:bg-purple-700"
            >
              💎 Assinatura Trimestral – R$49,90
            </Button>
            <Button
              variant="secondary"
              className="w-full bg-indigo-600 text-[15px] hover:bg-indigo-700"
            >
              🔥 Assinatura Anual – R$159,90
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* === GALERIA COM FOTO + VÍDEO === */}
      <Card className="mb-10 mt-5 w-[360px] rounded-xl bg-zinc-900/70 p-4 text-center shadow-lg md:w-[430px] lg:w-[480px]">
        <CardContent>
          <h2 className="mb-4 text-lg font-semibold text-white">
            Amostra Grátis
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {midia.map((item, index) =>
              item.tipo === "video" ? (
                <div
                  key={index}
                  className="relative col-span-2 h-[200px] w-full overflow-hidden rounded-lg"
                >
                  <video
                    src={item.src}
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              ) : (
                <div
                  key={index}
                  className="relative h-[140px] w-full overflow-hidden rounded-lg"
                >
                  <Image
                    src={item.src}
                    alt={`Foto ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ),
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ValeriaBrito
