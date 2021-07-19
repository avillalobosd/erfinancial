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
  root: {
    height: "400px",
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  marco: {
    backgroundColor: "rgba(255,255,255,0.2)",
    margin: "auto",
    maxWidth: "700px",
    height: "50%",
    // textAlign:"center",
    // opacity:0.45,
    webkitfilter: "opacity(100%)"

  }, textJumbo1: {
    marginTop: "30px",
    marginLeft: "60px",
    marginRight:"30px",
    fontFamily: "Heebo",
    fontWeight: 30,
    fontSize: "25px",
    color:"black"
  }, textJumbo2: {

    marginTop: "10px",
    marginLeft: "80px",
    fontFamily: "Heebo",
    fontWeight: 30,
    fontSize: "1em",
    color:"black",
    marginTop:"20px"

  }




}));

export default function HomeTop() {
  const classes = useStyles();


  return (
        <>

    <Box display="flex" bgcolor="black" p={1} alignItems="center" container className={classes.root}>
      <Box className={classes.marco} >

        <Typography
          className={classes.textJumbo1}>
          "La libertad financiera es un proceso, mental, emocional y educativo"
        </Typography>

        <Typography
          className={classes.textJumbo2}>
          - ROBERT KIYOSAKI
        </Typography>


      </Box>

    </Box>
    </>
  );
}