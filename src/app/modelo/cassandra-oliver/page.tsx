"use client"
import { Button } from "@/app/_components/ui/button"
import { Card, CardContent } from "@/app/_components/ui/card"
import { BadgeCheckIcon, ChevronLeftIcon, MenuIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"

const CassandraOliver = () => {
  const itens = [
    {
      video:
        "https://gallery.dditscdn.com/public/11/979f6a782adbd715b0cf858cefdb3fee.mp4",
      usuario: "Cassandra Oliver",
      nome: "Chamada de vídeo e conteúdos",
      link: "https://go.perfectpay.com.br/PPU38CQ2QR2",
    },
  ]

  // GALERIA MISTA (FOTOS + VIDEOS)
  const midia = [
    {
      tipo: "video",
      src: "https://gallery.dditscdn.com/public/16/6ee02c7b43ce28fbef2d07636e77b0ee.mp4",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/1a/f521cc155f113aa3d32fc6f0b0e18dcd.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/1c/4759686a098136e79d298dbd5b8d7a62.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/1c/735a5cabfedd05cd2bb20fc166df8bb3.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/14/e88fa0d9b5c644af37cc91b54095577a.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/15/d83d9f08898e33bc6698b2b73ad7b179.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/1e/cf189ff93eccb80d881c76201db814d4.jpg",
    },

    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/11/eb7a153f239f47e0878f25fd1afd681d.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/1a/c811dd4afeff35ae76ba833ac699a997.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/1f/3b8c161e2cf1e54b3d1cc695262af9fe.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/15/6048977273173e2e724edd31c92839da.jpg",
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

export default CassandraOliver
