import React from 'react';
import { useState, useEffect } from 'react';
import {
  makeStyles,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
} from '@material-ui/core';
import Link from 'next/link';
import { yellow } from '@material-ui/core/colors';
import { array } from 'prop-types';
import { get } from 'mongoose';
import TripOriginIcon from '@material-ui/icons/TripOrigin';
import StarsIcon from '@material-ui/icons/Stars';
var dateFormat = require('dateformat');

// https://images.unsplash.com/photo-1470165473874-023613603389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80
// https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80
// https://images.unsplash.com/photo-1517476072926-bce26e54610f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80

const useStyles = makeStyles((theme) => ({
  mainContainer: {
     background: 'url("https://images.unsplash.com/photo-1440909921208-2fcbb9e42f7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")',
     backgroundSize: 'cover',
     height: '100vh',
     [theme.breakpoints.down('xs')]: {
        width: '100vw',
        background: theme.palette.sidebar.main
     },
     
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  header: {
    color: theme.palette.appText.main,
    margin: '1em 0 0 1.5em',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
      marginBottom: '2rem'
    },
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
    background: theme.palette.appText.main,
    borderRadius: '5px',
    [theme.breakpoints.down('xs')]: {
      width: '90vw',
      margin: '0 1em'
    },
  },
  btn: {
    margin: '5em',
  },
  listContainer: {
    margin: '10rem 10rem',
    color: theme.palette.appText.main,
    height: '40em',
    width: '30em',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      margin: 0
    },
  },
  listItem: {
    marginBottom: '-1em',
    fontSize: '1rem',
    width: '7em',
    listStyle: 'none',
    display: 'inline-flex',
    verticalAlign: 'middle',
    justifyContent: 'space-around',
    fontSize: '1.2rem',
    fontWeight: 'bold'
  },
  counterText: {
    color: theme.palette.appText.main,
    margin: '1rem 0 0 5rem',
    [theme.breakpoints.down('xs')]: {
     margin: '1em 0 0 1em',
     fontSize: '1.5rem'
    },
  }
}));
const Create = (props) => {
  const classes = useStyles();
  const date = new Date()
  const newRegDate = dateFormat(date) 
 

  const [regDate, setregDate] = useState(new Date())
  const [currency, setCurrency] = useState();
  const [form, setForm] = useState({ serial: '', registDate: '', type: '', updated: newRegDate });
  const serial = form.serial;
  const [serialList, setSerialList] = useState([]);
    

 
 
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
    if(form.serial === '' || form.type === '') {
      alert('Du må fylle ut feltene')
    } else {
    createBlade();
    setSerialList([...serialList, serial]);
    }
  };

  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
     
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
    },
  ];
  
  
  return (
    <Grid className={classes.mainContainer} container>
      <Grid item>
        <Typography className={classes.header} variant="h3">
          Legg til nye blad
        </Typography>
        <form className={classes.form}>
          <TextField
             
            required
            id="standard-select-currency"
            select
            label="Select"
            value={currency}
            onChange={handleChange}
            helperText="Velg bladtype"
            name="type"
          >
            {sawBlades.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            
            required
            name="serial"
            variant="outlined"
            label="Serial"
            onChange={handleChange}
          />
          {/* <TextField
         
            required
            variant="outlined"
            label="Registreringsdato"
            onChange={handleChange}
            name="registDate"
          /> */}
          <Button onClick={handleSubmit} variant="outlined">
            Submit
          </Button>
        </form>
         <Typography className={classes.counterText} variant='h4'>Du har lagt til {serialList.length} blad</Typography>
        <Link href={props.back}>
          <Button className={classes.btn} color="secondary" variant="contained">
            Back
          </Button>
        </Link>
        
      </Grid>

      <Grid className={classes.listContainer} item>
        <Grid direction="column" container>
          {serialList.map((list) => {
            return (
              <div key={list}>
                <ul>
                
                  <li className={classes.listItem}><StarsIcon />{list}</li>
                </ul>
              </div>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Create;
