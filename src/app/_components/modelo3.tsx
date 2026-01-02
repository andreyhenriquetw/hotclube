import Image from "next/image"

import { Avatar } from "./ui/avatar"
import { Card, CardContent } from "./ui/card"

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { useRef } from "react"
import { Button } from "./ui/button"
import { AlarmClockIcon, BadgeCheckIcon } from "lucide-react"
import Link from "next/link"

const Modelo3 = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null)

  return (
    <Card className="mt-4 h-[600px] w-full">
      <CardContent className="flex justify-between">
        {/* DIV DA ESQUERDA */}
        <div className="flex flex-col gap-2 py-5">
          <div className="flex items-center gap-2">
            <Avatar className="-ml-2 h-10 w-10">
              <Image
                alt="perfildani"
                src="https://gallery.dditscdn.com/public/17/fff68250cb099369fbfe0e996956d0d5.jpg"
                fill
                className="object-cover"
              />
            </Avatar>

            {/* Nome e título em coluna */}
            <div className="flex flex-col leading-tight">
              <div className="flex items-center gap-1">
                <p className="text-sm font-thin">Valeria Brito</p>
                <BadgeCheckIcon size={16} className="text-blue-500" />
              </div>
              <h1 className="text-nowrap text-[13px] font-extralight text-gray-400">
                @valeriaofc
              </h1>
            </div>
          </div>
        </div>

        {/* DIV DA DIREITA */}
        <div className="flex items-center justify-center gap-1">
          <AlarmClockIcon size={14} className="text-gray-300" />
          <p className="text-xs text-gray-400">23:29</p>
        </div>
      </CardContent>

      {/* --- IMAGENS EM CARROSSEL --- */}

      <div className="relative -mt-7 h-[450px] w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop
          autoplay={{
            delay: 4000,
            disableOnInteraction: false, // continua mesmo se clicar nas setas
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="h-full w-full"
        >
          <SwiperSlide>
            <div className="relative h-full w-full">
              <Image
                alt="perfildani2"
                src="https://hotclube.s3.sa-east-1.amazonaws.com/fasdadfad+(6).png"
                fill
                className="object-cover object-top"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-full w-full">
              <Image
                alt="perdildani3"
                src="https://hotclube.s3.sa-east-1.amazonaws.com/fasdadfad+(7).png"
                fill
                className="object-cover object-top"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-full w-full">
              <Image
                alt="perfil4"
                src="https://hotclube.s3.sa-east-1.amazonaws.com/fasdadfad+(8).png"
                fill
                className="object-cover object-top"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        {/* BOTÃO ESQUERDA */}
        <button
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-1 transition hover:bg-black/60"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* BOTÃO DIREITA */}
        <button
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-1 transition hover:bg-black/60"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="mt-5 flex justify-center">
        <Link href="/modelo/valeria-brito">
          <Button
            variant="outline"
            className="flex items-center gap-2 border-gray-700 bg-black/40 text-white"
          >
            VER CONTEÚDOS
          </Button>
        </Link>
      </div>
    </Card>
  )
}

export default Modelo3
