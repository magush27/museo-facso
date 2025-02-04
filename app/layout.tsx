import "@/styles/globals.css"
import { Sora } from "next/font/google"
import { Metadata } from "next"

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '800'],
  variable: '--font-sora'
})

export const metadata: Metadata = {
  title: "Museo Virtual de Ciencias Sociales - UNSJ",
  description: "Nuestra facultad desde sus raíces... ¡Siempre Sociales!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={sora.className}>{children}</body>
    </html>
  )
}

