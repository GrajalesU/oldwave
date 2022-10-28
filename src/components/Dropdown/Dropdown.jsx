import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import iPhone11 from "../../assets/images/products/iPhone 11 64GB.png";
import iPhoneX from "../../assets/images/products/iPhone X.png";
import iPhonePro from "../../assets/images/products/iPhone 11 Pro.png";
import advice from "../../assets/images/products/advice.png";
import discount from "../../assets/images/products/iPhone11-etiqueta.svg";

const height = window.innerHeight + window.outerHeight - 300;

const Dropdown = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        className={styles.dropdown_btn}
        onClick={() => {
          setShow((current) => !current);
        }}
      >
        Todas las categorías
      </button>
      <div
        className={styles.dropdown}
        style={{
          display: show ? "block" : "none",
        }}
      >
        <div className={styles.dropdown_elements}>
          <section className={styles.categories}>
            <h3 className={styles.title}>categorías sugeridas</h3>
            <ul className={styles.list}>
              <li className={styles.categories_list_element}>
                Celulares <span>iPhone</span>
              </li>
              <li className={styles.categories_list_element}>
                Celulares <span>Fundas</span>
              </li>
              <li className={styles.categories_list_element}>
                Celulares <span>Cargadores</span>
              </li>
              <li className={styles.categories_list_element}>
                Celulares <span>Baterías</span>
              </li>
              <li className={styles.categories_list_element}>
                Celulares <span>Auriculares</span>
              </li>
            </ul>
          </section>
          <section className={styles.products}>
            <h3 className={styles.title}>productos sugeridos</h3>
            <ul className={styles.list}>
              <li className={styles.product}>
                <img src={iPhone11} alt="" className={styles.product_img} />
                <div className={styles.product_detail}>
                  <div
                    className={styles.product_type}
                    style={{
                      background: "#772CE8",
                      opacity: 0.5,
                    }}
                  >
                    <small>Usado</small>
                  </div>
                  <span className={styles.product_name}>
                    Apple iPhone 11 64GB
                  </span>
                  <span className={styles.product_price}>$2'300.000</span>
                </div>
              </li>
              <li className={styles.product}>
                <img src={iPhoneX} alt="" className={styles.product_img} />
                <div className={styles.product_detail}>
                  <div
                    className={styles.product_type}
                    style={{
                      background: "#32D1F7",
                    }}
                  >
                    <small>Buen estado</small>
                  </div>
                  <span className={styles.product_name}>
                    Apple iPhone X 64GB Silver
                  </span>
                  <span className={styles.product_price}>$1'700.000</span>
                </div>
              </li>
              <li className={styles.product}>
                <img src={iPhonePro} alt="" className={styles.product_img} />
                <div className={styles.product_detail}>
                  <div
                    className={styles.product_type}
                    style={{
                      background: "#772CE8",
                    }}
                  >
                    <small>Perfecto estado</small>
                  </div>
                  <span className={styles.product_name}>
                    Apple iPhone 11 Pro 256GB
                  </span>
                  <span className={styles.product_price}>$3'800.000</span>
                </div>
              </li>
            </ul>
          </section>
          <section className={styles.results}>
            <h3 className={styles.title}>Resultados</h3>
            <ul className={styles.list}>
              <li className={styles.categories_list_element}>iPhone X</li>
              <li className={styles.categories_list_element}>iPhone 11</li>
              <li className={styles.categories_list_element}>
                Cargador iPhone
              </li>
            </ul>
          </section>
          <section className={styles.advice}>
            <div className={styles.advice_element}>
              <div className={styles.advice_img}>
                <img
                  src={advice}
                  alt=""
                  className={styles.advice_img_principal}
                />
                <img
                  src={discount}
                  alt=""
                  className={styles.advice_img_discount}
                />
              </div>
            </div>
            <div className={styles.advice_details}>
              <h4 className={styles.advice_title}>iPhone 11 Morado 64Gb</h4>
              <span className={styles.advice_price}>2’800.000</span>
              <button className={styles.advice_btn}>Comprar ahora</button>
            </div>
          </section>
        </div>
      </div>
      {show && (
        <div
          className={styles.background}
          style={{
            height: height,
          }}
          data-testid="background"
          onClick={() => {
            setShow(false);
          }}
        />
      )}
    </>
  );
};

export default Dropdown;
