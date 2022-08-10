import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

const CardProduct = () => {
  return (
    <Box
      sx={{
        bgcolor: "backgroundCard.main",
        width: "208px",
        height: "386px",
        ml: "10px",
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "225px",
          backgroundImage: `url(https://dummyimage.com/208x277/000000/4a52c2.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      ></Box>

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sx={{ mt: 1 }}>
          <Box
            sx={{
              width: "154px",
              height: "53px",
              maxHeight: "43px",
              overflow: "hidden",
            }}
          >
            <Typography
              align="center"
              sx={{
                ml: "2px",
                //fontFamily: "Poppins",
                fontSize: "13px",
              }}
            >
              Iphone 11 64GB negro
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Typography
            sx={{
              color: "primary.main",
              fontSize: "13px",
            }}
          >
            apple
          </Typography>
        </Grid>
        <Grid item container justifyContent="center" alignItems="center">
          <Grid item>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "14px",
                textDecoration: "line-through",
              }}
            >
              $2'300.000
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                fontSize: "14px",
                ml: 2,
                color: "primary.main",
              }}
            >
              $2'300.000
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Box item sx={{ mt: "-10px" }}>
        <Button
          onClick={() => handleClick()}
          sx={{
            width: "166px",
            bgcolor: "primary.main",
            color: "white.main",
            borderRadius: 10,
            textTransform: "none",
            fontSize: "13px",
            p: "3px 20px 3px 20px",
            m: 3,
            "&:hover": {
              backgroundColor: "primary.main",
              color: "white.main",
            },
          }}
        >
          Agregar al carrito
        </Button>
      </Box>
    </Box>
  );
};

export default CardProduct;
