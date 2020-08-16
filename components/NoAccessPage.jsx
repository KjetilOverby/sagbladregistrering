import React from 'react';
import Link from 'next/link';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import { makeStyles, Typography, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    justifyContent: 'center',
    marginTop: '5em',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: '3rem'
    },
  },
  useImg: {
    borderRadius: '50%',
    margin: '3rem',
    height: '4rem',
    [theme.breakpoints.down('sm')]: {
      margin: '2rem'
    },
  },
  userContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '5em'
  },
  backBtn: {
      margin: '8rem',
      [theme.breakpoints.down('sm')]: {
     margin: '3rem'
      },
    
  },
  noAccessText: {
    verticalAlign: 'middle',
    display: 'inline-flex',
    color: 'red'
 }
}));
const NoAccessPage = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer}>
      <Grid className={classes.noAccessText} item>
        <Typography className={classes.noAccessText}><NotInterestedIcon style={{marginRight: '1rem'}}/> Ingen tilgang</Typography>
      </Grid>
      <Grid item>
        {props.user && (
          <Grid className={classes.userContainer} direction='column' container>
          <Grid item>
              {props.user.name &&
                <p>Du er innlogget som: </p>
              }
          </Grid>
            <Grid item>
              <Typography>{props.user.name}</Typography>
            </Grid>
            <Grid item>
              <img className={classes.useImg} src={props.user.picture} alt="" />
            </Grid>
            { props.user.name &&
            <Grid direction='column' alignItems='center' container>
            <Grid item>
                <p>Denne bruker har ikke tilgang til databasen</p>
                </Grid>
                <Grid item>
                <p>Kontakt ansvarlig</p>
                </Grid>
            </Grid>
        }
            <Grid item>
              <Link href="/api/authentication/logout">
                <Button className={classes.backBtn} variant="contained">Tilbake</Button>
              </Link>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default NoAccessPage;
