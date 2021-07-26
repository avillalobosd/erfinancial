import React, { useEffect, useLayoutEffect } from 'react';
import useState from 'react-usestateref';
import { Link } from 'react-router-dom';
// STYLES MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
// MATERIAL UI  CORE 
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
// MATERIAL UI  ICONS 
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import MenuIcon from '@material-ui/icons/Menu';
import { CheckOutlined } from '@material-ui/icons';
// API  
import api from '../../api/crud'
// IMAGENES
import ErImagen from './er.png';
import imagen1 from './imagen1.svg';
import imagen2 from './imagen2.jpg';
import imagen3 from './imagen3.jpg';
import background from './background.jpg';
// COMPONENTS  
import Noticia from '../../Components/Noticia/Noticia'
import Entrada from '../../Components/Entrada/Entrada'



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

export default function BlogMiddle() {
  const classes = useStyles();
  const [entradas, setEntradas, entradasRef] = useState([])

  useEffect(() => {
    api.mostrar()
      .then(respuesta => {
        setEntradas(respuesta.data)
        console.log(entradasRef.current)
      })
  }, []);


  return (

    <div >
      {/* <Box  className={classes.root}display="flex"> */}

      {/* NOTICIAS PRINCIPALES  */}
      {/* NOTICIA 1  */}
      {entradas[0] ? <Noticia imagen={entradas[0].imagen} id={entradas[0].id} fecha={entradas[0].createdAt} titulo={entradas[0].titulo} abastract={entradas[0].abstract} autor={entradas[0].autor}/> :"0"} 
      {entradas[1] ? <Noticia imagen={entradas[1].imagen} id={entradas[1].id} fecha={entradas[1].createdAt} titulo={entradas[1].titulo} abastract={entradas[1].abstract} autor={entradas[1].autor}/> :"0"} 
     
     

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
          <Grid style={{ textAlign: "center", backgroundColor: "red", color: "white", fontFamily: "Barlow Semi Condensed" }} alignItems="center" justify="center" item xs={5}>
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
        style={{ marginTop: "20px" }}
      >
        {/* NOTICIA 1  */}

        {entradas[2] ? <Entrada  imagen={entradas[2].imagen} id={entradas[2].id} fecha={entradas[2].createdAt} titulo={entradas[2].titulo} abastract={entradas[2].abstract} autor={entradas[2].autor}/> :" "} 
        {entradas[3] ? <Entrada   imagen={entradas[3].imagen} id={entradas[3].id}fecha={entradas[3].createdAt} titulo={entradas[3].titulo} abastract={entradas[3].abstract} autor={entradas[3].autor}/> :" "} 
        {entradas[4] ? <Entrada imagen={entradas[4].imagen} id={entradas[4].id} fecha={entradas[4].createdAt} titulo={entradas[4].titulo} abastract={entradas[4].abstract} autor={entradas[4].autor}/> :" "} 










      </Grid>
      {/* <Divider > Últimas Entradas</Divider> */}

      {/* </Box> */}
    </div>
  );
}