import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';

import { Box, Typography, Button, IconButton, Menu, MenuItem, Fade, Grid, Paper } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ErImagen from './er.png';

import background from './background3.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "400px",
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    alignItems: "center",
    display: "grid",
    justifyContent: "center"
    // marginTop:"10px"
  }, font: {
    fontFamily: "Heebo",
    fontWeight: 30,
    fontSize: "25px",
    color: "white"
  }, jumbo: {
    marginLeft: "50px",
    marginRight: "50px",
    // backgroundColor: "rgba(255,255,255,0.2)",
  }, marco: {
    backgroundColor: "rgba(255,255,255,0.2)",

  
  }


}));

export default function HomeTop() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Grid  container>
        <Grid  item xs={12} md={6}>
          <Grid className={classes.jumbo} item sm={12}>
            <Typography style={{ fontSize: 32, color: "white" }} paragraph align="center">Consigue tu libertad Financiera</Typography>
            <Typography
              align="justify" style={{ fontSize: 17, color: "white" }}>
                La libertad financiera consiste básicamente en disponer de los suficientes medios económicos como para cubrir todas tus necesidades en un determinado período de tiempo, sin depender exclusivamente de un sueldo.
         
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper ></Paper>
        </Grid>

      </Grid>
    </div>
  );
}