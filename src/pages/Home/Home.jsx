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
import Product1 from "../../assets/images/producto1.png";
import Product2 from "../../assets/images/producto2.png";
import Product3 from "../../assets/images/producto3.png";
import Product4 from "../../assets/images/producto4.png";
import RecentProductsSlider from "../../components/RecentProductsSlider/RecentProductsSlider";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { useEffect, useState } from "react";

const HOME_BANNERS = [
  {
    title: "Banner Black Friday",
    url: Banner1,
    name: "Camara",
  },
  {
    title: "Banner Ordenadores",
    url: Banner2,
    name: "Computador",
  },
  {
    title: "Banner Bicicletas",
    url: Banner3,
    name: "Bicicicleta",
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
  const navigate = useNavigate();
  const [recentProducts, setRecentProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const goToProduct = (category) => {
    console.log(category);
    navigate("/search/" + category);
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://oldwave-backend.herokuapp.com/api/products/getRecentProduct")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setRecentProducts(data);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <BannerSlider images={HOME_BANNERS} />
      <h2 className={styles.suggested_title}>¿Qué estás buscando hoy?</h2>
      <CategoriesCarousel icons={HOME_CATEGORIES} />
      <div className={styles.promotions_container}>
        <img
          src={Banner2}
          alt="Imagen promocional de computadores"
          onClick={() => goToProduct("computadores")}
        />
        <div className={styles.promotions_product}>
          <img
            className={styles.promotions_image}
            src={Product1}
            alt="Imagen de celular marca samsung con descuento del 50%"
          />
        </div>
        <div className={styles.promotions_product}>
          <img
            className={styles.promotions_image}
            src={Product2}
            alt="Imagen de camara marca nikon con descuento del 30%"
          />
        </div>
      </div>
      <div className={styles.promotions_container}>
        <div className={styles.promotions_product}>
          <img
            className={styles.promotions_image}
            src={Product3}
            alt="Imagen de computador marca hp con descuento del 30%"
          />
        </div>
        <div className={styles.promotions_product}>
          <img
            className={styles.promotions_image}
            src={Product4}
            alt="Imagen de iPad marca apple con descuento del 30%"
          />
        </div>
        <img
          src={Banner3}
          alt="Imagen promocional de bicicletas"
          onClick={() => goToProduct("bicicletas")}
        />
      </div>
      <div className={styles.product_container}>
        <span className={styles.product_title}>Productos más recientes</span>
      </div>
      <RecentProductsSlider Products={recentProducts} />
    </div>
  );
}

export default Home;
