import './globals.css'
import Provider from './provider'

import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: 'Animalin',
  description: 'Ensemble pour remuer des queues',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
      
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
