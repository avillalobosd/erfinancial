import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import TextField from '@material-ui/core/TextField';

import { Box, Typography, Button, IconButton, Menu, MenuItem, Fade, Grid, Paper } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ErImagen from './er.png';

import background from './background3.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "400px",
    // backgroundImage: `url(${background})`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    backgroundColor:"grey",
    alignItems: "center",
    display: "grid",
    justifyContent: "center"
    // marginTop:"10px"
  }, font: {
    fontFamily: "Heebo",
    fontWeight: 30,
    fontSize: "25px",
    color: "white"
  }, jumbo: {
    height:"200px",
    // marginLeft: "50px",
    // marginRight: "50px",
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
  }, marco: {
    backgroundColor: "rgba(255,255,255,0.2)",

  
  }


}));

export default function HomeTop() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Grid  container>
        <Grid  style={{width:"50vw"}}item xs={12} md={12}>
          <Grid className={classes.jumbo} item sm={12}>
            <Typography style={{ fontSize: 32, color: "white" }} paragraph align="center">Suscríbete al NewsFeed</Typography>
            <form  noValidate autoComplete="off">
      <TextField id="filled-basic"  variant="filled" label="Correo" />
      </form>
            {/* <Typography
              align="justify" style={{ fontSize: 17, color: "white" }}>
                
                Aqui se publicarán las cosas que se añadan día a día asasd asda asda adas asdasd asda asdas asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd 
         
            </Typography> */}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper ></Paper>
        </Grid>

      </Grid>
    </div>
  );
}