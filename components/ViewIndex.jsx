import fetch from 'isomorphic-fetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button, makeStyles, Card, CardActionArea, CardContent, CardMedia, Typography, CardActions } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';
import baseUrl from '../utils/baseUrl';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import DeleteIcon from '@material-ui/icons/Delete';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
  const useStyles = makeStyles({

    container: {
      margin: '5em'
    },
    kanefusa: {
      fontStyle: 'italic'
    },
    span: {
      color: 'red'
    },
    deleteBtn : {
      color: 'red'
    },
    serialHeader: {
      color: 'orangered'
      
    },
    dato: {
     marginTop: '1rem'
    },
    root: {
      maxWidth: 545,
      height: 845
    },
    img: {
      height: 300
    },
    retipHeader: {
      marginTop: '2rem',
      
      
    },
    retipContainer: {
      display: 'flex',
      height: '20em',
      marginTop: '1rem'
    },
    company: {
      width: '35%'
    },
    date: {
      width: '45%',
    },
    deleteBtn: {
      color: 'white',
      fontWeight: 'bold',
      background: 'red',
      "&:hover" : {
        background: '#d80f0f'
      }
    }
  })
const ViewIndex = ({ blade, deleteUrl, pushUrl, header, back }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const classes = useStyles()

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
    <div className={classes.container}>

<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://lh3.googleusercontent.com/proxy/m_7knY5Vb6MH94NXtdk-xxtQzwc-wCZKbhGwkTgKmNB2gYv0hBB826TrV-AiYtdn8ZtL8W3MPkuufz0lMXlwtYNyfg8vRLo"
          title="Contemplative Reptile"
          className={classes.img}
        />
        <CardContent>
          <Typography className={classes.kanefusa} gutterBottom variant="h5" component="h2">
            {header}
          </Typography>
          <Typography className={classes.dato} variant="body2" color="textSecondary" component="p">
            Dato registrert: {blade.registDate}
          </Typography>
          <Typography  variant='h4'>Serienr: <span className={classes.serialHeader}>{blade.serial}</span></Typography>
          
          <Typography className={classes.retipHeader} variant='h5'>Omloddinger</Typography>
          <div className={classes.retipContainer}>
             <div className={classes.company}>
             <Typography variant='body1'>{blade.performer[0]}</Typography>
             <Typography variant='body1'>{blade.performer[1]}</Typography>
             <Typography variant='body1'>{blade.performer[2]}</Typography>
             <Typography variant='body1'>{blade.performer[3]}</Typography>
             <Typography variant='body1'>{blade.performer[4]}</Typography>
             <Typography variant='body1'>{blade.performer[5]}</Typography>
             </div>
             <div className={classes.date}>
               <Typography variant='body1'>{blade.date[0]}</Typography>
               <Typography variant='body1'>{blade.date[1]}</Typography>
               <Typography variant='body1'>{blade.date[2]}</Typography>
               <Typography variant='body1'>{blade.date[3]}</Typography>
               <Typography variant='body1'>{blade.date[4]}</Typography>
               <Typography variant='body1'>{blade.date[5]}</Typography>
             </div>
            
          </div>
          <Typography>Bladet er omloddet {blade.performer.length} {blade.performer.length === 1 ? 'gang' : 'ganger'}.</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link href={back}>
        <Button size="small" color="primary">
          Tilbake
        </Button>
        </Link>
        <Button onClick={handleClickOpen} variant='contained' className={classes.deleteBtn} size="small">
          <DeleteIcon /> Slett dette bladet
        </Button>
      </CardActions>
    </Card>
      
      
     


      <div>
     
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Du er i ferd med å slette <span className={classes.span}>{blade.serial}</span></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           Er du sikker på at du vil slette <span className={classes.span}>{blade.serial}</span> fra databasen?
           <br/>
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

export default ViewIndex;
