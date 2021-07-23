import React from 'react'
import {
    Hidden,
    Toolbar,
    AppBar,
    Box,
    Typography,
    Button,
    IconButton,
    Menu,
    Divider,
    MenuItem,
    Fade,
    Grid,
    Paper
  } from "@material-ui/core";

  import { makeStyles } from '@material-ui/core/styles';

  import imagen1 from './imagen1.svg';

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
      lineHeight: "35px",
      whitespace: "pre"
  
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
      maxHeight: "300px"
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
  
  export default function Noticias(props) {
    const classes = useStyles();
return <>

<Grid container
        spacing={0}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ marginTop: "50px" }}
      >


        <Grid item xs={7}>
          <Box className={classes.fecha}> {new Date(props.fecha).getFullYear() + "-" + (parseInt(new Date(props.fecha).getMonth()) + 1) + "-" + new Date(props.fecha).getDate() + " " + new Date(props.fecha).getHours() + ":" + new Date(props.fecha).getMinutes() + ":" + new Date(props.fecha).getSeconds()}
          </Box>
          <Box className={classes.paperTitle}> {props.titulo}
          </Box>
          <Box className={classes.fecha}> {props.autor}
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box className={classes.paperImage}>
            <img className={classes.imagen} alt="ok" src={imagen1}></img>
          </Box>
          <Box className={classes.paperAbstract}> {props.abastract}
          </Box>
          <Box className={classes.leerMas}> Leer Más ->
          </Box>
        </Grid>
      </Grid>
</>
  }
// export default Noticia