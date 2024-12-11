import React from 'react'
import { Caveat } from "next/font/google";
import Image from 'next/image';
import { Grid2 } from '@mui/material';
import Button from '@mui/material/Button';
import Navigation from '../Components/Navigation';
import styles from "./page.module.css"

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "700"],
});

function About() {
  return (
    <div className={styles.About}>

        {/* About Title */}
        <p
            className={styles.AboutTitle}
            style={{
                fontFamily: caveat.style.fontFamily,
            }}
        >
            Hora Voices
        </p>
        
        <Image
            src="/assets/Images/AboutLine.png"
            width={249}
            height={30}
            alt="aboutLine"
            className={styles.AboutLine}
        />

        <Grid2 container direction="column" alignItems="center" className={styles.AboutContent}>
            <Grid2 size={{xs:8,sm:8,md:8,lg:5}}>
                <p
                    className={styles.AboutText}
                    style={{
                            fontFamily: caveat.style.fontFamily,
                        }} 
                >
                        We are a passionate a cappella choir of four individuals brought together by our shared love for music and the bonds of friendship. 
                </p>
            </Grid2>
            <Grid2 size={{xs:8,sm:8,md:8,lg:5}}>
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
            <Grid2 size={{xs:8,sm:8,md:8,lg:5}}>
                <p
                    className={styles.AboutText}
                    style={{
                        fontFamily: caveat.style.fontFamily
                    }} 
                >
                    We’re excited to grow our group and welcome new voices. If you love singing and want to join a fun, creative team, we’d love to have you. Let’s make great music together!
                </p>
            </Grid2>

            <Button
                className={styles.AboutButton}
                href="https://docs.google.com/forms/d/1gn-QfaSZxEkX55MqcBVhikELQ824_dPgqKstXShyXOM/edit?usp=forms_home&ths=true"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{
                    fontFamily: caveat.style.fontFamily,
                }}
            >
                Join Us ?
            </Button>

        </Grid2>
        
       <Navigation/>

    </div>
  )
}

export default About