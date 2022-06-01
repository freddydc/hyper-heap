import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Hyper Heap</title>
        <meta name="description" content="Some heap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Welcome Hyper Heap</h1>
    </div>
  )
}

export default Home
