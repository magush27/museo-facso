import { CardQuestion, CardContent } from "@/components/ui/card"
import { TimelineSection } from "@/types/timeline"
import { Sora } from "next/font/google"

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '800'],
  variable: '--font-sora'
})

interface TimelineSectionInfoProps {
  section: TimelineSection | undefined
}

export function TimelineSectionInfo({ section }: TimelineSectionInfoProps) {
  if (!section) return null

  return (
    <CardQuestion className="bg-white backdrop-blur-sm text-center">
      <CardContent className="p-2">
        <h2 className={`sm:text-sm md:text-base text-[#174290] ${sora.className} sora-bold`}>{section.title} ({section.period})</h2>
        <p className={`sm:text-xs lg:text-base text-[#174290] ${sora.className} sora-light`}>{section.question}</p>
      </CardContent>
    </CardQuestion>
  )
}