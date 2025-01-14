// 'use client'

// import { useState, useCallback, useEffect } from "react"
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

//   const goToPrevious = useCallback(() => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     )
//   }, [images.length])

//   const goToNext = useCallback(() => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     )
//   }, [images.length])

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

//   return (
//     <div 
//       id="timeline-viewer"
//       className="flex flex-col gap-2"
//       onKeyDown={handleKeyDown}
//       tabIndex={0}
//       role="region"
//       aria-label="Visor de línea de tiempo"
//     >
//         <TimelineMenu 
//           sections={sections} 
//           onSectionSelect={handleSectionSelect} 
//           currentSectionId={currentSectionId}
//         />
//       <div className="relative px-2">
//         <Card className="overflow-hidden bg-blue-900 mx-10">
//         <TimelineSectionInfo section={currentSection} />
//           <CardContent className="p-2 mb-10">
//             <div className="relative aspect-[9/16] md:aspect-[5/4] w-full">
//               <Image
//               //  src={"/museo-facso" + currentImage.src}
//                 src={currentImage.src}
//                 alt={currentImage.alt}
//                 fill
//                 className="object-contain"
//                 priority={currentIndex === 0}
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
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
  const [currentSectionId, setCurrentSectionId] = useState(1)
  const touchStartX = useRef(0) // To track the start of the swipe
  const touchEndX = useRef(0)   // To track the end of the swipe

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }, [images.length])

  const getCurrentSection = useCallback(() => {
    return sections.find(section => 
      currentIndex >= section.startIndex && currentIndex <= section.endIndex
    )
  }, [currentIndex, sections])

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      goToPrevious()
    } else if (event.key === "ArrowRight") {
      goToNext()
    }
  }, [goToPrevious, goToNext])

  const handleSectionSelect = useCallback((sectionId: number) => {
    const selectedSection = sections.find(section => section.id === sectionId)
    if (selectedSection) {
      setCurrentIndex(selectedSection.startIndex)
      setCurrentSectionId(sectionId)
      // Smooth scroll to the timeline viewer
      const timelineViewer = document.getElementById('timeline-viewer')
      if (timelineViewer) {
        timelineViewer.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [sections])

  useEffect(() => {
    const newSection = sections.find(section => 
      currentIndex >= section.startIndex && currentIndex <= section.endIndex
    )
    if (newSection && newSection.id !== currentSectionId) {
      setCurrentSectionId(newSection.id)
    }
  }, [currentIndex, sections, currentSectionId])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const swipeThreshold = 50 // Minimum swipe distance to consider as a swipe
    if (touchStartX.current - touchEndX.current > swipeThreshold) {
      goToNext() // Swipe left, go to next image
    } else if (touchEndX.current - touchStartX.current > swipeThreshold) {
      goToPrevious() // Swipe right, go to previous image
    }
  }

  const currentImage = images[currentIndex]
  const currentSection = getCurrentSection()

  if (!currentImage) {
    return <div>No hay imágenes disponibles.</div>
  }

  return (
    <div 
      id="timeline-viewer"
      className="flex flex-col gap-2"
      onKeyDown={handleKeyDown}
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
        currentSectionId={currentSectionId}
      />
      <div className="relative px-2">
        <Card className="overflow-hidden bg-blue-900 mx-10">
          <TimelineSectionInfo section={currentSection} />
          <CardContent className="p-2 mb-10">
            <div className="relative aspect-[9/16] md:aspect-[5/4] w-full">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-contain"
                priority={currentIndex === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </CardContent>
        </Card>

        <TimelineNavigation
          onPrevious={goToPrevious}
          onNext={goToNext}
          className={"absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-10"}
        />
      </div>
    </div>
  )
}