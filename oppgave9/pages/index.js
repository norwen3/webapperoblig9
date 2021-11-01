import Link from 'next/link'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/students">
        <a>Students</a>
        </Link>
        <br/>
        <Link href="/students/create">
          <a>Create</a>
        </Link>
    </div>
  )
}
