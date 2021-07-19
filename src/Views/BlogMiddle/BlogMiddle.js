import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';

import { Box, Typography, Button, IconButton, Menu, Divider, MenuItem, Fade, Grid, Paper } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ErImagen from './er.png';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import imagen1 from './imagen1.svg';
import imagen2 from './imagen2.jpg';
import imagen3 from './imagen3.jpg';

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
    height: "400px",
    // marginTop: "80px",
    padding: theme.spacing(2),
    textAlign: 'center',

  }, paperTitle: {
    fontSize: 45,
    fontWeight: "400",
    color: "black",
    textAlign: "left",
    fontFamily: "Bebas Neue, Sans-serif"

  }, paperAbstract: {
    fontSize: 20,
    color: "black",
    textAlign: "justify",
    fontFamily: "Sans-serif",
    marginTop: "10px",
    lineHeight: "35px"

  }, fecha: {
    fontSize: 22,
    fontWeight: "400",
    color: "lightskyblue",
    textAlign: "left",
    fontFamily: "Bebas Neue, Sans-serif"
  }, leerMas: {
    fontSize: 25,
    fontWeight: "400",
    color: "lightskyblue",
    textAlign: "left",
    fontFamily: "Bebas Neue, Sans-serif",
    marginTop: "10px"
  }, paperList: {
    // marginTop:"20px",
    fontSize: 20,
    fontWeight: "400",
    color: "darkblue"
  }, imagen: {
    // width:"30vw",
    height: "100%",
    width: "100%",
    border: "solid"


    // ENTRADAS 
  }, imagenEntradas: {
    // width:"30vw",
    height: "50%",
    width: "50%",
    border: "solid"
  }, ultimasEntradas: {
    // width:"30vw",
    maxHeight:"300px"
  }, fechaEntradas: {
    fontSize: 15,
    fontWeight: "400",
    color: "lightskyblue",
    textAlign: "left",
    fontFamily: "Bebas Neue, Sans-serif"
  }, titleEntradas: {
    fontSize: 25,
    fontWeight: "400",
    color: "black",
    textAlign: "left",
    fontFamily: "Bebas Neue, Sans-serif"
  }, leerMasEntradas: {
    fontSize: 25,
    fontWeight: "400",
    color: "lightskyblue",
    textAlign: "left",
    fontFamily: "Bebas Neue, Sans-serif",
    marginTop: "10px"
  }, paperImageEntradas: {
    // width:"30vw",
    maxHeight: "300px",
    // marginTop: "80px",
    padding: theme.spacing(2),
    textAlign: 'center',
  }

}));

