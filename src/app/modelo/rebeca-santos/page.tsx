export default function RebecaSantosPage() {
  return (
    <div className="p-8 text-center text-white">
      <h1 className="mb-4 text-3xl font-bold">Rebeca Santos</h1>
      <video
        src="https://hotclube.s3.sa-east-1.amazonaws.com/video22.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="mx-auto h-[400px] rounded-lg object-cover"
      />
      <p className="mt-4 text-gray-300">Conteúdo exclusivo da Rebeca aqui!</p>
    </div>
  )
}
