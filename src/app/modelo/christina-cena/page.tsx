"use client"
import { Button } from "@/app/_components/ui/button"
import { Card, CardContent } from "@/app/_components/ui/card"
import { BadgeCheckIcon, ChevronLeftIcon, MenuIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"

const ChristinaCena = () => {
  const itens = [
    {
      video:
        "https://gallery0.dditscdn.com/9fc9731a64b517c9ba87dae9012515d41c/863c1e8e237d6166e8c3a0954f44cdae.mp4",
      usuario: "Christina cena",
      nome: "Chamada de vídeo e conteúdos",
      link: "/modelo/rebeca-santos",
    },
  ]

  // GALERIA MISTA (FOTOS + VIDEOS)
  const midia = [
    {
      tipo: "video",
      src: "https://gallery.dditscdn.com/public/17/f940c2e1760f5486c1b979abeedd6bee.mp4",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/19/843d64fdcc67ff6dfb6135a03457403c.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/14/5be064ac3f69b652b095b1c516773e92.jpg",
    },
    {
      tipo: "foto",
      src: "https://img.dditscdn.com/ff268cab8d9fbae1ed7506f97496274f1a/a29c56de8e67a284fe13fb8c106ca633_glamour_1024x576.jpg?cno=c16e",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/17/234536d5eea5fed65979d7173f014630.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/11/7c06e075d51c3a9535fec856dba9f1e9.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/16/28e88d911aad3a348582c89ed126a7ab.jpg",
    },

    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/19/936786debeee51f521b5e5b3847caff3.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/1f/d4fe2516c624379979ca1e7d239dc42b.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/15/76968dbd741d85aa2619ac2ca43defdd.jpg",
    },
    {
      tipo: "foto",
      src: "https://gallery.dditscdn.com/public/1e/34ca8727c2aee27d44e8880aa5491d3c.jpg",
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

export default ChristinaCena
