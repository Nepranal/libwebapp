import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/navbar'
import Footer from '@/comps/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name = "keywords" content='ninjas'/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Ipsum minim veniam veniam nostrud do. Nisi fugiat proident ad ut consequat aute cupidatat veniam veniam et. Veniam officia duis sint consectetur minim elit fugiat. Laboris nisi ullamco tempor fugiat pariatur non ut eu excepteur aliqua aute dolor.</p>
        <p className={styles.text}>Aute laborum reprehenderit do qui deserunt adipisicing consectetur laborum ullamco commodo incididunt in pariatur. Reprehenderit tempor cillum pariatur minim non sit id amet esse commodo cupidatat cupidatat aliqua aliquip. Minim culpa eu culpa nostrud laboris. Eu nisi labore consectetur nisi aliqua quis ex. Incididunt dolore magna non irure ullamco laboris proident eiusmod laboris. Fugiat eu ipsum dolor incididunt eu aliquip culpa sit eiusmod.</p>
        <Link legacyBehavior href="/ninjas">
          <a className={styles.btn}>See Ninja List</a>
          </Link>
      </div>
    </>
  )
}
