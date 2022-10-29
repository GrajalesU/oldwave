import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

function BannerSlider({ images, infinite = true }) {
  const navigate = useNavigate();

  const goToProduct = (category) => {
    navigate("/search/" + category);
  };

  const settings = {
    dots: true,
    infinite,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div>
        <Slider {...settings}>
          {images.map((image) => (
            <img
              key={image.url}
              alt={image.title}
              src={image.url}
              onClick={() => goToProduct(image.name)}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BannerSlider;
