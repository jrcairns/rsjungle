"use client"
import useCountdown from '@/hooks/countdown';
import { motion } from 'framer-motion'
import { FormEvent, useRef, useState } from 'react';

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const emailRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      setIsSubmitting(true)
      const email = emailRef.current?.value

      await fetch('https://track.customer.io/api/v1/forms/01grpz7d3vah48mrrhxgzkbwt0/submit', {
        method: 'POST',
        headers: {
          'Authorization': 'Basic NDc3NWI1OGZmOWM0OGRmMDNlZGU6MmE3NGFmMTkzNzEyZGMxNmQwMmU=',
          'content-type': 'application/json'
        },
        body: JSON.stringify({ "data": { "email": email } })
      })

      setIsSuccess(true)
    } catch (err) {
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <motion.div
        className='relative z-10 flex flex-col justify-between flex-1 w-full max-w-lg mx-auto'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3, staggerChildren: 0.2 }}
        variants={containerVariants}
      >

        <motion.div className='flex justify-between' variants={dropUpVariants}>
          <img className="w-40" src="/rsjungle.png" alt="" />
          <div className="md:hidden">
            <a aria-label='go to linktree' target="__blank" href="https://linktr.ee/rsjungle" className="flex items-center justify-center w-10 h-10 p-2 duration-300 rounded-full bg-gray-50/50 hover:bg-gray-50 hover:text-gray-50/70">
              <img src="/linktree.svg" alt="linktree logo" />
            </a>
          </div>
        </motion.div>

        <motion.div variants={formVariant}>
          <div className="grid max-w-lg gap-8 mx-auto">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-50/90 sm:text-5xl">
              Get notified <br />when we launch
            </h1>
            <Countdown />
            {!isSuccess ? (
              <div className='flex flex-col'>
                <form onSubmit={handleSubmit}>
                  <div className='relative flex overflow-hidden rounded-full sm:w-full sm:max-w-lg bg-white/70 backdrop-blur-lg sm:p-1 focus-within:ring-2 focus-within:ring-green-800'>
                    <input ref={emailRef} name="email" required placeholder="Enter your email" className="h-[50px] sm:h-auto placeholder-gray-600 flex-1 focus:outline-none px-4 bg-transparent" type="email" />
                    <button className='items-center justify-center hidden w-32 h-[50px] px-5 py-3 text-base font-medium duration-300 border border-transparent rounded-full shadow hover:shadow-xl sm:flex bg-gradient-to-r from-green-800 to-green-900 text-gray-50/90 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:px-6' type="submit">
                      {isSubmitting ? (
                        <svg className="w-5 h-5 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : "Notify me"}
                    </button>
                  </div>
                  <button className='w-full px-5 py-3 mt-3 text-base font-medium border border-transparent rounded-full shadow sm:hidden bg-gradient-to-r from-green-800 to-green-900 text-gray-50/90 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:px-6' type="submit">Notify me</button>
                </form>
                <span className="block mx-auto mt-4 text-xs text-gray-50/70">*Don&apos;t worry, we will never spam you!</span>
              </div>
            ) : (
              <motion.div
                animate={'visible'} initial="hidden"
                variants={{
                  hidden: {
                    opacity: 0,
                    scale: .95,
                  },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 60,
                      mass: 0.1,
                    }
                  }
                }}
                className="grid gap-1 p-4 text-sm font-medium text-center rounded-md shadow-xl bg-white/10 text-gray-50/70"
              >
                <p>Thank you for registering your interest in RSJungle.</p>
                <p>We will email you with our launch details. 🚀</p>
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.div className='flex items-center justify-center gap-8 mt-8' variants={containerVariants}>
          <motion.div variants={gamesVariants}>
            <div className="flex items-center gap-2">
              <div className='bg-zinc-900/60 rounded p-1.5 shadow-xl'>
                <img className='w-6' src="/crash.png" alt="crash logo" />
              </div>
              <span className='text-xs font-semibold text-gray-50/50'>Crash</span>
            </div>
          </motion.div>
          <motion.div variants={gamesVariants}>
            <div className="flex items-center gap-2">
              <div className='bg-zinc-900/60 rounded p-1.5 shadow-xl'>
                <img className='w-6' src="/mines.png" alt="mines logo" />
              </div>
              <span className='text-xs font-semibold text-gray-50/50'>Mines</span>
            </div>
          </motion.div>
          <motion.div variants={gamesVariants}>
            <div className="flex items-center gap-2">
              <div className='bg-zinc-900/60 rounded p-1.5 shadow-xl'>
                <img className='w-6' src="/dice.png" alt="dice logo" />
              </div>
              <span className='text-xs font-semibold text-gray-50/50'>Dice</span>
            </div>
          </motion.div>
        </motion.div>

      </motion.div >
    </>
  )
}

const Countdown = () => {
  const { days, hours, minutes, seconds } = useCountdown(new Date(process.env.NEXT_PUBLIC_GO_LIVE_DATE as string))

  return (
    <div className='grid grid-cols-4 gap-2'>
      <div className="flex flex-col gap-1 text-center rounded shadow-md text-gray-50/90 slashed-zero">
        <span className="text-2xl font-bold tracking-tightest">{days}</span>
        <span className="text-sm font-medium uppercase text-zinc-300/50">days</span>
      </div>
      <div className="flex flex-col gap-1 text-center rounded shadow-md text-gray-50/90 slashed-zero">
        <span className="text-2xl font-bold tracking-tightest">{hours}</span>
        <span className="text-sm font-medium uppercase text-zinc-300/50">hours</span>
      </div>
      <div className="flex flex-col gap-1 text-center rounded shadow-md text-gray-50/90 slashed-zero">
        <span className="text-2xl font-bold tracking-tightest">{minutes}</span>
        <span className="text-sm font-medium uppercase text-zinc-300/50">minutes</span>
      </div>
      <div className="flex flex-col gap-1 text-center rounded shadow-md text-gray-50/90 slashed-zero">
        <span className="text-2xl font-bold tracking-tightest">{seconds}</span>
        <span className="text-sm font-medium uppercase text-zinc-300/50">seconds</span>
      </div>
    </div>
  )
}