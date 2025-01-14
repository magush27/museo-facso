import { CardQuestion, CardContent } from "@/components/ui/card"
import { TimelineSection } from "@/types/timeline"

interface TimelineSectionInfoProps {
  section: TimelineSection | undefined
}

export function TimelineSectionInfo({ section }: TimelineSectionInfoProps) {
  if (!section) return null

  return (
    <CardQuestion className="bg-white/95 backdrop-blur-sm text-center">
      <CardContent className="p-2">
        <h2 className="sm:text-sm md:text-base font-bold">{section.title} ({section.period})</h2>
        <p className="sm:text-xs lg:text-base text-muted-foreground italic">{section.question}</p>
      </CardContent>
    </CardQuestion>
  )
}

