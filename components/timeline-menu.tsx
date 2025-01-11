'use client'

import { Button } from "@/components/ui/button"
import { TimelineSection } from "@/types/timeline"

interface TimelineMenuProps {
  sections: TimelineSection[]
  onSectionSelect: (sectionId: number) => void
  currentSectionId: number
}

export function TimelineMenu({ sections, onSectionSelect, currentSectionId }: TimelineMenuProps) {
  return (
    <nav className="w-full bg-white dark:bg-gray-800 shadow-md rounded-md">
      <ul className="flex flex-wrap justify-center">
        {sections.map((section) => (
          <li key={section.id} className="m-1">
            <Button
              variant={section.id === currentSectionId ? "default" : "ghost"}
              className="py-2 px-3 text-sm md:text-base whitespace-normal text-center h-auto"
              onClick={() => onSectionSelect(section.id)}
            >
              {section.title}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

