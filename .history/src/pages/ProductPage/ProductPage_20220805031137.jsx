import React from "react";
import Grid from "@mui/material/Grid";
import CardProduct from "../../components/CardProduct/CardProduct";
import FilterComponent from "../../components/FilterComponent/FilterComponent";

const ProductPage = () => {
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
              fontFamily: 'Poppins'
            }}
          >
            <div>45 productos</div>
            <div>Ordenar por relevancia</div>
          </div>
          {Array.from(Array(45)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CardProduct />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPage;
