import { TimelineViewer } from "@/components/timeline-viewer"
import { TIMELINE_IMAGES, TIMELINE_SECTIONS } from "@/lib/constants"

export default function Home() {
  if (TIMELINE_IMAGES.length === 0 || TIMELINE_SECTIONS.length === 0) {
    return <div>No hay contenido disponible para el museo virtual.</div>
  }

  return (
    <div className="min-h-screen text-white bg-[#A8CAEC]">
      <header className="w-full py-6 px-4 text-center bg-blue-950">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
          Museo Virtual de Ciencias Sociales 
        </h1>
        <h2 className="text-base md:text-xl lg:text-2xl font-bold">
        UNSJ - 60 Años
        </h2>
      </header>

      <main className="max-w-7xl mx-auto pb-12">
        <TimelineViewer 
          images={TIMELINE_IMAGES} 
          sections={TIMELINE_SECTIONS} 
        />
      </main>

      <footer className="w-full py-6 px-4 text-center bg-blue-950 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} Facultad de Ciencias Sociales - UNSJ
          </p>
        </div>
      </footer>
    </div>
  )
}

