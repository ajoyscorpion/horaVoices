import Link from "next/link";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function NotFoundPage() {
  return (
    <div style={{ display:"flex", flexDirection:"column",justifyContent:"center",textAlign: "center", padding: "50px", height:"60vh" }}>
      <p style={{ fontSize: "2rem",fontFamily: caveat.style.fontFamily, fontWeight:"bold" }}>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" style={{ textDecoration: "none",fontSize: "1.5rem", color: "#1976d2",fontFamily: caveat.style.fontFamily, fontWeight:"bold" }}>
        Go back to Home
      </Link>
    </div>
  );
}