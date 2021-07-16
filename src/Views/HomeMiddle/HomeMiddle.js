import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';

import { Box, Typography, Button, IconButton, Menu, MenuItem, Fade, Grid, Paper } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ErImagen from './er.png';

import background from './background.jpg';

const useStyles = makeStyles((theme) => ({
  root: { height: "400px",
  // backgroundImage: `url(${background})`,
  // backgroundSize: 'cover',
  // backgroundPosition: 'center',
  alignItems: "center",
  // display: "grid",
  justifyContent: "center",
  // marginTop:"10px"
    backgroundColor:"grey"
  },
  card:{
    // width:"30vw",
    // height:"300px",
    // marginRight:"120px"

  }



}));

export default function HomeMiddle() {
  const classes = useStyles();


  return (

    <div className={classes.root}>
    {/* <Box  className={classes.root}display="flex"> */}
      <Grid container></Grid>
      <Grid item   sm={4}>
      <Paper className={classes.card} elevation={3}> okokok</Paper> 
      </Grid>
     
      <Grid item sm={4}>
      <Paper className={classes.card} elevation={3}> okokok</Paper>
      </Grid>
    

    {/* </Box> */}
</div>
  );
}