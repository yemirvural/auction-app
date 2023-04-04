import { Inter } from 'next/font/google'
import HomeContainer from '@/containers/home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <HomeContainer/>
    </div>
  )
}
