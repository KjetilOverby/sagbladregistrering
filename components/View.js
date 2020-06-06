import React, { useState } from 'react';
import { makeStyles, Grid, Typography, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: 'linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.5)), url("https://images.unsplash.com/photo-1544840281-301d28446178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")',
         
        
      
        backgroundSize: 'cover',
        height: '100vh',
        [theme.breakpoints.down('xs')]: {
          background: theme.palette.sidebar.main
        },
    },
  container: {
    
    width: '30%',
    margin: '2rem',
    background: 'white',
    padding: '1rem',
    borderRadius: '10px',
    [theme.breakpoints.down('xs')]: {
      width: '95%',
      margin: '1em auto',
    },
  },
  img: {
    height: 'auto',
    width: '100%',
  },
  typeHeader: {
    fontStyle: 'italic',
  },
  serialHeader: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },

  span: {
    color: 'orangered',
  },
  registDateText: {
    color: 'gray',
  },
  retipHeader: {
    margin: '2rem 0',
  },
  retipContainer: {
    background: '#dedede',
    padding: '1rem',
    height: 'auto',
    borderRadius: '5px',
    boxShadow: '13px 3px 20px rgba(0,0,0,.2)',
  },
  performerContainer: {
    marginRight: '5rem',
  },
  btnContainer: {
    marginTop: '2rem',
  },
  backBtn: {
    marginRight: '2rem',
  },
  deleteBtn: {
    color: 'white',
    background: 'red',
    display: 'inline-flex',
    verticalAlign: 'middle',
    justifyContent: 'space-around',
  },
  dotContainer: {
    marginTop: '1rem'
  },
  colorDot1: {
    height: '1.3rem',
    width: '1.3rem',
    borderRadius: '50%',
    background: '#90ed90',
    marginRight: '1rem'
  },
  colorDot2: {
    height: '1.3rem',
    width: '1.3rem',
    borderRadius: '50%',
    background: '#ffd700',
    marginRight: '1rem'
  },
  colorDot3: {
    height: '1.3rem',
    width: '1.3rem',
    borderRadius: '50%',
    background: '#f16161',
    marginRight: '1rem'
  },
}));

const View = ({ blade, back, deleteUrl, pushUrl }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteBlade = async () => {
    const bladeId = router.query.id;
    try {
      const deleted = await fetch(`${deleteUrl}/${bladeId}`, {
        method: 'DELETE',
      });
      router.push(pushUrl);
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className={classes.mainContainer}>
    <div className={classes.container}>
      <Grid direction="column" container>
        <Grid item>
          <img
            className={classes.img}
            src="https://www.hds-group.de/wp-content/uploads/2016/07/hauptbild_kreissaegeblaetter.jpg"
            alt=""
          />
        </Grid>
        <Grid item>
          <Typography className={classes.typeHeader} variant="h5">
            {blade.type}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.serialHeader}>
            ID: <span className={classes.span}>{blade.serial}</span>
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.registDateText}>
            Dato registrert: {blade.registDate}
          </Typography>
        </Grid>
        <Grid item>
        <Grid direction='row' container className={classes.dotContainer}>
          {blade.performer.length < 2 && (
                <div className={classes.colorDot1}></div>
              )}
              {blade.performer.length === 2 && (
                <div className={classes.colorDot2}></div>
              )}
              {blade.performer.length > 2 && (
                <div className={classes.colorDot3}></div>
              )}
          <Typography>Bladet er omloddet {blade.performer.length} {blade.performer.length === 1 ? 'gang' : 'ganger'}.</Typography>
       </Grid>
        </Grid>
        <Grid item>
          <Typography className={classes.retipHeader} variant="h4">
            Omloddinger
          </Typography>
        </Grid>
        <Grid className={classes.retipContainer} container>
          <Grid className={classes.performerContainer} item>
            <Typography variant="body1">{blade.performer[0]}</Typography>
            <Typography variant="body1">{blade.performer[1]}</Typography>
            <Typography variant="body1">{blade.performer[2]}</Typography>
            <Typography variant="body1">{blade.performer[3]}</Typography>
            <Typography variant="body1">{blade.performer[4]}</Typography>
            <Typography variant="body1">{blade.performer[5]}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">{blade.date[0]}</Typography>
            <Typography variant="body1">{blade.date[1]}</Typography>
            <Typography variant="body1">{blade.date[2]}</Typography>
            <Typography variant="body1">{blade.date[3]}</Typography>
            <Typography variant="body1">{blade.date[4]}</Typography>
            <Typography variant="body1">{blade.date[5]}</Typography>
          </Grid>
        </Grid>
        <Grid className={classes.btnContainer} container>
          <Grid item>
            <Link href={back}>
              <Button
                color="primary"
                className={classes.backBtn}
                variant="contained"
              >
                Tilbake
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Button
              onClick={handleClickOpen}
              className={classes.deleteBtn}
              variant="contained"
            >
              <DeleteIcon fontSize="small" /> Slett
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          Du er i ferd med å slette{' '}
          <span className={classes.span}>{blade.serial}</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Er du sikker på at du vil slette{' '}
            <span className={classes.span}>{blade.serial}</span> fra databasen?
            <br />
            Slettingen kan ikke angres!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Avbryt
          </Button>
          <Button onClick={deleteBlade} className={classes.deleteBtn}>
            Slett
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </div>
  );
};

export default View;
