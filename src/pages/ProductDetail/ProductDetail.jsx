import React, { useEffect } from 'react'
import styles from './ProductDetail.module.css'
import Slider from 'react-slick'
const ProductDetail = () => {
  const settings = {
    className: styles.slider,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    customPaging: function (i) {
      return (
        <img src="https://dummyimage.com/208x277/000000/4a52c2.png" alt="" className={styles.carrousel} />
      );
    },
    appendDots: dots => <ul>{dots}</ul>,
    dotsClass: `slick-dots slick-thumb ${styles.slick_dots}`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dotsClass: 'slick-dots slick-thumb',
          customPaging: i => <button>{i + 1}</button>,
          appendDots: dots => <ul>{dots}</ul>,
        }
      }
    ]
  }


  return (

    <div className={styles.container} >
      <section className={styles.section}>
        <Slider {...settings} >
          <picture className={styles.slider_item}>
            <img src="https://dummyimage.com/208x277/000000/4a52c2.png" alt="" />
          </picture>
          <picture className={styles.slider_item}>
            <img src="https://dummyimage.com/208x277/000000/4a52c2.png" alt="" />
          </picture>
          <picture className={styles.slider_item}>
            <img src="https://dummyimage.com/208x277/000000/4a52c2.png" alt="" />
          </picture>
          <picture className={styles.slider_item}>
            <img src="https://dummyimage.com/208x277/000000/4a52c2.png" alt="" />
          </picture>
        </Slider>
      </section>
      <section className={styles.product_detail}>
        <small className={styles.product_detail_able}>Disponible</small>
        <h1 className={styles.product_detail_title}>Nombre-Marca</h1>
        <span className={styles.product_detail_description}> Air Force 90's</span>
        <span className={styles.product_detail_price}>$ 1'850.000</span>
        <span>Medellín</span>

        <div className={styles.product_reseller}>
          <picture className={styles.product_reseller_logo}>
            <img src="https://dummyimage.com/208x277/000000/4a52c2.png" alt="" />
          </picture>
          <span className={styles.product_reseller_name}>reseller name</span>
          <span className={styles.produc_reseller_rating}> 3.2 ⭐</span>
        </div>

      </section>
    </div >
  )
}

export default ProductDetail