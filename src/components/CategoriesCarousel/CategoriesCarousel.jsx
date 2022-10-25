import Slider from "react-slick";
import styles from "./CategoriesCarousel.module.css";

function CategoriesCarousel({ icons, infinite = true }) {
  const settings = {
    dots: true,
    focusOnSelect: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    infinite,
    slidesToShow: 9,
    slidesToScroll: 9,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };
  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {icons.map(({ Icon, category }) => (
          <div key={category}>
            <div className={styles.container}>
              <Icon className={styles.icon} alt={category} />
              <span>{category}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CategoriesCarousel;
