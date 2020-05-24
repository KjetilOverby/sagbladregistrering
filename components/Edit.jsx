import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { TextField, Button, Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Edit = ({ blade, header, back }) => {
  const [form, setForm] = useState({ performer: [''], date: [''] });
  const router = useRouter();
  console.log(form);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateBlade();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const updateBlade = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/k2236api/${router.query.id}`,
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          //body: BSON.serialize(form)
          body: JSON.stringify(form),
          // body: form
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Typography variant="h1">update: {header}</Typography>
      <form>
        <TextField
          name="performer"
          variant="outlined"
          label="Serial"
          onChange={handleChange}
          value={form.performer}
        />
        <TextField
          variant="outlined"
          label="RegistDate"
          onChange={handleChange}
          name="date"
          value={form.date}
        />
        <Button onClick={handleSubmit} variant="outlined">
          Submit
        </Button>
      </form>

      <Link href={back}>
        <Button variant="outlined">Back</Button>
      </Link>
      <h1>{blade.serial}</h1>
    </div>
  );
};

export default Edit;
