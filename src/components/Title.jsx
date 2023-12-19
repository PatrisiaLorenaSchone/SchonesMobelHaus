import React from 'react'
import { motion } from "framer-motion"

function Title({text}) {
  return (
    <motion.div 
    initial={{opacity:0, x: -100}}
    whileInView={{opacity:1, x: 0}}
    transition={{duration:1}}
    >
      <h2 className='title'>{text}</h2>
    </motion.div>
  )
}

export default Title
