"use client"
import Image from "next/image"
import Header from "./_components/header"
import Modelo from "./_components/modelo"
import Carroceloferta from "./_components/carroceloferta"
import Modelo2 from "./_components/modelo2"
import Modelo3 from "./_components/modelo3"
import Carrocelvideo from "./_components/carrocelvideo"
import { Card, CardContent } from "./_components/ui/card"

const Home = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* DIV BANNER 1 */}
      <div className="relative mt-1 h-[600px] w-full overflow-hidden rounded-t-2xl">
        <Image
          alt="bannerhot"
          src="https://hotclube.s3.sa-east-1.amazonaws.com/bannerhot.png"
          fill
          className="object-cover"
        />
      </div>

      {/* RESTO DO CONTEÚDO - Banners */}
      <div className="min-h-screen bg-black p-4">
        <div className="relative mx-auto h-[150px] w-[300px] overflow-hidden rounded-t-2xl">
          <Image
            alt="bannerhot"
            src="https://hotclube.s3.sa-east-1.amazonaws.com/bannerhot2.png"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative mx-auto mt-2 h-[150px] w-[300px] overflow-hidden rounded-t-2xl">
          <Image
            alt="bannerhot"
            src="https://hotclube.s3.sa-east-1.amazonaws.com/bannerhot3.png"
            fill
            className="object-cover"
          />
        </div>

        {/* DIV DESCRIÇÃO*/}
        <h2 className="mt-6 text-clip font-bold uppercase text-gray-400">
          Destaque do mês
        </h2>

        {/*  CARD PERFIL MODELO */}
        <div>
          <Modelo />
        </div>

        {/* DIV DESCRIÇÃO*/}
        <h2 className="mt-6 text-clip font-bold uppercase text-gray-400">
          Chamada de vídeo
        </h2>

        {/* CARROCEL 1 CHAMADA DE VIDEO */}
        <div className="mt-4">
          <Carrocelvideo />
        </div>

        {/*  CARD PERFIL MODELO */}
        <div className="mt-6">
          <Modelo2 />
        </div>

        {/*  CARD PERFIL MODELO */}
        <div className="mt-6">
          <Modelo3 />
        </div>

        {/* DIV DESCRIÇÃO*/}
        <h2 className="mt-6 text-clip font-bold uppercase text-gray-400">
          Promoções do mês
        </h2>

        {/* CARROCEL 2 CHAMADA DE VIDEO */}
        <div className="mt-4">
          <Carroceloferta />
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-center text-sm text-gray-400">
              © 2023 Copyright <span className="font-bold">HOT Clube</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
