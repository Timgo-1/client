import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux'; 

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import Fade from "react-reveal/Fade";
import useStyles from './styles';
import dejavu1 from './images/dejavu1.jpg';
import Logo from "./images/logo.png";


const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div className={classes.chill}>
    <Container minWidth="lg">
      <AppBar className={classes.appBar} position="sticky">
          <Fade top cascade>
              <img src={Logo} alt="app logo" />
              <Typography className={classes.heading} variant="h2" align="center">DejaVu</Typography>
              <img className={classes.image} src={dejavu1} alt="icon" height="60" />
          </Fade>
        </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    <AppBar className={classes.appFoot} position="static">
      <Fade bottom cascade>
        < footer>© 2021 All rights reserved.</footer>
      </Fade>
    </AppBar>
</div>
  );
};

export default App;
