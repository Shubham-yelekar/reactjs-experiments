import React from 'react'
import {motion} from 'framer-motion'

const Setting = () => {
  return (
    <div><motion.h1
    initial = {{x:'-50%', y: "-20%", opacity: 0}}
        animate={{

          x:'-50%', y: "-50%", opacity: 1
        }}
        transition={{duration:0.5}}
    className='float-mid'>Setting</motion.h1>

    </div>
  )
}

export default Setting