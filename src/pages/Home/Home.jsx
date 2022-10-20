import BannerSlider from "../../components/BannerSlider/BannerSlider";
import CategoriesCarousel from "../../components/CategoriesCarousel/CategoriesCarousel";
import styles from "./Home.module.css";
import Banner1 from "../../assets/images/banner-blackfriday.png";
import Banner2 from "../../assets/images/banner-auxilar-ordenadores.png";
import Banner3 from "../../assets/images/banner-auxiliar-bicicletas.png";
import CarsCategory from "../../assets/images/icon-carro.svg?component";
import MotoCategory from "../../assets/images/icon-moto.svg?component";
import ClothesCategory from "../../assets/images/icon-ropa.svg?component";
import SportsCategory from "../../assets/images/icon-deporte.svg?component";
import FurnituresCategory from "../../assets/images/icon-mueble.svg?component";
import ComputersCategory from "../../assets/images/icon-computadores.svg?component";
import SmartphonesCategory from "../../assets/images/icon-celular.svg?component";
import TVCategory from "../../assets/images/icon-tv.svg?component";
import ElectrodomesticsCategory from "../../assets/images/icon-electrodomesticos.svg?component";

const HOME_BANNERS = [
  {
    title: "Banner Black Friday",
    url: Banner1,
  },
  {
    title: "Banner Ordenadores",
    url: Banner2,
  },
  {
    title: "Banner Bicicletas",
    url: Banner3,
  },
];

const HOME_CATEGORIES = [
  {
    category: "Carros",
    Icon: CarsCategory,
  },
  {
    category: "Motos",
    Icon: MotoCategory,
  },
  {
    category: "Ropa",
    Icon: ClothesCategory,
  },
  {
    category: "Deporte",
    Icon: SportsCategory,
  },
  {
    category: "Muebles",
    Icon: FurnituresCategory,
  },
  {
    category: "Computadores",
    Icon: ComputersCategory,
  },
  {
    category: "Celulares",
    Icon: SmartphonesCategory,
  },
  {
    category: "TV, Audio y foto",
    Icon: TVCategory,
  },
  {
    category: "Electrodomésticos",
    Icon: ElectrodomesticsCategory,
  },
];

function Home() {
  return (
    <div>
      <BannerSlider images={HOME_BANNERS} />
      <h2 className={styles.suggested_title}>¿Qué estás buscando hoy?</h2>
      <CategoriesCarousel icons={HOME_CATEGORIES} />
    </div>
  );
}

export default Home;
