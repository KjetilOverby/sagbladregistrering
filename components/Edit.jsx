import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import {
  TextField,
  Button,
  Typography,
  Grid,
  makeStyles,
  Container,
  ThemeProvider,
  Divider,
  ButtonBase,
} from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import baseUrl from '../utils/baseUrl';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

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
    height: '200em',
    background: theme.palette.primary.main,

    [theme.breakpoints.down('xs')]: {},
  },

  retipInputContainer: {
    marginTop: '3em',
    marginBottom: '5em',
    color: theme.palette.bladeList.main,
    padding: '2rem',
    borderRadius: '10px',
    [theme.breakpoints.up('md')]: {
      boxShadow: '10px 10px 20px black',
    },
    
    [theme.breakpoints.down('xs')]: {
      margin: 0,
    },
  },
  retipInput: {
    margin: '1rem 0',
  },
  btn: {
    border: `1px solid ${theme.palette.bladeList.main}`,
    color: theme.palette.bladeList.main,
    marginTop: '2rem',
    width: '15rem',
    [theme.breakpoints.down('xs')]: {},
  },
  serialHeader: {
    color: theme.palette.appColor1.main,
    fontWeight: 'bold',
    margin: '.2em 0',
  },
  retipTextContainer: {
    color: theme.palette.primary,
    minHeight: '20em',
    marginTop: '3em',
    marginLeft: '15em',
    background: theme.palette.editBox.main,
    padding: '2rem',
    borderRadius: '5px',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      width: '90vw',
    },
  },
  retipText: {
    marginRight: '3em',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    padding: '1rem',
    fontStyle: 'italic',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1em',
    },
  },
  retipHeader: {
    color: 'white',
    marginLeft: '10em',
    marginTop: '1em',
    [theme.breakpoints.down('xs')]: {
      margin: '3rem 0 2em 0',
      fontSize: '1.5rem',
    },
  },
  commentContainer: {
    marginTop: '10em',
    width: '40em',
    padding: '2rem',
    background: 'white',
    boxShadow: '10px 10px 20px black',
    borderRadius: '10px',
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
      marginLeft: '-1em',
      borderRadius: '0',
    
    },
  },
  newPerformer: {
    marginRight: '3em',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    padding: '1rem',
    fontStyle: 'italic',
    color: theme.palette.appText.main,
  },
  modal: {
    position: 'absolute',
    height: '80vh',
    width: '90vw',
    background: 'white',
    zIndex: 100,
    margin: '50% 50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid gray',
    borderRadius: '10px',
    boxShadow: '10px 10px 20px black',
    [theme.breakpoints.down('xs')]: {
      marginTop: '20em',
    },
  },
  okBtn: {
    marginLeft: '2rem',
  },
  modalContainer: {
    width: '100vw',
    height: '100vh',
  },
  performerBox: {
    width: '10em',
  },
  modalHeader: {
    margin: '2rem',
    fontSize: '1.2rem',
    color: 'orangered',
    fontWeight: 'bold',
  },
  textField: {
    width: '19rem',
  },
  modalText: {
    color: 'orangered'
  },
  cancelBtn: {
    width: '5rem',
    marginTop: '5em',
    marginLeft: '3em'
  }
 
}));

