import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatPrice } from "../../utils/numbers";
import cn from "classnames";
import { useShoppingCart } from "use-shopping-cart";
import { toast } from "react-toastify";

import styles from "./ProductDetail.module.css";
import { getProduct } from "../../utils/api";
import Carrousel from "../../components/Carrousel/Carrousel";

const ProductDetail = () => {
  const [product, setProduct] = useState();
  const { addItem, cartDetails } = useShoppingCart();

  const { id } = useParams();

  useEffect(() => {
    getProduct(id).then((currentProduct) => {
      setProduct(currentProduct);
    });
  }, []);

  const currentStock = cartDetails[id]?.quantity
    ? product?.stock - cartDetails[id]?.quantity
    : product?.stock;

  return (
    product && (
      <div className={styles.container}>
        <section className={styles.carrousel}>
          {/* {product.imgs && <ProductImages product={product} />} */}
          {product.imgs && <Carrousel imgs={product.imgs} />}
        </section>
        <section className={styles.product_detail}>
          <small className={styles.product_detail_able}>Disponible</small>
          <h1 className={styles.product_detail_title}>
            {product.name} {product.brand}
          </h1>
          <span className={styles.product_detail_description}>
            {" "}
            {product.description}
          </span>
          <span className={styles.product_detail_price}>
            {formatPrice(product.price)}
          </span>
          <span>{product.city}</span>
          {currentStock > 0 ? (
            <button
              className={cn("button")}
              onClick={() => {
                addItem(product);
                toast.success("Se añadió el producto con éxito");
              }}
            >
              Agregar al carrito
            </button>
          ) : (
            <button className={cn("button", styles.disabled)} disabled>
              Sin stock
            </button>
          )}

          <div className={styles.product_reseller}>
            <picture className={styles.product_reseller_logo}>
              <img src={product.reseller_logo} alt="Reseller Logo" />
            </picture>
            <span className={styles.product_reseller_name}>
              {product.reseller}
            </span>
            <span className={styles.product_reseller_rating}>
              {" "}
              {product.reseller_rating} ⭐
            </span>
          </div>
        </section>
      </div>
    )
  );
};

export default ProductDetail;
