import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#19857b',
    },
    secondary: {
      main: '#d9b08c',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#4d4c4c',
    },
    appColor1: {
      main: '#d9b08c'
    },
    sidebar: {
      main: '#4d4c4c'
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

  }
});

export default theme;
