import Image from "next/image";
import styles from "./page.module.css";
import Slider from "@/components/Home/Slider";
import ProductCard from "@/components/ProductCard";
import { laboratoryProducts } from "@/data/products";
import ProductAvailableCard from "@/components/Home/ProductAvailableCard";
import ProductSection from "@/components/Home/ProductSection";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Slider />
      <Services />
      <ProductSection
        title="Laboratory Equipments"
        products={laboratoryProducts}
      />
      <div className={styles.page}>
        <main className={styles.main}>
          welcome to home page
        </main>
      </div>
    </div>

  );
}
