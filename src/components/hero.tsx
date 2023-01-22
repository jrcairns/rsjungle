"use client"
import useCountdown from '@/hooks/countdown';
import { motion } from 'framer-motion'

export const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0, // this will set a delay before the children start animating
      staggerChildren: 0.3 // this will set the time inbetween children animation
    }
  }
};
export const dropUpVariants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 35,
      mass: 0.3
    }
  }
};

export const gamesVariants = {
  hidden: {
    y: 8,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 30,
      mass: 0.1,
    }
  }
};

export const formVariant = {
  hidden: {
    opacity: 0,
    scale: .95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 35,
      mass: 0.2
    }
  }
};


export default function Hero() {
  return (
    <motion.div
      className='z-10 relative max-w-lg mx-auto w-full flex-1 flex flex-col justify-between'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3, staggerChildren: 0.2 }}
      variants={containerVariants}
    >

      <motion.div className='flex justify-between' variants={dropUpVariants}>
        <h1 className='text-2xl sm:text-4xl items-center font-bold tracking-tight flex text-gray-50/90'><span>RS</span><span className='text-green-900 block ml-1 -skew-x-6 drop-shadow-xl'>Jungle</span></h1>
        <div className="md:hidden">
          <a aria-label='go to linktree' target="__blank" href="https://linktr.ee/rsjungle" className="rounded-full p-2 bg-gray-50/50 duration-300 hover:bg-gray-50 hover:text-gray-50/70 flex items-center justify-center h-10 w-10">
            <img src="/linktree.svg" alt="linktree logo" />
          </a>
        </div>
      </motion.div>

      <motion.div variants={formVariant}>
        <div className="max-w-lg mx-auto grid gap-6">
          <h1 className="text-4xl font-bold tracking-tight !leading-tight text-gray-50/90 sm:text-5xl">
            Get notified <br />when we launch
          </h1>
          <Countdown />
          <div className='flex flex-col'>
            <form action="#">
              <div className='flex sm:w-full sm:max-w-lg rounded-full bg-white/70 backdrop-blur-lg overflow-hidden relative sm:p-1 focus-within:ring-2 focus-within:ring-green-800'>
                <input required placeholder="Email" className="h-[50px] sm:h-auto placeholder-gray-600 flex-1 focus:outline-none px-4 bg-transparent" type="email" />
                <button className='hidden sm:block rounded-full border border-transparent bg-gradient-to-r from-green-800 to-green-900 px-5 py-3 text-base text-gray-50/90 font-semibold shadow hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:px-6' type="submit">Notify me</button>
              </div>
              <button className='sm:hidden w-full mt-3 rounded-full border border-transparent bg-gradient-to-r from-green-800 to-green-900 px-5 py-3 text-base text-gray-50/90 font-semibold shadow hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:px-6' type="submit">Notify me</button>
            </form>
            <span className="block text-xs text-gray-50/70 mt-4 mx-auto">*Don&apos;t worry, we will never spam you!</span>
          </div>
        </div>
      </motion.div>

      <motion.div className='flex gap-8 justify-center items-center' variants={containerVariants}>
        <motion.div variants={gamesVariants}>
          <div className="flex items-center gap-2">
            <div className='bg-zinc-900/60 rounded p-1.5 shadow-xl'>
              <img className='w-6' src="/crash.png" alt="crash logo" />
            </div>
            <span className='text-gray-50/50 font-semibold text-xs'>Crash</span>
          </div>
        </motion.div>
        <motion.div variants={gamesVariants}>
          <div className="flex items-center gap-2">
            <div className='bg-zinc-900/60 rounded p-1.5 shadow-xl'>
              <img className='w-6' src="/mines.png" alt="mines logo" />
            </div>
            <span className='text-gray-50/50 font-semibold text-xs'>Mines</span>
          </div>
        </motion.div>
        <motion.div variants={gamesVariants}>
          <div className="flex items-center gap-2">
            <div className='bg-zinc-900/60 rounded p-1.5 shadow-xl'>
              <img className='w-6' src="/dice.png" alt="dice logo" />
            </div>
            <span className='text-gray-50/50 font-semibold text-xs'>Dice</span>
          </div>
        </motion.div>
      </motion.div>

    </motion.div >
  )
}

const Countdown = () => {
  const { days, hours, minutes, seconds } = useCountdown(new Date(process.env.NEXT_PUBLIC_GO_LIVE_DATE as string))

  return (
    <div className='grid grid-cols-4 gap-2'>
      <div className="text-gray-50/90 rounded shadow-md slashed-zero text-center flex flex-col gap-1">
        <span className="font-bold tracking-tightest text-2xl">{days}</span>
        <span className="uppercase font-medium text-sm text-zinc-300/50">days</span>
      </div>
      <div className="text-gray-50/90 rounded shadow-md slashed-zero text-center flex flex-col gap-1">
        <span className="font-bold tracking-tightest text-2xl">{hours}</span>
        <span className="uppercase font-medium text-sm text-zinc-300/50">hours</span>
      </div>
      <div className="text-gray-50/90 rounded shadow-md slashed-zero text-center flex flex-col gap-1">
        <span className="font-bold tracking-tightest text-2xl">{minutes}</span>
        <span className="uppercase font-medium text-sm text-zinc-300/50">minutes</span>
      </div>
      <div className="text-gray-50/90 rounded shadow-md slashed-zero text-center flex flex-col gap-1">
        <span className="font-bold tracking-tightest text-2xl">{seconds}</span>
        <span className="uppercase font-medium text-sm text-zinc-300/50">seconds</span>
      </div>
    </div>
  )
}