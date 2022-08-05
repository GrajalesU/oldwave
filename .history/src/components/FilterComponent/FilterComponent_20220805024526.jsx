import React, { Fragment } from "react";
import Divider from "@mui/material/Divider";
import { Grid } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const FilterComponent = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item>Filtros</Grid>
        <Grid item>
          <Divider />
          Tipo de producto
          <FormGroup>
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Label"
            />
            <FormControlLabel
              control={<Checkbox size="small"/>}
              label="Disabled"
            />
          </FormGroup>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default FilterComponent;
