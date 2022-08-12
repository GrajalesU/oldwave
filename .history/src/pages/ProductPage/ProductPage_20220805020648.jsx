import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
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
      <Grid container spacing={2} alignItems="stretch">
        <Grid item xs={3}>
          <Item>1</Item>
        </Grid>

        <Grid
          container
          item
          xs={9}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 3, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>xs=2</Item>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPage;
