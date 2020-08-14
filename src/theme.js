import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#697184',
    },
    secondary: {
      main: '#413F3D',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f2f1ef',
    },
    appColor1: {
      main: '#D8CFD0'
    },
    appText: {
       main: '#6FB3B8'
    },
    editBox: {
       main: 'linear-gradient(0deg, gray 0%, white 100%)'
    },
    sidebar: {
      main: 'radial-gradient(circle, #697184 12%, #413F3D 69%)'
    },
    bladeList:{
      main: 'radial-gradient(circle, #697184 12%, #413F3D 69%)'
    },
    bladeListHover: {
      main: 'radial-gradient(circle, #697184 12%, #413F3D 69%)'
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
