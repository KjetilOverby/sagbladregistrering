import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#19857b',
    },
    secondary: {
      main: '#008b8b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#023232',
    },
    appColor1: {
      main: '#008b8b'
    },
    appText: {
       main: '#58c7ad'
    },
    sidebar: {
      main: '#023232'
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
