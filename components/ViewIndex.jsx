import fetch from 'isomorphic-fetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button, makeStyles, Card, CardActionArea, CardContent, CardMedia, Typography, CardActions, Grid } from '@material-ui/core';
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
  const useStyles = makeStyles((theme) => ({

    container: {
      background: 'url("https://images.unsplash.com/photo-1536183922588-166604504d5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80")',
     
       justifyContent: 'space-around',
       backgroundSize: 'cover',
       height: '100vh'
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
      height: 'auto',
      paddingBottom: '2rem',
      [theme.breakpoints.down('xs')]: {
        minHeight: '100vh',
        marginBottom: '10em'
      },
    },
    img: {
      height: 300
    },
    retipHeader: {
      marginTop: '2rem',
      
      
    },
    retipContainer: {
      display: 'flex',
      height: 'auto',
      marginTop: '1rem',
      marginBottom: '3rem',
      background: '#dcdcdc',
      padding: '1rem',
      borderRadius: '5px',
      boxShadow: '2px 2px 5px gray'
    },
    company: {
      width: '55%'
    },
    date: {
      width: '45%',
    },
    deleteBtn: {
      color: 'white',
      fontWeight: 'bold',
      background: 'red',
      minHeight: '3rem',
      
      "&:hover" : {
        background: '#d80f0f'
      },
     
    },
    backBtn: {
       minHeight: '3rem',
       width: '10rem'
    },
    dotContainer: {
       display: 'flex',

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
    commentContainer: {
       width: '45em',
       background: 'gray',
       padding: '1rem',
       borderRadius: '5px',
       [theme.breakpoints.down('xs')]: {
         width: '100vw'
       },
    },
    commentHeader: {
      color: '#dcdcdc',
      marginBottom: '2rem'
    },
    comment: {
      color: '#dcdcdc'
    }
  }))
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
    <>
    <Grid container direction='row' className={classes.container}>
    <Grid item>

<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://www.hds-group.de/wp-content/uploads/2016/07/hauptbild_kreissaegeblaetter.jpg"
          title="SawBlade"
          className={classes.img}
        />
        <CardContent>
          <Typography className={classes.kanefusa} gutterBottom variant="h5" component="h2">
            {blade.type}
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
          <div className={classes.dotContainer}>
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
       </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link href={back}>
        <Button className={classes.backBtn} variant='contained' size="small" color="primary">
          Tilbake
        </Button>
        </Link>
        <Button onClick={handleClickOpen} variant='contained' className={classes.deleteBtn} size="small">
          <DeleteIcon /> Slett dette bladet
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item>
    <Typography className={classes.commentHeader} variant='h4'>Anmerkninger</Typography>
      <div className={classes.commentContainer}>
        <Typography className={classes.comment} variant='h6'>{blade.comment[0]}</Typography>
        <Typography className={classes.comment} variant='h6'>{blade.comment[1]}</Typography>
        <Typography className={classes.comment} variant='h6'>{blade.comment[2]}</Typography>
        <Typography className={classes.comment} variant='h6'>{blade.comment[3]}</Typography>
        <Typography className={classes.comment} variant='h6'>{blade.comment[4]}</Typography>
        <Typography className={classes.comment} variant='h6'>{blade.comment[5]}</Typography>
        <Typography className={classes.comment} variant='h6'>{blade.comment[6]}</Typography>
    </div>
</Grid>

</Grid>

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


</>
    
  );
};

export default ViewIndex;
