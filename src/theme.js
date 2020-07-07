import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#48d1cc',
    },
    secondary: {
      main: '#00ff7f',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#474747',
    },
    appColor1: {
      main: '#fa7a4b'
    },
    appText: {
       main: '#fa7a4b'
    },
    editBox: {
       main: 'linear-gradient(0deg, gray 0%, white 100%)'
    },
    sidebar: {
      main: 'linear-gradient(0deg, rgba(247,141,86,1) 0%, rgb(228, 89, 40) 100%)'
    },
    bladeList:{
      main: 'radial-gradient(circle, rgba(70,70,70,1) 12%, rgba(112,112,112,1) 69%)'
    },
    bladeListHover: {
      main: 'radial-gradient(circle, rgba(70,70,70,1) 12%, rgba(112,112,112,1) 69%)'
    }
  },
  sidebarWidth: {
    main: {
      marginLeft: '17em',
      
    
    }
  },
  sidebarWidthMobile: {
    main: {
      marginLeft: 0
    }

  },

});

export default theme;
