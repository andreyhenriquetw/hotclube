import Image from "next/image"
import Header from "./_components/header"

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

      {/* RESTO DO CONTEUDO */}

      <div className="min-h-screen bg-black">
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
      </div>
    </div>
  )
}

export default Home
