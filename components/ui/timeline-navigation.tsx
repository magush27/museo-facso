// import { ChevronLeft, ChevronRight } from 'lucide-react'
// import { Button } from "@/components/ui/button"

// interface TimelineNavigationProps {
//   onPrevious: () => void
//   onNext: () => void
//   className?: string
// }

// export function TimelineNavigation({
//   onPrevious,
//   onNext,
//   className = "",
// }: TimelineNavigationProps) {
//   return (
//     <div className={`flex items-center justify-center gap-2 mt-4 ${className}`}>
//       <Button
//         variant="secondary"
//         size="icon"
//         onClick={onPrevious}
//         className="rounded-full shadow-lg hover:shadow-xl transition-shadow"
//         aria-label="Ver imagen anterior"
//       >
//         <ChevronLeft className="h-6 w-6" />
//       </Button>
//       <Button
//         variant="secondary"
//         size="icon"
//         onClick={onNext}
//         className="rounded-full shadow-lg hover:shadow-xl transition-shadow"
//         aria-label="Ver siguiente imagen"
//       >
//         <ChevronRight className="h-6 w-6" />
//       </Button>
//     </div>
//   )
// }

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface TimelineNavigationProps {
  onPrevious: () => void
  onNext: () => void
  className?: string
  onTouchStart?: (e: React.TouchEvent) => void
  onTouchEnd?: (e: React.TouchEvent) => void
}

export function TimelineNavigation({
  onPrevious,
  onNext,
  className = "",
  onTouchStart,
  onTouchEnd,
}: TimelineNavigationProps) {
  return (
    <div className={`flex items-center justify-center gap-2 mt-4 ${className}`}>
      <Button
        variant="secondary"
        size="icon"
        onClick={onPrevious}
        onTouchStart={onTouchStart} // Added touch start
        onTouchEnd={onTouchEnd}     // Added touch end
        className="rounded-full shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Ver imagen anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        onClick={onNext}
        onTouchStart={onTouchStart} // Added touch start
        onTouchEnd={onTouchEnd}     // Added touch end
        className="rounded-full shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Ver siguiente imagen"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}