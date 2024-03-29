import React from 'react'
import {
    Box,
    Grid,
    Link
  } from "@material-ui/core";

  import { makeStyles } from '@material-ui/core/styles';

  import imagen1 from './imagen1.svg';

  const useStyles = makeStyles((theme) => ({
     fecha: {
      fontSize: 22,
      fontWeight: "400",
      color: "lightskyblue",
      textAlign: "left",
      fontFamily: "Bebas Neue, Sans-serif"
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
  
    }, leerMas: {
      fontSize: 25,
      fontWeight: "400",
      color: "lightskyblue",
      textAlign: "left",
      fontFamily: "Bebas Neue, Sans-serif",
      marginTop: "10px"
    }, imagen: {
      // width:"30vw",
      height: "100%",
      // width: "100%",
      border: "solid"
      // ENTRADAS 
    }
  
  }));
  
  export default function Noticias(props) {
    const classes = useStyles();
    const url="#/noticias/"+props.id
return <div>

<Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ width:"2000px",marginTop: "50px" }}
        
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
            <img className={classes.imagen} alt="ok" src={props.imagen}></img>
          </Box>
          <Box className={classes.paperAbstract}> {props.abastract}
          </Box>
         
         <Link href={url} >
         <Box className={classes.leerMas}> Leer Más -></Box> 
  </Link>
          
        </Grid>
      </Grid>
</div>
  }
// export default Noticia