import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './redux/actions/posts'
import memories from './imgs/memories.png';
import Posts from './Components/Posts/Posts';
import Form from './Components/Form/Form';
import useStyles from './styles';

function App() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  return (
    <Container maxidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center' >Memories</Typography>
        <img className={classes.image} src={memories} alt='memories' height='60'/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid items xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid items xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
