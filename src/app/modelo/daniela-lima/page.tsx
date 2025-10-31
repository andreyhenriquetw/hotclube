"use client"
import { Button } from "@/app/_components/ui/button"
import { Card, CardContent } from "@/app/_components/ui/card"
import { BadgeCheckIcon, ChevronLeftIcon, MenuIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"

const DanielaLima = () => {
  const itens = [
    {
      video: "https://hotclube.s3.sa-east-1.amazonaws.com/callme.mp4",
      usuario: "Rebeca Santos",
      nome: "Chamada de vídeo e conteúdos",
      link: "/modelo/rebeca-santos",
    },
  ]

  // GALERIA MISTA (FOTOS + VIDEOS)
  const midia = [
    {
      tipo: "video",
      src: "https://hotclube.s3.sa-east-1.amazonaws.com/videoo22.mp4",
    },
    {
      tipo: "foto",
      src: "https://hotclube.s3.sa-east-1.amazonaws.com/perfildani2.jpeg",
    },
    {
      tipo: "foto",
      src: "https://hotclube.s3.sa-east-1.amazonaws.com/perfildani4.png",
    },
    {
      tipo: "foto",
      src: "https://hotclube.s3.sa-east-1.amazonaws.com/perfil1.jpg",
    },
    {
      tipo: "foto",
      src: "https://hotclube.s3.sa-east-1.amazonaws.com/perfil3.jpg",
    },
    {
      tipo: "foto",
      src: "https://hotclube.s3.sa-east-1.amazonaws.com/perfildani2.jpeg",
    },
    {
      tipo: "foto",
      src: "https://hotclube.s3.sa-east-1.amazonaws.com/perfildani4.png",
    },
    {
      tipo: "video",
      src: "https://hotclube.s3.sa-east-1.amazonaws.com/videoo33.mp4",
    },
    {
      tipo: "foto",
      src: "https://hotclube.s3.sa-east-1.amazonaws.com/perfil3.jpg",
    },
    {
      tipo: "foto",
      src: "https://hotclube.s3.sa-east-1.amazonaws.com/perfildani2.jpeg",
    },
    {
      tipo: "foto",
      src: "https://hotclube.s3.sa-east-1.amazonaws.com/perfildani2.jpeg",
    },
    {
      tipo: "foto",
      src: "https://hotclube.s3.sa-east-1.amazonaws.com/perfildani4.png",
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
              <p className="mt-4 flex items-center justify-center gap-1 text-[15px] font-medium text-gray-200">
                {item.usuario}
                <BadgeCheckIcon size={16} className="text-blue-500" />
              </p>

              {/* WHATS */}
              <p className="mt-2 flex items-center justify-center gap-2 text-[14px] text-gray-300">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                  <FaWhatsapp size={11} color="white" />
                </span>
                {item.nome}
              </p>

              {/* BOTÃO */}
              <Link href={item.link}>
                <Button variant="secondary" className="mt-4 w-full">
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

          <div className="flex flex-col gap-3">
            <Button
              variant="secondary"
              className="w-full bg-pink-600 hover:bg-pink-700"
            >
              💖 Assinatura Mensal – R$19,90
            </Button>
            <Button
              variant="secondary"
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              💎 Assinatura Trimestral – R$49,90
            </Button>
            <Button
              variant="secondary"
              className="w-full bg-indigo-600 hover:bg-indigo-700"
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
            Galeria da Modelo
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

export default DanielaLima
