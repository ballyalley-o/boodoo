import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
// styles
import { StyledContainerDiv, StyledWrapper, StyledContainer } from './theme'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify'
// constants
import { lang } from './config'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BOO DOO',
  description: 'Boo doo is a auth sandbox for using Clerk.',
  image: '/assets/icon/boodoo.svg',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang={lang.en}>
        <body className={inter.className}>
          <Header />
          <main className={StyledContainer}>
            <div className={StyledContainerDiv}>
              <div className={StyledWrapper}>{children}</div>
            </div>
          </main>
        </body>
        <ToastContainer />
      </html>
    </ClerkProvider>
  )
}
