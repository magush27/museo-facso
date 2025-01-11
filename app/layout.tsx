import "@/styles/globals.css"
import { Inter } from 'next/font/google'
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}

