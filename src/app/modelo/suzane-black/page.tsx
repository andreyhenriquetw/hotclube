"use client"
import { Button } from "@/app/_components/ui/button"
import { Card, CardContent } from "@/app/_components/ui/card"
import { BadgeCheckIcon, ChevronLeftIcon, MenuIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"

const SuzaneBlack = () => {
  const itens = [
    {
      video:
        "https://gallery.dditscdn.com/public/15/3101c7d6e04e9c5cdea32105c83e61ee.mp4",
      usuario: "Suzane Blacke",
      nome: "Chamada de vídeo e conteúdos",
      link: "/modelo/rebeca-santos",
    },
  ]

  // GALERIA MISTA (FOTOS + VIDEOS)
  const midia = [
    {
      tipo: "video",
      src: "https://gallery.dditscdn.com/public/17/1cab89dce6a003012eb67b8221bb9d67.mp4",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/1b/436bc4987ee948892ff6ecc00e942b64.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/10/1b71ad99e863bae8b7b8c4bb2ea084b9.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/1f/4d52e544a41a4ab701b8f8515ccfafd6.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/17/86f4ee00e68dacaec6c3823c508d1804.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/1c/ff7523c1b87f72350ac8306d71412e18.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/1c/7db5dd996a4860d6b9afa964a5491606.jpg",
    },

    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/11/d9345fe435a44a39ba0943ea1b5d7b99.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/18/b234e90b63bad7335bb5eeef1f9db572.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/1c/d2b076129b948921b46c7fd55234ebf6.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/1b/fba075ce1f2b8612da1403bc9697d926.jpg",
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
            Algumas Amostra
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

export default SuzaneBlack
