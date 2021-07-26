import React, { useEffect } from 'react';
import useState from 'react-usestateref'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fab from "@material-ui/core/Fab";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import '../css/estilos.css';
import { useForm } from 'react-hook-form';
import api from '../../api/crud'
import { FormControl } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { CenterFocusStrongSharp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
    position: '-webkit-sticky',
    position: 'sticky',
    top: 0,
    bottom: 0,
    paddingTop: '5px',
    paddingBottom: '10px',
    zIndex: 5,
  }, backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    // width:'50%',
    // alignItems:'center'
  },
  aguila: {
    width: '100px', // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
  },
  input: {
    display: "none"
  },
  fab: {
    // width: "50%",
    // margin: "auto",
    // display:"block",
    "margin-left": "auto",
    "margin-right": "auto"
  }
}));

export default function Crear() {
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  let { slug } = useParams();
  console.log(slug)
  const classes = useStyles();
  const { register, handleSubmit, reset } = useForm()
  const [state, setState] = React.useState({
    nivel: '',
    activojubilado: '',
    sexo: ''

  });
  const [id, setId, idRef] = useState("")
  const [fotoSubida, setFotoSubida, fotoSubidaRef] = useState("")
  const [cadena, setCadena, cadenaRef] = useState("")
  const [nombreArchivo, setNombreArchivo, nombreArchivoRef] = useState("")
  const [fotoEnviar, setfotoEnviar, fotoEnviarRef] = useState("")
  const [errorAutor, setErrorAutor, errorAutorRef] = useState(false)
  const [errorTitulo, setErrorTitulo, errorTituloRef] = useState(false)
  const [erroTexto, setErrorTexto, errorTextoRef] = useState(false)
  const [errorAbstract, setErrorAbstract, errorAbstractRef] = useState(false)
  const [errorTweet, setErrorTweet, errorTweetRef] = useState(false)

  const [open, setOpen, openRef] = useState(false);
  const [openEmpleado, setOpenEmpleado, openEmpleadoRef] = useState(false);
  const [openTelefono, setOpenTelefono, OpenTelefonoRef] = useState(false);
  const [openCampos, setOpenCampos, openCamposRef] = useState(false);


  const fileHandler = event => {
    const { files } = event.target;
            setfotoEnviar(files[0])
            var src= URL.createObjectURL(files[0])
            var alt= files[0].name
            setNombreArchivo(files[0].name)
            console.log(src)
            console.log(alt)
            setFotoSubida(src)
  };
  // useEffect(() => { console.log("errorNoEmp data changed") }, [errorNoEmp])

  // useEffect(() => {
  //   api.buscarTelefono("000")
  //     .then(respuesta => {
  //       console.log("ARRANCAR-API")
  //     })

  //   api.buscarPass(localStorage.getItem('user'))
  //     .then(respuesta => {
  //       if (respuesta.data.status === "EXITO") {
  //         setId(respuesta.data.id)
  //         setCadena(respuesta.data.cadena)
  //         // console.log(respuesta.data)
  //         // localStorage.setItem('user',respuesta.data.password)
  //         console.log("CORRECTO")
  //       } else {
  //         window.location.href = '/'
  //       }
  //       console.log(respuesta);
  //     })
  //     setErrorAutor(false)
  //     setErrorTexto(false)
  //     setErrorTitulo(false)
  // }, []);

  // const handleCloseToggle = () => {
  //   setOpen(false);
  // };
  // const handleToggle = () => {
  //   setOpen(!open);
  // };

  const revisa = async function revisarFormulario(data) {
    // var problemas=false;
    setErrorAutor(false)
    setErrorTexto(false)
    setErrorTitulo(false)
    if (data.autor === undefined || data.autor.trim() === '') {
      setErrorAutor(true)
      // problemas=true;
    }
    if (data.titulo === undefined || data.titulo.trim() === '') {
      setErrorTitulo(true)
      // problemas=true;
    }
    if (data.texto === undefined || data.texto.trim() === '') {
      setErrorTexto(true)
      // problemas=true;
    }
    if (data.abstract === undefined || data.abstract.trim() === '') {
      setErrorAbstract(true)
      // problemas=true;
    }
    if (data.tweet === undefined || data.tweet.trim() === '') {
      setErrorTweet(true)
      // problemas=true;
    }

    if (errorTextoRef.current || errorTituloRef.current || errorAutorRef.current || errorTweetRef.current || errorAbstractRef.current) {
      console.log("ERROR")
      // alert("Faltan Campos(En Rojo)")
      setOpenCampos(true)
    } else {
      console.log("NO ERROR")
      registrar(data)
      // alert("TODO CORRECTO")
    }
    // console.log("ENVIADO")



  }

  // function enviarFormulario(data) {
  //   console.log(data)
  //   registrar(data)
  // setOpen(true)
  // api.buscarTelefono(data.telefono)
  //   .then(respuesta => {
  //     if (respuesta.data.status === "EXITO") {
  //       // localStorage.setItem('user',respuesta.data.password)
  //       setOpen(false)
  //       setOpenTelefono(true)
  //       setErrorTelefono(true)
  //       // alert("Telefono ya registrado con otro usuario")
  //     } else {
  //       api.buscarNoEmpleado(data.no_emp)
  //         .then(respuesta2 => {
  //           if (respuesta2.data.status === "EXITO") {
  //             // localStorage.setItem('user',respuesta.data.password)
  //             // alert("No Empleado ya registrado")
  //             setOpen(false)
  //             setOpenEmpleado(true)
  //             setErrorNoEmp (true)
  //           } else {
  //             console.log("CORRECTO")
  //             registrar(data)
  //             // window.location.href = '/'
  //           }
  //           // console.log(respuesta);
  //         })
  //     }
  //     // console.log(respuesta);
  //   })


  // }

  function randomString(len, charSet) {
    charSet = charSet || '0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
      var randomPoz = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
  }


  function registrar(data) {
    let cadenaF = randomString(10)
    setNombreArchivo(cadenaF)
    let fotog = "https://api.pontechucho.com/public/uploads/id.jpg"
    const formData = new FormData();
    if (nombreArchivo === "") {
      console.log("NO HAY FOTO")
    } else {
      formData.append('file', fotoEnviarRef.current, cadenaF + ".jpg");
      fotog = "https://apierf.abecode.com/public/uploads/" + nombreArchivoRef.current + '.jpg'
      console.log(data.foto[0])
    }
    // e.preventDefault();
    api.subirFoto(formData).then(respuesta => {
    console.log(respuesta)
    api.registrar({
      autor: data.autor,
      titulo: data.titulo,
      texto: data.texto,
      abstract: data.abstract,
      tweet: data.tweet,
      imagen:fotog
    }).then(respuesta2 => {
      console.log(respuesta2)
      window.location.reload()
      // setValue({register: '})
    });

  })

}


  // };
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };


  const handleCloseSnack = () => {
    setOpenTelefono(false);
    setOpenEmpleado(false);
    setOpenCampos(false);
  };


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  }
  return (
    <Container className="containerInfo">

      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <Container>

        <form className={classes.form} noValidate onSubmit={handleSubmit((data) => revisa(data))}>

          <TextField
            error={errorAutor}
            // helperText="Introducir Nombre"
            size="small"
            variant="outlined"
            margin="normal"
            {...register('autor')}
            required
            fullWidth
            id="autor"
            label="Autor"
            name="autor"
            type="text"
          // autoComplete="email"
          // autoFocus
          />
          <TextField
            error={errorTitulo}
            // helperText="Introducir Apellido Paterno"
            size="small"
            variant="outlined"
            margin="normal"
            {...register('titulo')}
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
            error={erroTexto}
            // helperText="Introducir Apellido Materno"
            size="small"
            variant="outlined"
            margin="normal"
            {...register('texto')}
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
            error={errorAbstract}
            // helperText="Introducir Apellido Materno"
            size="small"
            variant="outlined"
            margin="normal"
            {...register('abstract')}
            required
            fullWidth
            id="abstract"
            label="Abstract"
            name="abstract"
            type="text"
            multiline
            rows={3}
          // autoComplete="email"
          // autoFocus
          />

          <TextField
            error={errorTweet}
            // helperText="Introducir Apellido Materno"
            size="small"
            variant="outlined"
            margin="normal"
            {...register('tweet')}
            required
            fullWidth
            id="tweet"
            label="Tweet"
            name="tweet"
            type="text"
            multiline
            rows={2}
          // autoComplete="email"
          // autoFocus
          />

          <input
            type="file"
            {...register('foto')}
            name="foto"
            id="foto"
            label="foto"
            className={classes.input}
            accept="image/*"
            onChange={fileHandler}
          />
          <label htmlFor="foto">

            <Fab className={classes.fab} variant="extended" component="span">
              <AddPhotoAlternateIcon />Foto
            </Fab>
          </label>
          <br></br>
          {fotoSubida == "" ? <div></div> : <img className={classes.aguila} alt="chucho" src={fotoSubida}></img>}


          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Enviar
          </Button>

        </form>




      </Container>

      <div className={classes.root}>
        {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={openTelefono} autoHideDuration={4000} onClose={handleCloseSnack}>
          <Alert onClose={handleClose} severity="error">
            Teléfono ya registrado en sistema
          </Alert>
        </Snackbar>

      </div>
      <div className={classes.root}>
        {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={openEmpleado} autoHideDuration={4000} onClose={handleCloseSnack}>
          <Alert onClose={handleClose} severity="error">
            Número de Empleado ya registrado en sistema
          </Alert>
        </Snackbar>

      </div>
      <div className={classes.root}>
        {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={openCampos} autoHideDuration={4000} onClose={handleCloseSnack}>
          <Alert onClose={handleClose} severity="error">
            Faltan Campos
          </Alert>
        </Snackbar>

      </div>


    </Container>
  );
}