import React from 'react'
import { Caveat } from "next/font/google";
import { motion } from "motion/react"

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "700"],
});

function Loading() {
  return (
    <div
        className=""
        style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          height:"79vh"
        }}
      >
        <p
          style={{
            fontFamily: caveat.style.fontFamily,
            fontWeight:"bold",
            fontSize:"30px"
          }}
        >
          Loading
            <motion.span
              initial={{ opacity: 0}}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.9,
                repeat: Infinity, 
                repeatType: "reverse", 
              }}
            >
              .
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.2, 
              }}
            >
              .
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.4, 
              }}
            >
              .
            </motion.span>  
        </p>
      </div> 
  )
}

export default Loading