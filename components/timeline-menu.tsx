// 'use client'

// import { Button } from "@/components/ui/button"
// import { TimelineSection } from "@/types/timeline"

// interface TimelineMenuProps {
//   sections: TimelineSection[]
//   onSectionSelect: (sectionId: number) => void
//   currentSectionId: number
// }

// export function TimelineMenu({ sections, onSectionSelect, currentSectionId }: TimelineMenuProps) {
//   return (
//     <nav className="w-full bg-white dark:bg-gray-800 shadow-md rounded-md">
//       <ul className="flex flex-wrap justify-center">
//         {sections.map((section) => (
//           <li key={section.id} className="m-1">
//             <Button
//               variant={section.id === currentSectionId ? "default" : "ghost"}
//               className="py-2 px-3 text-sm md:text-base whitespace-normal text-center h-auto"
//               onClick={() => onSectionSelect(section.id)}
//             >
//               {section.title}
//             </Button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   )
// }

'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { TimelineSection } from "@/types/timeline"
import { ChevronDown, ChevronUp } from "lucide-react" // Assuming you're using Lucide icons

interface TimelineMenuProps {
  sections: TimelineSection[]
  onSectionSelect: (sectionId: number) => void
  currentSectionId: number
}

export function TimelineMenu({ sections, onSectionSelect, currentSectionId }: TimelineMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasSelected, setHasSelected] = useState(false) // Track if a decade has been selected

  // Find the currently selected section
  const selectedSection = sections.find(section => section.id === currentSectionId)

  return (
    <div className="w-full">
      {/* Mobile Collapsible Menu */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          className="w-full mb-2 text-sm flex items-center justify-between"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span>
            {isMenuOpen || !hasSelected
              ? "Seleccionar década"
              : `Década seleccionada: ${selectedSection?.title}`}
          </span>
          {isMenuOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
        </Button>

        {isMenuOpen && (
          <nav className="w-full bg-white dark:bg-gray-800 shadow-md rounded-md">
            <ul className="flex flex-wrap justify-center">
              {sections.map((section) => (
                <li key={section.id} className="m-1">
                  <Button
                    variant={section.id === currentSectionId ? "default" : "ghost"}
                    className="py-2 px-3 text-sm whitespace-normal text-center h-auto"
                    onClick={() => {
                      onSectionSelect(section.id)
                      setHasSelected(true) // Mark as selected after choosing a section
                      setIsMenuOpen(false) // Close the menu after selecting
                    }}
                  >
                    {section.title}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop Full Menu */}
      <nav className="hidden md:block w-full bg-white dark:bg-gray-800 shadow-md rounded-md">
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
    </div>
  )
}
