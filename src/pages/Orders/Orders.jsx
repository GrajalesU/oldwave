import React from "react";
import Search from "../../assets/icon-search-bar.svg";
import OrderCard from "../../components/OrderCard/OrderCard";
import styles from "./Orders.module.css";
export default function Orders() {
  //TODO: change orderCard to ordersList and map each one
  return (
    <div className={styles.orders}>
      <h1 className={styles.ordersTitle}>Compras</h1>
      <div className={styles.ordersSearch}>
        <img
          src={Search}
          alt="search orders"
          className={styles.ordersSearchIcon}
        />
        <input
          type="text"
          className={styles.ordersSearchInput}
          placeholder="Buscar"
        />
      </div>
      <div className={styles.products}>
        <OrderCard />
      </div>
    </div>
  );
}
