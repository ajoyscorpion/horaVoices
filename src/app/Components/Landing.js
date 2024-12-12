"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "./Landing.css"
import Badge from '@mui/material/Badge';
import { Caveat } from "next/font/google";
import { styled } from '@mui/material/styles';
import { motion } from "motion/react"

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -10,
    top: -5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    fontFamily:caveat.style.fontFamily
  },
}));

function Landing() {
  return (
    <div className="container">
      <motion.div
        animate= {{
          x: [0, 3, -3, 6, -6, 0], // Random keyframes for horizontal movement
          y: [0, -3, 3, -6, 6, 0], // Random keyframes for vertical movement
          opacity:1
        }}
        transition={{
          duration: 10, // Duration of one full cycle (10 seconds)
          repeat: Infinity, // Infinite loop
          ease: "easeInOut", // Smooth easing
        }}
      >
        <Image
          src="/assets/Images/Hora.png"
          width="600"
          height="450"
          alt="Hora Title Image"
          style={{
            marginTop:"100px"
          }}
        />
      </motion.div>
      
      <motion.div 
        className="text-container"
        size={{xs:8,sm:8,md:8,lg:5}}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.03 }}
      >
        <Link href="/About" className="text-item" style={{fontFamily:caveat.style.fontFamily}}>
          About
        </Link>
        <Link href="/Projects" className="text-item" style={{fontFamily:caveat.style.fontFamily}}>
          Projects
        </Link>
        <StyledBadge badgeContent="Active" color="success">
          <Link 
            href="https://docs.google.com/forms/d/1gn-QfaSZxEkX55MqcBVhikELQ824_dPgqKstXShyXOM/edit?usp=forms_home&ths=true" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-item" 
            style={{fontFamily:caveat.style.fontFamily}}
          >
            Join Us?
          </Link>
        </StyledBadge>
      </motion.div>
    </div>
  )
}

export default Landing