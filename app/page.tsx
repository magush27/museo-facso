import { TimelineViewer } from "@/components/timeline-viewer"
import { TIMELINE_IMAGES, TIMELINE_SECTIONS } from "@/lib/constants"
import { Sora } from "next/font/google"

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '800'],
  variable: '--font-sora'
})

export default function Home() {
  if (TIMELINE_IMAGES.length === 0 || TIMELINE_SECTIONS.length === 0) {
    return <div>No hay contenido disponible para el museo virtual.</div>
  }

  return (
    <div className="min-h-screen text-white bg-[#A8CAEC]">
      <header className="w-full py-6 px-4 text-center bg-[#174290]">
        <h1 className={`text-lg md:text-3xl lg:text-4xl ${sora.className} sora-bold`}>
          Museo Virtual de Ciencias Sociales 
        </h1>
        <h2 className={`text-base md:text-xl lg:text-2xl ${sora.className} sora-bold`}>
        UNSJ - 60 Años
        </h2>
      </header>

      <main className="max-w-7xl mx-auto pb-12">
        <TimelineViewer 
          images={TIMELINE_IMAGES} 
          sections={TIMELINE_SECTIONS} 
        />
      </main>

      <footer className="w-full py-6 px-4 text-center bg-[#174290] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <p className={`text-xs md:text-base ${sora.className} sora-light`}>
            © {new Date().getFullYear()} Facultad de Ciencias Sociales - UNSJ
          </p>
        </div>
      </footer>
    </div>
  )
}

