import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

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
        width: "100vw",
        height: "100vh",
        background: "red",
        paddingLeft: "5vw",
        paddingRight: "5vw",
        paddingTop: "3vh",
      }}
    >
      <Grid container spacing={2} direction="row">

        <Grid item xs={3}>
          <Item>1</Item>
        </Grid>

        <Grid
          container
          item
          xs={9}
          spacing={2}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={3} md={3} key={index}>
              <Item>xs=2</Item>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPage;