export interface TimelineImage {
  id: number
  src: string
  alt: string
  year?: string
}

export interface TimelineSection {
  id: number
  title: string
  period: string
  question: string
  imageRange: string
  startIndex: number
  endIndex: number
}

