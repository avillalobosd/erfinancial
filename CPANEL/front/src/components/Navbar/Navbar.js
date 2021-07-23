import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import FolderIcon from '@material-ui/icons/Folder';
import AddIcon from '@material-ui/icons/Add';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import '../css/estilos.css';
import ERImagen from './a2.png';
// import aguila from './a2.png';
// import { useForm } from 'react-hook-form';
// import api from '../../api/crud'


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
  },
  root1: {
    background: 'black',
    position: '-webkit-sticky',
    position: 'sticky',
    top: 0,
    bottom: 0,
    paddingTop: '5px',
    paddingBottom: '10px',
    zIndex: 4,
    alignItems:'center'
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
ERimagen: {
    width: '150px', // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
  }, nav1: {
    width: "100%",
    // position: "fixed",
    // bottom: 0,
    "& .MuiBottomNavigationAction-root": {
      "@media (max-width: 768px)": {
        minWidth: "auto",
        padding: "6px 0"
      }}
  }
}));

export default function Info() {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  
      <Container className={classes.root}>

<Grid className={classes.root1}
      container
      // spacing={24}
      justify="center"
      >
        <img className={classes.ERimagen} alt="chucho" src={ERImagen}></img>
        <Typography component="div">

        </Typography>

        </Grid>
        <BottomNavigation className={classes.nav1}showLabels value={value} onChange={handleChange}>
          <BottomNavigationAction component={Link} to={'/Crear'}label="Crear" value="crear" icon={<AddIcon />} />
          <BottomNavigationAction component={Link} to={'/Entradas'}label="Entradas" value="referidos" icon={<MenuBookIcon />} />
          {/* <BottomNavigationAction component={Link} to={'/Llaves'}label="Llaves" value="llaves" icon={<VpnKeyIcon />} /> */}
          {/* <BottomNavigationAction component={Link} to={'/Usuario'} label="Usuario" value="usuario" icon={<AccountCircleIcon />} /> */}
          {/* <BottomNavigationAction component={Link} to={'/Ayuda'} label="Ayuda" value="ayuda" icon={<HelpIcon style={{fill: "green"}} />} /> */}
        </BottomNavigation>
      
      
      </Container>

  );
}