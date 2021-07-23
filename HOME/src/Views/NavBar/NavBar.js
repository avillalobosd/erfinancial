import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';

import { Box, Typography, Button, IconButton, Menu, MenuItem, Fade, Grid, Paper } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ErImagen from './er.png';

const useStyles = makeStyles((theme) => ({
  offset:theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2
  },
  ErImagen: {
    maxWidth: 100
  },
  button: {
    fontWeight: 500,
    color: "white",
    fontSize: 12,
    fontFamily: "Oswald, Sans-serif"
  },
  menu: {
    // fontWeight: 500,
    color: "white",
    fontSize: 14,
    fontFamily: "Oswald, Sans-serif",
    backgroundColor: "black",
    height: 40
    // alignItems:"center"
  },
  opcionMenu: {
    // fontWeight: 500,
    color: "black",
    fontSize: 14,
    fontFamily: "Oswald, Sans-serif",
    backgroundColor: "grey"
    // height: 40
    // alignItems:"center"
  },
  button1: {
    fontWeight: 500,
    color: "white",
    fontSize: 16,
    fontFamily: "Oswald, Sans-serif",
    justifyContent: "flex-start",
    alignItems: "flex-start",


  },buttonRegistrar: {
    marginLeft: "20px",
    fontFamily: "Oswald, Sans-serif",
    backgroundColor:"gold",
    color:"black",
    fontSize:10


  }


}));

export default function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box className={classes.menu} display="flex" bgcolor="black" p={1} alignItems="center">

      <Box flexGrow={1}  style={{ width: "300px" }} align="center" alignItems="center">
        <img className={classes.ErImagen} alt="erImagen" src={ErImagen}></img>
      </Box>
      <Box flexGrow={1} >
        <Toolbar>

          <Hidden only={['sm', 'xs']}>
            <Box>
              <Grid >
              <Button component={Link} to="/blog" > <Typography className={classes.button}>Principal</Typography></Button>
                <Button > <Typography className={classes.button}>¿Quíen soy?</Typography></Button>
                <Button > <Typography className={classes.button}>Material Gratuito</Typography></Button>
                <Button component={Link} to="/blog"> <Typography className={classes.button}>Blog</Typography></Button>
                <Button > <Typography className={classes.button}>Cursos</Typography></Button>
 
              </Grid>
            </Box>
            <Box >
        <Button variant="contained" color="primary" className={classes.buttonRegistrar}>Regístrate</Button>
      </Box>
          </Hidden>

        </Toolbar>
        
      </Box>


      <Box container align="center" alignItems="center">
        <Hidden only={['lg', 'md', 'xl']}>
          <Box component="div">
            <Button className={classes.button1} aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
              <MenuIcon fontSize="large" />
            </Button>
          </Box>
        </Hidden>
      </Box>

      <div>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}

        >
          <MenuItem className={classes.opcionMenu} onClick={handleClose}>¿Quién Soy?</MenuItem>
          <MenuItem className={classes.opcionMenu} onClick={handleClose}>Material Gratuito</MenuItem>
          <MenuItem className={classes.opcionMenu} onClick={handleClose}>Blog</MenuItem>
          <MenuItem className={classes.opcionMenu} onClick={handleClose}>Cursos</MenuItem>
          <MenuItem className={classes.opcionMenu} onClick={handleClose}>Conferencias</MenuItem>
          <MenuItem className={classes.opcionMenu} onClick={handleClose}><Button variant="contained" color="primary" className={classes.buttonRegistrar}>Regístrate</Button></MenuItem>
          
        </Menu>

      </div>
      
    </Box>

  );
}