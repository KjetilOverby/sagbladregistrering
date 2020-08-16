import React from 'react';
import Link from 'next/link';
import { makeStyles, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({}));
const NoAccessPage = (props) => {
 
  const classes = useStyles();
  return (
    <div>
      <Typography>Du har ikke tilgang på data</Typography>
      {props.user && (
        <div>
          <Typography>{props.user.name}</Typography>
          <img src={props.user.picture} alt="" />
          <Link href='/api/authentication/logout'>
          <Button variant='contained' >Logout</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NoAccessPage;
