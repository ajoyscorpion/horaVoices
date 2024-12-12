"use client"
import styles from "./page.module.css";
import Landing from "./Components/Landing";
import { useState } from "react";
import Loading from "./Components/Loading";


export default function Home() {

  const [isLoading,setIsLoading] = useState(false)

  if (isLoading) {
    return (
      <Loading></Loading> 
    )
  }

  return (
    <div className={styles.page}>
      <Landing/>
    </div>
  );
}
