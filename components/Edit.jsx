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



const useStyles = makeStyles((theme) => ({
 
  retipInputContainer: {
    marginTop: '3em',
    marginBottom: '5em',
    color: theme.palette.appText.main,
    background: 'white',
    padding: '2rem',
    borderRadius: '10px'
  },
  retipInput: {
    margin: '1rem 0'
    
  },
  btn: {
    border: `1px solid ${theme.palette.appText.main}`,
    color: theme.palette.appText.main,
    marginTop: '2rem'
  },
  serialHeader: {
    color: '#d74848',
    fontWeight: 'bold',
    margin: '1em 0'
  },
  retipTextContainer: {
    color: theme.palette.primary,
    minHeight: '20em',
    marginTop: '4em',
    marginLeft: '15em',
    background: theme.palette.appText.main,
    padding: '2rem',
    borderRadius: '5px',
    
  },
  retipText: {
    marginRight: '3em',
    fontSize: '1.5rem'
  },
  retipHeader: {
    color: theme.palette.appText.main,
    marginLeft: '10em',
    marginTop: '3.5em'
  },
  commentContainer: {
    marginTop: '10em',
   
  }
}));

const Edit = ({ blade, header, back, updateUrl }) => {
  const classes = useStyles();
  const [form, setForm] = useState({ performer: 'Stridsbergs' });
  const [comment, setComment] = useState('');
  const router = useRouter();

  // const [selectedDate, setSelectedDate] = React.useState(
  //   new Date('2014-08-18T21:11:54')
  // );
  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateBlade();
  };

  const handleChange = (e) => {
    
    setForm({ ...form, [e.target.name]: e.target.value });
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
    createComment();
  };

  return (
    <Container>
      <Grid direction="column" container>
      <Grid  container>
      <Grid item>
        <Grid
          container
          direction="column"
          className={classes.retipInputContainer}
        >
        <Typography variant='h2'>{header}</Typography>
          <Typography variant="h4">
            Legg til omloddinger
          </Typography>
          <Typography className={classes.serialHeader} variant='h5'>
             {blade.type}
          </Typography>
          <Typography className={classes.serialHeader} variant='h5'>
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
                variant="outlined"
              >
                Legg til ommlodding
              </Button>
            </Grid>
          </form>
        </Grid>
        </Grid>
        <Grid item>
        <Typography className={classes.retipHeader} variant='h4'>Tidligere omloddinger</Typography>
        <Grid className={classes.retipTextContainer} container>
          
           <Grid item>
          <Typography className={classes.retipText}>{blade.performer[0]}</Typography>
          <Typography className={classes.retipText}>{blade.performer[1]}</Typography>
          <Typography className={classes.retipText}>{blade.performer[2]}</Typography>
          <Typography className={classes.retipText}>{blade.performer[3]}</Typography>
          <Typography className={classes.retipText}>{blade.performer[4]}</Typography>
         
         
          </Grid>
          <Grid item>
          <Typography className={classes.retipText}>{blade.date[0]}</Typography>
          <Typography className={classes.retipText}>{blade.date[1]}</Typography>
          <Typography className={classes.retipText}>{blade.date[2]}</Typography>
          <Typography className={classes.retipText}>{blade.date[3]}</Typography>
          <Typography className={classes.retipText}>{blade.date[4]}</Typography>
          </Grid>
        </Grid>
        </Grid>

</Grid>

  
   <Grid item className={classes.commentContainer}>

        <form>
        <Grid direction='column' container>
        <Grid item>
          <TextField
            label="Kommentar"
            onChange={handleComment}
            variant="outlined"
          />
          </Grid>
          <Grid item>
          <Button className={classes.btn} onClick={handleCreateComment}>Legg til kommentar</Button>
          </Grid>
          </Grid>
        </form>
        </Grid>

        <Link href={back}>
          <Button className={classes.btn} variant="outlined">Back</Button>
        </Link>


   
      </Grid>
    </Container>
  );
};

export default Edit;
