import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles, Typography, TextField, Button, Grid, MenuItem } from '@material-ui/core';
import Link from 'next/link';
import { yellow } from '@material-ui/core/colors';
import { array } from 'prop-types';
import { get } from 'mongoose';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
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
  const [currency, setCurrency] = useState();
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
  

  const handleChange2 = (event) => {
    setCurrency(event.target.value);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setCurrency(e.target.value);
  };
  const sawBlades = [
    {
      value: 'Kanefusa 2.2-3.6',
      label: 'Kanefusa 2.2-3.6',
    },
    {
      value: 'Kanefusa 2.4-3.8',
      label: 'Kanefusa 2.4-3.8',
    },
    {
      value: 'Kanefusa 2.6-4.0',
      label: 'Kanefusa 2.6-4.0',
    },
    {
      value: 'Kanefusa 2.8-4.2',
      label: 'Kanefusa 2.8-4.2',
    },
    {
      value: 'Kanefusa 3.0-4.4',
      label: 'Kanefusa 3.0-4.4',
    },
    {
      value: 'Kanefusa 3.2-4.6',
      label: 'Kanefusa 3.2-4.6',
    },
    {
      value: 'Kanefusa N-blad',
      label: 'Kanefusa N-blad',
    },
    {
      value: 'Kanefusa VS-66 venstre',
      label: 'Kanefusa VS-66 venstre',
    },
    {
      value: 'Kanefusa VS-66 høyre',
      label: 'Kanefusa VS-66 høyre',
    },
    {
      value: 'Kanefusa VS-66 venstre F',
      label: 'Kanefusa VS-66 venstre F',
    },
    {
      value: 'Kanefusa VS-66 høyre F',
      label: 'Kanefusa VS-66 høyre F',
    },
    {
      value: 'Nessjø 2.8-4.2',
      label: 'Nessjø 2.8-4.2',
    },
    {
      value: 'Nessjø VS-66 venstre',
      label: 'Nessjø VS-66 venstre',
    },
    {
      value: 'Nessjø VS-66 høyre',
      label: 'Nessjø VS-66 høyre',
    }
  ];

  return (
    <Grid container>
    <Grid item>
      <Typography className={classes.header} variant="h2">
        Legg til {props.header} blader
      </Typography>
      <form className={classes.form}>
      <TextField
          id="standard-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Velg bladtype"
          name='type'
        >
          {sawBlades.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>


       
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
