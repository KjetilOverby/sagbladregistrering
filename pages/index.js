import React, { useState } from 'react';
import { makeStyles, Input, Grid, TextField, Button, Typography } from '@material-ui/core';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  container: {
    background:
      'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)) ,url("https://images.unsplash.com/photo-1507500844113-546121f3ac51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80")',
    height: '100vh',
    backgroundSize: 'cover',
  },
  moelvenContainer: {
    paddingLeft: '3rem',
  },
  headerButtonContainer: {
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center'
  }, 
  header: { 
    color: 'white',
    fontWeight: 'bold',
    margin: '10rem 0',
    [theme.breakpoints.down('md')]: {
      fontSize: '3rem',
      margin: '7rem 0'
   },
   [theme.breakpoints.down('sm')]: {
     fontSize: '2rem'
   
   },
   [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
      margin: '3rem 0'
   },
  },
 
}));

const index = (props) => {
 
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid className={classes.moelvenContainer} container>
        <Grid item>
          <img
            src="https://www.webcruiter.com/media/1070/moelven.png?anchor=center&mode=crop&width=300&height=160&rnd=131540355660000000"
            alt=""
          />
        </Grid>
      </Grid>
      <Grid className={classes.headerButtonContainer} container>
      <Grid item>
        <Typography className={classes.header} variant='h2'>Sagbladregister for Moelven Våler</Typography>
      </Grid>
        <Grid item>
        <Link href='/api/authentication/login'>
          <Button variant="contained">LOGIN</Button>
          </Link>
        </Grid>
     
      </Grid>
    </div>
  );
};

export default index;
