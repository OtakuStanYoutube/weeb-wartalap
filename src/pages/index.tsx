import type { NextPage } from 'next'
import styles from 'styles/Home.module.scss'
import Hello from 'src/components/Hello'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Hello />
    </div>
  )
}

export default Home
