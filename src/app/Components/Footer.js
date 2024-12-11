import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "./Footer.css"

function Footer() {

    const images = [
        {name:"instagram",imageUrl:'/assets/Images/instagram.png',link:"https://www.instagram.com/hora_voices/"},
        {name:"gmail",imageUrl:'/assets/Images/gmail.png',link:'mailto:horavoices@gmail.com'},
        {name:"youtube",imageUrl:'/assets/Images/youtube.png',link:"https://www.youtube.com/channel/UCz3j1QUZ6q9ES6tULzkDObA"}
    ]

  return (
    <div className='Footer'>
        <div className='social-media' 
            style={{
                display:"flex",
                justifyContent:"center"
            }}
        >
            {images.map((items,index) =>
                <Link 
                    href={items.link} 
                    key={index} 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={items.imageUrl}
                        alt={items.name}
                        width={30}     
                        height={30}
                    />
                </Link>
            )}
            
        </div>
        <p>Hora Voices &copy; 2024</p>
    </div>
  )
}

export default Footer