"use client"
import React from 'react'
import { Caveat } from "next/font/google";
import Image from 'next/image';
import { Grid2 } from '@mui/material';
import Navigation from '../Components/Navigation';
import styles from "./page.module.css"
import { motion } from "framer-motion";

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "700"],
});

function About() {
  return (
    <div className={styles.About}>

        {/* About Title */}
        <motion.p
            className={styles.AboutTitle}
            style={{
                fontFamily: caveat.style.fontFamily,
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            Hora Voices
        </motion.p>
        
        <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)' }} // Start with the element fully hidden
            animate={{ clipPath: 'inset(0 0 0 0)' }}    // Gradually reveal the entire element
            transition={{ duration: 3, ease: 'easeInOut' }} 
        >
            <Image
                src="/assets/Images/AboutLine.png"
                width={249}
                height={30}
                alt="aboutLine"
                className={styles.AboutLine}
            />
        </motion.div>
       

        <Grid2 container direction="column" alignItems="center" className={styles.AboutContent}>
            <Grid2 
                size={{xs:8,sm:8,md:8,lg:5}}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                component={motion.div}
            >
                <p
                    className={styles.AboutText}
                    style={{
                            fontFamily: caveat.style.fontFamily,
                        }} 
                >
                        We are a passionate a cappella choir of four individuals brought together by our shared love for music and the bonds of friendship. 
                </p>
            </Grid2>
            <Grid2 
                size={{xs:8,sm:8,md:8,lg:5}}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                component={motion.div}
            >
                <p
                    className={styles.AboutText}
                    style={{
                            fontFamily: caveat.style.fontFamily,
                        }} 
                >
                        Each of us comes from diverse professional and academic backgrounds, but when we sing, our voices blend seamlessly to create harmony and joy.
                </p>
            </Grid2>
        </Grid2>

        
        <Grid2 container direction="column" alignItems="center">
            <Grid2 
                size={{xs:8,sm:8,md:8,lg:5}}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                component={motion.div}
            >
                <p
                    className={styles.AboutText}
                    style={{
                        fontFamily: caveat.style.fontFamily
                    }} 
                >
                    We’re excited to grow our group and welcome new voices. If you love singing and want to join a fun, creative team, we’d love to have you. Let’s make great music together!
                </p>
            </Grid2>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 400, delay:1.3 }}
            >
                <button
                    className={styles.AboutButton}
                    href="https://docs.google.com/forms/d/1gn-QfaSZxEkX55MqcBVhikELQ824_dPgqKstXShyXOM/edit?usp=forms_home&ths=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        fontFamily: caveat.style.fontFamily,
                    }}
                >
                    Join Us ?
                </button>
            </motion.div>        
            

        </Grid2>
        
       <Navigation/>

    </div>
  )
}

export default About