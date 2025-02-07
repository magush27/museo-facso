// 'use client'

// import { useState, useCallback, useEffect, useRef } from "react"
// import Image from "next/image"
// import { Card, CardContent } from "@/components/ui/card"
// import { TimelineNavigation } from "@/components/ui/timeline-navigation"
// import { TimelineSectionInfo } from "@/components/ui/timeline-section-info"
// import { TimelineImage, TimelineSection } from "@/types/timeline"
// import { TimelineMenu } from "@/components/timeline-menu"

// interface TimelineViewerProps {
//   images: TimelineImage[]
//   sections: TimelineSection[]
// }

// export function TimelineViewer({ images, sections }: TimelineViewerProps) {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [currentSectionId, setCurrentSectionId] = useState(1)
//   const [isSwiping, setIsSwiping] = useState(false) // Flag to detect swipe
//   const touchStartX = useRef(0) // To store the touch start position

//   const goToPrevious = useCallback(() => {
//     const currentSection = sections.find(section => section.id === currentSectionId)

//     if (currentSection) {
//       // Navegar dentro de la sección bloqueada
//       setCurrentIndex(prevIndex =>
//         prevIndex === currentSection.startIndex ? currentSection.endIndex : prevIndex - 1
//       )
//     } else {
//       // Navegación libre
//       setCurrentIndex(prevIndex =>
//         prevIndex === 0 ? images.length - 1 : prevIndex - 1
//       )
//     }
//   }, [images.length, currentSectionId, sections])

//   const goToNext = useCallback(() => {
//     const currentSection = sections.find(section => section.id === currentSectionId)

//     if (currentSection) {
//       // Navegar dentro de la sección bloqueada
//       setCurrentIndex(prevIndex =>
//         prevIndex === currentSection.endIndex ? currentSection.startIndex : prevIndex + 1
//       )
//     } else {
//       // Navegación libre
//       setCurrentIndex(prevIndex =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       )
//     }
//   }, [images.length, currentSectionId, sections])

//   const getCurrentSection = useCallback(() => {
//     return sections.find(section => 
//       currentIndex >= section.startIndex && currentIndex <= section.endIndex
//     )
//   }, [currentIndex, sections])

//   // Handle keyboard navigation
//   const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
//     if (event.key === "ArrowLeft") {
//       goToPrevious()
//     } else if (event.key === "ArrowRight") {
//       goToNext()
//     }
//   }, [goToPrevious, goToNext])

//   const handleSectionSelect = useCallback((sectionId: number) => {
//     const selectedSection = sections.find(section => section.id === sectionId)
//     if (selectedSection) {
//       setCurrentIndex(selectedSection.startIndex)
//       setCurrentSectionId(sectionId)
//       // Smooth scroll to the timeline viewer
//       const timelineViewer = document.getElementById('timeline-viewer')
//       if (timelineViewer) {
//         timelineViewer.scrollIntoView({ behavior: 'smooth' })
//       }
//     }
//   }, [sections])

//   useEffect(() => {
//     const newSection = sections.find(section => 
//       currentIndex >= section.startIndex && currentIndex <= section.endIndex
//     )
//     if (newSection && newSection.id !== currentSectionId) {
//       setCurrentSectionId(newSection.id)
//     }
//   }, [currentIndex, sections, currentSectionId])

//   const currentImage = images[currentIndex]
//   const currentSection = getCurrentSection()

//   if (!currentImage) {
//     return <div>No hay imágenes disponibles.</div>
//   }

//   // Handle swipe start
//   const handleTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.touches[0].clientX
//     setIsSwiping(true)
//   }

//   // Handle swipe move
//   const handleTouchMove = (e: React.TouchEvent) => {
//     if (!isSwiping) return
//     const touchMoveX = e.touches[0].clientX
//     const diff = touchStartX.current - touchMoveX
//     if (Math.abs(diff) > 30) {
//       if (diff > 0) {
//         goToNext() // Swipe left -> Next image
//       } else {
//         goToPrevious() // Swipe right -> Previous image
//       }
//       setIsSwiping(false) // End swipe
//     }
//   }

//   // Handle swipe end
//   const handleTouchEnd = () => {
//     setIsSwiping(false)
//   }

//   return (
//     <div 
//       id="timeline-viewer"
//       className="flex flex-col gap-2"
//       onKeyDown={handleKeyDown}
//       tabIndex={0}
//       role="region"
//       aria-label="Visor de línea de tiempo"
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       <TimelineMenu 
//         sections={sections} 
//         onSectionSelect={handleSectionSelect} 
//         currentSectionId={currentSectionId}
//       />
//       <div className="relative">
//         <Card className="overflow-hidden bg-[#174290]">
//           <TimelineSectionInfo section={currentSection} />
//           <CardContent className="p-2 mb-10">
//             <div className="relative aspect-[9/16] md:aspect-[5/4]  w-full">
//               <Image
//                 src={currentImage.src}
//                 alt={currentImage.alt}
//                 fill
//                 className="object-contain m-auto"
//                 priority={currentIndex === 0}
//               />
//             </div>
//           </CardContent>
//         </Card>

