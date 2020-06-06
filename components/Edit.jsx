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
  mainContainer: {
     background: 'url("https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80")',
     backgroundSize: 'cover',
     height: '100vh',
     [theme.breakpoints.down('xs')]: {
        background: theme.palette.sidebar.main
     },
  },
 
  retipInputContainer: {
    marginTop: '3em',
    marginBottom: '5em',
    color: theme.palette.bladeList.main,
    background: theme.palette.appText.main,
    padding: '2rem',
    borderRadius: '10px',
    
  },
  retipInput: {
    margin: '1rem 0'
    
  },
  btn: {
    border: `1px solid ${theme.palette.bladeList.main}`,
    color: theme.palette.bladeList.main,
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
    marginTop: '3em',
    marginLeft: '15em',
    background: theme.palette.appText.main,
    padding: '2rem',
    borderRadius: '5px',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      width: '90vw'
    },
    
  },
  retipText: {
    marginRight: '3em',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    padding: '1rem',
    fontStyle: 'italic',
    [theme.breakpoints.down('xs')]: {
       fontSize: '1em'
    },
  },
  retipHeader: {
    color: theme.palette.appText.main,
    marginLeft: '10em',
    marginTop: '1em',
    [theme.breakpoints.down('xs')]: {
      margin:'0 0 2em 0',
      fontSize: '1.5rem'
    },
  },
  commentContainer: {
    marginTop: '10em',
   
  },
  newPerformer: {
    marginRight: '3em',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    padding: '1rem',
    fontStyle: 'italic',
    color: '#176736'
  }
}));

const Edit = ({ blade, header, back, updateUrl }) => {
  const classes = useStyles();
  const [form, setForm] = useState({ performer: 'Stridsbergs' });
  const [comment, setComment] = useState('');

  const [toShowList, setToShowList] = useState()
  const [showList, setShowList] = useState([])
  const router = useRouter();

  // const [selectedDate, setSelectedDate] = React.useState(
  //   new Date('2014-08-18T21:11:54')
  // );
  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

 

   const performFilter = blade.performer.filter(function(bladeFilt) {
     return bladeFilt !== null || undefined
   })
  
   const dateFilter = blade.date.filter(function(dateFilt) {
     return dateFilt !== null || undefined
   })
   
  


  const handleSubmit = (e) => {
    e.preventDefault();

    updateBlade();
    setShowList([...showList, form])
  };

  const handleChange = (e) => {
    
    setForm({ ...form, [e.target.name]: e.target.value });
    setToShowList(e.target.value)
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
    <div className={classes.mainContainer}>
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

      
          <Typography className={classes.retipText}>{performFilter[0]}</Typography>
          <Divider />
          <Typography className={classes.retipText}>{performFilter[1]}</Typography>
          <Divider />
          <Typography className={classes.retipText}>{performFilter[2]}</Typography>
          <Divider />
          <Typography className={classes.retipText}>{performFilter[3]}</Typography>
          <Divider />
          <Typography className={classes.retipText}>{performFilter[4]}</Typography>
          {  showList.map((list) => {
             return (
               <div>
                 <Typography className={classes.newPerformer} variant='h5'>{list.performer}</Typography>
                 <Divider />
               </div>
             )
           })
           }
         
          </Grid>
          <Grid item>

         
          <Typography className={classes.retipText}>{dateFilter[0]}</Typography>
          <Divider />
          <Typography className={classes.retipText}>{dateFilter[1]}</Typography>
          <Divider />
          <Typography className={classes.retipText}>{dateFilter[2]}</Typography>
          <Divider />
          <Typography className={classes.retipText}>{dateFilter[3]}</Typography>
          <Divider />
          <Typography className={classes.retipText}>{dateFilter[4]}</Typography>
          {showList.map((list) => {
            return (
              <div>
                <Typography className={classes.newPerformer} variant='h5'>{list.date}</Typography>
              </div>
            )
          })}
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

        <Link href='/globalblades/blades/blade'>
          <Button className={classes.btn} variant="outlined">Back</Button>
        </Link>


   
      </Grid>
    </Container>
    </div>
  );
};

export default Edit;
