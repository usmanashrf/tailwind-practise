import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Home from '@/views/home'

const inter = Inter({ subsets: ['latin'] })

export default function App() {
  return (
    <p>
      <Home></Home>
    </p>
  )
}