const Edit = ({ blade, header, back, updateUrl }) => {

  const classes = useStyles();
  const [form, setForm] = useState({ performer: 'Stridsbergs', date: '' });
  const [comment, setComment] = useState('');

  const [toShowList, setToShowList] = useState();
  const [showList, setShowList] = useState([]);
  const router = useRouter();

  const [openretipModal, setOpenretipModal] = useState(false);
  const [openComments, setOpenComments] = useState(false);

  const [open, setOpen] = useState(false);

 

  const performFilter = blade.performer.filter(function (bladeFilt) {
    return bladeFilt !== null || undefined;
  });

  const dateFilter = blade.date.filter(function (dateFilt) {
    return dateFilt !== null || undefined;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
     if(form.date === '') {
       alert('Du må skrive inn dato')
     } else {
    updateBlade();
    setShowList([...showList, form]);
    setOpen(true);
}
  };
  
  const handleChange = (e) => {
   
    setForm({ ...form, [e.target.name]: e.target.value });
    setToShowList(e.target.value);
    
  };
  const handleComment = (e) => {
    setComment({ ...comment, ['comment']: e.target.value });
  };

  const updateBlade = async () => {
    try {
      const res = await fetch(
        `${baseUrl}/api/${updateUrl}/${router.query.id}`,
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
  const createComment = async () => {
    try {
      const res = await fetch(
        `${baseUrl}/api/${updateUrl}/${router.query.id}`,
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          //body: BSON.serialize(form)
          body: JSON.stringify(comment),
          // body: form
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateComment = (e) => {
    e.preventDefault();
    if (comment === '') {
      alert('Kommentarfeltet kan ikke være tomt')
    } else {
    createComment();
    setOpenComments(true)
    }
  };

  const okButton = () => {
    setOpenretipModal(false);
    router.push('/globalblades/blades/blade');
  };
  const commentOkBtn = () => {
    router.push('/globalblades/blades/blade');
    setOpenComments(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  
  
  return (
    <div className={classes.mainContainer}>
      <Container>
        <Grid direction="column" container>
          <Grid container>
            <Grid item>
              <Grid
                container
                direction="column"
                className={classes.retipInputContainer}
              >
                <Typography variant="h2">{header}</Typography>
                <Typography color="primary" variant="h6">
                  Legg til omloddinger
                </Typography>
                <Typography className={classes.serialHeader} variant="h6">
                  {blade.type}
                </Typography>
                <Typography className={classes.serialHeader} variant="h6">
                  {blade.serial}
                </Typography>

                <form>
                  <Grid item>
                    <TextField
                      className={classes.retipInput}
                      name="performer"
                      variant="outlined"
                      label="Firma"
                      onChange={handleChange}
                      value={form.performer}
                      formControlName="perform"
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      className={classes.retipInput}
                      variant="outlined"
                      label="Dato"
                      onChange={handleChange}
                      name="date"
                      value={form.date}
                    />

                    {/*   <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider> */}
                  </Grid>
                  <Grid item>
                    <Button
                      className={classes.btn}
                      onClick={handleSubmit}
                      variant="contained"
                    >
                      Legg til ommlodding
                    </Button>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Grid>

          <Link href="/globalblades/blades/blade">
            <Button
              color="primary"
              className={classes.cancelBtn}
              variant="contained"
            >
              Avbryt
            </Button>
          </Link>

          <Grid item className={classes.commentContainer}>
            <Typography variant="h6">Skriv inn en kommentar</Typography>
            <form>
              <Grid direction="column" container>
                <Grid item>
                  <TextField
                    className={classes.textField}
                    label="Kommentar"
                    onChange={handleComment}
                    variant="outlined"
                    rows={5}
                    multiline
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.btn}
                    onClick={handleCreateComment}
                  >
                    Legg til kommentar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
        <Grid container>
        <ul>
          <li>{blade.comment[0]}</li>
          <li>{blade.comment[1]}</li>
          <li>{blade.comment[2]}</li>
          <li>{blade.comment[3]}</li>
        </ul>
          
          
          
          
        </Grid>
{/* 
        <Grid item>
          <Typography className={classes.retipHeader} variant="h4">
            Tidligere omloddinger
          </Typography>
          <Grid className={classes.retipTextContainer} container>
            <Grid item>
              <Typography className={classes.retipText}>
                {performFilter[0]}
              </Typography>

              <Typography className={classes.retipText}>
                {performFilter[1]}
              </Typography>

              <Typography className={classes.retipText}>
                {performFilter[2]}
              </Typography>

              <Typography className={classes.retipText}>
                {performFilter[3]}
              </Typography>

              <Typography className={classes.retipText}>
                {performFilter[4]}
              </Typography>
             
              {showList.map((list) => {
                return (
                  <div>
                    <Typography className={classes.newPerformer} variant="h5">
                      {list.performer}
                    </Typography>
                  </div>
                );
              })}
            </Grid>
            <Grid item>
              <Typography className={classes.retipText}>
                {dateFilter[1]}
              </Typography>

              <Typography className={classes.retipText}>
                {dateFilter[2]}
              </Typography>

              <Typography className={classes.retipText}>
                {dateFilter[3]}
              </Typography>

              <Typography className={classes.retipText}>
                {dateFilter[4]}
              </Typography>
              {showList.map((list) => {
                return (
                  <div>
                    <Typography className={classes.newPerformer} variant="h5">
                      {list.date}
                    </Typography>
                  </div>
                );
              })}
            </Grid>
          </Grid>
        </Grid> */}


        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            Du har lagt til en ny ommlodding på: 
            <span className={classes.modalText}> {blade.serial}</span>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Tidligere omloddinger: 
          
            </DialogContentText>

             <Typography>{!blade.performer ? 'Ingen omloddinger' : ' '}</Typography>
            <Typography>{blade.performer[0]} {' '} {blade.date[0]}</Typography>
            <Typography>{blade.performer[1]} {' '} {blade.date[1]}</Typography>
            <Typography>{blade.performer[2]} {' '} {blade.date[2]}</Typography>
            <Typography>{blade.performer[3]} {' '} {blade.date[3]}</Typography>
            <Typography>{blade.performer[4]} {' '} {blade.date[4]}</Typography>
             
             

            <DialogContentText id="alert-dialog-slide-description">
              Lagt til i dag: 
          
            </DialogContentText>
            {showList.map((list) => {
                return (
                  <div>
                    <Typography className={classes.modalText} variant="h5">
                      {list.performer}: {list.date}
                    </Typography>
                  </div>
                );
              })}
          </DialogContent>
          <DialogActions>
           
            <Button color='primary' onClick={okButton} variant='contained' className={classes.deleteBtn}>
             OK
            </Button>
          </DialogActions>
        </Dialog>

      </Container>
    </div>
  );
};

export default Edit;
