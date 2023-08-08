import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: '사육신 공식 홈페이지',
  description: '사육신 건강지킴이 연구소 사이트에 오신 것을 환영합니다!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className="">
      <Navbar />
      {children}
      <Footer />
    </body>
    </html>
  )
}
