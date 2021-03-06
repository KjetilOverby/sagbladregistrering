import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  Paper,
  Typography,
  Button,
  TextField,
  Grid,
} from '@material-ui/core';
import Link from 'next/link';
const useStyles = makeStyles((theme) => ({
  header: {
    margin: '.6em 5em',
  },
  serialHeader: {
    marginLeft: '18em',
    width: '5em',
    color: theme.palette.appText.main,
  },
  registHeader: {
    marginLeft: '14em',
    color: theme.palette.appText.main,
  },
  omlHeader: {
    marginLeft: '8rem',
    color: theme.palette.appText.main,
  },
  bladeListHeadersContainer: {
    marginBottom: '2rem',
  },
  bladeContainer: {
    width: '100vw',
    borderBottom: '1px solid lightgray',
    padding: '1.5rem 20em',
    display: 'flex',
    justifyContent: 'flex-start',
    background: theme.palette.bladeList.main,
    color: 'white',
    transition: '0.4s',
    '&:hover': {
      background: theme.palette.bladeListHover.main,
    },
    [theme.breakpoints.down('md')]: {
      padding: '1.5rem 40em',
      background: 'red',
    },
  },

  textTopContiner: {
    margin: '1rem 0 5em 18rem',
    color: 'white',
    display: 'flex',
  },
  leggTilBtn: {
    marginLeft: '3rem',
  },
  tableTextSerial: {
    marginRight: '2rem',
    fontWeight: 'bold',
    color: theme.palette.appColor1.main,
    width: '15em',
  },
  tableTextDate: {
    width: '10em',
    marginRight: '3rem',
  },
  colorDot1: {
    height: '1.3rem',
    minWidth: '1.3rem',
    borderRadius: '50%',
    background: '#90ed90',
    marginRight: '1rem',
    marginLeft: '1rem',
  },
  colorDot2: {
    height: '1.3rem',
    minWidth: '1.3rem',
    borderRadius: '50%',
    background: '#ffd700',
    marginRight: '1rem',
    marginLeft: '1rem',
  },
  colorDot3: {
    height: '1.3rem',
    minWidth: '1.3rem',
    borderRadius: '50%',
    background: '#f16161',
    marginRight: '1rem',
    marginLeft: '1rem',
  },
  btn: {
    color: theme.palette.appText.main,
    border: `1px solid ${theme.palette.appText.main}`,
    marginLeft: '7rem',
    width: '7rem',
  },
  search: {
    marginLeft: '10em',
    marginRight: '2em',
  },
  searchResult: {
    marginRight: '1rem',
  },
}));
const BladeList = ({
  blades,
  header,
  bladeType,
  createLink,
  editLink1,
  editLink2,
  viewLink,
  bladtype,
}) => {
  // const [searchInput, setSearchInput] = useState('');
  // // // const bladeData = JSON.parse(data);
  const classes = useStyles();

  const bladeList = blades.data.sort((a, b) => a.serial > b.serial);
  const filterBladeType = bladeList.filter((blade) =>
    blade.type.includes(bladeType)
  );

  // const getSearchInput = (e) => {
  //   setSearchInput(e.target.value);
  //   console.log(searchInput);
  // };

  // const filter = bladeList.filter((blade) =>
  //   blade.serial.includes(searchInput)
  // );
  // const bladeCount = blades.data.filter((blade) =>
  //   blade.type.includes(bladtype)
  // );

  return (
    <div className={classes.mainContainer}>
      <Typography className={classes.header} color="primary" variant="h2">
        {header}
      </Typography>

      <div className={classes.textTopContiner}>
        <Typography variant="h5">
          Antall sagblad: {filterBladeType.length}
        </Typography>

        {/* <Link href={createLink}>
          <Button
            color="primary"
            className={classes.leggTilBtn}
            variant="contained"
          >
            Legg til sagblad
          </Button>
        </Link>
        <TextField inputProps={{ style: { color: 'white', fontSize: '1.5rem'}}}
 color='secondary' className={classes.search} placeholder='Søk' onChange={getSearchInput} /> */}


      </div>
      {filterBladeType.map((blade) => 
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
              <Button className={classes.btn} variant="outlined">
                Rediger
              </Button>
            </Link>
            <Link href={`${viewLink}/${blade._id}`}>
              <Button
                className={classes.btn}
                variant="outlined"
                color="secondary"
              >
                Vis
              </Button>
            </Link>
          </div>
          </div>
)}

    
    </div>
  );
};

export default BladeList;
