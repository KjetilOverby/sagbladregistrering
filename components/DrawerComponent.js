import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import Link from 'next/link';
import CreateIcon from '@material-ui/icons/Create';
import { Typography } from '@material-ui/core';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import theme from '../src/theme';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
    background: theme.palette.secondary.main,
    height: '100vh'
  },
  fullList: {
    width: 'auto',
    
  },
  listItemBtn: {
    padding: '1.5rem 0'
  },
  menuIcon: {
    color: theme.palette.appColor1.main
  },
  icons: { 
      color: theme.palette.appText.main
  },
  listText: {
      color: theme.palette.appColor1.main
  }
}));

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div 
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link href='#'>
          <ListItem className={classes.listItemBtn} button>
          <TrendingUpIcon className={classes.icons} style={{margin: '0 2rem 0 1rem'}}/>
          <Typography className={classes.listText} style={{fontWeight: 'bold'}}>Statistikk</Typography>
            <ListItemIcon></ListItemIcon>
            <ListItemText />
          </ListItem>
          </Link>
          <Divider />
        <Link href='/globalblades/blades/createBlade'>
          <ListItem className={classes.listItemBtn} button>
          <LibraryAddIcon className={classes.icons} style={{margin: '0 2rem 0 1rem'}}/>
          <Typography className={classes.listText} style={{fontWeight: 'bold'}}>Legg til blad</Typography>
            <ListItemIcon></ListItemIcon>
            <ListItemText />
          </ListItem>
          </Link>
          <Divider />
       {/* {!props.user || props.user.error &&
        <Link href='/api/authentication/login'>
          <ListItem className={classes.listItemBtn} button>
          <LockOpenIcon style={{margin: '0 2rem 0 1rem', color: 'indianred'}}/>
          <Typography style={{color: 'gray', fontWeight: 'bold'}}>Login</Typography>
            <ListItemIcon></ListItemIcon>
            <ListItemText />
          </ListItem>
          </Link>
       } */}
       {!props.user || !props.user.error &&
        <Link href='/api/authentication/logout'>
          <ListItem className={classes.listItemBtn} button>
          <LockIcon className={classes.icons} style={{margin: '0 2rem 0 1rem'}}/>
          <Typography className={classes.listText} style={{fontWeight: 'bold'}}>Logout</Typography>
            <ListItemIcon></ListItemIcon>
            <ListItemText />
          </ListItem>
          </Link>
       }
          
          <Divider />
          {props.user !== undefined && props.user.name ? <p style={{marginLeft: '1.3rem', color: theme.palette.appText.main}}>Logget inn som: {props.user.name}</p> : <p style={{marginLeft: '1.3rem'}}>Ikke innlogget</p>}
          {props.user &&
            <img style={{height: '4rem', marginLeft: '2rem', marginTop: '2rem', borderRadius: '50%'}} src={props.user.picture} alt=""/>
          }
          
          
      </List>
    
     
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className={classes.menuIcon} onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
