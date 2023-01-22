import Hero from '@/components/hero';
import Socials from '@/components/social';
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      className={`min-h-screen isolate bg-cover flex items-center justify-between flex-col p-6 md:p-12 w-screen relative after:absolute after:inset-0 after:bg-green-900/90 after:mix-blend-multiply ${inter.className}`}
      style={{ backgroundImage: "url(https://img.freepik.com/free-vector/cartoon-jungle-background_52683-61450.jpg?w=1480&t=st=1674404160~exp=1674404760~hmac=96b7ca794d7768c4067955f91add6fdfb2cce3d2757f0b54e3ef20690c473c4f)" }}
    >
      <Hero />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 via-gray-900/70 to-gray-900/70 sm:from-gray-800/60 sm:via-gray-900/90 sm:to-gray-900/90"></div>
      <Socials />
    </div>
  )
}
