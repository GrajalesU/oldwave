import Slider from "react-slick";
import React, { Component } from "react";
import Categorie1 from "../../assets/images/icon-carro.svg?component";
import Categorie2 from "../../assets/images/icon-moto.svg?component";
import Categorie3 from "../../assets/images/icon-ropa.svg?component";
import Categorie4 from "../../assets/images/icon-deporte.svg?component";
import Categorie5 from "../../assets/images/icon-mueble.svg?component";
import Categorie6 from "../../assets/images/icon-computadores.svg?component";
import Categorie7 from "../../assets/images/icon-celular.svg?component";
import Categorie8 from "../../assets/images/icon-tv.svg?component";
import Categorie9 from "../../assets/images/icon-electrodomesticos.svg?component";

import styles from "./CategoriesCarousel.module.css";

export default class CategoriesCarousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 9,
      slidesToScroll: 9,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: true,
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
          <div>
            <div className={styles.container}>
              <Categorie1 className={styles.icon} />
              <span>Carros</span>
            </div>
          </div>
          <div>
            <div className={styles.container}>
              <Categorie2 className={styles.icon} />
              <span>Motos</span>
            </div>
          </div>
          <div>
            <div className={styles.container}>
              <Categorie3 className={styles.icon} />
              <span>Ropa</span>
            </div>
          </div>
          <div>
            <div className={styles.container}>
              <Categorie4 className={styles.icon} />
              <span>Deporte</span>
            </div>
          </div>
          <div>
            <div className={styles.container}>
              <Categorie5 className={styles.icon} />
              <span>Muebles</span>
            </div>
          </div>
          <div>
            <div className={styles.container}>
              <Categorie6 className={styles.icon} />
              <span>Computadores</span>
            </div>
          </div>
          <div>
            <div className={styles.container}>
              <Categorie7 className={styles.icon} />
              <span>Celulares</span>
            </div>
          </div>
          <div>
            <div className={styles.container}>
              <Categorie8 className={styles.icon} />
              <span>TV, Audio y foto</span>
            </div>
          </div>
          <div>
            <div className={styles.container}>
              <Categorie9 className={styles.icon} />
              <span>Electrodomésticos</span>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
