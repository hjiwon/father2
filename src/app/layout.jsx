import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

<meta name="naver-site-verification" content="78c8a6448da31594b4fc8aaf1de315b66bb9da2e" />

export const metadata = {
  title: '사육신 공식 홈페이지',
  description: '사육신 건강지킴이 연구소 사이트에 오신 것을 환영합니다!',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="naver-site-verification" content="78c8a6448da31594b4fc8aaf1de315b66bb9da2e" />

      <Head>
        <title>사육신 공식 홈페이지</title>
        <meta name="description" content="사육신 건강지킴이 연구소 사이트에 오신 것을 환영합니다!" />
        <meta content='/banner.jpeg' property="og:image" />
        <meta name="naver-site-verification" content="78c8a6448da31594b4fc8aaf1de315b66bb9da2e" />
      </Head>
      
      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
