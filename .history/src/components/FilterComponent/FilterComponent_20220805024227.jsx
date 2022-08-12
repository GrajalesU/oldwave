import React, { Fragment } from "react";
import Divider from "@mui/material/Divider";
import { Grid } from "@mui/material";

const FilterComponent = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item>Filtros
        <Divider />
        </Grid>
        
        <Grid>
        Tipo de producto

        </Grid>
      </Grid>
    </Fragment>
  );
};

export default FilterComponent;
