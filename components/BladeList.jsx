import React, { useState, useEffect } from 'react';
import { makeStyles, Paper, Typography, Button } from '@material-ui/core';
import Link from 'next/link';
const useStyles = makeStyles((theme) => ({
 header : {
     margin: '.6em 5em'
 },
  bladeContainer: {
    borderBottom: '1px solid lightgray',
    padding: '1.5rem 20em',
    display: 'flex',
    justifyContent: 'flex-start',
    background: '#4d4c4c',
    color: 'white',
    transition: '0.4s',
    "&:hover": {
      background: 'gray'
    }
  },
  textTopContiner: {
    margin: '1rem 0 5em 18rem',
    color: 'white',
    display: 'flex'

  },
  leggTilBtn: {
      marginLeft: '3rem'
  },
  tableTextSerial: {
    marginRight: '10rem',
    fontWeight: 'bold',
    color: theme.palette.appColor1.main,
    width: '10em'
  },
  tableTextDate: {
    width: '10em',
    marginRight: '5rem',
  },
  colorDot1: {
    height: '1.3rem',
    width: '1.3rem',
    borderRadius: '50%',
    background: '#90ed90',
    marginRight: '5rem',
    marginLeft: '2rem',
  },
  colorDot2: {
    height: '1.3rem',
    width: '1.3rem',
    borderRadius: '50%',
    background: '#ffd700',
    marginRight: '5rem',
    marginLeft: '2rem',
  },
  colorDot3: {
    height: '1.3rem',
    width: '1.3rem',
    borderRadius: '50%',
    background: '#f16161',
    marginRight: '5rem',
    marginLeft: '2rem',
  },
  btn: {
    color: 'white',
    border: '1px solid white',
    marginLeft: '10rem'

  }
}));
const BladeList = ({ blades, header, createLink, editLink1, editLink2, viewLink }) => {
  const [backgroundColor, setBackgroundColor] = useState('red');

  // const bladeData = JSON.parse(data);
  const classes = useStyles();
  useEffect(() => {
   
    
  });
  return (
    <div className={classes.mainContainer}>
     <Typography className={classes.header} color='primary' variant='h2'>{header}</Typography>
        <div className={classes.textTopContiner}>
        
          <Typography variant='h5'>Antall sagblad: {blades.data.length}</Typography>
          <Link href={createLink}>
          <Button color='primary' className={classes.leggTilBtn} variant='contained'>Legg til sagblad</Button>
          </Link>
        </div>
      {blades.data.map((blade) => {

          
        return (

         
          <div key={blade._id}>
         
            <div className={classes.bladeContainer}>
              {blade.performer.length < 2 && (
                <div className={classes.colorDot1}></div>
              )}
              {blade.performer.length === 2 && (
                <div className={classes.colorDot2}></div>
              )}
              {blade.performer.length > 2 && (
                <div className={classes.colorDot3}></div>
              )}
              <Typography className={classes.tableTextSerial}>
                {blade.serial}
              </Typography>
              <Typography className={classes.tableTextDate}>
                {blade.registDate}
              </Typography>
              <Typography>{blade.performer.length}</Typography>
              <Link href={`${editLink1}/${blade._id}${editLink2}`}>
              <Button className={classes.btn} variant='outlined'>Rediger</Button>
              </Link>
              <Link href={`${viewLink}/${blade._id}`}>
              <Button className={classes.btn} variant='contained' color='secondary'>Vis</Button>
              </Link>
            </div>

         
          </div>
        );
      })}
    </div>
  );
};

export default BladeList;
