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
          item
          xs={9}
          copntainer
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {[0, 1, 2, 3, 5, 6, 7].map((item, index) => (
            <Grid key={index} xs={4}>
              <Item>{item}</Item>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPage;
