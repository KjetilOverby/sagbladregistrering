import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles, Typography, TextField, Button } from '@material-ui/core';
import Link from 'next/link';
import { yellow } from '@material-ui/core/colors';
import { array } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  header: {
     color: 'white',
     margin: '1em 0 0 1.5em'
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
  btn : {
    margin: '5em'
  }
}));
const Create = (props) => {
  const classes = useStyles();

   const [duplicatError, setDuplicatError] = useState(false)
   const [duplicatErrorText, setDuplicatErrorText] = useState(false)

  const [form, setForm] = useState({serial: '', registDate: ''})
  const [log, setLog] = useState([])
   
  console.log(form);
  

 
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
  
      
    } catch(err) {
      console.log('something went wrong' + err);
     
    }
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    createBlade();
    
   
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  
  return (
    <div>
      <Typography className={classes.header} variant='h2'>Legg til {props.header} blader</Typography>
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
        <Button className={classes.btn} color='secondary' variant="contained">Back</Button>
      </Link>
    {/* {newBlade.map(blade => 
       <div>
         {blade.serial}
       </div>
    )} */}
    </div>
  );
};

export default Create;
