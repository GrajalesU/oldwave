import Slider from "react-slick";
import React, { Component } from "react";
import Banner1 from "../../assets/images/banner-blackfriday.png";
import Banner2 from "../../assets/images/banner-auxilar-ordenadores.png";
import Banner3 from "../../assets/images/banner-auxiliar-bicicletas.png";

export default class BannerSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <div>
          <Slider {...settings}>
            <img alt="Imagen de promoción por black-friday" src={Banner1} />
            <img alt="Imagen de promoción por black-friday" src={Banner2} />
            <img alt="Imagen de promoción por black-friday" src={Banner3} />
          </Slider>
        </div>
      </div>
    );
  }
}
