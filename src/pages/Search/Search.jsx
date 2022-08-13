import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";
import Spinner from "../../components/Spinner/Spinner";

import styles from "./Search.module.css";

function Search() {
  const { query } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://oldwave-backend.herokuapp.com/api/product?query=" + query)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setProducts(data);
      });
  }, [query]);

  if (loading) {
    return <Spinner />;
  }

  if (products.length > 0) {
    return <ProductList products={products}></ProductList>;
  } else {
    return <div className={styles.warning}>No se encontraron productos</div>;
  }
}

export default Search;
