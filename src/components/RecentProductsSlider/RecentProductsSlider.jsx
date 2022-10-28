import Slider from "react-slick";
import styles from "./RecentProductsSlider.module.css";
import ProductCard from "../ProductCard/ProductCard";

function RecentProductsSlider({ Products }) {
  const settings = {
    dots: true,
    focusOnSelect: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {Products.map((product) => (
          <div key={product.id}>
            <div className={styles.container}>
              <ProductCard
                id={product.id}
                name={product.name}
                brand={product.brand}
                price={product.price}
                thumbnail={product.thumbnail}
                city={product.city}
                reseller={product.reseller}
                reseller_rating={product.reseller_rating}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default RecentProductsSlider;
