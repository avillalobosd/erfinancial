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
  import { createTheme, responsiveFontSizes,ThemeProvider  } from '@material-ui/core/styles';
  import imagen1 from './imagen1.svg';

  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const useStyles = makeStyles((theme) => ({
     fecha: {
      fontSize: 22,
      fontWeight: "400",
      color: "lightskyblue",
      textAlign: "left",
      fontFamily: "Bebas Neue, Sans-serif"
    }, paperImage: {
      maxWidth:"200px",
      // height: "400px",
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
  
    }, leerMas: {
      fontSize: 25,
      fontWeight: "400",
      color: "lightskyblue",
      textAlign: "left",
      fontFamily: "Bebas Neue, Sans-serif",
      marginTop: "10px"
    }, imagen: {
      maxWidth:"85vw",
      // height: "auto",
      width: "auto",
      border: "solid"
      // ENTRADAS 
    }
  
  }));
  
  export default function Noticias(props) {
    const classes = useStyles();
return <>

<Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ marginTop: "50px" }}
      >


        <Grid item m={7}>
          <Box className={classes.fecha}> {new Date(props.fecha).getFullYear() + "-" + (parseInt(new Date(props.fecha).getMonth()) + 1) + "-" + new Date(props.fecha).getDate() + " " + new Date(props.fecha).getHours() + ":" + new Date(props.fecha).getMinutes() + ":" + new Date(props.fecha).getSeconds()}
          </Box>
          <Box className={classes.paperTitle}> {props.titulo}
          </Box>
          <Box className={classes.fecha}> {props.autor}
          </Box>
        </Grid>
        <Grid item xs={11} sm={9} md={7} xl={7}>
          <Box className={classes.paperImage}>
            <img className={classes.imagen} alt="ok" src={props.imagen}></img>
          </Box>
          <ThemeProvider theme={theme}>
          <Box style={{whiteSpace: 'pre-wrap'}}className={classes.paperAbstract}>{props.abastract}
          </Box>
          </ThemeProvider>
         {/* <Box className={classes.leerMas}> Leer Más -></Box>  */}
          
          
        </Grid>
      </Grid>
</>
  }
// export default Noticia