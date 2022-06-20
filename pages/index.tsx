import { useEffect } from 'react'
import { Layout } from '../components/common'
import styles from '../styles/Home.module.css'

const fetchPlantCollection = () =>
  // Polyfill `fetch` (browser and server)
  fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}`,
    {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
      },
      method: 'POST',
      body: JSON.stringify({
        query: `query {
          plantCollection(limit: 5) {
            limit
            items {
              slug
            }
          }
        }`
      })
    }
  )

const Home = () => {
  useEffect(() => {
    fetchPlantCollection()
      .then(response => response.json())
      .then(result => console.log(result.data))
  }, [])

  return (
    <Layout>
      <h1 className={styles.title}>Welcome Hyper Heap</h1>
    </Layout>
  )
}

export default Home
