import Image from "next/image"
import Header from "./_components/header"
import { Card, CardContent } from "./_components/ui/card"
import { Avatar } from "./_components/ui/avatar"
import { AlarmClockIcon, BadgeCheckIcon } from "lucide-react"

const Home = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* DIV BANNER 1 */}

      <div className="relative mt-1 h-[600px] w-full overflow-hidden rounded-t-2xl">
        <Image
          alt="bannerhot"
          src="/bannerhot.png"
          fill
          className="object-cover"
        />
      </div>

      {/* RESTO DO CONTEUDO - Banners */}

      <div className="min-h-screen bg-black p-4">
        <div className="relative mx-auto h-[150px] w-[300px] overflow-hidden rounded-t-2xl">
          <Image
            alt="bannerhot"
            src="/bannerhot2.png"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative mx-auto mt-2 h-[150px] w-[300px] overflow-hidden rounded-t-2xl">
          <Image
            alt="bannerhot"
            src="/bannerhot3.png"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative mx-auto mt-2 h-[150px] w-[300px] overflow-hidden rounded-t-2xl">
          <Image
            alt="bannerhot"
            src="/bannerhot4.png"
            fill
            className="object-cover"
          />
        </div>

        {/* Conteúdos Modelos */}

        <Card className="mt-6 h-[400px] w-full">
          <CardContent className="flex justify-between">
            {/* DIV DA ESQUERDA */}
            <div className="flex flex-col gap-2 py-5">
              <div className="flex items-center gap-2">
                <Avatar className="-ml-2 h-10 w-10">
                  <Image
                    alt="perfil1"
                    src="/perfil1.jpg"
                    fill
                    className="object-cover"
                  />
                </Avatar>

                {/* Nome e título em coluna */}
                <div className="flex flex-col leading-tight">
                  {/* Nome + selo na mesma linha */}
                  <div className="flex items-center gap-1">
                    <p className="text-[13px] font-thin">Daniela Lima</p>
                    <BadgeCheckIcon size={14} className="text-blue-500" />
                  </div>

                  <h1 className="text-nowrap text-[12px] font-extralight text-gray-400">
                    @danielap
                  </h1>
                </div>
              </div>
            </div>

            {/* DIV DA DIREITA */}
            <div className="flex items-center justify-center gap-1">
              <AlarmClockIcon size={14} className="text-gray-300" />
              <p className="text-xs text-gray-400">20:48</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home
