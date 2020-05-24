import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles, Typography, TextField, Button } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({}));
const Create = (props) => {
  const classes = useStyles();

  const [form, setForm] = useState({ serial: '', registDate: '' });

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
    } catch (error) {
      console.log(error);
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
      <Typography>Registrer {props.header}</Typography>
      <form>
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
        <Button variant="outlined">Back</Button>
      </Link>
    </div>
  );
};

export default Create;
