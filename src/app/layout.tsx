// Components
import { Header } from './Components/Header'

// Css
import './globals.css'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-br">
      <body>
        {/* Header */}
        <Header/>

        {children}
      </body>
    </html>
  )
}
