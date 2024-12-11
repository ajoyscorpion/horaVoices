import React from 'react'
import { Caveat } from "next/font/google";
import { Card, Grid2, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../Components/Navigation';
import styles from './page.module.css'
import Divider from '@mui/material/Divider';

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const works = [
    {
      title: "Sadvartha",
      description:
        "'Sadvartha' (Good News) is a Malayalam Christmas Anthem written and composed by Rev. Wesley P Kuruvilla. This is our first project!",
      image: "/assets/Images/Sadvartha.jpg",
      link:"https://youtu.be/d3RF0tHd_0Q?si=qL4uATo7cp4WOsvS"
    },
    {
      title: "Athikkaalaiyil Paalani Thedi",
      description:
        "'Atikkaalaiyil Paalani Thedi' is an old Tamil Christmas song written and composed by Dr. Anand Chellappa.",
      image: "/assets/Images/Athikalayil.jpg",
      link:"https://youtu.be/RtTFhIL6CdU?si=Q-5zOdRT3LYHaIql"
    },
    {
        title: "Innu Yeshu Rajan",
        description:
        "Innu Yeshu Rajan Uyirthazhuneetu is a Malayalam Christmas song written and composed by Yustues Joseph.",
        image: "/assets/Images/Innu Yeshu.jpg",
        link:"https://youtu.be/z4TFn08-pSo?si=g8iGtlmo7Q5kIN3w"
    },
    {
       title: "Lully, Lulla Lullay",
       description:
       "'Lully, Lulla Lullay' is a traditional Christmas Carol known to be Coventry Carol. The music is arranged by Philip WJ Stopford.",
       image: "/assets/Images/lully.jpg",
       link:"https://youtu.be/BCianLkLk8E?si=_voW3U0g5nM-qdfs"       
    },
    {
      title: "Coming Soon ...",
      description: "Stay tuned for our upcoming projects!",
      image: "/assets/Images/coming soon.png",
      link:"https://www.youtube.com/channel/UCz3j1QUZ6q9ES6tULzkDObA"
    },
  ];

function Projects() {
  return (
    <div
        style={{
            height:"auto",
            marginBottom:'70px'
        }} 
    >
        {/* Project Title */}
        <p
            className='About-Title'
            style={{
                fontFamily: caveat.style.fontFamily,
                fontSize:"60px",
                fontWeight:"bold",
                textAlign:'center'
            }}
        >
            Our Works
        </p>

        <Image
            src="/assets/Images/Our Works Line.png"
            width={170}
            height={30}
            alt="aboutLine"
            style={{ display: "block", margin: "-60px auto 30px" }} 
        />

        
        <Grid2 container direction="column"  >
            {works.map((work, index) => (
                <Grid2
                    key={index}
                    container
                    size={{xs:12, sm:12, md:12, lg:12}}
                    direction={{ xs: 'column', sm: 'row' }}
                    justifyContent="center"
                    alignItems="center"
                    style={{
                        marginTop: "30px",
                        flexDirection: 
                            index % 2 === 0 ? "row" : "row-reverse",
                    }}
                >
                    {/* Image Card */}
                    <Card
                        sx={{
                            width: { xs: "370px", sm: "370px" },
                            height: "210px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            borderRadius: "0px",
                            zIndex: "2",
                            marginBottom: { xs: 0, sm: 0 }
                        }}
                    >
                        <Image
                            src={work.image}
                            width={370}
                            height={210}
                            alt={`${work.title} Image`}
                            style={{
                                borderRadius: "0px",
                            }}
                            priority={index === 0}
                        />
                        
                    </Card>

                    {/* Content Card */}
                    <Card
                        className={styles.ContentCard}
                        sx={{
                            width: { xs: "100%", sm: "477px" } ,
                            height: "225px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            borderRadius: "10px",
                            backgroundColor: "#F5F5F5",
                            mt:{
                                xs:"10px",
                                lg:"100px"
                            },
                            ml:{
                                xs:index % 2 === 0 ? "0px" : "0px",
                                lg:index % 2 === 0 ? "-100px" : "0px",
                            },    
                            mr:{
                                xs:index % 2 === 0 ? "0px" : "0px",
                                lg:index % 2 !== 0 ? "-100px" : "0px",
                            }
                        }}
                    >
                        <Grid2
                            className={styles.ContentDetails} 
                            size={{xs:10,sm:8}} 
                            sx={{
                                position:"relative",
                                top:"10px",
                                ml:{
                                    xs:index % 2 === 0 ? "20px" : "20px",
                                    lg:index % 2 === 0 ? "120px" : "20px",
                                } 
                                    
                                
                                //marginRight: index % 2 !== 0 ? "0px" : "100px"

                            }}
                        >
                            <Typography
                                style={{
                                    fontFamily: caveat.style.fontFamily,
                                    fontSize: "32px",
                                    fontWeight: "bold",
                                }}
                            >
                                {work.title}
                            </Typography>
                        
                            <Typography
                                style={{
                                    fontFamily: caveat.style.fontFamily,
                                    fontSize: "20px",
                                    fontWeight:"bold",
                                }}
                            >
                                {work.description}
                            </Typography>

                            <Link
                                className={styles.ContentLink}
                                href={work.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "flex",
                                    justifyContent: index % 2 === 0 ? "end" : "start",
                                    marginTop: "10px",
                                }}
                            >
                                <Image
                                    src="/assets/Images/youtube.png"
                                    width={30}
                                    height={30}
                                    alt={`${work.title} Youtube Link`}
                                />
                            </Link>
                        </Grid2>
                    </Card>
                    <Divider sx={{ width: "70%", my: 5, display: { xs: "block", sm: "none" }}} />
                </Grid2>     
            ))}
        </Grid2>
        
        <Navigation/>
          
    </div>
  )
}

export default Projects




