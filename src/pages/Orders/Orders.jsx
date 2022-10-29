import React, { useEffect, useState } from "react";
import Search from "../../assets/icon-search-bar.svg";
import OrderCard from "../../components/OrderCard/OrderCard";
import { getOrders } from "../../utils/api";
import styles from "./Orders.module.css";
import { useUser } from "../../context/user";
import { useNavigate } from "react-router";
import Spinner from "../../components/Spinner/Spinner";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.sub) navigate("/");

    setLoading(true);
    getOrders(user.sub)
      .then(({ success }) => {
        setOrders(success);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user]);
  return (
    <div className={styles.orders}>
      <h1 className={styles.ordersTitle}>Compras</h1>
      <div className={styles.products}>
        {loading ? (
          <Spinner />
        ) : (
          orders.map((order, idx) => (
            <OrderCard
              key={idx}
              img={order.thumbnail}
              description={order.description}
              reseller={order.r}
              date={order.date}
            />
          ))
        )}
      </div>
    </div>
  );
}
