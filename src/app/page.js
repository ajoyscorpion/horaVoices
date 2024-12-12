"use client"
import styles from "./page.module.css";
import Landing from "./Components/Landing";
import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust delay as needed for your app's complexity

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Landing />
      <Footer />
    </>
  );
}
