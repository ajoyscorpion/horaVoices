import styles from "./page.module.css";
import Landing from "./Components/Landing";

export default function Home() {
  return (
    <div className={styles.page}>
      <Landing/>
    </div>
  );
}
