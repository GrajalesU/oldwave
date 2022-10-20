import Slider from "react-slick";

function BannerSlider({ images, infinite = true }) {
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
            <img key={image.url} alt={image.title} src={image.url} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BannerSlider;
