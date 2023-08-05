import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
// styles
import { StyledContainerDiv } from './theme/styles/default'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en'>
        <body className={inter.className}>
          <Header />
          <main className='container'>
            <div className={StyledContainerDiv}>
              <div className='mt-20'>{children}</div>
            </div>
          </main>
        </body>
        <ToastContainer
          position='top-center'
          autoClose={2000}
          hideProgressBar={false}
        />
      </html>
    </ClerkProvider>
  )
}
