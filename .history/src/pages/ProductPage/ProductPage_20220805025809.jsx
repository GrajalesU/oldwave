import React, { Fragment } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardProduct from "../../components/CardProduct/CardProduct";
import FilterComponent from "../../components/FilterComponent/FilterComponent";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProductPage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "red",
        paddingLeft: "5vw",
        paddingRight: "5vw",
        paddingTop: "3vh",
      }}
    >
      <Grid container spacing={2} direction="row">

        <Grid item xs={3}>
          <Item>
          <FilterComponent/>
          </Item>
        </Grid>

        <Grid
          container
          item
          xs={9}
          spacing={2}
        >
          {Array.from(Array(20)).map((_, index) => (
            <div>

            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
             < CardProduct/>
            </Grid>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPage;
