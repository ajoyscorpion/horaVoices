"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from "@mui/material";
import Image from 'next/image';
import { Caveat } from "next/font/google";
import { motion } from "motion/react"
import "./Navigation.css"


const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "700"],
});


function Navigation() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


  return (
    <div>
        <Button
            onClick={toggleMenu}
            className="NavButton"
            style={{
                position: "fixed",
                //bottom: "80px",
                //right: "80px",
                //backgroundColor: "#1976d2",
                color: "white",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                zIndex: 1000,
            }}
        >
            <Image
                className='NavImage'
                src="/assets/Images/Hora.png"
                width="140"
                height="80"
                alt="Navigation Icon"
                style={{
                    
                }}
            />
        </Button>
        <motion.div
            className="motionSidebar"
            initial={{ opacity: 0 }}
            animate={{ opacity : isOpen ? 1 : 0}}
            transition={{ type: "spring", stiffness: 100 }}
            style={{
                position: "fixed",
                //top: 0,
                //bottom:"150px",
                //right: 90,
                width: "auto",
                height: "auto",
                borderRadius:"30px",
                //padding: "0px",
                //boxShadow: "2px 0 5px rgba(0, 0, 0, 0.5)",
                zIndex: 1000,
                //display: isOpen ? "block" : "none",  // Toggle visibility
                //transform: isOpen ? "translateX(0)" : "translateX(100%)", // Slide in/out
                //transition: "transform 0.3s ease-in-out",  // Smooth transition
            }}
        >
            <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ margin: "20px 0" }}>
                    <Link href="/" style={{color:"black", textDecoration: "none" ,fontFamily: caveat.style.fontFamily,fontWeight:"bold",fontSize: "20px"}}>
                        Home
                    </Link>
                </li>
                <li style={{ margin: "20px 0" }}>
                    <Link
                        href="/About"
                        style={{color:"black", textDecoration: "none",fontFamily: caveat.style.fontFamily, fontWeight:"bold",fontSize: "20px"}}
                    >
                        About
                    </Link>
                </li>
                <li style={{ margin: "20px 0" }}>
                    <Link
                        href="/Projects"
                        style={{color:"black", textDecoration: "none",fontFamily: caveat.style.fontFamily, fontWeight:"bold",fontSize: "20px"}}
                    >
                        Projects
                    </Link>
                </li>
                <li style={{ margin: "20px 0" }}>
                    <Link
                        href="https://docs.google.com/forms/d/1gn-QfaSZxEkX55MqcBVhikELQ824_dPgqKstXShyXOM/edit?usp=forms_home&ths=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{color:"black", textDecoration: "none",fontFamily: caveat.style.fontFamily, fontWeight:"bold",fontSize: "20px"}}
                    >
                        Join Us?
                    </Link>
                </li>  
            </ul>
        </motion.div>
    </div>
  )
}

export default Navigation




