import Image from "next/image";
import styles from "./page.module.css";
import Slider from "@/components/Home/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <div className={styles.page}>
        <main className={styles.main}>
          welcome to home page
        </main>
      </div>
    </div>

  );
}
