import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Link from 'next/link';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import LanguageIcon from '@material-ui/icons/Language';

import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  draweContainer: {
    background: theme.palette.sidebar.main,
    height: '100%',
    color: 'white',
  },
  icon: {
    color: 'white',
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [openCollapse, setOpenCollapse] = React.useState(false);
  const [openCollapse2, setOpenCollapse2] = React.useState(false);

  function handleOpenSettings() {
    setOpenCollapse(!openCollapse);
  }
  function handleOpenSettings2() {
    setOpenCollapse2(!openCollapse2);
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const allBlades = () => {
    props.setAllBlades(true);
    props.setk2236(false);
    props.setk2438(false);
    props.setk2640(false);
    props.setk2842(false);
    props.setk3044(false);
    props.setk3246(false);
    props.setkvs66hoyre(false);
    props.setkvs66venstre(false);
    props.knBlad(false);
    props.setkvs66hoyreF(false);
    props.setkvs66venstreF(false);
    props.setnvs66hoyre(false);
    props.setnvs66venstre(false);
  };
  const k2236= () => {
    props.setAllBlades(false);
    props.setk2236(true);
    props.setk2438(false);
    props.setk2640(false);
    props.setk2842(false);
    props.setk3044(false);
    props.setk3246(false);
    props.setkvs66hoyre(false);
    props.setkvs66venstre(false);
    props.knBlad(false);
    props.setkvs66hoyreF(false);
    props.setkvs66venstreF(false);
    props.setnvs66hoyre(false);
    props.setnvs66venstre(false);
  };
  const k2438 = () => {
    props.setAllBlades(false);
    props.setk2236(false);
    props.setk2438(true);
    props.setk2640(false);
    props.setk2842(false);
    props.setk3044(false);
    props.setk3246(false);
    props.setkvs66hoyre(false);
    props.setkvs66venstre(false);
    props.knBlad(false);
    props.setkvs66hoyreF(false);
    props.setkvs66venstreF(false);
    props.setnvs66hoyre(false);
    props.setnvs66venstre(false);
  };
  const k2640 = () => {
    props.setAllBlades(false);
    props.setk2236(false);
    props.setk2438(false);
    props.setk2640(true);
    props.setk2842(false);
    props.setk3044(false);
    props.setk3246(false);
    props.setkvs66hoyre(false);
    props.setkvs66venstre(false);
    props.knBlad(false);
    props.setkvs66hoyreF(false);
    props.setkvs66venstreF(false);
    props.setnvs66hoyre(false);
    props.setnvs66venstre(false);
  };
  const k2842 = () => {
    props.setAllBlades(false);
    props.setk2236(false);
    props.setk2438(false);
    props.setk2640(false);
    props.setk2842(true);
    props.setk3044(false);
    props.setk3246(false);
    props.setkvs66hoyre(false);
    props.setkvs66venstre(false);
    props.knBlad(false);
    props.setkvs66hoyreF(false);
    props.setkvs66venstreF(false);
    props.setnvs66hoyre(false);
    props.setnvs66venstre(false);
  };
  const k3044 = () => {
    props.setAllBlades(false);
    props.setk2236(false);
    props.setk2438(false);
    props.setk2640(false);
    props.setk2842(false);
    props.setk3044(true);
    props.setk3246(false);
    props.setkvs66hoyre(false);
    props.setkvs66venstre(false);
    props.knBlad(false);
    props.setkvs66hoyreF(false);
    props.setkvs66venstreF(false);
    props.setnvs66hoyre(false);
    props.setnvs66venstre(false);
  };
  const k3246 = () => {
    props.setAllBlades(false);
    props.setk2236(false);
    props.setk2438(false);
    props.setk2640(false);
    props.setk2842(false);
    props.setk3044(false);
    props.setk3246(true);
    props.setkvs66hoyre(false);
    props.setkvs66venstre(false);
    props.knBlad(false);
    props.setkvs66hoyreF(false);
    props.setkvs66venstreF(false);
    props.setnvs66hoyre(false);
    props.setnvs66venstre(false);
  };
  const kvs66hoyre = () => {
    props.setAllBlades(false);
    props.setk2236(false);
    props.setk2438(false);
    props.setk2640(false);
    props.setk2842(false);
    props.setk3044(false);
    props.setk3246(false);
    props.setkvs66hoyre(true);
    props.setkvs66venstre(false);
    props.knBlad(false);
    props.setkvs66hoyreF(false);
    props.setkvs66venstreF(false);
    props.setnvs66hoyre(false);
    props.setnvs66venstre(false);
  };
  const kvs66venstre = () => {
    props.setAllBlades(false);
    props.setk2236(false);
    props.setk2438(false);
    props.setk2640(false);
    props.setk2842(false);
    props.setk3044(false);
    props.setk3246(false);
    props.setkvs66hoyre(false);
    props.setkvs66venstre(true);
    props.knBlad(false);
    props.setkvs66hoyreF(false);
    props.setkvs66venstreF(false);
    props.setnvs66hoyre(false);
    props.setnvs66venstre(false);
  };
  const knBlad = () => {
    props.setAllBlades(false);
    props.setk2236(false);
    props.setk2438(false);
    props.setk2640(false);
    props.setk2842(false);
    props.setk3044(false);
    props.setk3246(false);
    props.setkvs66hoyre(false);
    props.setkvs66venstre(false);
    props.setknBlad(true);
    props.setkvs66hoyreF(false);
    props.setkvs66venstreF(false);
    props.setnvs66hoyre(false);
    props.setnvs66venstre(false);
  };
  const kvs66hoyreF = () => {
    props.setAllBlades(false);
    props.setk2236(false);
    props.setk2438(false);
    props.setk2640(false);
    props.setk2842(false);
    props.setk3044(false);
    props.setk3246(false);
    props.setkvs66hoyre(false);
    props.setkvs66venstre(false);
    props.setknBlad(false);
    props.setkvs66hoyreF(true);
    props.setkvs66venstreF(false);
    props.setnvs66hoyre(false);
    props.setnvs66venstre(false);
  };
  const kvs66venstreF = () => {
    props.setAllBlades(false);
    props.setk2236(false);
    props.setk2438(false);
    props.setk2640(false);
    props.setk2842(false);
    props.setk3044(false);
    props.setk3246(false);
    props.setkvs66hoyre(false);
    props.setkvs66venstre(false);
    props.setknBlad(false);
    props.setkvs66hoyreF(false);
    props.setkvs66venstreF(true);
    props.setnvs66hoyre(false);
    props.setnvs66venstre(false);
  };
  const nvs66hoyre = () => {
    props.setAllBlades(false);
    props.setk2236(false);
    props.setk2438(false);
    props.setk2640(false);
    props.setk2842(false);
    props.setk3044(false);
    props.setk3246(false);
    props.setkvs66hoyre(false);
    props.setkvs66venstre(false);
    props.setknBlad(false);
    props.setkvs66hoyreF(false);
    props.setkvs66venstreF(false);
    props.setnvs66hoyre(true);
    props.setnvs66venstre(false);
  };
  const nvs66venstre = () => {
    props.setAllBlades(false);
    props.setk2236(false);
    props.setk2438(false);
    props.setk2640(false);
    props.setk2842(false);
    props.setk3044(false);
    props.setk3246(false);
    props.setkvs66hoyre(false);
    props.setkvs66venstre(false);
    props.setknBlad(false);
    props.setkvs66hoyreF(false);
    props.setkvs66venstreF(false);
    props.setnvs66hoyre(false);
    props.setnvs66venstre(true);
  };
  const test = () => {
    props.k2236func
  }
  const drawer = (
    <div className={classes.draweContainer}>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link href="/dashboard">
          <ListItem button>
            <ListItemIcon>
              {<DashboardIcon className={classes.icon} />}
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </ListItem>
        </Link>
        <Link href="/service">
          <ListItem button>
            <ListItemIcon>
              {<LocalShippingIcon className={classes.icon} />}
            </ListItemIcon>
            <ListItemText>Service</ListItemText>
          </ListItem>
        </Link>
        {/* {['Dashboard', 'Service', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
      <Divider />

      <Link href="/globalblades/blades/blade">
        <div>
          <div onClick={allBlades}>
            <ListItem button>
              <ListItemIcon>
                <LanguageIcon className={classes.icon} /> 
              </ListItemIcon>
              <ListItemText>Alle blad</ListItemText>
            </ListItem>
          </div>
        </div>
      </Link>
      <Hidden mdDown>
      <ListItem button onClick={handleOpenSettings}>
        <ListItemIcon>
          <FormatListNumberedIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText primary="Kanefusa" />
        {openCollapse ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openCollapse} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link href='/globalblades/blades/blade'>
            <div>
              <div>
                <ListItem onClick={k2236} button className={classes.nested}>
                  <ListItemText inset primary="2.2 - 3.6" />
                </ListItem>
              </div>
            </div>
          </Link>

          <ListItem onClick={k2438} button className={classes.nested}>
            <ListItemText inset primary="2.4 - 3.8" />
          </ListItem>

          <Link href="/globalblades/blades/blade">
          <div>
            <ListItem onClick={k2640} button className={classes.nested}>
              <ListItemText inset primary="2.6 - 4.0" />
            </ListItem>
            </div>
          </Link>
          <Link href="/globalblades/blades/blade">
          <div>
            <ListItem onClick={k2842} button className={classes.nested}>
              <ListItemText inset primary="2.8 - 4.2" />
            </ListItem>
            </div>
          </Link>
          <Link href="/globalblades/blades/blade">
          <div>
            <ListItem onClick={k3044} button className={classes.nested}>
              <ListItemText inset primary="3.0 - 4.4" />
            </ListItem>
            </div>
          </Link>
          <Link href="/globalblades/blades/blade">
          <div>
            <ListItem onClick={k3246} button className={classes.nested}>
              <ListItemText inset primary="3.2 - 4.6" />
            </ListItem>
            </div>
          </Link>
          <Link href="/globalblades/blades/blade">
          <div>

            <ListItem onClick={kvs66hoyre} button className={classes.nested}>
              <ListItemText inset primary="VS-66 høyre" />
            </ListItem>
            </div>
          </Link>
          <Link href="/globalblades/blades/blade">
          <div>
            <ListItem onClick={kvs66venstre} button className={classes.nested}>
              <ListItemText inset primary="VS-66 venstre" />
            </ListItem>
            </div>
          </Link>
          <Link href="/globalblades/blades/blade">
          <div>
            <ListItem onClick={knBlad} button className={classes.nested}>
              <ListItemText inset primary="N-blad" />
            </ListItem>
            </div>
          </Link>
          <Link href="/globalblades/blades/blade">
          <div>
            <ListItem onClick={kvs66hoyreF}  button className={classes.nested}>
              <ListItemText inset primary="VS-66 høyre F" />
            </ListItem>
            </div>
          </Link>
          <Link href="/globalblades/blades/blade">
          <div>
            <ListItem onClick={kvs66venstreF} button className={classes.nested}>
              <ListItemText inset primary="VS-66 venstre F" />
            </ListItem>
            </div>
          </Link>
        </List>
      </Collapse>

      <ListItem button onClick={handleOpenSettings2}>
        <ListItemIcon>
          <FormatListNumberedIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText primary="Nessjø" />
        {openCollapse2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openCollapse2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link href="#">
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="2.8 - 4.2" />
            </ListItem>
          </Link>
          <Link href="/globalblades/blades/blade">
          <div>
            <ListItem onClick={nvs66hoyre} button className={classes.nested}>
              <ListItemText inset primary="VS-66 høyre" />
            </ListItem>
            </div>
          </Link>
          <Link href="/globalblades/blades/blade">
          <div>
            <ListItem onClick={nvs66venstre} button className={classes.nested}>
              <ListItemText inset primary="VS-66 venstre" />
            </ListItem>
            </div>
          </Link>
        </List>
      </Collapse>
      </Hidden>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Sagbladregister
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
        </main>
      </div>
    </>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