//         <TimelineNavigation
//           onPrevious={goToPrevious}
//           onNext={goToNext}
//           className={"absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-10"}
//         />
//       </div>
//     </div>
//   )
// }

'use client'

import { useState, useCallback, useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { TimelineNavigation } from "@/components/ui/timeline-navigation"
import { TimelineSectionInfo } from "@/components/ui/timeline-section-info"
import { TimelineImage, TimelineSection } from "@/types/timeline"
import { TimelineMenu } from "@/components/timeline-menu"

interface TimelineViewerProps {
  images: TimelineImage[]
  sections: TimelineSection[]
}

export function TimelineViewer({ images, sections }: TimelineViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentSectionId, setCurrentSectionId] = useState<number | null>(null)
  const [isSwiping, setIsSwiping] = useState(false)
  const [userSelectedSection, setUserSelectedSection] = useState(false)
  const touchStartX = useRef(0)

  const getSectionBounds = useCallback(() => {
    if (userSelectedSection && currentSectionId !== null) {
      const selectedSection = sections.find(section => section.id === currentSectionId)
      if (selectedSection) {
        return { start: selectedSection.startIndex, end: selectedSection.endIndex }
      }
    }
    return { start: 0, end: images.length - 1 }
  }, [currentSectionId, sections, images.length, userSelectedSection])

  useEffect(() => {
    const detectedSection = sections.find(section =>
      currentIndex >= section.startIndex && currentIndex <= section.endIndex
    )
    if (detectedSection && detectedSection.id !== currentSectionId) {
      setCurrentSectionId(detectedSection.id)
    }
  }, [currentIndex, sections, currentSectionId])

  const goToPrevious = useCallback(() => {
    const { start, end } = getSectionBounds()
    setCurrentIndex(prevIndex => (prevIndex === start ? end : prevIndex - 1))
  }, [getSectionBounds])

  const goToNext = useCallback(() => {
    const { start, end } = getSectionBounds()
    setCurrentIndex(prevIndex => (prevIndex === end ? start : prevIndex + 1))
  }, [getSectionBounds])

  const handleSectionSelect = useCallback((sectionId: number) => {
    const selectedSection = sections.find(section => section.id === sectionId)
    if (selectedSection) {
      setCurrentIndex(selectedSection.startIndex)
      setCurrentSectionId(sectionId)
      setUserSelectedSection(true)
    }
  }, [sections])

  const currentImage = images[currentIndex]
  const currentSection = sections.find(section =>
    currentIndex >= section.startIndex && currentIndex <= section.endIndex
  )

  if (!currentImage) {
    return <div>No hay imágenes disponibles.</div>
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    setIsSwiping(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping) return
    const touchMoveX = e.touches[0].clientX
    const diff = touchStartX.current - touchMoveX
    if (Math.abs(diff) > 30) {
      if (diff > 0) {
        goToNext()
      } else {
        goToPrevious()
      }
      setIsSwiping(false)
    }
  }

  const handleTouchEnd = () => {
    setIsSwiping(false)
  }

  const { start, end } = getSectionBounds();
  const isAtStart = currentIndex === start;
  const isAtEnd = currentIndex === end;


  return (
    <div 
      id="timeline-viewer"
      className="flex flex-col gap-2 pt-[0.5rem]"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") goToPrevious()
        else if (e.key === "ArrowRight") goToNext()
      }}
      tabIndex={0}
      role="region"
      aria-label="Visor de línea de tiempo"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <TimelineMenu 
        sections={sections} 
        onSectionSelect={handleSectionSelect} 
        currentSectionId={currentSectionId ?? 0}
      />
      <div className="relative">
        <Card className="overflow-hidden bg-[#174290] w-full">
          <CardContent className="mb-10">
          <TimelineSectionInfo section={currentSection} />
            <div className="relative aspect-[9/16] md:aspect-[5/4] w-full flex justify-center">
              <Image
                // src={"/museo-facso" + currentImage.src}
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-contain xl:h-max-xl p-2"
                priority={currentIndex === 0}
              />
            </div>
          </CardContent>
        </Card>
        <TimelineNavigation
          onPrevious={goToPrevious}
          onNext={goToNext}
          showPrevious={!isAtStart}
          showNext={!isAtEnd}  
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-10"
        />
      </div>
    </div>
  )
}

