import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <Logo title="Hyper Heap" />
    </div>
  )
}

const favicons = ['🦊', '🐪']
const faviconsLen = favicons.length

function Logo({ title }: { title: string }) {
  const [faviconIndex, setFaviconIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const toggleFavicon = () => setIsHovering(!isHovering)

  useEffect(() => {
    if (!isHovering) return

    const intervalId = setInterval(() => {
      setFaviconIndex(previousValue => {
        const nextValue = previousValue + 1
        if (nextValue >= faviconsLen) return 0
        return nextValue
      })
    }, 500)

    return () => {
      clearTimeout(intervalId)
    }
  }, [isHovering])

  const favicon = favicons[faviconIndex]

  return (
    <a href="/" onMouseEnter={toggleFavicon} onMouseLeave={toggleFavicon}>
      {favicon} {title}
    </a>
  )
}
