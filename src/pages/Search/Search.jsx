import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";

function Search() {
  const { query } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://oldwave-backend.herokuapp.com/api/product?query=" + query)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, [query]);

  return <ProductList products={products}></ProductList>;
}

export default Search;
