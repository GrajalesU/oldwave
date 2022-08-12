import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Rating from '@mui/material/Rating';

const CardProduct = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "primary.main",
          width: "208px",
          height: "386px",
          ml: "10px",
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "225px",
            backgroundImage: `url(https://dummyimage.com/600x400/000000/4a52c2.png)`,
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
          {/*Nombre*/}
          <Grid item sx={{ mt: 1 }}>
            <Box
              sx={{
                width: "154px",
                height: "53px",
                maxHeight: "53px",
                //Esconde el texto del maximo de maxHeight
                overflow: "hidden",
              }}
            >
              <Typography
                align="center"
                sx={{
                  ml: "2px",
                  fontFamily: "PoppinsMedium",
                  fontSize: "13px",
                  lineHeight: "17px",
                }}
              >
                Iphone 11 64GB negro
              </Typography>
            </Box>
          </Grid>

          {/*Marca*/}
          <Grid item>
            <Typography
              sx={{
                mt: "4px",
                fontFamily: "PoppinsSemiBold",
                fontSize: "13px",
                color: "violetMain.main",
              }}
            >
              aple
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ fontFamily: "PoppinsRegular", fontSize: "14px" }}>
              Visto Hoy: 1111
            </Typography>
          </Grid>


          {/*Precio*/}
          <Grid item>
            <Typography
              sx={{
                fontFamily: "PoppinsBold",
                fontSize: "14px",
                color: "violetMain.main",
              }}
            >
              $2'300.000
            </Typography>
          </Grid>

          {/*Rating*/}
          <Grid item>
            <Rating name="read-only" value="123" readOnly />
          </Grid>

          {/*Vendedor*/}
          <Grid
            container
            item
            direction="row"
            justifyContent="center"
            sx={{
              mt: "4px",
              //justifyContent: "space-evenly"
            }}
          >
            <Grid item>
              <Typography
                align="center"
                sx={{
                  fontFamily: "PoppinsRegular",
                  fontSize: "14px",
                  //textDecoration: "line-through"
                }}
              >
                Vendedor:
              </Typography>
            </Grid>

            <Grid
              item
              sx={{
                height: "40px",
                maxHeight: "40px",
                overflow: "hidden",
              }}
            >
              <Typography
                align="center"
                sx={{
                  ml: "5px",
                  fontFamily: "PoppinsRegular",
                  fontSize: "14px",
                  lineHeight: "20px",
                  width: "200px",
                }}
              >
                vendedor
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/*Boton Agregar al carro de Compras*/}
        <Box item sx={{ mt: "-30px" }}>
          <Button
            onClick={() => handleClick()}
            sx={{
              width: "166px",
              backgroundColor: "violetMain.main",
              color: "white",
              borderRadius: 10,
              "&:hover": {
                backgroundColor: "violetMain.secondary",
              },
              textTransform: "none",
              fontFamily: "PoppinsSemiBold",
              fontSize: "13px",
              p: "3px 20px 3px 20px",
              m: 3,
            }}
          >
            Agregar al carrito
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CardProduct;
