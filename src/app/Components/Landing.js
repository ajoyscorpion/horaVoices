"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "./Landing.css"
import Badge from '@mui/material/Badge';
import { Caveat } from "next/font/google";
import { styled } from '@mui/material/styles';

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
      <Image
        src="/assets/Images/Hora.png"
        width="600"
        height="450"
        alt="Hora Title Image"
        style={{
          marginTop:"100px"
        }}
      />
      <div className="text-container">
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
      </div>
    </div>
  )
}

export default Landing