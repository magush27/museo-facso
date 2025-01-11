'use client'

import { useState, useCallback, useEffect } from "react"
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

  const currentImage = images[currentIndex]
  const currentSection = getCurrentSection()

  if (!currentImage) {
    return <div>No hay imágenes disponibles.</div>
  }

  return (
    <div 
      id="timeline-viewer"
      className="flex flex-col gap-6"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Visor de línea de tiempo"
    >
        <TimelineMenu 
          sections={sections} 
          onSectionSelect={handleSectionSelect} 
          currentSectionId={currentSectionId}
        />
      <div className="relative px-2">
      <TimelineSectionInfo section={currentSection} />
        <Card className="overflow-hidden bg-blue-900">
          <CardContent className="p-2">
            <div className="relative aspect-[9/16] md:aspect-[5/4] w-full">
              <Image
                src={"/museo-facso" + currentImage.src}
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
          className="absolute inset-y-0 left-4 right-4 md:left-8 md:right-8"
        />
      </div>
    </div>
  )
}

