import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';

import { Box, Typography, Button, IconButton, Menu, MenuItem, Fade, Grid, Paper } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ErImagen from './er.png';
import BlogTop from '../BlogTop/BlogTop'
import BlogMiddle from '../BlogMiddle/BlogMiddle'
import HomeBottom from '../HomeBottom/HomeBottom'
// import BlogMiddle from '../BlogMiddle/BlogMiddle';

const useStyles = makeStyles((theme) => ({




}));

export default function Blog() {
  const classes = useStyles();


  return (
    <>
    <BlogTop/>
    <BlogMiddle/>
    {/* <HomeBottom/> */}
    </>

  );
}