export default function BlogMiddle() {
  const classes = useStyles();


  return (

    <div >
      {/* <Box  className={classes.root}display="flex"> */}

      {/* NOTICIAS PRINCIPALES  */}
      {/* NOTICIA 1  */}
      <Grid container
        spacing={0}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ marginTop: "50px" }}
      >


        <Grid item xs={7}>
          <Box className={classes.fecha}> Julio, 17, 2021
          </Box>
          <Box className={classes.paperTitle}> Educación financiera desde la primaria en México será una realidad
          </Box>
          <Box className={classes.fecha}> Fianzas - México - Personal
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box className={classes.paperImage}>
            <img className={classes.imagen} alt="ok" src={imagen1}></img>
          </Box>
          <Box className={classes.paperAbstract}> Porque la educación financiera no llega por arte de magia a nuestras vidas, la Comisión Nacional para la Protección y Defensa de los usuarios de Servicios Financieros, mejor conocida como Condusef, ha planeado una serie de actividades que pretenden incorporar el aprendizaje de las finanzas personas desde una edad temprana.
          </Box>
          <Box className={classes.leerMas}> Leer Más ->
          </Box>
        </Grid>
      </Grid>
      {/* NOTICIA 2  */}
      <Grid container
        spacing={0}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ marginTop: "50px" }}
      >


        <Grid item xs={7}>
          <Box className={classes.fecha}> Julio, 17, 2021
          </Box>
          <Box className={classes.paperTitle}> Educación financiera desde la primaria en México será una realidad
          </Box>
          <Box className={classes.fecha}> Fianzas - México - Personal
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box className={classes.paperImage}>
            <img className={classes.imagen} alt="ok" src={imagen1}></img>
          </Box>
          <Box className={classes.paperAbstract}> Porque la educación financiera no llega por arte de magia a nuestras vidas, la Comisión Nacional para la Protección y Defensa de los usuarios de Servicios Financieros, mejor conocida como Condusef, ha planeado una serie de actividades que pretenden incorporar el aprendizaje de las finanzas personas desde una edad temprana.
          </Box>
          <Box className={classes.leerMas}> Leer Más ->
          </Box>
        </Grid>
      </Grid>

      {/* SEPARADOR   */}
      <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ marginTop: "20px" }}
      >
        <Grid item
          spacing={0}
          direction="column"
          alignItems="left"
          justify="center"
          style={{ marginTop: "20px" }}
        >
          <Grid  style={{textAlign:"center",backgroundColor: "red", color:"white",fontFamily:"Barlow Semi Condensed" }}alignItems="center" justify="center" item xs={5}>
            <Typography >Últimas Entradas</Typography>
          </Grid>

          <Grid item xs={7}>
            <Divider style={{ width: "60vw" }} />
          </Grid>

        </Grid>
        </Grid>

      {/* ULTIMAS ENTRADAS  */}

      <Grid container
        spacing={0}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ marginTop: "20px"}}
      >
        {/* NOTICIA 1  */}
        <Grid className={classes.ultimasEntradas}item sm={2}>
        </Grid>
        <Grid className={classes.ultimasEntradas} item sm={4}>
          <Box className={classes.paperImageEntradas}>
            <img className={classes.imagenEntradas} alt="ok" src={imagen1}></img>
          </Box>
 
        </Grid>

        <Grid className={classes.ultimasEntradas} item sm={4}>
          <Box className={classes.fechaEntradas}> Julio, 17, 2021
          </Box>
          <Box className={classes.titleEntradas}> Educación financiera desde la primaria en México será una realidad
          </Box>
          <Box className={classes.fechaEntradas}> Fianzas - México - Personal
          </Box>
          <Box className={classes.leerMasEntradas}> Leer Más ->
          </Box>
        </Grid>
        <Grid className={classes.ultimasEntradas} item sm={2}>
        </Grid>

          {/* NOTICIA 2  */}
          <Grid className={classes.ultimasEntradas}item sm={2}>
        </Grid>
        <Grid className={classes.ultimasEntradas} item sm={4}>
          <Box className={classes.paperImageEntradas}>
            <img className={classes.imagenEntradas} alt="ok" src={imagen1}></img>
          </Box>
 
        </Grid>

        <Grid className={classes.ultimasEntradas} item sm={4}>
          <Box className={classes.fechaEntradas}> Julio, 17, 2021
          </Box>
          <Box className={classes.titleEntradas}> Educación financiera desde la primaria en México será una realidad
          </Box>
          <Box className={classes.fechaEntradas}> Fianzas - México - Personal
          </Box>
          <Box className={classes.leerMasEntradas}> Leer Más ->
          </Box>
        </Grid>
        <Grid className={classes.ultimasEntradas} item sm={2}>
        </Grid>

              {/* NOTICIA 3  */}
              <Grid className={classes.ultimasEntradas}item sm={2}>
        </Grid>
        <Grid className={classes.ultimasEntradas} item sm={4}>
          <Box className={classes.paperImageEntradas}>
            <img className={classes.imagenEntradas} alt="ok" src={imagen1}></img>
          </Box>
 
        </Grid>

        <Grid className={classes.ultimasEntradas} item sm={4}>
          <Box className={classes.fechaEntradas}> Julio, 17, 2021
          </Box>
          <Box className={classes.titleEntradas}> Educación financiera desde la primaria en México será una realidad
          </Box>
          <Box className={classes.fechaEntradas}> Fianzas - México - Personal
          </Box>
          <Box className={classes.leerMasEntradas}> Leer Más ->
          </Box>
        </Grid>
        <Grid className={classes.ultimasEntradas} item sm={2}>
        </Grid>
          
   

       



      </Grid>
      {/* <Divider > Últimas Entradas</Divider> */}

      {/* </Box> */}
    </div>
  );
}