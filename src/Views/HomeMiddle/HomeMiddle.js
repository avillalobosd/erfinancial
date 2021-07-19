import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';

import { Box, Typography, Button, IconButton, Menu, MenuItem, Fade, Grid, Paper } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ErImagen from './er.png';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import imagen1 from './imagen1.svg';
import imagen2 from './imagen2.jpg';
import imagen3 from './imagen3.jpg';
import imagenAside1 from './imageAside1.png';
import imagenAside2 from './imageAside2.png';
import imagenAside3 from './imageAside3.png';

import background from './background.jpg';
import { CheckOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  paper: {
    // width:"30vw",
    height: "500px",
    marginTop: "80px",
    padding: theme.spacing(2),
    textAlign: 'left',
    verticalAlign: 'middle',
    fontFamily: "Heebo, Sans-serif"

    // marginLeft:"120px"

  }, paperImage: {
    // width:"30vw",
    height: "500px",
    marginTop: "80px",
    padding: theme.spacing(2),
    textAlign: 'center',

  }, paperTitle: {
    fontSize: 30,
    fontWeight: "600",
    color: "black",
    textAlign: "center"

  
  }, paperList: {
    marginTop: "20px",
    fontSize: 20,
    fontWeight: "400",
    color: "darkblue"

  }, imagen: {
    // width:"30vw",
    height: "100%",
    width: "100%"

  }, boxAside: {
    maxWidth: "350px",
    paddingLeft:"70px",
    paddingTop:"50px",
    textAlign: 'center',
    fontFamily:"Barlow Semi Condensed"
  }, imagenAside: {
    maxWidth: "300px",
    minWidth: "200px"
  }, titleAside: {
    fontSize: 45,
    fontWeight: "400",
    color: "black",
    textAlign: "left",
    marginTop:"30px",
    fontFamily:"Barlow Semi Condensed"
  }, abstractAside: {
    fontSize: 25,
    fontWeight: "200",
    color: "black",
    textAlign: "left",
    fontFamily:"Barlow Semi Condensed"
    // marginTop:"30px",
    

  }


}));

export default function HomeMiddle() {
  const classes = useStyles();


  return (

    <div >
      {/* <Box  className={classes.root}display="flex"> */}
      <Grid container
        spacing={2}
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Grid item lg={6}>
          <Box className={classes.paperImage}>
            <img className={classes.imagen} alt="ok" src={imagen1}></img>
          </Box>
        </Grid>

        <Grid item lg={6}>
          <Paper className={classes.paper} >
            <Box className={classes.paperTitle}> Listado de Cosas que se van a mostrar al usuario final
            </Box>
            <Box m={8} pt={3} className={classes.paperList}>
              <Grid spacing={3} container direction="row">
                <Grid item xs={1}>
                  <CheckCircleOutlineIcon />
                </Grid>
                <Grid item xs={11}>
                  Pensar en tener las cosas listas
                </Grid>
                <Grid item xs={1}>
                  <CheckCircleOutlineIcon />
                </Grid>
                <Grid item xs={11}>
                  Organizar tus prioridades
                </Grid>
                <Grid item xs={1}>
                  <CheckCircleOutlineIcon />
                </Grid>
                <Grid item xs={11}>
                  Mantener un control de los gastos diarios y tener control
                </Grid>
                <Grid item xs={1}>
                  <CheckCircleOutlineIcon />
                </Grid>
                <Grid item xs={11}>
                  Analizar los principales problemas con tu presupuesto
                </Grid>


              </Grid>
            </Box>
          </Paper>


        </Grid>
      </Grid>

      <Grid container
        spacing={2}
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Grid item lg={6}>
          <Box className={classes.paperImage}>
            <img className={classes.imagen} alt="ok" src={imagen2}></img>
          </Box>
        </Grid>

        <Grid item lg={6}>
          <Paper className={classes.paper} >
            <Box className={classes.paperTitle}> Listado de Cosas que se van a mostrar al usuario final
            </Box>
            <Box m={8} pt={3} className={classes.paperList}>
              <Grid spacing={3} container direction="row">
                <Grid item xs={1}>
                  <CheckCircleOutlineIcon />
                </Grid>
                <Grid item xs={11}>
                  Pensar en tener las cosas listas
                </Grid>
                <Grid item xs={1}>
                  <CheckCircleOutlineIcon />
                </Grid>
                <Grid item xs={11}>
                  Organizar tus prioridades
                </Grid>
                <Grid item xs={1}>
                  <CheckCircleOutlineIcon />
                </Grid>
                <Grid item xs={11}>
                  Mantener un control de los gastos diarios y tener control
                </Grid>
                <Grid item xs={1}>
                  <CheckCircleOutlineIcon />
                </Grid>
                <Grid item xs={11}>
                  Analizar los principales problemas con tu presupuesto
                </Grid>


              </Grid>
            </Box>
          </Paper>


        </Grid>
      </Grid>

      <Grid container
        // spacing={2}
        direction="row"
        alignItems="center"
        justify="center"
      >


        <Grid container
          spacing={2}
          direction="row"
          // alignItems="center"
          justify="center"
          style={{marginTop:"30px"}}
        >

          <Grid item direction="column" md={4}>
            <Box className={classes.boxAside}>
              <img className={classes.imagenAside} alt="ok" src={imagenAside1}></img>
            <Box className={classes.titleAside}>Liquida</Box>
            <Box className={classes.abstractAside}>Aprende las diferentes extrategias para deshacerte de tus dedudas.</Box>
            </Box>

          </Grid>
          <Grid item direction="column" md={4}>
            <Box className={classes.boxAside}>
              <img className={classes.imagenAside} alt="ok" src={imagenAside2}></img>
            <Box className={classes.titleAside}>Ahorra</Box>
            <Box className={classes.abstractAside}>Aprende las diferentes extrategias para ahorrar en estos tiempos difíciles.</Box>
            
            </Box>

          </Grid>
          <Grid item direction="column" md={4}>
            <Box className={classes.boxAside}>
              <img className={classes.imagenAside} alt="ok" src={imagenAside3}></img>
            <Box className={classes.titleAside}>Invierte</Box>
            <Box className={classes.abstractAside}>Aprende las diferentes extrategias para invertir en estos tiempos difíciles.</Box>
            </Box>

          </Grid>
      

        </Grid>

      </Grid>




      {/* </Box> */}
    </div>
  );
}