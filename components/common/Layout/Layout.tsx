import Head from 'next/head'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import styles from './Layout.module.css'

type LayoutProps = {
  title?: string
  children: React.ReactNode
}

const siteTitle = 'Hyper Heap'

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{!title ? siteTitle : `${title} - ${siteTitle}`}</title>
      </Head>
      <Navbar />
      <main className={styles.container}>{children}</main>
      <Footer />
      <style jsx global>{`
        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          overflow: hidden;
        }
      `}</style>
    </>
  )
}
