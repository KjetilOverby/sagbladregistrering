import React, { useState } from 'react';
import { makeStyles, Input, Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  container: {
    background:
      'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)) ,url("https://images.unsplash.com/photo-1507500844113-546121f3ac51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80")',
    height: '100vh',
    backgroundSize: 'cover',
  },
  moelvenContainer: {
    marginLeft: '3rem',
  },

  formContainer: {
    margin: '10em auto',
    background: 'rgba(255,255,255,.8)',
    padding: '3rem',
    width: '25em',
    borderRadius: '5px',
  },
}));

const index = () => {
  const router = useRouter();
  const [getPassword, setGetPassword] = useState();
  const [password, setPassword] = useState();
  const onChangeHandler = (e) => {
    setGetPassword(e.target.value);
  };

  const onSubmit = () => {
    setPassword(getPassword);
  };

  if (password === 'slip96') {
    router.push('/globalblades/blades/blade');
  }
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
      <Grid className={classes.formContainer} container>
        <Grid item>
          <form onSubmit={onSubmit}>
            <TextField
              type="password"
              label="Passord"
              variant="filled"
              onChange={onChangeHandler}
            />
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default index;
