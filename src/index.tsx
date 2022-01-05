import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation';

import initializeLocalstorage from 'common/utils/initializer/local-storage';

import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const theme = createTheme({
  // components: {
  //   MuiDataGrid: {
  //     styleOverrides: {
  //       columnHeader: {
  //         color: 'red',
  //         fontSize: '16px'
  //       },
  //     },
  //   },
  // },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          // fontSize: '1rem',
          // color: 'green',
          // columnHeader: {
          //   color: 'red',
          //   fontSize: '16px',
          // },
          // '.MuiDataGrid-columnHeaders': {
          //   color: 'red'
          // },
        },
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
  () => {
    initializeLocalstorage();
  }
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
