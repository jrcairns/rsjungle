"use client"

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
    x: 16,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 35,
      mass: 0.1
    }
  }
};

export default function Socials() {
  return (
    <motion.div
      className='hidden fixed z-10 right-8 inset-y-0 md:flex flex-col justify-center gap-5 items-center'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.1, staggerChildren: 0.02 }}
      variants={containerVariants}
    >
      <motion.div variants={dropUpVariants}>
        <a aria-label='go to discord' target="__blank" href="https://discord.gg/rsjungle" className="rounded-full p-2 bg-gray-50/50 duration-300 hover:bg-gray-50 hover:text-gray-50/70 flex items-center justify-center h-10 w-10 active:scale-95">
          <img src="/discord.svg" alt="discord logo" />
        </a>
      </motion.div>
      <motion.div variants={dropUpVariants}>
        <a aria-label='go to twitch' target="__blank" href="https://twitch.tv/rsjungle" className="rounded-full p-2 bg-gray-50/50 duration-300 hover:bg-gray-50 hover:text-gray-50/70 flex items-center justify-center h-10 w-10 active:scale-95">
          <img src="/twitch.svg" alt="twitch logo" />
        </a>
      </motion.div>
      <motion.div variants={dropUpVariants}>
        <a aria-label='go to reddit' target="__blank" href="https://reddit.com/user/RSJungle" className="rounded-full p-2 bg-gray-50/50 duration-300 hover:bg-gray-50 hover:text-gray-50/70 flex items-center justify-center h-10 w-10 active:scale-95">
          <img src="/reddit.svg" alt="reddit logo" />
        </a>
      </motion.div>
      <motion.div variants={dropUpVariants}>
        <a aria-label='go to twitter' target="__blank" href="https://twitter.com/RSJunglecom" className="rounded-full p-2 bg-gray-50/50 duration-300 hover:bg-gray-50 hover:text-gray-50/70 flex items-center justify-center h-10 w-10 active:scale-95">
          <img src="/twitter.svg" alt="twitter logo" />
        </a>
      </motion.div>
      <motion.div variants={dropUpVariants}>
        <a aria-label='go to instagram' target="__blank" href="https://instagram.com/rsjungle" className="rounded-full p-2 bg-gray-50/50 duration-300 hover:bg-gray-50 hover:text-gray-50/70 flex items-center justify-center h-10 w-10 active:scale-95">
          <img src="/instagram.svg" alt="instagram logo" />
        </a>
      </motion.div>

    </motion.div>
  )
}