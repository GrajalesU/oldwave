import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ProductPage = () => {
  return (
    <div style={{width: '90vw', background: "red"}}>

    <Grid container spacing={(2)} alignItems="stretch">
        <Grid item xs={4}>
            <Item>1</Item>
        </Grid>
        <Grid item xs={8}>
        <Item>2</Item>
        </Grid>
    </Grid>
    </div>
  )
}

export default ProductPage