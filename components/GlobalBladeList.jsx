import React, { useState, useEffect, useContext } from 'react';

import {
  makeStyles,
  Paper,
  Typography,
  Button,
  TextField,
  Grid,
} from '@material-ui/core';
import Link from 'next/link';
import K2236 from './Kanefusa/K2236';
import K2438 from './Kanefusa/K2438';
import K2640 from './Kanefusa/K2640';
import K2842 from './Kanefusa/K2842';
import K3044 from './Kanefusa/K3044';
import K3246 from './Kanefusa/K3246';
import Kvs66hoyre from './Kanefusa/Kvs66hoyre';
import Kvs66venstre from './Kanefusa/Kvs66venstre';
import KnBlad from './Kanefusa/KnBlad';
import Kvs66hoyreF from './Kanefusa/KvshoyreF';
import Kvs66venstreF from './Kanefusa/Kvs66venstreF';
import Nvs66hoyre from './Nessjø/Nvs66hoyre';
import Nvs66venstre from './Nessjø/Nvs66venstre';
const useStyles = makeStyles((theme) => ({
  mainContainer: {},
  header: {
    margin: '.6em 5em',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
      margin: '1em 1em',
    },
  },
  type: {
    marginRight: '5em',
    width: '10em',
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
    [theme.breakpoints.down('xs')]: {
      padding: '1em',
      flexDirection: 'column',
      width: '100vw'

    },
  },

  textTopContiner: {
    margin: '1rem 0 5em 18rem',
    color: 'white',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      flexDirection: 'column',
    },
  },
  antallText: {
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto',
    },
  },
  leggTilBtn: {
    marginLeft: '3rem',
    [theme.breakpoints.down('xs')]: {
      margin: '2em auto',
      width: '15em',
    },
  },
  tableTextSerial: {
    marginRight: '2rem',
    fontWeight: 'bold',
    color: theme.palette.appColor1.main,
    width: '15em',
    [theme.breakpoints.down('xs')]: {
       marginLeft: '1em'
    },
  },
  tableTextDate: {
    width: '10em',
    marginRight: '3rem',
    [theme.breakpoints.down('xs')]: {
       marginLeft: '1em'
    },
  },
  tableTextNumberPerform: {
     [theme.breakpoints.down('xs')]: {
        fontSize: '1.5rem',
        marginLeft: '.6em'
     },
  },
  dotAndTypeContainer: {
    width: '25em',
    [theme.breakpoints.down('xs')]: {
       marginBottom: '1rem'
    },
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
    [theme.breakpoints.down('xs')]: {
       margin: '1em 0 .2em 1em'
    },
  },
  search: {
    marginLeft: '10em',
    marginRight: '2em',
    [theme.breakpoints.down('xs')]: {
      margin: '1em 0 2em 3em'
    },
  },
  searchResult: {
    marginRight: '1rem',
    [theme.breakpoints.down('xs')]: {
      margin: '0 1rem 4em 2em',

    },
  },
}));
const BladeList = ({
  blades,
  header,
  createLink,
  editLink1,
  editLink2,
  viewLink,
  allBlades,
  k2236,
  k2438,
  k2640,
  k2842,
  k3044,
  k3246,
  kvs66hoyre,
  kvs66venstre,
  knBlad,
  kvs66hoyreF,
  kvs66venstreF,
  nvs66hoyre,
  nvs66venstre,
  k2236func,
}) => {
  // sawblades

  const [backgroundColor, setBackgroundColor] = useState('red');
  const [searchInput, setSearchInput] = useState('');
  // const bladeData = JSON.parse(data);
  const classes = useStyles();

  const bladeList = blades.data.sort((a, b) => a.serial > b.serial);

  const getSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const filter = bladeList.filter((blade) =>
    blade.serial.includes(searchInput)
  );

  return (
    <Grid container className={classes.mainContainer}>
      {allBlades && (
        <>
          <Grid item>
            <Typography className={classes.header} color="primary" variant="h2">
              {header}
            </Typography>
          </Grid>

          <Grid item className={classes.textTopContiner}>
            <Typography className={classes.antallText} variant="h5">
              Antall sagblad: {blades.data.length}
            </Typography>

            <Link href={createLink}>
              <Button
                color="primary"
                className={classes.leggTilBtn}
                variant="contained"
              >
                Legg til sagblad
              </Button>
            </Link>
            <TextField
              inputProps={{ style: { color: 'white', fontSize: '1.5rem' } }}
              color="secondary"
              className={classes.search}
              placeholder="Søk"
              onChange={getSearchInput}
            />
            <Grid container>
            <Grid item>
            <Typography className={classes.searchResult} variant="h5">
              Søkeresultat:{' '}
            </Typography>
            </Grid>
            <Grid item>
            <Typography variant="h5">
              {searchInput === '' ? 'Ingen søk' : filter.length}
            </Typography>
            </Grid>
            </Grid>
          </Grid>
          {/* <Grid className={classes.bladeListHeadersContainer} container>
      <Typography className={classes.serialHeader}>Serial</Typography>
      <Typography className={classes.registHeader}>Reg. dato</Typography>
      <Typography className={classes.omlHeader}>Omloddinger</Typography>
      </Grid>  */}

          {filter.map((blade) => {
            return (
              <Grid container key={blade._id}>
                <Grid className={classes.bladeContainer}>
                  <Grid className={classes.dotAndTypeContainer} container>
                    {blade.performer.length < 2 && (
                      <div className={classes.colorDot1}></div>
                    )}
                    {blade.performer.length === 2 && (
                      <div className={classes.colorDot2}></div>
                    )}
                    {blade.performer.length > 2 && (
                      <div className={classes.colorDot3}></div>
                    )}
                    <Typography className={classes.type}>
                      {blade.type}
                    </Typography>
                  </Grid>
                 
                  <Grid item>
                    <Typography className={classes.tableTextSerial}>
                      {blade.serial}
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography className={classes.tableTextDate}>
                      {blade.registDate}
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography className={classes.tableTextNumberPerform}>{blade.performer.length}</Typography>
                  </Grid>
                  <Grid item>
                    <Link href={`${editLink1}/${blade._id}${editLink2}`}>
                      <Button className={classes.btn} variant="outlined">
                        Rediger
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href={`${viewLink}/${blade._id}`}>
                      <Button
                        className={classes.btn}
                        variant="outlined"
                        color="secondary"
                      >
                        Vis
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </>
      )}

      {k2236 && <K2236 k2236func={k2236func} blades={blades} />}
      {k2438 && <K2438 blades={blades} />}
      {k2640 && <K2640 blades={blades} />}
      {k2842 && <K2842 blades={blades} />}
      {k3044 && <K3044 blades={blades} />}
      {k3246 && <K3246 blades={blades} />}
      {kvs66hoyre && <Kvs66hoyre blades={blades} />}
      {kvs66venstre && <Kvs66venstre blades={blades} />}
      {knBlad && <KnBlad blades={blades} />}
      {kvs66hoyreF && <Kvs66hoyreF blades={blades} />}
      {kvs66venstreF && <Kvs66venstreF blades={blades} />}
      {nvs66hoyre && <Nvs66hoyre blades={blades} />}
      {nvs66venstre && <Nvs66venstre blades={blades} />}
    </Grid>
  );
};

export default BladeList;
