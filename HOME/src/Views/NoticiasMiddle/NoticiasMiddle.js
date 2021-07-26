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
import NoticiaCompleta from '../../Components/NoticiaCompleta/NoticiaCompleta'
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

export default function NoticiasMiddle(props) {
  const classes = useStyles();
  const [entradas, setEntradas, entradasRef] = useState([])
  const [noticias, setNoticia, noticiasRef] = useState([])
  const [id, setId, idRef] = useState("");
  const [titulo, setTitulo, tituloRef] = useState("78");
  const [autor, setAutor, autorRef] = useState("00");
  const [texto, setTexto, textoRef] = useState("99");
  const [fecha, setFecha, fechaRef] = useState("99");
  const [imagen, setImagen, imagenRef] = useState("99");
  const [tweet, setTweet, tweetRef] = useState("99");
  const [abstract, setAbstract, abstractRef] = useState("99");

  useEffect(() => {
    console.log(props.noticia)
    api.mostrar()
      .then(respuesta => {
        let data=respuesta.data
        console.log(data)
        // let ok=respuesta.data
        
        // console.log(entradasRef.current)
        let obj = data.find(o => o.id === parseInt(props.noticia));
        console.log(obj)
        // // setOpen(true);
        setId(obj.id)
        setImagen(obj.imagen)
        setFecha(obj.createdAt)
        setTitulo(obj.titulo)
        setAutor(obj.autor)
        setTexto(obj.text)
        setAbstract(obj.abstract)
        setTweet(obj.tweet)
        // console.log(obj)
        window.scrollTo(0, 400)
        let arreglo = data.filter(function(i) { return i.id !== parseInt(props.noticia) }); // filtramos
        setEntradas(arreglo)
console.log( arreglo );
      })

    
  }, [props.noticia]);


  return (

    <div >
      {/* <Box  className={classes.root}display="flex"> */}

      {/* NOTICIAS PRINCIPALES  */}
      {/* NOTICIA 1  */}
      {autor!="00" ? <NoticiaCompleta imagen={imagen} fecha={fecha} titulo={tituloRef.current} abastract={texto} autor={autor} noticia={0}/> :""} 
      
     
     

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
        {entradas[0] ? <Entrada  imagen={entradas[0].imagen}  id={entradas[0].id} fecha={entradas[0].createdAt} titulo={entradas[0].titulo} abastract={entradas[0].abstract} autor={entradas[0].autor}/> :" "}
        {entradas[1] ? <Entrada  imagen={entradas[1].imagen}  id={entradas[1].id} fecha={entradas[1].createdAt} titulo={entradas[1].titulo} abastract={entradas[1].abstract} autor={entradas[1].autor}/> :" "}
        {entradas[2] ? <Entrada  imagen={entradas[2].imagen} id={entradas[2].id} fecha={entradas[2].createdAt} titulo={entradas[2].titulo} abastract={entradas[2].abstract} autor={entradas[2].autor}/> :" "} 
        {entradas[3] ? <Entrada  imagen={entradas[3].imagen} id={entradas[3].id} fecha={entradas[3].createdAt} titulo={entradas[3].titulo} abastract={entradas[3].abstract} autor={entradas[3].autor}/> :" "} 
        {entradas[4] ? <Entrada imagen={entradas[4].imagen}  id={entradas[4].id} fecha={entradas[4].createdAt} titulo={entradas[4].titulo} abastract={entradas[4].abstract} autor={entradas[4].autor}/> :" "} 
        {entradas[5] ? <Entrada  imagen={entradas[5].imagen}  id={entradas[5].id} fecha={entradas[5].createdAt} titulo={entradas[5].titulo} abastract={entradas[5].abstract} autor={entradas[5].autor}/> :" "}
        {entradas[6] ? <Entrada  imagen={entradas[6].imagen}  id={entradas[6].id} fecha={entradas[6].createdAt} titulo={entradas[6].titulo} abastract={entradas[6].abstract} autor={entradas[6].autor}/> :" "}
        {entradas[7] ? <Entrada  imagen={entradas[7].imagen}  id={entradas[7].id} fecha={entradas[7].createdAt} titulo={entradas[7].titulo} abastract={entradas[7].abstract} autor={entradas[7].autor}/> :" "}

      </Grid>
      {/* <Divider > Últimas Entradas</Divider> */}

      {/* </Box> */}
    </div>
  );
}