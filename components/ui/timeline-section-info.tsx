import { Card, CardContent } from "@/components/ui/card"
import { TimelineSection } from "@/types/timeline"

interface TimelineSectionInfoProps {
  section: TimelineSection | undefined
}

export function TimelineSectionInfo({ section }: TimelineSectionInfoProps) {
  if (!section) return null

  return (
    <Card className="bg-white/95 backdrop-blur-sm text-center">
      <CardContent className="p-4">
        <h2 className="text-base font-bold">{section.title} ({section.period})</h2>
        <p className="text-muted-foreground italic">{section.question}</p>
      </CardContent>
    </Card>
  )
}

