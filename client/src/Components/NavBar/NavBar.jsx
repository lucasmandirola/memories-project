import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import useStyles from './styles';
import memories from '../../imgs/memories.png';

const NavBar = () => {
  const classes = useStyles()
  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <Typography className={classes.heading} variant='h2' align='center' >Memories</Typography>
      <img className={classes.image} src={memories} alt='memories' height='60'/>
    </AppBar>
  )
}

export default NavBar