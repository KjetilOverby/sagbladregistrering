import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles, Typography, TextField, Button, Grid } from '@material-ui/core';
import Link from 'next/link';
import { yellow } from '@material-ui/core/colors';
import { array } from 'prop-types';
import { get } from 'mongoose';

const useStyles = makeStyles((theme) => ({
  header: {
    color: 'white',
    margin: '1em 0 0 1.5em',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: '3em',
    width: '30em',
    height: '30em',
    marginLeft: '5rem',
    marginTop: '5rem',
    background: '#dcdcdc',
    borderRadius: '5px',
  },
  btn: {
    margin: '5em',
  },
  listContainer: {
    margin: '10rem',
    color: theme.palette.appText.main
  },
  listItem: {
    marginBottom: '-1em',
    fontSize: '1rem'
  }
}));
const Create = (props) => {
  const classes = useStyles();

  const [form, setForm] = useState({ serial: '', registDate: '' });
  const serial = form.serial;
  const [serialList, setSerialList] = useState([])



  const createBlade = async () => {
    try {
      const res = await fetch(props.url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        //body: BSON.serialize(form)
        body: JSON.stringify(form),
        // body: form
      });
    } catch (err) {
      console.log('something went wrong' + err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     createBlade();
     setSerialList([...serialList, serial])
    
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Grid container>
    <Grid item>
      <Typography className={classes.header} variant="h2">
        Legg til {props.header} blader
      </Typography>
      <form className={classes.form}>
        <TextField
          name="serial"
          variant="outlined"
          label="Serial"
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          label="RegistDate"
          onChange={handleChange}
          name="registDate"
        />
        <Button onClick={handleSubmit} variant="outlined">
          Submit
        </Button>
      </form>

      <Link href={props.back}>
        <Button className={classes.btn} color="secondary" variant="contained">
          Back
        </Button>
      </Link>
      </Grid>
      <Grid className={classes.listContainer} item>
      <Grid direction='column' container>
       <h1>Du har lagt inn {serialList.length} blad</h1>
      {serialList.map((list) => {
        return (
          <div>
            
            <ul>
              <li className={classes.listItem}>{list}</li>
            </ul>
          </div>
        )
      })}
      </Grid>
      </Grid>
    </Grid>
  );
};

export default Create;
