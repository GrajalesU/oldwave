import BannerSlider from "../../components/BannerSlider/BannerSlider";
import CategoriesCarousel from "../../components/CategoriesCarousel/CategoriesCarousel";
import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <BannerSlider />
      <h2 className={styles.suggested_title}>¿Qué estás buscando hoy?</h2>
      <CategoriesCarousel />
    </div>
  );
}

export default Home;
