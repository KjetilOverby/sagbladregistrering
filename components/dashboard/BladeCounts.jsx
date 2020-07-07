import React, { useState } from 'react'
import { makeStyles, Typography, Grid, Divider } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
   bladeCountContainer: {
      borderRadius: '10px',
      height: 'auto',
      width: '30em',
      marginLeft:'20em',
      background: 'linear-gradient(90deg, rgba(43,138,117,1) 12%, rgba(157,211,222,1) 69%)',
      padding: '1rem',
     [theme.breakpoints.down('xs')]: {
        marginLeft: '1em',
        width: '25em',

     
     },
   },
   bladeListCount: {
      fontWeight: 'bold',
      color: theme.palette.bladeList.main,
      padding: '1rem',
      [theme.breakpoints.down('xs')]: {
        padding: '.8rem 0rem',
        width: '16rem'
      
      },
   },
   bladeListCount2: {
      fontWeight: 'bold',
      color: theme.palette.bladeList.main,
      padding: '1rem',
      [theme.breakpoints.down('xs')]: {
        padding: '.8rem 0rem',
        width: '5rem',
        marginLeft: '3rem'
      
      },
   },
   bladeNameContainer: {
      width: '10rem',
      flexDirection: 'column',
      [theme.breakpoints.down('xs')]: {
         width: '7rem',
       
       },
   }
}))
const BladeCounts = ({blades}) => {

  
   

   const k2236Count = blades.data.filter((blade) =>
    blade.type.includes('Kanefusa 2.2-3.6')
  );
   const k2438Count = blades.data.filter((blade) =>
    blade.type.includes('Kanefusa 2.4-3.8')
  );
   const k2640Count = blades.data.filter((blade) =>
    blade.type.includes('Kanefusa 2.6-4.0')
  );
   const k2842Count = blades.data.filter((blade) =>
    blade.type.includes('Kanefusa 2.8-4.2')
  );
   const k3044Count = blades.data.filter((blade) =>
    blade.type.includes('Kanefusa 3.0-4.4')
  );
   const k3246Count = blades.data.filter((blade) =>
    blade.type.includes('Kanefusa 3.2-4.6')
  );
   const kNbladCount = blades.data.filter((blade) =>
    blade.type.includes('Kanefusa N-blad')
  );
   const kvs66hoyreCount = blades.data.filter((blade) =>
    blade.type.includes('Kanefusa VS-66 høyre')
  );
   const kvs66venstreCount = blades.data.filter((blade) =>
    blade.type.includes('Kanefusa VS-66 venstre')
  );
   const kvs66hoyreFCount = blades.data.filter((blade) =>
    blade.type.includes('Kanefusa VS-66 høyre F')
  );
   const kvs66venstreFCount = blades.data.filter((blade) =>
    blade.type.includes('Kanefusa VS-66 venstre F')
  );
  
  
   const [time, setTime] = useState(new Date())
 
const classes = useStyles()
return (
<div>
<Grid  className={classes.bladeCountContainer} container>
   <Grid item>
      <Typography variant='h5'>Antall sagblad</Typography>
   </Grid>
   <Grid container>
  
      <Grid item>
      <Typography className={classes.bladeListCount} variant='body1'>Total (VS-66, MKV): {blades.data.length}</Typography>
         <Typography variant='h4'>Kanefusa</Typography>

<Grid container>
         <Grid className={classes.bladeNameContainer} container>
         <Typography className={classes.bladeListCount} variant='body1'>2.2-3.6: </Typography>
         <Divider />
         <Typography className={classes.bladeListCount} variant='body1'>2.4-3.8: </Typography>
         <Divider />
         <Typography className={classes.bladeListCount} variant='body1'>2.6-4.0: </Typography>
         <Divider />
         <Typography className={classes.bladeListCount} variant='body1'>2.8-4.2: </Typography>
         <Divider />
         <Typography className={classes.bladeListCount} variant='body1'>3.0-4.4: </Typography>
         <Divider />
         <Typography className={classes.bladeListCount} variant='body1'>3.2-4.6: </Typography>
         <Divider />
         <Typography className={classes.bladeListCount} variant='body1'>N-blad: </Typography>
         <Divider />
         <Typography className={classes.bladeListCount} variant='body1'>VS-66 høyre: </Typography>
         <Divider />
         <Typography className={classes.bladeListCount} variant='body1'>VS-66 venstre: </Typography>
         <Divider />
         <Typography className={classes.bladeListCount} variant='body1'>VS-66 Høyre F: </Typography>
         <Divider />
         <Typography className={classes.bladeListCount} variant='body1'>VS-66 venstre F: </Typography>
         </Grid>
         <Grid container className={classes.bladeNameContainer}>
         <Typography className={classes.bladeListCount2}>{k2236Count.length}</Typography>
         <Divider />
         <Typography className={classes.bladeListCount2}>{k2438Count.length}</Typography>
         <Divider />
         <Typography className={classes.bladeListCount2}>{k2640Count.length}</Typography>
         <Divider />
         <Typography className={classes.bladeListCount2}>{k2842Count.length}</Typography>
         <Divider />
         <Typography className={classes.bladeListCount2}>{k3044Count.length}</Typography>
         <Divider />
         <Typography className={classes.bladeListCount2}>{k3246Count.length}</Typography>
         <Divider />
         <Typography className={classes.bladeListCount2}>{kNbladCount.length}</Typography>
         <Divider />
         <Typography className={classes.bladeListCount2}>{kvs66hoyreCount.length}</Typography>
         <Divider />
         <Typography className={classes.bladeListCount2}>{kvs66venstreCount.length}</Typography>
         <Divider />
         <Typography className={classes.bladeListCount2}>{kvs66hoyreFCount.length}</Typography>
         <Divider />
         <Typography className={classes.bladeListCount2}>{kvs66venstreFCount.length}</Typography>
         
         </Grid>
         </Grid>
      </Grid>
   
   </Grid>
</Grid>
 
</div>
)
}

export default BladeCounts