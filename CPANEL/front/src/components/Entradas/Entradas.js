import React, { useEffect } from 'react';
import useState from 'react-usestateref'

import {
  Button,
  TextField,
  Modal,
  Backdrop,
  Fade,
  IconButton,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Switch
} from '@material-ui/core/';

import EditIcon from '@material-ui/icons/Edit';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
// import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useSpring, animated } from 'react-spring'; // web.cjs is required for IE 11 support
import '../css/estilos.css';


import { Grid } from '@material-ui/core';
import api from '../../api/crud'
import { ButtonDropdown } from 'reactstrap';
var arrayToTree = require('array-to-tree');
// import aguila from './a2.png';


// let data = {
//   id: '0',
//   name: 'Parent',
//   children: [
//     {
//       id: '1',
//       name: 'Child - 1',
//     },
//     {
//       id: '3',
//       name: 'Child - 3',
//       children: [
//         {
//           id: '4',
//           name: 'Child - 4',
//         },
//       ],
//     },
//   ],
// };

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  }, root: {
    background: 'white',
    position: '-webkit-sticky',
    position: 'sticky',
    top: 0,
    bottom: 0,
    paddingTop: '5px',
    paddingBottom: '10px',
    zIndex: 5,
  }, modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: "white",
    border: '3px solid #999',
    // boxShadow: "10",
    padding: 15,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];




export default function Entradas() {

  const classes = useStyles();
  const [entradas, setEntradas, entradasRef] = useState()
  const [cambio, setCambio, cambioRef] = useState()
  const [open, setOpen, openRef] = useState()
  const [titulo, setTitulo, tituloRef] = useState("78");
  const [autor, setAutor, autorRef] = useState("65");
  const [texto, setTexto, textoRef] = useState("99");
  const [tweet, setTweet, tweetRef] = useState("99");
  const [abstract, setAbstract, abstractRef] = useState("99");
  const [id, setId, idRef] = useState("99");

  useEffect(() => {
    api.mostrar()
      .then(respuesta => {
        setEntradas(respuesta.data)
        console.log(entradasRef.current)
      })
  }, []);

  const handleChange = (event) => {
    api.cambiarStatus(event.target.id).then(respuesta => {

      console.log(respuesta.data)
    }).then(respuesta => {
      api.mostrar()
        .then(respuesta => {
          setEntradas(respuesta.data)
          console.log(entradasRef.current)
        })
    })

    // console.log(event.target.id);
  };

  const handleChangeAutor = (event) => {
    setAutor(event.target.value);
  };

  const handleChangeTitulo = (event) => {
    setTitulo(event.target.value);
  };

  const handleChangeTexto = (event) => {
    setTexto(event.target.value);
  };
  const handleChangeTweet = (event) => {
    setTweet(event.target.value);
  };
  const handleChangeAbstract = (event) => {
    setAbstract(event.target.value);
  };
  const enviarCambios = (event) => {
    var datos = { titulo: titulo, autor: autor, texto: texto, id: id, abstract:abstract, tweet:tweet }

    console.log(datos)
    api.editarPost(datos).then(respuesta => {
      api.mostrar()
        .then(respuesta => {
          setEntradas(respuesta.data)
          console.log(entradasRef.current)
        })
    })
    // window.reload()
    console.log("EnviarCAmbios")
    setOpen(false);
  };


  function editPost(id) {

    let obj = entradas.find(o => o.id === id);
    setOpen(true);
    setId(id)
    setTitulo(obj.titulo)
    setAutor(obj.autor)
    setTexto(obj.text)
    setAbstract(obj.abstract)
    setTweet(obj.tweet)
    console.log(obj)
  }


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Container className={classes.root}>

        <TableContainer component={Paper}>
          <Table stickyHeader className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Fecha</TableCell>
                <TableCell align="center">Autor</TableCell>
                <TableCell align="center">Título</TableCell>
                <TableCell align="center">Accion</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>
            {entradas ?

              <TableBody>
                {entradas.map(row => (

                  <TableRow key={row.id}>
                    <TableCell align="center">{new Date(row.createdAt).getFullYear() + "-" + (parseInt(new Date(row.createdAt).getMonth()) + 1) + "-" + new Date(row.createdAt).getDate() + " " + new Date(row.createdAt).getHours() + ":" + new Date(row.createdAt).getMinutes() + ":" + new Date(row.createdAt).getSeconds()}</TableCell>
                    <TableCell align="center">{row.titulo}</TableCell>
                    <TableCell align="center">{row.autor}</TableCell>
                    <TableCell align="center">
                      <IconButton
                        onClick={() => { editPost(row.id) }}
                        aria-label="delete"
                        size="small">
                        <EditIcon fontSize="inherit" />
                      </IconButton></TableCell>
                    <TableCell align="center">
                      Ocultar
                    <Switch
                        checked={row.status}
                        onChange={handleChange}
                        color="primary"
                        name="checkedB"
                        id={row.id}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
                    Mostrar


                  </TableCell>
                  </TableRow>
                ))}
              </TableBody> : console.log("SI")}

          </Table>
        </TableContainer>


      </Container>

      {/* MODAL  */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Editar</h2>
            <TextField
              value={autor}
              onChange={handleChangeAutor}
              // error={errorAutor}
              // helperText="Introducir Nombre"
              size="small"
              variant="outlined"
              margin="normal"
              // {...register('autor')}
              required
              fullWidth
              id="autor"
              label="Autor"
              name="setAutor"
              type="text"
            // autoComplete="email"
            // autoFocus
            />
            <TextField
              value={titulo}
              onChange={handleChangeTitulo}
              // error={errorTitulo}
              // helperText="Introducir Apellido Paterno"
              size="small"
              variant="outlined"
              margin="normal"
              // {...register('titulo')}
              required
              fullWidth
              id="titulo"
              label="Título"
              name="titulo"
              type="text"
            // autoComplete="email"
            // autoFocus
            />
            <TextField
              value={texto}
              onChange={handleChangeTexto}
              // error={erroTexto}
              // helperText="Introducir Apellido Materno"
              size="small"
              variant="outlined"
              margin="normal"
              // {...register('texto')}
              required
              fullWidth
              id="texto"
              label="Texto"
              name="texto"
              type="text"
              multiline
              rows={10}
            // autoComplete="email"
            // autoFocus
            />
            <TextField
              value={tweet}
              onChange={handleChangeTweet}
              // error={erroTexto}
              // helperText="Introducir Apellido Materno"
              size="small"
              variant="outlined"
              margin="normal"
              // {...register('texto')}
              required
              fullWidth
              id="tweet"
              label="Tweet"
              name="tweet"
              type="text"
              multiline
              rows={3}
            // autoComplete="email"
            // autoFocus
            />
                        <TextField
              value={abstract}
              onChange={handleChangeAbstract}
              // error={erroTexto}
              // helperText="Introducir Apellido Materno"
              size="small"
              variant="outlined"
              margin="normal"
              // {...register('texto')}
              required
              fullWidth
              id="abstract"
              label="Abstract"
              name="abstract"
              type="teabstractxt"
              multiline
              rows={4}
            // autoComplete="email"
            // autoFocus
            />


            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={enviarCambios}
            >
              Enviar
          </Button>
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Cancelar
          </Button>

          </div>
        </Fade>
      </Modal>

    </>

  );


}