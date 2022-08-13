import React from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "../ProductCard/ProductCard";
import FilterComponent from "../FilterComponent/FilterComponent";

const ProductList = ({ products }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingLeft: "5vw",
        paddingRight: "5vw",
        paddingTop: "3vh",
      }}
    >
      <Grid container spacing={2} direction="row">
        <Grid item xs={3}>
          <FilterComponent />
        </Grid>

        <Grid container item xs={9} spacing={2}>
          <div
            style={{
              width: "100%",
              color: "black",
              paddingLeft: "2rem",
              display: "flex",
              justifyContent: "space-between",
              marginRight: "1rem",
              fontFamily: "Poppins",
            }}
          >
            <div>{products.length} productos</div>
            <div>Ordenar por relevancia</div>
          </div>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard
                id={product.id}
                name={product.name}
                brand={product.brand}
                price={product.price}
                thumbnail={product.thumbnail}
                city={product.city}
                reseller={product.reseller}
                reseller_rating={product.reseller_rating}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductList;
